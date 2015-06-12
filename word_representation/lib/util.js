import Hanzi from 'hanzi';
import OpenCC from 'opencc';

Hanzi.start();
let opencc = new OpenCC('s2t.json');

let roo = [
	'abl','abili','acro','agog','agon','alb','alg','alt','ampl','anci','antiq','andr','arbit','arc','arm','aug','auc', // a
	'balm','ban','bar','bat','biblio','blanc','brace','brach','braid','brig','bu',
	'calc','cale','calor','camp','car','char','card','chart','carp','cast','cav','cens','cheir','chir','chem','chemico','chemo','chor','chrom','cil','cine','cinema','cinemat','civ','coct','cogn','cond','corn','cosm','crit','cris','cryo','culp','cuss','custom','cyn','cyt', // c
	'dec','decor','demn','damn','dendr','dendro','dens','dexter','dextr','di','dol','dom','domin','dorm','dormit','draw','drag','draft','drom', // d
	'eas','ed','ego','emper','imper','esthet','aesthet', // e
	'fabr','feder','fend','fens','fest','fibr','fil','fili','firm','fix','flat','foli','fort','found','fund','front','fum','funct', // f
	'gam','gar','garn','germ','glaci','gloss','glot','gran', // g
	'hagi','hal','halit','hal','haust','hav','head','heir','hered','herit','helic','heli','hepat','hilar','hipp','hor','hort','hospit','host','hyeto','hypn','hypso', // h
	'ichthy','idol','imag','imit','insul','integr', // i
	'joc','jok','journ','jug', // j
	'lact','langu','lapid','later','lax','leas','lex','lexic','libr','lib','lic','linqu','liqu','lic','lips','lun','lys','lyst', // l
	'mach','mech','maj','man','main','mand','mend','mell','merc','merch','milit','mis','miser','moll','monstr','mor','mord','mors','mur','mus', // m
	'nas','necr','neur','nerv','neutr','nihil','noct','nost','null','nour','nurs','nutri', // n
	'od','odont','olig','oner','on','oo','ov','ovo','optim','oram','orbit','oss','ossi','oste','ot','oxy', // o
	'paci','palp','par','parl','pear','peps','pept','phan','phen','phor','physi','phyt','pil','pisc','place','plain','plaint','plan','plaud','plaus','plod','plos','ploy','ploit','plut','porc','pot','proach','proxim','proli','psych','pud','putr', // p
	'quaint','quant','quot', // q
	'rage','rat','rend','rept','rhiz','rhythm','robor','robust','rub','rur','rust', // r
	'sacr','sanct','sag','sal','sult','sav','salv','scop','scrut','scrutin','seism','serr','set','semin','sever','sight','som','somat','sort','spher','spin','splend','stall','sten','stigm','strat','strato','strid','strif','striv','surg', // s
	'tach','tack','tail','tard','techn','toler','touch','trench','trop','troph','trit','tru','tut','tuit','typ', // t
	'urin','ur', // u
	'zeal', // z
	'vapor','veil','vent','vibr','vil','vir','vot' // v
];

let ro = [
	'abol','adip','adjut','advant','agger','alacr','alesc','angu','anx','anth','ap','aper','apex','aquil','ar','arbor','arct','ard','ars','srdu','aren','arom','arter','asin','asper','asthm','athl','atmo','atroc','aur','auster','austr','axi', // a
	'bank','barb','barbar','beat','bever','bib','blas','blem','bon','bord','botan','bov','broch','bry','burl','byss', // b
	'cadaver','cal','calam','calend','call','can','capr','carcer','caric','caten','cathar','cathol','caul','caust','caval','ceal','cel','celevr','celib','cephal','ceram','cerebr','cess','chondr','cess','chondr','chrys','cinct','ciner','cist','clandestin','clys','col','coll','com','contamin','cop','cori','corrig','corrig','corusc','crepit','crimin','crud','crust','culmin','cumul','curt','custod','cylind', // c
	'dama','de','deb','debil','delect','deterior','didact','digit','dors','dra', // d
	'eleg','emul','ent','entom','equ','ero','escal','estim','ethn','etymo', // e
	'fam','fan','fascin','fatig','fatu','febr','fecund','felic','femin','fer','fur','ferr','fisc','fiss','flagell','fluctu','for','fratern','fresc','fruct','fulg','fulmin','furc','furt','fusc', // f
	'gain','galax','gamb','garr','gastr','genu','ger','glomer','glut','gorg','gross','gymn', // g
	'harm','haught','hein','hemer','hemo','hom','host', // h
	'icon','ident','ign','incip','init','intim','isol','isthm', // i
	'jac','jacul','jubil', // j
	'lacer','lat','laud','lemma','lent','leth','lig','lign','loft','lop','lubric','lup','lyr', // l
	'maci','macul','mall','mamm','mascul','mastic','me','medit','melan','melior','mendic','mer','mol','morb','myth', // m
	'narc','nebul','nec','nom','numismat', // n
	'obed','obes','obit','obliv','obsol','ocul','od','odi','odyn','ole','olfact','omin','ornith','oscul','ostens','ostrac', // o
	'pachy','pan','pat','phem','pher','ping','pinn','plais','plas','plum','pneumon','pol','postul','pragm','psych','puer','pulver','pusill','pyr', // p
	'quarant','quer', // q
	'rab','radi','ram','reg','regn','remn','rest','retic','rever','rhe','rhin','riv','rug', // r
	'sacchar','salu','sanat','sap','sarc','scintill','sembl','sept','sibil','sicc','sider','stetho','succ','sud','sumptu', // s
	'tabul','taph','taut','templ','torp','torr','trepid','tum', // t
	'uber','uxor', // u
	'vale','veh','velop','verd','veter','viti','vituper', // v
	'zym', // z
];

let root = [
	'ac','acu','acerb','acet','act','aer','ag','agr','al','alter','altern','am','amor','amat','ambul','ambl','amphi','anim','ann','enn','anthrop','apt','ept','aqu','arch','archy','art','astr','aster','aud','audit','aut','auto','av','avar',
	'ball','bol','bas','bell','bel','bio','bi','brev','bridg',
	'cad','cas','cid','cay','cand','cend','cens','cant','cent','cap','cep','ceive','cip','cup','card','cord','carn','cau','ced','ceed','cess','celer','cent','centr','cern','cret','crimin','chron','cid','cis','circ','cycl','cit','claim','clam','clear','clar','clair','clin','cliv','clos','clud','clus','corp','corpor','cover','crat','cracy','cre','creas','cret','creed','cred','cruc','crus','crypt','cryph','cub','cumb','cult','cur','curs','cour','cours',
	'dem','dent','derm','dermat','dict','dic','dign','don','dot','dit','dow','doc','doct','dox','dog','du','dub','dou','duc','duct','dur','dyn','dynam',
	'em','empt','am','ampl','equ','erg','ert','err','ev',
	'fabl','fabul','fess','fac','fact','feas','fect','fic','fig','fac','fall','fail','fals','fault','fer','ferv','fid','fin','flam','flagr','flect','flex','flict','flor','flour','flu','flux','forc','fort','form','fract','frag','frig','friger','fug','fus',
	'gen','gener','geni','gest','gister','gnor','gnos','gon','grad','graph','gram','grat','gree','grav','griev','grief','greg','gress','gyn','gynec',
	'habit','hibit','hap','her','hes','hum','hydr',
	'idea','ideo','idio','it',
	'ject','judg','judic','junct','join','jur','juris','juven',
	'kin','kinemat','kines','kinet',
	'labor','laps','lat','lav','luv','lut','lect','lig','leg','legis','lev','liev','liber','limin','lim','line','lingu','liter','lith','loc','log','loqu','locu','long','leng','luc','lust','lumin','lustr','lud','lus',
	'man','manu','mar','marin','mark','marc','matern','matr','med','mid','memor','member','mnes','mnem','ment','merg','mers','meta','meter','metr','meas','mens','migr','min','mir','misc','med','ming','miss','mit','mob','mot','mod','monit','mon','morph','mort','mount','mun','mut',
	'nat','nasc','nai','nav','nasc','nai','nect','nex','neg','negr','nigr','noc','nox','nom','nomin','onym','nom','norm','not','nounc','nov','numer',
	'omni','oper','opt','or','order','ordin','ori','orig','orn','ortho',
	'paleo','par','part','pass','pat','path','patr','pater','ped','pel','puls','pen','pun','pend','pens','per','pir','pet','pit','phag','phil','phob','phon','pict','plac','plais','plant','plat','ple','plen','plet','plex','plic','ply','plor','point','punct','pung','polic','polit','polis','pound','pos','popul','publ','port','preci','prais','prehend','prehens','press','prim','prem','prin','pri','pris','priv','prob','prov','prop','pugn','pur','purg','put',
	'quest','quir','quis','quer','quiet','qui','quit',
	'rad','range','rap','rav','ras','rad','rect','rid','ris','rod','ros','rog','rot','rud','rupt',
	'sal','san','sanit','sangui','sat','satis','satur','scend','scens','scent','sci','scrib','script','sect','seg','sec','secut','sequ','su','sen','sens','sent','sert','serv','sid','sed','sess','sign','simil','simul','sembl','sinu','sist','soci','sol','solv','solu','solut','somn','somno','son','soph','spec','spect','spic','specul','sper','spers','spir','spond','spons','st','sta','stant','stat','stin','stell','still','sting','stinct','stimul','stitut','stit','strain','strict','string','struct','sum','sumpt','sur',
	'tact','tag','tang','tig','ting','tain','ten','tin','tect','tele','temper','tempor','tempt','tend','tent','tens','tenu','term','termin','terr','test','text','the','therm','thes','thet','tim','tir','tom','tort','tors','tour','torn','tourn','tox','tract','treat','trem','tribut','trud','trus','turb','twin',
	'umbr','und','uni','un','urb','us','ut','util',
	'vac','vacu','van','void','vad','vas','vag','vail','val','vari','ven','vent','venge','ver','verb','vers','vert','vest','vi','vey','voy','vict','vinc','vis','vid','viv','vit','vig','voc','vok','vol','volu','volv','volt','vor','vulg','vuls','vult',
	'ware',
	'zo'
];

let prefix = ['a','ab','abs','ac','af','ag','ap','ar','as','at','ad','an','ana','ant','anti','ante','apo','be','bene','bi','bin','by','caco','carb','carbo','chili','chilli','circum','co','col','com','con','cor','contra','counter','de','dec','deca','deci','demi','hemi','semi','di','dia','dif','dis','dys','e','eco','em','en','endo','epi','eu','ex','exo','extra','extro','fore','ge','hect','hepta','hetero','hexa','holo','homo','hyper','hypo','il','im','in','infra','inter','intra','intro','ir','iso','kilo','macro','magn','mal','male','mega','micro','mill','milli','mis','mono','multi','myri','neo','non','ob','op','octa','octo','out','over','pan','panto','para','pen','penta','per','peri','poly','post','pre','pro','pseud','quadr','quadru','quasi','quinqu','re','retro','se','sept','septem','sino','sinic','sex','step','sub','suc','suf','sug','sup','super','supra','sur','sym','syn','syl','tetra','trans','tri','twi','ultra','un','under','up','vice','with'];
let suffix = ['ability','ibility','able','ible','ably','acal','ace','aceous','acious','acity','acy','cy','acle','ad','ade','age','aholic','ain','aire','al','ality','ally','an','ance','ancy','ane','aneous','aneity','aneous','ant','ar','ard','arian','arity','arium','orium','ary','asm','ast','aster','astic','ate','uate','atic','etic','tic','ation','ative','itive','atory','cle','icle','cule','cular','icular','craft','dom','eal','ed','ee','een','eer','el','ella','en','ence','ency','iency','end','enne','ent','eous','ious','ous','tious','uous','er','ier','erly','ern','ery','esce','escent','escence','escency','ese','esis','esque','ess','et','ette','ety','eur','fic','ific','fy','ify','faction','ification','fier','ifier','fold','folk','ful','hood','ia','iac','ial','ian','ic','ical','ice','ician','ics','id','ide','ie','ile','in','ine','ing','ion','ior','is','ise','ize','ization','ish','ism','ist','istic','istical','ite','itic','ition','itious','itis','itor','itude','icity','ity','ive','ivity','kin','kind','le','less','let','like','ling','logy','ology','logical','ological','logist','ologist','ly','mania','mate','men','ment','mony','most','naut','ness','o','oid','oda','ode','on','oon','ator','or','ory','ose','osity','osis','ot','otic','ple','proof','ry','scape','ship','sion','some','ster','th','ure','ture','ature','iture','ty','ual','ular','ule','ulent','us','ward','ware','wise','work','y'];

export function tokenize (str) {
	let splitter = [
		'([\u2000-\u206e])', // General punctuations
		'([\u3000-\u303F])', //  CJK punctuations
		'([a-zA-Z\p{L}\'\-]+)', // English word
		'([\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d])' // CJK characters
	].join('|');

	if (/[\u4E00-\u9FFF]/.test(str))
		str = opencc.convertSync(str); // Convert zh_CN to zh_TW

	let regex = new RegExp(splitter, 'g');
	let tokens = str.match(regex);
	return tokens;
}

export function toChuck (str) {
	let tokens = tokenize(str);
	let i, ret = [];

	for (i = 0, len = tokens.length; i < len; i++) {
		token = tokens[i];
	}
}
