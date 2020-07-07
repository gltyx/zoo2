/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Born': '出生',
    'Borrow money. Buy animals, at least two of each species. Wait for them to breed. Sell some. Buy other animals. Pay back your debt before the cumulative interest gets too high. Be patient. Get badges. Reset after a while to get a special bonus. (Click this to hide it.': '借钱。 购买动物，每个物种至少两只。 等待它们繁殖。 卖一些。 买其他动物。 在累计利息过高之前偿还债务。 耐心一点。 获取徽章。 稍后重设以获得特殊奖励。 （点击此按钮将其隐藏。',
    'Pay': '支付',
    'Stats': '统计',
    'Sold': '出售',
    'Export': '导出',
    'For Animal Exchange': '动物交流',
    'I accept': '我同意',
    'Import': '导入',
    'Animals (': '动物 (',
    'Achievements (': '成就 (',
    'Borrow': '贷款',
    'Max': '最大',
    'Loading...': '加载中...',
    'price boosts': '价格上涨',
    'Reset': '重置',
    'Get a Bigger Enclosure: (': '获得一个更大的栅栏: (',
    'Get a Higher Birth Rate: (': '获得一个更高的出生率: (',
    'Get Higher Prices: (': '获得更高的价格: (',
    'Get visitors more frequently for $': '让游客更频繁地前来参观 花费 $',
    'Birth Rate': '出生率',
    'birth rate boosts': '出生率提升',
    'Bought': '已购买',
    'Death Rate': '死亡率',
    'death rate mitigators': '死亡率减缓',
    'You Have': '你有',
    'offers': '优惠',
    'No, thanks': '不，谢谢',
    'Hello world': '你好，世界',
    'Get x': '获得 x',
    'Get Higher Prices (': '获得更高的价格 (',
    'Get a Higher Birth Rate (': '获得更高的出生率 (',
    'Credit Limit': '信用额度',
    'Contact the author.': '联系作者。',
    ' are needed to buy chameleons.': ' 拥有数量才能购买变色龙。',
    ' are needed to buy monkeys.': ' 拥有数量才能购买猴子。',
    '"\'Of all wild animals, the okapi is considered the shyest, the most subtle." (Time Magazine': '“在所有的野生动物中，㺢㹢狓被认为是最害羞、最狡猾的。”(时代杂志',
    '"A divorce lawyer is a chameleon with a law book." (Marvin Mitchelson': '“离婚律师是一条有法律书的变色龙。”(马文·米切尔森',
    '"A gentleman is simply a patient wolf." (Lana Turner': '“绅士就是一只耐心的狼。”(拉娜。特纳',
    '"An appeaser is one who feeds a crocodile, hoping it will eat him last." (Winston Churchill': '“绥靖主义者就是喂鳄鱼，希望最后被鳄鱼吃掉的人。”(温斯顿·丘吉尔',
    '"And out of a desire essentially to imitate what I was reading, I began to write, like a clever monkey." (Russell Banks': '“出于模仿所读内容的欲望，我开始写作，就像一只聪明的猴子。”(罗素银行',
    '"Writers are a little below clowns and a little above trained seals." (John Steinbeck': '“作家比小丑低一点，比训练有素的海豹高一点。”(约翰·斯坦贝克',
    '1,100 crocodiles are needed to buy seals.': '购买海豹需要拥有1100条鳄鱼。',
    '1,200 monkeys are are needed to buy kangaroos.': '购买袋鼠需要拥有1200只猴子。',
    '1,300 seals are are needed to buy anteaters.': '购买食蚁兽需要1300只海豹。',
    '1,400 kangaroos are needed to buy eagles.': '需要拥有1400只袋鼠才能购买鹰。',
    '1,500 anteaters are needed to buy okapis.': '购买㺢㹢狓需要拥有1500只食蚁兽。',
    '1,600 eagles are needed to buy ostriches.': '买鸵鸟需要拥有1600只老鹰。',
    '1,700 okapis are needed to buy antelopes.': '购买羚羊需要拥有1700只㺢㹢狓。',
    '1,800 ostriches are needed to buy zebras.': '买斑马需要拥有1800只鸵鸟。',
    '1,900 antelopes are needed to buy condors.': '购买秃鹰需要拥有1900只羚羊。',
    '2,000 zebras are needed to buy wolves.': '需要拥有2000匹斑马才能买狼。',
    '2,100 condors are needed to buy jaguars.': '购买美洲虎需要拥有2100只秃鹰。',
    '2,200 wolves are needed to buy bears.': '购买熊需要拥有2200只狼。',
    '2,300 jaguars are needed to buy hippos.': '要买河马需要拥有2300只美洲虎。',
    '2,400 bears are needed to buy tigers.': '买老虎需要拥有2400只熊。',
    '2,500 hippos are needed to buy giraffes.': '买长颈鹿需要拥有2500头河马。',
    '2,600 tigers are needed to buy sharks.': '购买鲨鱼需要拥有2600只老虎。',
    '2,700 giraffes are needed to buy rhinos.': '购买犀牛需要拥有2700只长颈鹿。',
    '2,800 sharks are needed to buy gorillas.': '要买大猩猩需要拥有2800条鲨鱼。',
    '2,900 rhinos are needed to buy lions.': '购买狮子需要拥有2900头犀牛。',
    '200 peacocks are needed to buy beavers.': '买海狸需要拥有200只孔雀。',
    '3,000 gorillas are needed to buy elephants.': '要买大象需要拥有3000只大猩猩。',
    '3,100 lions are needed to buy pandas.': '购买熊猫需要拥有3100头狮子。',
    '3,200 elephants are needed to buy dolphins.': '购买海豚需要拥有3200头大象。',
    '3,300 pandas are needed to buy orcas.': '购买逆戟鲸需要拥有3300只熊猫。',
    '300 chameleons are needed to buy flamingos.': '买火烈鸟需要拥有300条变色龙。',
    '400 beavers are needed to buy otters.': '买水獭需要拥有400只海狸。',
    '500 flamingos are needed to buy penguins.': '买企鹅需要拥有500只火烈鸟。',
    '600 otters are needed to buy snakes.': '买蛇需要拥有600只水獭。',
    '700 penguins are needed to buy turtles.': '需要拥有700只企鹅才能购买乌龟。',
    '800 snakes are needed to buy tapirs.': '购买貘需要拥有800条蛇。',
    '900 turtles are needed to buy crocodiles.': '需要拥有900只乌龟才能购买鳄鱼。',
    'Reduce the wait by 10 seconds for $10,': '只需$10，就能减少10秒的等待时间，',
    'Lower the Death Rate: (': '降低死亡率: (',
    'Max population': '动物上限',
    'You bought the first birth rate boost': '你买了第一个出生率提升',
    'You bought the first death rate mitigator': '你买了第一个降低死亡率的措施',
    'You bought the first enclosure extension': '你买了第一个扩展栅栏',
    'You bought the first price boost': '你买了第一次价格提升',
    'You found ten different species': '你发现了十个不同的物种',
    'You found thirty different species': '你发现了30种不同的物种',
    'You found thirty five species species for your Zoo. You have them all': '你为你的动物园发现了35种物种。你都有!',
    'You found twenty different species': '你发现了20种不同的物种',
    'You Owe': '↑ 你的欠款 ↑',
    'Zoo': '动物园',
    'Dead': '死亡',
    'Each visitor pays $1 for each species in your zoo': '每位游客为动物园里的每种动物支付$1',
    'enclosure extensions': '栅栏扩展',
    'See code (Ctrl + U) for detailed credits. Title image by Sean Freeman -': '',
    'The Incremental Office': '增量办公室',
    'This is it': '就是这样',
    'Except were noted, all photos published by their authors under a': '除注明外，所有照片均由作者在目录下发表',
    'Creative Commons "by" license': '知识共享“通过”许可',
    'Click to update': '点击以更新',
    '"When a zebra\'s in the zone, leave him alone." (Marty the Zebra, Madagascar': '“当斑马在斑马区内时，离它远点。”斑马马蒂，马达加斯加',
    '"There is an eagle in me that wants to soar, and there is a hippopotamus in me that wants to wallow in the mud." (Carl Sandburg': '“我体内有一只想要翱翔的鹰，也有一只想要在泥里打滚的河马。”(卡尔·桑德伯格',
    '"Set the gearshift for the high gear of your soul, you\'ve got to run like an antelope out of control!" (Trey Anastasio': '“为你的灵魂调好档，你必须像羚羊一样失控奔跑!”(特雷·阿纳斯塔西奥',
    '"Only in art will the lion lie down with the lamb, and the rose grow without thorn." (Martin Amis': '“只有在艺术中，狮子才能与羔羊同眠，玫瑰才能无刺地生长。”(马丁•艾米斯',
    '"Like Indiana Jones, I don\'t like snakes - though that might lead some to ask why I\'m in politics." (Theresa May': '“像印第安纳·琼斯一样，我不喜欢蛇——尽管这可能会让一些人问我为什么要从政。”(特蕾莎·梅',
    '"It\'s like trying to pin down a kangaroo on a trampoline." (Sid Waddell': '“这就像在蹦床上把袋鼠固定住一样。”(希德·瓦德尔',
    '"It\'s a little like wrestling a gorilla. You don\'t quit when you\'re tired - you quit when the gorilla is tired." (Robert Strauss': '“这有点像和大猩猩摔跤。你不能因为累了就放弃——你只能等到大猩猩累了才放弃。”(罗伯特·施特劳斯',
    '"People can have rhinoceros skin, but there\'s a point when something\'s going to hurt you." (Janet Jackson': '“人可以有犀牛皮，但总有一天会受到伤害。”(珍妮·杰克逊',
    '"No dolphin who inhabits one of those aquariums or one of those marine lands can be considered normal." (Jacques Yves Cousteau': '“栖息在水族馆或海洋陆地上的海豚不能被视为正常。”(雅克·伊夫康斯塔',
    '"If I swim in the ocean, I have a shark thought. Not a bad one, but just a little one." (Tea Leoni': '“如果我在海里游泳，我有一个鲨鱼的想法。还不赖，只是小了点。”(茶饰演',
    '"Give me a condor\'s quill! Give me Vesuvius crater for an inkstand!" (Herman Melville': '“给我一支秃鹰的羽毛笔!”给我一个维苏威火山口做墨水瓶!”(赫尔曼·麦尔维尔',
    '"Do not blame God for having created the tiger, but thank him for not having given it wings" (Indian proverb': '“不要责怪上帝创造了老虎，但感谢他没有给它翅膀”(印度谚语)',
    '"Beaver do better work than the Corps of Engineers." (Mike Todd': '“海狸比工兵做得更好。”(麦克。托德',
    '"Be cautious of bears at all times, even when being mauled by a tiger." (Craig Benzine': '“任何时候都要小心熊，即使是被老虎咬伤的时候。” (克雷格苯',
    '"And the turtles, of course...all the turtles are free, as turtles and, maybe, all creatures should be." ( Dr. Seuss, Yertle the Turtle and Other Stories': '“当然还有乌龟……所有的乌龟都是自由的，也许所有的生物都应该是这样。”苏斯博士，耶特尔，乌龟和其他的故事',
    '"Any fool can turn a blind eye but who knows what the ostrich sees in the sand." (Samuel Beckett, Murphy': '“傻瓜都可以睁一只眼闭一只眼，但谁知道鸵鸟在沙子里看到了什么呢?”(塞缪尔·贝克特,墨菲',
    '"One morning I shot an elephant in my pajamas. How he got into my pajamas I\'ll never know." (Groucho Marx': '“一天早上，我开枪打死了一头穿着睡衣的大象。我永远也不知道他是怎么穿上我的睡衣的。”(格劳乔·马克思',
    '"Meerkat... it\'s what\'s for dinner!" (Uncle Max - The Lion King': '“猫鼬…这是晚餐吃的东西!”(麦克斯叔叔——《狮子王》',
    '"If you were to make little fishes talk, they would talk like whales." (Oliver Goldsmith': '“如果你要让小鱼说话，它们就会像鲸鱼一样说话。”(奥利弗·戈德史密斯',
    '"I\'ve never been in love, but if a penguin can find a soul mate, I\'m sure I can, too." (Rebekah Crane, Playing Nice': '“我从未恋爱过，但如果企鹅能找到灵魂伴侣，我相信我也能。”丽贝卡·克莱恩表现得很好',
    '"The jaguar is the third-largest feline after the tiger and the lion, and the largest in the Western Hemisphere." (Wikipedia': '“美洲虎是仅次于老虎和狮子的第三大猫科动物，也是西半球最大的猫科动物。” （维基百科',
    '"The chief difficulty Alice found at first was in managing her flamingo" (Lewis Carroll - Alice\'s Adventures in Wonderland': '“爱丽丝起初发现的主要困难在于管理她的火烈鸟”（刘易斯·卡罗尔-爱丽丝梦游仙境',
    '"So, you\'re telling me the zoo commissioned you to make a zombie panda in order to avoid a potential international incident." (Lish McBride, Hold Me Closer, Necromancer': '“所以，你是在告诉我动物园为了避免潜在的国际事件委托动物园制作一只僵尸熊猫。” （莉丝·麦克布莱德（Lish McBride），抱紧我，死灵法师',
    '"Remember that the most beautiful things in the world are the most useless: peacocks and lilies, for instance." (John Ruskin': '“记住，世界上最美丽的事物是最无用的：例如孔雀和百合。” （约翰·罗斯金',
    '"Otters are natural experimenters." (Karen Pryor, Lads Before the Wind: Diary of a Dolphin Trainer': '“水獭是天生的实验者。” （凯伦·普赖尔（Karen Pryor），《风前的小伙子：海豚教练的日记',
    '"God is really only another artist. He invented the giraffe, the elephant, and the cat. He has no real style. He just keeps on tryi ng other things." (Pablo Picasso': '“上帝真的只是另一位艺术家。他发明了长颈鹿，大象和猫。他没有真正的风格。他只是继续尝试其他东西。” （巴勃罗毕加索',
    '"\'Farewell,\' they cried, \'Wherever you fare till your eyries receive you at the journey\'s end!\' That is the polite thing to say among eagles." (J.R.R. Tolkien, The Annotated Hobbit: The Hobbit, or, There and back again': '“\'告别\'，他们大声喊道，\'无论您花多少钱，直到旅程结束时，您的眼ries都收到您！\' 这是老鹰所说的客气话。” （J.R.R. Tolkien，《带注释的霍比特人：霍比特人》，或者，然后再返回',
    '"We know that there are many animals on this continent not found in the Old World. These must have been carried from here to the ark, and then brought back afterwards." (Robert G. Ingersoll, Some Mistakes of Moses': '“我们知道在这个大陆上有很多动物是在旧世界中找不到的。这些动物一定是从这里运到方舟，然后再带回来的。” （罗伯特·英格索尔，《摩西的一些错误》',
    '"When all of the animals heard that Mrs. Tapir was going extinct, they decided to pay her a visit and see if they could offer her some advice." (Ze Frank, True Facts About the Tapir': '“当所有的动物都听说塔皮尔夫人即将灭绝时，他们决定去拜访她，看看是否能给她一些建议。” （Ze Frank，关于，的真相',
    'Close': '关闭',
    'The total selling value of your animals is $': '您的动物的总销售价值为$',
    'You accepted 0 offers from the Incremental Office for Animal Exchange': '你没有接受任何动物交易办公室的提议',
    'Buy: $': '购买: $',
    'Sell: $': '出售: $',
    'Get': '获得',
    '"When all of the animals heard that Mrs. Tapir was going extinct, they decided to pay her a visit and see if they could offer her some advice." (Ze Frank, True Facts About the ': '“当所有的动物听说貘夫人即将灭绝时，他们决定去拜访她，看看能不能给她一些建议。”(泽弗兰克，真实的事实',
    ' in exchange for': ' 通过付出 ',
    '* Your zoo received its first visitors': '*您的动物园接待了第一批游客',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    'otters': '水獭',
    'Otters': '水獭',
    'Otter': '水獭',
    'peacocks': '孔雀',
    'Peacocks': '孔雀',
    'Peacock': '孔雀',
    'penguins': '企鹅',
    'Penguins': '企鹅',
    'Penguin': '企鹅',
    'snakes': '蛇',
    'Snakes': '蛇',
    'Snake': '蛇',
    'beavers': '海狸',
    'Beavers': '海狸',
    'Beaver': '海狸',
    'flamingos': '火烈鸟',
    'Flamingos': '火烈鸟',
    'Flamingo': '火烈鸟',
    'meerkats': '猫鼬',
    'Meerkats': '猫鼬',
    'Meerkat': '猫鼬',
    'tapirs': '貘',
    'Tapirs': '貘',
    'Tapir': '貘',
    'Tapir': '貘',
    'turtles': '乌龟',
    'Turtles': '乌龟',
    'Turtle': '乌龟',
    'chameleons': '变色龙',
    'Chameleons': '变色龙',
    'Chameleon': '变色龙',
    'crocodiles': '鳄鱼',
    'Crocodiles': '鳄鱼',
    'Crocodile': '鳄鱼',
    'monkeys': '猴子',
    'Monkeys': '猴子',
    'Monkey': '猴子',
    'anteaters': '食蚁兽',
    'Anteaters': '食蚁兽',
    'Anteater': '食蚁兽',
    'kangaroos': '袋鼠',
    'Kangaroos': '袋鼠',
    'Kangaroo': '袋鼠',
    'seals': '海豹',
    'Seals': '海豹',
    'Seal': '海豹',
    'bears': '熊',
    'Bears': '熊',
    'Bear': '熊',
    'zebras': '斑马',
    'Zebras': '斑马',
    'Zebra': '斑马',
    'antelopes': '羚羊',
    'Antelopes': '羚羊',
    'Antelope': '羚羊',
    'eagles': '鹰',
    'Eagles': '鹰',
    'Eagle': '鹰',
    'okapis': '㺢㹢狓',
    'Okapis': '㺢㹢狓',
    'Okapi': '㺢㹢狓',
    'ostriches': '鸵鸟',
    'Ostriches': '鸵鸟',
    'Ostriche': '鸵鸟',
    'Ostrich': '鸵鸟',
    'condors': '秃鹰',
    'Condors': '秃鹰',
    'Condor': '秃鹰',
    'orcas': '逆戟鲸',
    'Orcas': '逆戟鲸',
    'Orca': '逆戟鲸',
    'pandas': '熊猫',
    'Pandas': '熊猫',
    'Panda': '熊猫',
    'lions': '狮子',
    'Lions': '狮子',
    'Lion': '狮子',
    'tigers': '老虎',
    'Tigers': '老虎',
    'Tiger': '老虎',
    'wolves': '狼',
    'Wolves': '狼',
    'Wolve': '狼',
    'Wolf': '狼',
    'sharks': '鲨鱼',
    'Sharks': '鲨鱼',
    'Shark': '鲨鱼',
    'rhinos': '犀牛',
    'Rhinos': '犀牛',
    'Rhino': '犀牛',
    'dolphins': '海豚',
    'Dolphins': '海豚',
    'Dolphin': '海豚',
    'giraffes': '长颈鹿',
    'Giraffes': '长颈鹿',
    'Giraffe': '长颈鹿',
    'gorillas': '大猩猩',
    'Gorillas': '大猩猩',
    'Gorilla': '大猩猩',
    'hippos': '河马',
    'Hippos': '河马',
    'Hippo': '河马',
    'jaguars': '美洲虎',
    'Jaguars': '美洲虎',
    'Jaguar': '美洲虎',
    'elephants': '大象',
    'dummies': '驴',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "A ": "一只 ",
    "50 ": "50 ",
    "You took ": "你得到了 ",
    "1 ": "1 ",
    "2 ": "2 ",
    "3 ": "3 ",
    "4 ": "4 ",
    "5 ": "5 ",
    "6 ": "6 ",
    "7 ": "7 ",
    "8 ": "8 ",
    "9 ": "9 ",
    "10 ": "10 ",
    "You found ten different": "你发现了10种不同的",
    "You found twenty different": "你发现了20种不同的",
    "You found thirty different": "你发现了30种不同的",
    "You discovered ": "你发现了 ",
    "You maxed out the price of your ": "你把价格提高到了最高，为你的 ",
    "You bought a ": "你购买了一只 ",
    "Buy 1: $": "购买 1: $",
    "Sell 1: $": "出售 1: $",
    "You sold 100,000 ": "你出售了 100,000 ",
    "You sold 10,000 ": "你出售了 10,000 ",
    "You sold 1,000 ": "你出售了 1,000 ",
    "You sold 100 ": "你出售了 100 ",
    "You sold 1 ": "你出售了 1 ",
    "20 times you bought bigger enclosures for your ": "你购买了20倍大的围栏，为了你的 ",
    "10 times you bought bigger enclosures for your ": "你购买了10倍大的围栏，为了你的 ",
    "100,000 ": "100,000 ",
    "10,000 ": "10,000 ",
    "1,000 ": "1,000 ",
    "100 ": "100 ",
    "You maxed out the birth-rate of your ": "出生率达到了极限，你的",
    "You got 100,000 ": "你有100,000只 ",
    "You got 10,000 ": "你有10,000只 ",
    "You got 1,000 ": "你有1000只 ",
    "You got 100 ": "你有100只 ",
    "You got 1 ": "你有1只 ",
    "You bought 100 ": "你购买了100只 ",
    "You bought 200 ": "你购买了200只 ",
    "You bought 500 ": "你购买了500只 ",
    "You bought 1,000 ": "你购买了1,000只 ",
    "You bought 10,000 ": "你购买了10,000只 ",
    "You bought 100,000 ": "你购买了100,000只 ",
    "You bought 10 price boosts for your ": "你购买了价格上涨 10 为了你的 ",
    "You bought 10 death-rate reductions for your ": "你购买了死亡率降低 10 为了你的 ",
    "You bought 10 birth-rate boosts for your ": "你购买了出生率提高 10 为了你的 ",
    "You minimized the death-rate of your ": "您最大程度地降低了死亡率，为了你的 ",
    'otters': '水獭',
    'Otters': '水獭',
    'Otter': '水獭',
    'peacocks': '孔雀',
    'Peacocks': '孔雀',
    'Peacock': '孔雀',
    'penguins': '企鹅',
    'Penguins': '企鹅',
    'Penguin': '企鹅',
    'snakes': '蛇',
    'Snakes': '蛇',
    'Snake': '蛇',
    'beavers': '海狸',
    'Beavers': '海狸',
    'Beaver': '海狸',
    'flamingos': '火烈鸟',
    'Flamingos': '火烈鸟',
    'Flamingo': '火烈鸟',
    'meerkats': '猫鼬',
    'Meerkats': '猫鼬',
    'Meerkat': '猫鼬',
    'tapirs': '貘',
    'Tapirs': '貘',
    'Tapir': '貘',
    'Tapir': '貘',
    'turtles': '乌龟',
    'Turtles': '乌龟',
    'Turtle': '乌龟',
    'chameleons': '变色龙',
    'Chameleons': '变色龙',
    'Chameleon': '变色龙',
    'crocodiles': '鳄鱼',
    'Crocodiles': '鳄鱼',
    'Crocodile': '鳄鱼',
    'monkeys': '猴子',
    'Monkeys': '猴子',
    'Monkey': '猴子',
    'anteaters': '食蚁兽',
    'Anteaters': '食蚁兽',
    'Anteater': '食蚁兽',
    'kangaroos': '袋鼠',
    'Kangaroos': '袋鼠',
    'Kangaroo': '袋鼠',
    'seals': '海豹',
    'Seals': '海豹',
    'Seal': '海豹',
    'bears': '熊',
    'Bears': '熊',
    'Bear': '熊',
    'zebras': '斑马',
    'Zebras': '斑马',
    'Zebra': '斑马',
    'antelopes': '羚羊',
    'Antelopes': '羚羊',
    'Antelope': '羚羊',
    'eagles': '鹰',
    'Eagles': '鹰',
    'Eagle': '鹰',
    'okapis': '㺢㹢狓',
    'Okapis': '㺢㹢狓',
    'Okapi': '㺢㹢狓',
    'ostriches': '鸵鸟',
    'Ostriches': '鸵鸟',
    'Ostriche': '鸵鸟',
    'Ostrich': '鸵鸟',
    'condors': '秃鹰',
    'Condors': '秃鹰',
    'Condor': '秃鹰',
    'orcas': '逆戟鲸',
    'Orcas': '逆戟鲸',
    'Orca': '逆戟鲸',
    'pandas': '熊猫',
    'Pandas': '熊猫',
    'Panda': '熊猫',
    'lions': '狮子',
    'Lions': '狮子',
    'Lion': '狮子',
    'tigers': '老虎',
    'Tigers': '老虎',
    'Tiger': '老虎',
    'wolves': '狼',
    'Wolves': '狼',
    'Wolve': '狼',
    'Wolf': '狼',
    'sharks': '鲨鱼',
    'Sharks': '鲨鱼',
    'Shark': '鲨鱼',
    'rhinos': '犀牛',
    'Rhinos': '犀牛',
    'Rhino': '犀牛',
    'dolphins': '海豚',
    'Dolphins': '海豚',
    'Dolphin': '海豚',
    'giraffes': '长颈鹿',
    'Giraffes': '长颈鹿',
    'Giraffe': '长颈鹿',
    'gorillas': '大猩猩',
    'Gorillas': '大猩猩',
    'Gorilla': '大猩猩',
    'hippos': '河马',
    'Hippos': '河马',
    'Hippo': '河马',
    'jaguars': '美洲虎',
    'Jaguars': '美洲虎',
    'Jaguar': '美洲虎',
    'dummies': '驴',
    'Dummies': '驴',
    'Dummy': '驴',
    'elephants': '大象',
    'Elephants': '大象',
    'Elephant': '大象',
    "times you bought bigger enclosures for your ": "次你买了更大的围栏为你的 ",
    " were born": " 出生了",
    " died": " 死掉了",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "!": "!",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "\n": "",
    " were born": " 出生了",
    " died": " 死掉了",
    " in your Zoo": " 在你的动物园里",
    " for your Zoo": " 为你的动物园",
    " was born in your Zoo": " 出生在了你的动物园",
    " from your Zoo": " 从你的动物园",
    " died in your Zoo": " 死在了你的动物园里",
    " was born": " 出生",
    " species": " 物种",
    'in exchange for': '通过付出',
    ' in exchange for': ' 通过付出',
    'otters': '水獭',
    'Otters': '水獭',
    'Otter': '水獭',
    'peacocks': '孔雀',
    'Peacocks': '孔雀',
    'Peacock': '孔雀',
    'penguins': '企鹅',
    'Penguins': '企鹅',
    'Penguin': '企鹅',
    'snakes': '蛇',
    'Snakes': '蛇',
    'Snake': '蛇',
    'beavers': '海狸',
    'Beavers': '海狸',
    'Beaver': '海狸',
    'flamingos': '火烈鸟',
    'Flamingos': '火烈鸟',
    'Flamingo': '火烈鸟',
    'meerkats': '猫鼬',
    'Meerkats': '猫鼬',
    'Meerkat': '猫鼬',
    'tapirs': '貘',
    'Tapirs': '貘',
    'Tapir': '貘',
    'Tapir': '貘',
    'turtles': '乌龟',
    'Turtles': '乌龟',
    'Turtle': '乌龟',
    'chameleons': '变色龙',
    'Chameleons': '变色龙',
    'Chameleon': '变色龙',
    'crocodiles': '鳄鱼',
    'Crocodiles': '鳄鱼',
    'Crocodile': '鳄鱼',
    'monkeys': '猴子',
    'Monkeys': '猴子',
    'Monkey': '猴子',
    'anteaters': '食蚁兽',
    'Anteaters': '食蚁兽',
    'Anteater': '食蚁兽',
    'kangaroos': '袋鼠',
    'Kangaroos': '袋鼠',
    'Kangaroo': '袋鼠',
    'seals': '海豹',
    'Seals': '海豹',
    'Seal': '海豹',
    'bears': '熊',
    'Bears': '熊',
    'Bear': '熊',
    'zebras': '斑马',
    'Zebras': '斑马',
    'Zebra': '斑马',
    'antelopes': '羚羊',
    'Antelopes': '羚羊',
    'Antelope': '羚羊',
    'eagles': '鹰',
    'Eagles': '鹰',
    'Eagle': '鹰',
    'okapis': '㺢㹢狓',
    'Okapis': '㺢㹢狓',
    'Okapi': '㺢㹢狓',
    'ostriches': '鸵鸟',
    'Ostriches': '鸵鸟',
    'Ostriche': '鸵鸟',
    'Ostrich': '鸵鸟',
    'condors': '秃鹰',
    'Condors': '秃鹰',
    'Condor': '秃鹰',
    'orcas': '逆戟鲸',
    'Orcas': '逆戟鲸',
    'Orca': '逆戟鲸',
    'pandas': '熊猫',
    'Pandas': '熊猫',
    'Panda': '熊猫',
    'lions': '狮子',
    'Lions': '狮子',
    'Lion': '狮子',
    'tigers': '老虎',
    'Tigers': '老虎',
    'Tiger': '老虎',
    'wolves': '狼',
    'Wolves': '狼',
    'Wolve': '狼',
    'Wolf': '狼',
    'sharks': '鲨鱼',
    'Sharks': '鲨鱼',
    'Shark': '鲨鱼',
    'rhinos': '犀牛',
    'Rhinos': '犀牛',
    'Rhino': '犀牛',
    'dolphins': '海豚',
    'Dolphins': '海豚',
    'Dolphin': '海豚',
    'giraffes': '长颈鹿',
    'Giraffes': '长颈鹿',
    'Giraffe': '长颈鹿',
    'gorillas': '大猩猩',
    'Gorillas': '大猩猩',
    'Gorilla': '大猩猩',
    'hippos': '河马',
    'Hippos': '河马',
    'Hippo': '河马',
    'jaguars': '美洲虎',
    'Jaguars': '美洲虎',
    'Jaguar': '美洲虎',
    'elephants': '大象',
    'dummies': '驴',
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^您最大程度地降低了死亡率，为了你的 (.+)$/, //纯空格
    /^你购买了出生率提高 10 为了你的 (.+)$/, //纯空格
    /^你购买了(.+)$/, //纯空格
    /^你出售了(.+)$/, //纯空格
    /^购买 1\: \$(.+)$/, //纯空格
    /^次你买了更大的围栏为你的 (.+)$/, //纯空格
    /^你把价格提高到了最高，为你的 (.+)$/, //纯空格
    /^出生率达到了极限，你的(.+)$/, //纯空格
    /^(.+) 在你的动物园里$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^\| Buy (.+) \|$/, '\| 购买 $1 \|'],
    [/^Buy (.+) \|$/, '购买 $1 \|'],
    [/^\| Sell (.+) \|$/, '\| 出售 $1 \|'],
    [/^Sell (.+) \|$/, '出售 $1 \|'],
    [/^You were fined (.+) times by the Animal Bureau$/, '你被动物局罚了$1次'],
    [/^Get ([\d\.,]+) peacocks$/, '得到 $1 只孔雀'],
    [/^You have (.+) animals$/, '你拥有 $1 只动物'],
    [/^Time played: (.+) seconds$/, '游戏时长：$1 秒'],
    [/^You obtained (.+) animal$/, '你得到了$1只动物'],
    [/^You obtained (.+) animals$/, '你得到了$1只动物'],
    [/^Credit Limit: (.+)$/, '信用额度：$1'],
    [/^Credit Limit: (.+)$/, '信用额度：$1'],
    [/^Get (.+) more visitors for (.+)$/, '获得 $1 游客，价格为 $2'],
    [/^Your zoo gets (.+) visitors every (.+) seconds$/, '你的动物园每 $2 秒有$1个游客'],
    [/^Next species in (.+) seconds$/, '下一个物种将在 $1 秒内出现'],
    [/^You bought (.+) birth rate boosts$/, '你购买了 $1 出生率提升'],
    [/^You bought (.+) birth-rate boosts$/, '你购买了 $1 出生率提升'],
    [/^You bought (.+) death rate mitigators$/, '你购买了 $1 降低死亡率的措施'],
    [/^You bought (.+) death-rate mitigators$/, '你购买了 $1 降低死亡率的措施'],
    [/^You bought (.+) enclosure extensions$/, '你购买了 $1 栅栏扩展'],
    [/^You bought (.+) enclosure enlargements$/, '你购买了 $1 扩展栅栏'],
    [/^You bought (.+) price boosts$/, '你购买了 $1 价格提升'],
    [/^You accepted (.+) offers from the Incremental Office for Animal Exchange$/, '你接受了$1个动物交换办公室的提议'],
    [/^The total selling value of your animals is \$(.+),$/, '你的动物的总售价是 \$$1，'],
    [/^You took (.+) chameleons in exchange for$/, '你得到了 $1 只变色龙 付出了'],
    [/^You took (.+) peacocks in exchange for (.+) meerkats$/, '你用 $1 只孔雀换了 $2 只猫鼬'],
    [/^You carry (.+) badges from previous games$/, '你从上一轮游戏中获得 $1 个徽章'],
    [/^You acquired them at a rate of (.+) per second$/, '你以每秒 $1 的速度得到它们'],
    [/^If you reset now, your animals will have  (.+) better initial birth rates \(compared to a fresh game$/, '如果您立即重置，您的动物的初始出生率将提高$1（与新游戏相比）'],
]);