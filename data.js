// 组织活动数据
const organizationsData = [
  {
    id: 'five_person_dungeon',
    name: '百业大合照',
    description: '合照1',
    host: '索隆阿',
    time: '2025年9月19日',
    location: '索隆阿的船',
    image: 'https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758216235897_qdqqd_n4feor.jpg'
  },
  {
    id: 'ten_person_dungeon',
    name: '百业大合照',
    description: '合照2',
    host: '索隆阿',
    time: '2025年9月19日',
    location: '索隆阿的船',
    image: 'https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758216259451_qdqqd_itwggx.jpg'
  },
{
    id: 'ten_person_dungeon',
    name: '百业大合照',
    description: '合照3',
    host: '索隆阿',
    time: '2025年9月19日',
    location: '索隆阿的船',
    image: 'https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758216281018_qdqqd_juo46r.jpg'
  }
];

// 演示视频数据
const demoVideos = [
  {
    id: '1',
    name: '抖音混剪视频',
    video: 'https://open.douyin.com/player/video?vid=7536928741290396985&autoplay=0'
  },
  {
    id: '2',
    name: '背景视频',
    video: 'https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758216517162_qdqqd_3jti1t.mp4'
  }
];

// 角色数据管理
const characterData = [
  {
    id: '1',
    name: "",
    title: "",
    desc: "",
    tags: [""],
    avatar: "",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757939036728_qdqqd_yptl1p.jpg"
    ]
  },
  {
    id: '2',
    name: "小秋词",
    title: "石榴声老干妈",
    desc: "画不完的圆，斩不断的缘",
    tags: ["忠义", "声控"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757952851346_qdqqd_m8qub8.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757952754463_qdqqd_62ptqk.jpg"
         ]
  },
  {
    id: '3',
    name: "龙行天涯",
    title: "石榴声百业战总指挥",
    desc: "燕云百业战之天",
    tags: ["天"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758033475843_qdqqd_n473iw.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758033350419_qdqqd_cp2pb2.jpg"
    ]
  },
  {
    id: '4',
   name: "十月份的喵",
    title: "石榴声第一好喵",
    desc: "霖霖天下第一好",
    tags: ["纯奶", "爱躺", "好喵"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757955137888_qdqqd_e5hoz0.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757931861235_qdqqd_du9rr9.png"]
  },
  {
    id: '5',
    name: "玉墟渐次",
    title: "万分玉玉",
    desc: "为人良善，认真专一，上分找玉墟！",
    tags: ["群策第一个万分！"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757954853210_qdqqd_rqr92b.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757938914361_qdqqd_59e6uz.png"
    ]
  },
  {
    id: '6',
    name: "清弦小怡",
    title: "论剑高手",
    desc: "为人老实，人美声甜",
    tags: ["玉玉玩家", "论剑甜菜", "开服咸鱼"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757953687742_qdqqd_om79gb.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757921658324_qdqqd_qkvux9.jpg"
    ]
  },
  {
    id: '7',
    name: "月下等秋风",
    title: "低调玉玉高手",
    desc: "早已习惯被你否定，但我依旧对你走心",
    tags: ["抖音来年等秋风TUT "],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758019579434_qdqqd_u1wdix.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758019529648_qdqqd_z1ymto.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758019539613_qdqqd_hn3cuw.jpg"
    ]
  },
  {
    id: '8',
   name: "聆逸",
    title: "沐白徒弟",
    desc: "沐白沐白说我是最叛的徒弟",
    tags: ["爱叛沐白"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757954207437_qdqqd_3o6mer.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757951307995_qdqqd_9tjeuu.jpg"
    ]
  },
  {
    id: '9',
    name: "索隆阿",
    title: "石榴声之主",
    desc: "石榴声最帅的男人",
    tags: ["权威","铁子们心中的大哥","平亿近人"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757953499457_qdqqd_ti3t4o.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757939036728_qdqqd_yptl1p.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757939054137_qdqqd_dwz55z.jpg"
    ]
  },
  {
    id: '10',
    name: "",
    title: "",
    desc: "",
    tags: [""],
    avatar: "",
    art: [
      ""
    ]
  },
  {
    id: '11',
    name: "子卿",
    title: "喜欢你的笨",
    desc: "男儿不展凌云志，空腹天生八尺躯。",
    tags: ["二次元", "纯爱", "腹黑"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758033763266_qdqqd_h1g03j.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758033748149_qdqqd_bz3nwb.jpg"
    ]
  },
  {
    id: '12',
    name: "失罚",
    title: "石榴声第一妈妈",
    desc: "朕是一个脆弱的皇帝",
    tags: ["奶妈的真谛", "为母则刚"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757955013330_qdqqd_c3iopb.jpg",
    art: [
       "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757951960439_qdqqd_9mpx85.jpg"
]
  },
  {
    id: '13',
    name: "氧少",
    title: "石榴声座下第一护法",
    desc: "天不生你氧气神",
    tags: ["吕布再世"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757953831062_qdqqd_r22zmv.jpg",
    art: ["https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758291308685_qdqqd_keqj53.jpg"]
  },
  {
    id: '14',
    name: "小雨落雨声",
    title: "笑笑的主人",
    desc: "王从天降",
    tags: ["王不见王", "狗狗沟通大师"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758033571065_qdqqd_l8c1w3.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758033621794_qdqqd_pllrj7.jpg"
    ]
  },
  {
    id: '15',
    name: "东方呱",
    title: "牛逼",
    desc: "专做牛逼一件事",
    tags: ["巨牛逼"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758019338747_qdqqd_wtbxq2.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758019291561_qdqqd_593wcr.jpg"
    ]
  },
  {
    id: '16',
    name: "白玉京",
    title: "古风小生",
    desc: "执子之手，情深意长，燕云之下，永结同心。 ",
    tags: ["单纯", "乐观", "闷骚","温柔","暖男","奶狗","忠义"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757953142248_qdqqd_86zs93.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757953038979_qdqqd_kaae5a.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757953059789_qdqqd_gr0wdr.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757953083173_qdqqd_492lqt.jpg"
    ]
  },
  {
    id: '17',
    name: "",
    title: "",
    desc: "",
    tags: [""],
    avatar: "",
    art: ["https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757939036728_qdqqd_yptl1p.jpg"]
  },
  {
    id: '18',
    name: "石榴白天帝",
    title: "石榴声第一忠义",
    desc: "石榴巅傲世间 有我沐白便有天",
    tags: ["权利游戏","总攻大人"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757950125680_qdqqd_7wjamp.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757949944518_qdqqd_uu4wi5.jpg"
    ]
  },
  {
    id: '19',
    name: "明取香",
    title: "通天代",
    desc: "感情里的下等人 拿钱挖不走的男人！",
    tags: ["百业战的通天神"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758133177266_qdqqd_n9v8cx.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757934527543_qdqqd_2z5e0q.jpg",
       "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757934785438_qdqqd_u25506.jpg"
    ]
  },
  {
    id: '20',
    name: "疾风一归途",
    title: "石榴声第一唐人",
    desc: "乌鸦坐飞机",
    tags: ["全国可✈️"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757955067129_qdqqd_j2gyon.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757951372644_qdqqd_i4w3tx.jpg"
    ]
  },
  {
    id: '21',
    name: "潇帝",
    title: "凡王之血 必以剑终",
    desc: "一切伟大时代皆会结束 正如所有的王都将死去",
    tags: ["机动队的王"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757952717704_qdqqd_bfu2vl.png",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757942908313_qdqqd_wszja7.jpg"
    ]
  },
  {
    id: '22',
    name: "少女漫",
    title: "燕云皇帝",
    desc: "可爱小漫加载中… ♡(⸝⸝› _ ‹⸝⸝)",
    tags: ["I","♡","漫"," • ω<☆"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758217346127_qdqqd_autoip.jpg",
    art: ["https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758217169134_qdqqd_8wj3gh.jpg"]
  },
  {
    id: '23',
    name: "颜敬慕",
    title: "漫の狗奴才",
    desc: "漫皇万岁万岁万万岁",
    tags: ["漫","の","奴"," • ω<☆"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758291277072_qdqqd_o8vm8x.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758291290005_qdqqd_z6qf97.jpg"
    ]
  },
  {
    id: '24',
    name: "雪代巴",
    title: "石榴声熬夜冠",
    desc: "百业首批成员坚持至今 已经完全变成石榴的形状了",
    tags: ["通宵神", "水群王", "极品烧男娘"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar83.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757921071731_qdqqd_3nstv4.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757921075405_qdqqd_ejuu6i.jpg"
    ]
  },
  {
    id: '25',
    name: "小珩饱饱",
    title: "石榴声第一萌",
    desc: "甜妹脸蛋主人心肠 石榴声找珩珩大王",
    tags: ["玉霖双修", "极品s", "阴湿滴泪妹"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757952618055_qdqqd_q3bdck.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757924153477_qdqqd_uspnt2.png"
    ]
  },
  {
    id: '26',
    name: "酸菜鱼鱼片",
    title: "石榴声最硬的面板威威",
    desc: "270天三测双端纯血威威 ",
    tags: ["专一","喜欢被揍","天生M圣体"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757953952497_qdqqd_4gzidv.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757942329154_qdqqd_em3gf1.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758134058856_qdqqd_oo9ijl.png"
    ]
  },
  {
    id: '27',
    name: "箬玄",
    title: "石榴声pve第九九废物",
    desc: "鼠鼠，九剑双修",
    tags: ["串子", "竞速转pvp中"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1759220609675_qdqqd_6o3ons.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1759220634365_qdqqd_0kxp50.jpg"
    ]
  },
  {
    id: '28',
    name: "语妙",
    title: "与妙同行",
    desc: "您的好友语妙并非独行江湖",
    tags: ["霖开天门", "橘子桃", "江湖好友"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757952469909_qdqqd_vyjhud.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758216749654_qdqqd_lwqj1m.jpg",
"https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758216766744_qdqqd_nt422u.jpg"
    ]
  },
  {
    id: '29',
    name: "乙",
    title: "乙",
    desc: "有点小帅",
    tags: ["忠义"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757951918655_qdqqd_jwv3l9.png",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757940615943_qdqqd_6tyf8i.jpg"
    ]
  },
  {
    id: '30',
    name: "",
    title: "",
    desc: "",
    tags: [""],
    avatar: "",
    art: [
      ""
    ]
  },
  {
    id: '31',
    name: "小海怪丶",
    title: "石榴声百业战拆迁办编外顾问",
    desc: "文能开麦骂队友，武能冲家送人头",
    tags: ["文武双全"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757951874530_qdqqd_v4bnwr.png",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757942169290_qdqqd_obk3z5.jpg"
    ]
  },
  {
    id: '32',
    name: "百里阿",
    title: "女王",
    desc: "雄图大略百里志 仗剑行侠祁殷名",
    tags: ["无形无相亦无我"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758291105513_qdqqd_d8ass7.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757950984474_qdqqd_q9r567.jpg"
    ]
  },
  {
    id: '33',
    name: "争锋素世",
    title: "石榴声战狂陌刀",
    desc: "四通抗造威威小兵",
    tags: ["亚撒西", "苦来兮苦", "只想着自己"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758216939672_qdqqd_991g9z.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758216922713_qdqqd_uwn34a.jpg"
    ]
  },
  {
    id: '34',
    name: "",
    title: "",
    desc: "",
    tags: [""],
    avatar: "",
    art: [
      ""
    ]
  },
  {
    id: '35',
    name: "我容易哭",
    title: "石榴声最锋利的剑",
    desc: "谪此人间无为事，但以此剑开天门",
    tags: ["侠缘位旺铺火热招租"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757953905110_qdqqd_zwerhy.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757940272090_qdqqd_r8b4ol.jpg"
    ]
  },
  {
    id: '36',
    name: "虞晚晚",
    title: "晚来天欲雪",
    desc: "天暗下来，我就是光",
    tags: ["锁血挂"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757953309391_qdqqd_v1a7i9.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757953221842_qdqqd_bpd173.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757953247590_qdqqd_l6ty7l.jpg"
    ]
  },{
    id: '37',
    name: "和禾",
    title: "石榴声的一员",
    desc: "精通99，均均",
    tags: ["忠义", "摸鱼"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758291258676_qdqqd_h6roqu.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758291195946_qdqqd_1k3oro.jpg"
    ]
  },
  {
    id: '38',
    name: "小火酱",
    title: "专业女rapper ",
    desc: "玛德最烦装杯的人",
    tags: ["进本就睡"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757954388893_qdqqd_e27cku.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757942080834_qdqqd_gcz9ez.png"
    ]
  },
  {
    id: '39',
    name: "晏汀澜",
    title: "石榴声游吟诗人兼御火师",
    desc: "音浪术与火魔法的叠加",
    tags: ["乐影欢愉"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1759221307467_qdqqd_ic0im6.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1759221220628_qdqqd_hxo1j3.jpg"
    ]
  },
  {
    id: '40',
    name: "蛙大仙",
    title: "鱼头售罄，美蛙78元/位",
    desc: "呱呱呱呱呱呱呱呱",
    tags: ["呱", "呱呱", "呱呱呱呱"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758033258123_qdqqd_3ovwzy.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758033312977_qdqqd_1az7m2.jpg"
    ]
  },
  {
    id: '41',
    name: "荧厌",
    title: "石榴声防守团第一高手",
    desc: "剑双女武神,精通训狗",
    tags: ["忠义", "纯爱", "高手荧厌"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757954715719_qdqqd_he6ko0.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757923303918_qdqqd_4taxth.jpg"
    ]
  },
  {
    id: '42',
    name: "高城",
    title: "荧厌的小狗",
    desc: "你说得对，但这就是糕城",
    tags: ["全能型选手", "武器大师", "擅长装狗"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757954767920_qdqqd_r7ov5x.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757938400739_qdqqd_bw6ujm.jpg"
    ]
  },
  {
    id: '43',
    name: "魂殿牛牛",
    title: "石榴声第一抗压王",
    desc: "全服顶级陌刀 纯m",
    tags: ["啤酒肚", "络腮胡 "],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758216867574_qdqqd_sev2p5.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758216796578_qdqqd_my1dcu.jpg"
    ]
  },
  {
    id: '44',
    name: "落落乖乖",
    title: "没想到",
    desc: "想要当欧皇",
    tags: ["社恐", "假哑巴"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758019755365_qdqqd_qwweut.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758019716611_qdqqd_opehgo.jpg"
    ]
  },{
    id: '45',
    name: "薯条依赖",
    title: "薯条毒唯",
    desc: "侠缘dd",
    tags: ["纯爱", "健忘"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757952022951_qdqqd_dhlpdt.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757940188867_qdqqd_p2mdib.jpg"
    ]
  },
  {
    id: '46',
    name: "",
    title: "",
    desc: "",
    tags: [""],
    avatar: "",
    art: [
      ""
    ]
  },
  {
    id: '47',
    name: "姜旧丶",
    title: "石榴声防守团第一心软奶妈",
    desc: "揍我可以 不准伤害我的队友",
    tags: ["防守抖M奶"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758019837681_qdqqd_testzi.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758019819903_qdqqd_3l1zg9.jpg"
    ]
  },
  {
    id: '48',
   name: "黎雨倫",
    title: "唐刀的神",
    desc: "力速双S",
    tags: ["绝对忠义", "目押一切", "神秘牵制者"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757953784106_qdqqd_3vxspq.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758728648994_qdqqd_mbsqqi.jpg"
 ]
  },
  {
    id: '49',
    name: "橙",
    title: "极品小妈",
    desc: "而你 依然在一千个隐喻里 以瓷的温润和裂痕",
    tags: ["橙品号", "反派角色","纯情"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757952420392_qdqqd_b9s4em.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757940058143_qdqqd_0vtwwv.jpg"
    ]
  },
  {
    id: '50',
    name: "幽缘",
    title: "专业摸鱼",
    desc: "摸鱼的时候肝一下，我又想摸鱼了",
    tags: ["忠义","摸鱼"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1759221818893_qdqqd_mdmdzt.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1759221921216_qdqqd_5r0bnl.jpg"
    ]
  },
  {
    id: '51',
    name: "霜影溪镜",
    title: "九九最后的极意",
    desc: "记得我的好 或者记得我就好",
    tags: ["爱玩下水道"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1759222598926_qdqqd_wwmeqp.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1759222511937_qdqqd_035nbt.jpg"
    ]
  },
  {
    id: '52',
     name: "奶卷",
    title: "石榴声第一奶妈",
    desc: "每一天都为我的纯真买单",
    tags: ["治疗的极意", "单纯", "天真"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757952148859_qdqqd_vvbyuw.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757952057924_qdqqd_ppsxfa.jpg"
    ]
  },{
    id: '53',
    name: "虞姝儿",
    title: "老实尘弟",
    desc: "霖霖纯受，我不是m",
    tags: ["只爱苒苒"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1759222831619_qdqqd_84kmo2.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1759222882193_qdqqd_wxnhf6.jpg"
    ]
  },
  {
    id: '54',
    name: "",
    title: "",
    desc: "",
    tags: [""],
    avatar: "",
    art: [
      ""
    ]
  },
  {
    id: '55',
    name: "求我啦",
    title: "要和莹过一辈子的人是我",
    desc: "收留18岁心碎女大",
    tags: ["忠义", "变如脸", "多谢索隆哥"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757952185030_qdqqd_51e8dg.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757952176501_qdqqd_90lugm.jpg"
    ]
  },
  {
    id: '56',
    name: " ",
    title: "",
    desc: "",
    tags: [""],
    avatar: "",
    art: [
      ""
    ]
  },
  {
    id: '57',
    name: "沧珏",
    title: "神",
    desc: "百业战的通天代，感情里的人上人",
    tags: ["忠橙第一人", "橙品号", "反派珏色"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757952446493_qdqqd_vo8hj2.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757939983313_qdqqd_yh388q.jpg"
    ]
  },
  {
    id: '58',
    name: "",
    title: "",
    desc: "",
    tags: [""],
    avatar: "",
    art: [
      ""
    ]
  },
  {
    id: '59',
    name: "凯小露",
    title: "石榴声进攻团无名",
    desc: "九山八海为一世界，聚千界则成小千世界，此界乘三无我不断者。",
    tags: ["蓄力"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757951722559_qdqqd_ezz9zo.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1759223025682_qdqqd_ta8j1w.jpg"
    ]
  },
  {
    id: '60',
    name: "孰知",
    title: "石榴声心灵治愈师",
    desc: "孰知你心意",
    tags: ["温柔","大海之主","CPDD"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1759223149408_qdqqd_n9md0s.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1759223165566_qdqqd_w2r2ui.jpg"
    ]
  },{
    id: '61',
    name: "",
    title: "",
    desc: "",
    tags: [""],
    avatar: "",
    art: [
      ""
    ]
  },
  {
    id: '62',
    name: "",
    title: "",
    desc: "",
    tags: [""],
    avatar: "",
    art: [
      ""
    ]
  },
  {
    id: '63',
    name: "63",
    title: "",
    desc: "",
    tags: [""],
    avatar: "",
    art: [
      ""
    ]
  },
  {
    id: '64',
    name: "64",
    title: "",
    desc: "",
    tags: [""],
    avatar: "",
    art: [
      ""
    ]
  },
  {
    id: '65',
    name: "新翎",
    title: "石榴声咸鱼团第一大少",
    desc: "双剑畜，摸鱼仔",
    tags: ["女"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758033643003_qdqqd_07yab2.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758033653169_qdqqd_sw8dmt.jpg"
    ]
  },
  {
    id: '66',
    name: "渐藍",
    title: "渐藍",
    desc: "刀房拉我",
    tags: ["爱刀"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1759223392678_qdqqd_fb74oc.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1759223411142_qdqqd_qf9fub.jpg"
    ]
  },
  {
    id: '67',
    name: "情寄秋时叶",
    title: "石榴声机动团超级高手",
    desc: "流水高山心自知",
    tags: ["忠义", "纯爱", "暂不收狗"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1759223455523_qdqqd_iqq3h4.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1759223470382_qdqqd_4hxv8v.jpg"
    ]
  },
  {
    id: '68',
    name: "68",
    title: "",
    desc: "",
    tags: [""],
    avatar: "",
    art: [
      ""
    ]
  },{
    id: '69',
    name: "光影呀",
    title: "无名枪剑天下第一",
    desc: "箭指的方向，是天才的故乡",
    tags: ["忠义", "纯爱", "悠闲"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1759223759556_qdqqd_11yehy.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1759223821792_qdqqd_end2rv.jpg"
    ]
  },
  {
    id: '70',
    name: "70",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
      ""
    ]
  },
  {
    id: '71',
    name: "71",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
      ""
    ]
  },
  {
    id: '72',
    name: "72",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
     ""
    ]
  },
  
  {
    id: '73',
    name: "73",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
     ""
    ]
  },
  {
    id: '74',
    name: "74",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
      ""
    ]
  },
  {
    id: '75',
    name: "75",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
      ""
    ]
  },
  {
    id: '76',
    name: "76",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
      ""
    ]
  },{
    id: '77',
    name: " 烂情绪",
    title: "小绪神",
    desc: "诚招小六  给你小三双倍的宠爱",
    tags: ["纯爱", "00王", "极品御姐"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758291075754_qdqqd_w79jd1.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758134350340_qdqqd_2966pf.jpg"
    ]
  },
  {
    id: '78',
    name: "78",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
     ""
    ]
  },
  {
    id: '79',
    name: "79",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
      ""
    ]
  },
  {
    id: '80',
    name: "80",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
      ""
    ]
  },
  
  {
    id: '81',
    name: "81",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
      ""
    ]
  },
  {
    id: '82',
    name: "82",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
      ""
    ]
  },
  {
    id: '83',
    name: "83",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
     ""
    ]
  },
  {
    id: '84',
    name: "84",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
     ""
    ]
  },{
    id: '85',
    name: "85",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
     ""
    ]
  },
  {
    id: '86',
    name: "86",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
     ""
    ]
  },
  {
    id: '87',
    name: "87",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
     ""
    ]
  },
  {
    id: '88',
    name: "无敌",
    title: "石榴声最强防御之铜墙铁壁",
    desc: "我自归来，即是巅峰",
    tags: ["喜欢挨揍"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757954910115_qdqqd_qtsygu.jpg",
    art: ["https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757940345579_qdqqd_pv3404.jpg"
    ]
  },
  
  {
    id: '89',
    name: "89",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
     ""
    ]
  },
  {
    id: '90',
    name: "90",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
     ""
    ]
  },
  {
    id: '91',
    name: "91",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
    ""
    ]
  },
  {
    id: '92',
    name: "92",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
      ""
    ]
  },{
    id: '93',
    name: "93",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
    ""
    ]
  },
  {
    id: '94',
    name: "94",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
     ""
    ]
  },
  {
    id: '95',
    name: "95",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
     ""
    ]
  },
  {
    id: '96',
    name: "96",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
     ""
    ]
  },
{
    id: '97',
    name: "97",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
     ""
    ]
  },
{
    id: '98',
    name: "98",
    title: "职位称号等",
    desc: " ",
    tags: [" "],
    avatar: " ",
    art: [
      ""
    ]
  },
{
    id: '99',
    name: "书生",
    title: "石榴声第一深情",
    desc: "烂情绪的乘乘小5",
    tags: ["温柔小生"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757952571077_qdqqd_73erxn.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757931573528_qdqqd_yj09k3.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757931577183_qdqqd_akjrt4.jpg"
    ]
  },
{
    id: '100',
    name: "白白白阿",
    title: "甜妹dd",
    desc: "我要甜妹！",
    tags: ["白"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757951817593_qdqqd_89g4lr.jpg",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757940925206_qdqqd_ig2opq.jpg"
    ]
  },

]

// 工具函数
function getOrganizationById(id) {
  return organizationsData.find(org => org.id === id);
}

function getCharacterById(id) {
  return characterData.find(char => char.id === id);
}