#include "gui/psettings.h"

#include <QFile>
#include <QDir>
#include <QJsonArray>

#include <iostream>
#include <QDebug>

#ifdef Q_OS_ANDROID
#include <QtAndroid>

void ImagePickReceiver::handleActivityResult(int requestCode, int resultCode,
                                             const QAndroidJniObject & data) {
    (void) requestCode;
    if (resultCode == -1) { // OK
        QAndroidJniObject imageUri = data.callObjectMethod(
                    "getData",
                    "()Landroid/net/Uri;");
        QAndroidJniObject imagePath = QAndroidJniObject::callStaticObjectMethod(
                    "rolevax/sakilogy/ImagePickerActivity",
                    "getPath",
                    "(Landroid/net/Uri;)Ljava/lang/String;",
                    imageUri.object<jobject>());

        pSettings.setBackground(imagePath.toString());
    }
}
#endif


PSettings::PSettings(QObject *parent)
    : QObject(parent)
#ifdef Q_OS_ANDROID
    , imagePickReceiver(*this)
#endif
{
}

void PSettings::setBackground(QString path)
{
    QDir().mkpath(QString("user"));
    static const char *bgPath = "user/background";
    if (QFile::exists(bgPath))
        QFile::remove(bgPath);

    QFile::copy(path, bgPath);

    emit backgroundCopied();
}

void PSettings::setBackgroundByAndroidGallery()
{
#ifdef Q_OS_ANDROID
    QAndroidJniObject intent = QAndroidJniObject::callStaticObjectMethod(
                "rolevax/sakilogy/ImagePickerActivity",
                "createChoosePhotoIntent",
                "()Landroid/content/Intent;" );
    QtAndroid::startActivity(intent, 42375, &imagePickReceiver);
#endif
}




