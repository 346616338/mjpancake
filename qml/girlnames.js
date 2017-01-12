.pragma library

var availIds = [
    0,
    710113, 710114, 710115,
    712411, 712412,
    712611,
    712714, 712715,
    712915,
    713311, 713314,
    713811, 713815,
    714915,
    713301,
    990001, 990002
];

function genId() {
    return availIds[Math.floor(Math.random() * availIds.length)];
}

function genAvailIndex() {
    return Math.floor(Math.random() * availIds.length);
}

var names = {
    // *** SYNC with libsaki/Girl.h enum 'Id'
    // *** SYNC with availIds
    // *** SYNC with the 'blabla' below
    "0": "須賀京太郎",
    // IH-71/A-block
    "710111": "宮永照", "710112": "弘世菫", "710113": "渋谷尭深",
        "710114": "亦野誠子", "710115": "大星淡",
    "712411": "松実玄", "712412": "松実宥", "712413": "新子憧",
        "712414": "鷺森灼", "712415": "高鴨穏乃",
    "712611": "園城寺怜", "712612": "二条泉", "712613": "江口セーラ",
        "712614": "船久保浩子", "712615": "清水谷竜華",
    // IH-71/B-block
    "712711": "神代小蒔", "712712": "狩宿巴", "712713": "滝見春",
        "712714": "薄墨初美", "712715": "石戸霞",
    "712915": "姉帯豊音",
    "713311": "片岡優希", "713312": "染谷まこ", "713313": "竹井久",
        "713314": "原村和", "713315": "宮永咲",
    "713811": "上重漫", "713815": "末原恭子",
    "714915": "獅子原爽",
    // Others
    "713301": "南浦数絵",
    "990001": "稲村杏果", "990002": "白築慕",
};

var availNames = availIds.map(function(i) { return names[i]; });

var blabla = {
    "0":
    "<h3>帅哥你谁啊</h3>" +
    "<ul>" +
    "<li>" + "能力为<i>剧情衔接</i>——可在同一桌上重复登场" + "</li>" +
    "</ul>"
    ,
    "710112":
    "<h3>农家乐之打猎的</h3>"
    ,
    "710113":
    "<h3>农家乐之种田的</h3>" +
    "<ul>" +
    "<li>最终局配牌时会摸回之前每一局的第一张弃牌(播种)<ul>" +
        "<li>播种超出13张时超出部分不计</li>" +
        "<li>播种当中同一种牌超出4张时超出部分不计</li></ul></li>" +
    "</ul>"
    ,
    "710114":
    "<h3>农家乐之钓鱼的</h3>" +
    "<ul>" +
    "<li>手牌倾向于形成对子，使得碰牌的机会增多<ul>" +
        "<li>么九对子比中张对子更容易形成一些</li>" +
        "<li>这个倾向是有限度的，不至于欢欢喜喜奔七对</li></ul></li>" +
    "<li>副露里包含至少三个明刻的状态下手运变好<ul>" +
        "<li>明杠也算</li></ul></li>" +
    "</ul>"
    ,
    "710115":
    "<h3>序盘支配</h3>" +
    "<ul>" +
    "<li>除自己外，全员配牌至少5向听</li>" +
    "</ul>" +
    "<h3>人型托管刷分机</h3>" +
    "<ul>" +
    "<li>每局开始前可选择是否启动双立直进攻模式</li>" +
    "<li>双立直模式下会得到能构成听牌的配牌与首巡进张</li>" +
    "<li>牌局进行到牌山的最后一个转角之时会从转角前的最后两垛牌中摸到杠材</li>" +
    "<li>暗杠且通过转角后和牌几率大幅上升，并且该暗杠会中为4张杠里宝牌</li>" +
    "</ul>"
    ,
    "712411":
    "<h3>宝牌支配</h3>" +
    "<ul>" +
    "<li>容易摸到宝牌和杠宝牌</li>" +
    "<li>他家摸不到宝牌</li>" +
    "<li>被他家能力绝对收集的牌不会成为宝牌</li>" +
    "<li>舍弃宝牌后，到终局为止自己将摸不到宝牌，同时解除对他家的宝牌封锁</li>" +
    "</ul>" +
    "<h3>阿知贺通修技能</h3>" +
    "<ul>" +
    "<li>（*）能注意到菫的小动作</li>" +
    "</ul>"
    ,
    "712412":
    "<h3>暧牌收集</h3>" +
    "<ul>" +
    "<li>容易摸到暧色的牌</li>" +
    "</ul>" +
    "<h3>阿知贺通修技能</h3>" +
    "<ul>" +
    "<li>（*）能注意到菫的小动作</li>" +
    "</ul>"
    ,
    "712611":
    "<h3>未来视・进化</h3>" +
    "<ul>" +
    "<li>行动遇到分歧点时，可对各个未来分支进行预知。</li>" +
    "<li>未来视中的视角与现实中自己的视角相同，能看到的信息不多也不少。</li>" +
    "<li>未来分支中再次出现<i>二级分支</i>时按以下规则自动行动：<ul>" +
        "<li>出现鸣牌/食和机会时一律放过；</li>" +
        "<li>出现鸣牌后的打牌机会时随意打一张；</li>" +
        "<li>出现自摸和牌机会时宣告自摸并结束分支；</li>" +
        "<li>出现其它分歧点时什么都不做并结束分支。</li></ul></li>" +
    "<li>根据预知改变行动时，能力会出现一段CD。<ul>" +
        "<li>大体上，最终行动与最初想法差距越大，付出的CD代价就越大。</li>" +
        "<li>CD的单位是未来遇到的分歧点次数。</li>" +
        "<li>依次查看若干分支后，实际进入第n个分支时，产生的CD为<i>2(n-1)</i>次。</li>" +
        "<li>查看k个分支后，实际未进入其中任何分支时，产生的CD为<i>2k</i>次。</li>" +
        "<li>二级分支上的自动行动系免费赠送，不在CD代价之列。</li>" +
        "<li>一局内未等完的CD会延续到下一局。</li>" +
        "<li>例1：试拆12m见次巡入3m，改拆78s：k = 1，CD = 2</li>" +
        "<li>例2：试拆12m见次巡入无效牌，仍拆12m：n = 1，CD = 0</li>" +
        "<li>例3：见对手自摸，鸣牌错开：二级分支自动，CD = 0</li>" +
        "<li>例4：见对手自摸，对比碰与杠，选后者：n = 2，CD = 2</li>" +
        "<li>例5：试默听见自摸，试立直见一发，遂立直：n = 2，CD = 2</li>" +
        "<li>例6：试默听见自摸，试立直见错开，遂默听：n = 1，CD = 0</li>" +
        "<li>例7：试默听见自摸，试立直见错开还自摸，遂立直：n = 2，CD = 2</li>" +
        "<li>例8：试默听无自摸，试立直见错开而自摸，遂立直：n = 2，CD = 2</li>" +
        "<li>例9：试默听无自摸，试立直当然仍无自摸，遂默听：n = 1，CD = 0</li>" +
        "<li>例10：试攻见铳，遂兜牌 -> k = 1，CD = 2</li>" +
        "<li>例11：试攻见铳，试兜牌铳另家，另兜其牌：k = 2，CD = 4</li>" +
        "<li>例12：试送铳，连试四张而成 -> n = 4，CD = 6</li></ul></li>" +
    "<li><i>牌山不变定律</i>：对于所有未来分支，牌山相同。<ul>" +
        "<li>一张牌在牌山中的绝对位置不随世界线的变动而变动。</li>" +
        "<li>岭上牌以及各种指示牌也不例外。</li></ul></li>" +
    "</ul>" +
    "<h3>信念</h3>" +
    "<ul>" +
    "<li>自从当了ACE，腰不酸了，腿不痛了，配牌和进张都变好了。</li>" +
    "</ul>"
    ,
    "712714":
    "<h3>鬼门</h3>" +
    "<ul>" +
    "<li>做北家时将鬼门牌置于鬼门方位，手牌将向里鬼门进展。</li>" +
    "</ul>"
    ,
    "712715":
    "<h3>Defensiveな Style<img src=\"qrc:///pic/icon/huaji.png\"/></h3>" +
    "<ul>" +
    "<li>（*）尚未实现</li>" +
    "</ul>" +
    "<h3>形代</h3>" +
    "<ul>" +
    "<li>降神启动进攻模式，该模式会一直持续到终局。</li>" +
    "<li>进攻模式下自己的数牌皆为一色，同时他家进入该色的绝一门状态。</li>" +
    "<li>牌局进行到深山时绝一门的支配力下降。</li>" +
    "</ul>"
    ,
    "712915":
    "<h3>六曜</h3>" +
    "<ul>" +
    "<li>先胜（*）</li>" +
    "<li>友引<ul>" +
        "<li>裸单骑则自摸和。</li></ul></li>" +
    "<li>先负<ul>" +
        "<li>被他家先制立直后，门前未听状态下进张变好。</li>" +
        "<li>追立直后先制者立即摸铳。</li></ul></li>" +
    "<li>佛灭（*）</li>" +
    "<li>大安（*）</li>" +
    "<li>赤口（*）</li>" +
    "</ul>"
    ,
    "713311":
    "<h3>卷饼之力</h3>" +
    "<ul>" +
    "<li>容易成为起家</li>" +
    "<li>东场时具有吓死宝宝级的集中力<ul>" +
        "<li>加成效果逐局递减</li></ul></li>" +
    "</ul>"
    ,
    "713314":
    "<h3>这太不科学了</h3>" +
    "<ul>" +
    "<li>容易做成七对子</li>" +
    "<li>（*）不易受到运势流能力的影响</li>" +
    "<li>（*）不受隐身能力的影响</li>" +
    "</ul>" +
    "<h3>信念</h3>" +
    "<ul>" +
    "<li>关键时刻牌运会变好</li>" +
    "</ul>"
    ,
    "713811":
    "<h3>不在沉默中爆发，就在额头上写字" +
    "<img src=\"qrc:///pic/icon/huaji.png\"/></h3>" +
    "<ul>" +
    "<li>随机“爆发”，爆发效果可持续到终局</li>" +
    "<li>爆发后极容易摸到6、7、8、9的数牌</li>" +
    "</ul>" +
    "<h3>姬松通修技能</h3>" +
    "<ul>" +
    "<li>（*）能注意到咲的小动作</li>" +
    "</ul>"
    ,
    "713815":
    "<h3>超速攻</h3>" +
    "<ul>" +
    "<li>配牌适合速攻时容易在早巡鸣到牌</li>" +
    "<li>同时他家会“不知为什么有点迟钝”</li>" +
    "</ul>" +
    "<h3>姬松通修技能</h3>" +
    "<ul>" +
    "<li>（*）能注意到咲的小动作</li>" +
    "</ul>"
    ,
    "714915":
    "<h3>五色云</h3>" +
    "<ul>" +
    "<li>每局开始前可释放任意朵云</li>" +
    "<li>各颜色的云效果如下：<ul>" +
            "<li>（*）青云：？？</li>" +
            "<li>（*）黄云：？？</li>" +
            "<li>赤云：可对自家或其它三家施放，被施放者一局内摸不到字牌</li>" +
            "<li>白云：使用后一局内配牌和进张偏向索子</li>" +
            "<li>（*）黑云：？？</li></ul></li>" +
    "<li>云是一次性用品，用掉以后需要很长的时间才能补充回来</li>" +
    "</ul>" +
    "<h3>神威</h3>" +
    "<ul>" +
    "<li>局中可在任意时机施放神威</li>" +
    "<li>各神威效果如下：<ul>" +
            "<li>瘟神威：听牌后向对手施放诅咒，使其连续摸上铳牌。<ul>" +
                "<li>效果持续1局，换听后仍然有效。</li></ul></li>" +
            "<li>海神威：染红牌河与牌山<ul>" +
                "<li>自己的进张全为万子/红中；</li>" +
                "<li>大量的万子成为他家的不要牌；</li>" +
                "<li>新的杠宝牌指示牌和里宝牌指示牌也会成为万子；</li>" +
                "<li>效果持续1局，一直作用到山里没有万子为止。</li></ul></li>" +
            "<li>（*）蛇神威：？？</li>" +
            "<li>鸟神威：招来手牌中已有的除自风以外的风牌。<ul>" +
                "<li>效果持续2局，</li></ul></li>" +
            "<li>（*）淫神威：？？</li></ul></li>" +
    "<li>神威是一次性用品，用掉以后需要很长的时间才能补充回来</li>" +
    "</ul>"
    ,
    "713301":
    "<h3>好暧和的风</h3>" +
    "<ul>" +
    "<li>南入后牌运变好</li>" +
    "</ul>"
    ,
    "990001":
    "<h3>直向手</h3>" +
    "<ul>" +
    "<li>容易摸到对子和暗刻</li>" +
    "</ul>"
    ,
    "990002":
    "<h3>自古南三出奇迹</h3>" +
    "<ul>" +
    "<li>进入南三局后且分数落后时所有能力大幅度加强</li>" +
    "<li>该状态下手牌易于换听，容易提高打点</li>" +
    "</ul>" +
    "<h3>做牌倾向</h3>" +
    "<ul>" +
    "<li>容易做成平和、一杯、三色、全带</li>" +
    "<li>与此同时手牌不失灵活性，可随机应变而不拘泥于以上役种</li>" +
    "<li>听牌为1s时容易自摸</li>" +
    "<li>见逃低目振听状态下容易高目和牌</li>" +
    "</ul>" +
    "<h3>感知</h3>" +
    "<ul>" +
    "<li>能够察觉到对手拆掉对子的向听倒退</li>" +
    "</ul>"
};


