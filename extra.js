function dialogue(i,title,roles,mission,lines){C.units[i].dialog={title,roles,mission,lines:lines.map(x=>{const [sk,en,g]=x.split('|');return {sk,en,gloss:g.split(';')}})}}
dialogue(0,'Meeting a new neighbour',['Neighbour','You'],'Introduce yourself using your own name. Ask where your neighbour lives. Repeat with the English hidden.',[
'Dobrý deň.|Hello.|good;day',
'Dobrý deň. Volám sa Alex.|Hello. My name is Alex.|good;day;I call;myself;Alex',
'Teší ma. Ja som Eva.|Nice to meet you. I am Eva.|it pleases;me;I;I am;Eva',
'Teší ma. Bývate tu?|Nice to meet you. Do you live here? (polite)|it pleases;me;you live (polite);here',
'Áno. Odkiaľ ste?|Yes. Where are you from? (polite)|yes;where from;you are (polite)',
'Som z Anglicka.|I am from England.|I am;from;England (after z)',
'Hovoríte po slovensky?|Do you speak Slovak? (polite)|you speak (polite);in (language expression);Slovak (adverb)',
'Len trochu. Hovorte pomaly, prosím.|Only a little. Please speak slowly.|only;a little;speak (polite command);slowly;please']);
dialogue(1,'Arrange a coffee',['You','Friend'],'Agree on a day and time. Change the time twice. Give a pretend phone number one digit at a time.',[
'Ahoj, máš zajtra čas?|Hi, do you have time tomorrow?|hi;you have;tomorrow;time',
'Áno. Kedy sa stretneme?|Yes. When shall we meet?|yes;when;reflexive part of stretnúť sa;we will meet',
'O tretej?|At three?|at;third (hour understood)',
'O tretej nemôžem.|I cannot at three.|at;third (hour understood);I cannot',
'A o piatej?|And at five?|and;at;fifth (hour understood)',
'Áno, o piatej mám čas.|Yes, I have time at five.|yes;at;fifth (hour understood);I have;time',
'Výborne. Tu je moje číslo.|Great. Here is my number.|excellent;here;is;my (neuter);number',
'Ďakujem. Tak zajtra!|Thank you. See you tomorrow, then!|I thank you;then;tomorrow']);
dialogue(2,'Getting to know a friend',['Friend','You'],'Describe your family, ask one follow-up question, and explain how you feel.',[
'Máš súrodencov?|Do you have siblings?|you have;siblings (object)',
'Áno, mám sestru.|Yes, I have a sister.|yes;I have;sister (object)',
'Ako sa volá?|What is her name?|how;herself (part of volať sa);is called',
'Volá sa Eva.|Her name is Eva.|is called;herself (part of volať sa);Eva',
'Býva tu?|Does she live here?|lives;here',
'Nie, býva v Košiciach.|No, she lives in Košice.|no;lives;in;Košice (location form)',
'A ako sa dnes máš?|And how are you today?|and;how;reflexive part of mať sa;today;you have (here: you are doing)',
'Dobre, ďakujem. A ty?|Well, thank you. And you?|well;I thank you;and;you']);
dialogue(3,'A problem in your flat',['You','Owner'],'Report a problem and agree when the owner can come. Substitute heating for hot water.',[
'Dobrý deň, máme problém.|Hello, we have a problem.|good;day;we have;problem',
'Čo nefunguje?|What is not working?|what;does not work',
'Nemáme teplú vodu.|We have no hot water.|we do not have;warm / hot (feminine object);water (object)',
'Ste teraz doma?|Are you at home now? (polite)|you are (polite);now;at home',
'Áno, som doma.|Yes, I am at home.|yes;I am;at home',
'Môžem prísť o tretej.|I can come at three.|I can;come;at;third (hour understood)',
'Dobre, ďakujem za pomoc.|Okay, thank you for your help.|okay;I thank you;for;help',
'Prosím. Dovidenia.|You are welcome. Goodbye.|you are welcome;goodbye']);
dialogue(4,'A café order',['Server','You'],'Order coffee or tea, answer a question about milk, and ask for water.',[
'Dobrý deň, čo si dáte?|Hello, what would you like?|good;day;what;for yourself;you will have (polite)',
'Prosím si kávu.|I would like a coffee.|please / I ask;for myself;coffee (object)',
'S mliekom?|With milk?|with;milk (after s)',
'Áno, s mliekom, ale bez cukru.|Yes, with milk, but without sugar.|yes;with;milk (after s);but;without;sugar (after bez)',
'Ešte niečo?|Anything else?|more;something',
'Pohár vody, prosím.|A glass of water, please.|glass;of water;please',
'Nech sa páči.|Here you are.|let;reflexive part of páčiť sa;it pleases (whole phrase: here you are)',
'Ďakujem pekne.|Thank you very much.|I thank you;nicely (here: very much)']);
dialogue(5,'Shopping at a market stall',['Seller','You'],'Buy two items, ask the price, and answer a payment question.',[
'Dobrý deň, čo si prosíte?|Hello, what would you like?|good;day;what;for yourself;you ask for (polite)',
'Prosím si kilo jabĺk.|I would like a kilo of apples.|please / I ask;for myself;kilo;of apples',
'Ešte niečo?|Anything else?|more;something',
'Áno, dve uhorky. Koľko to stojí?|Yes, two cucumbers. How much does it cost?|yes;two (feminine);cucumbers;how much;it;costs',
'Spolu päť eur.|Five euros altogether.|altogether;five;euros (genitive plural)',
'Môžem platiť kartou?|Can I pay by card?|I can;pay;by card',
'Nie, len v hotovosti.|No, only in cash.|no;only;in;cash (location form)',
'Dobre, nech sa páči.|Okay, here you are.|okay;let;reflexive part of páčiť sa;it pleases (whole phrase: here you are)']);
dialogue(6,'Finding the right bus',['You','Local'],'Ask for the station, check your bus, and ask where to get off.',[
'Prosím vás, kde je zastávka?|Excuse me, where is the stop?|please / I ask;you (polite object);where;is;stop',
'Tam vpravo.|Over there on the right.|there;on the right',
'Ide tento autobus na stanicu?|Does this bus go to the station?|goes;this (masculine);bus;to;station (destination form)',
'Áno, ide.|Yes, it does.|yes;goes',
'Kde mám vystúpiť?|Where should I get off?|where;I should;get off',
'Na tretej zastávke.|At the third stop.|at;third (location feminine);stop (location form)',
'Na tretej? Ďakujem.|At the third? Thank you.|at;third (location feminine);I thank you',
'Áno. Prosím.|Yes. You are welcome.|yes;you are welcome']);
dialogue(7,'Explaining symptoms',['Clinician','Patient'],'Explain two symptoms, how long they have lasted, and an allergy. This is communication practice, not medical advice.',[
'Dobrý deň, čo vás bolí?|Hello, what hurts? (polite)|good;day;what;you (polite object);hurts',
'Bolí ma hrdlo a hlava.|My throat and head hurt.|hurts;me;throat;and;head',
'Máte teplotu?|Do you have a fever? (polite)|you have (polite);fever (object)',
'Áno, mám teplotu.|Yes, I have a fever.|yes;I have;fever (object)',
'Ako dlho to trvá?|How long has it been going on?|how;long (duration);it;lasts',
'Dva dni.|Two days.|two;days',
'Máte nejaké alergie?|Do you have any allergies? (polite)|you have (polite);any (plural);allergies',
'Áno, mám alergiu na penicilín.|Yes, I have a penicillin allergy.|yes;I have;allergy (object);to;penicillin']);
dialogue(8,'A meeting at work',['Colleague','You'],'Agree on a meeting and request the document you need. Then practise a message saying you will be late.',[
'Máte zajtra čas na stretnutie?|Do you have time for a meeting tomorrow? (polite)|you have (polite);tomorrow;time;for;meeting',
'Áno. O koľkej?|Yes. At what time?|yes;at;which (hour understood)',
'O deviatej v kancelárii.|At nine in the office.|at;ninth (hour understood);in;office (location form)',
'Dobre. Potrebujem dokument.|Okay. I need the document.|okay;I need;document',
'Pošlem vám ho dnes.|I will send it to you today. (polite)|I will send;to you (polite);it (masculine object);today',
'Ďakujem. Môžete mi zavolať?|Thank you. Can you call me? (polite)|I thank you;you can (polite);me;call',
'Áno, zavolám vám neskôr.|Yes, I will call you later. (polite)|yes;I will call;you (polite indirect object);later',
'Výborne, ďakujem.|Great, thank you.|excellent;I thank you']);
dialogue(9,'Ask your teacher',['Student','Teacher'],'Ask about homework, clarify a page number, and request help with a word.',[
'Čo máme na domácu úlohu?|What do we have for homework?|what;we have;for;home (adjective object);task (object)',
'Cvičenie na strane desať.|The exercise on page ten.|exercise;on;page (location form);ten',
'Na strane desať?|On page ten?|on;page (location form);ten',
'Áno. Máte otázku?|Yes. Do you have a question? (polite/plural)|yes;you have;question (object)',
'Nerozumiem tomuto slovu.|I do not understand this word.|I do not understand;this (indirect object);word (indirect object)',
'Ktorému slovu?|Which word?|which (indirect object);word (indirect object)',
'Čo znamená zajtra?|What does zajtra mean?|what;means;tomorrow',
'Zajtra je deň po dnešku.|Tomorrow is the day after today.|tomorrow;is;day;after;today (after po)']);
dialogue(10,'An invitation and a visit',['Host','Guest'],'Invite someone for tomorrow, offer tea, and thank your host. Practise both roles.',[
'Prídeš zajtra na návštevu?|Will you come to visit tomorrow? (informal)|you will come;tomorrow;for;visit (object)',
'Áno. O koľkej?|Yes. At what time?|yes;at;which (hour understood)',
'O piatej.|At five.|at;fifth (hour understood)',
'Dobre, prídem.|Okay, I will come.|okay;I will come',
'Ahoj, poď ďalej! Dáš si čaj?|Hi, come in! Would you like some tea? (informal)|hi;come (informal command);inside;you will have;for yourself;tea',
'Áno, prosím. To je pre teba.|Yes, please. That is for you. (informal)|yes;please;that;is;for;you',
'Ďakujem za kvety.|Thank you for the flowers.|I thank you;for;flowers',
'Ďakujem za pozvanie.|Thank you for the invitation.|I thank you;for;invitation']);
dialogue(11,'At the post office',['You','Clerk'],'Send a parcel, provide the destination, and ask where to sign.',[
'Chcem poslať balík.|I want to send a parcel.|I want;send;parcel',
'Kam?|Where to?|where to',
'Do Anglicka.|To England.|to;England (after do)',
'Máte adresu?|Do you have the address? (polite)|you have (polite);address (object)',
'Áno, tu je adresa.|Yes, here is the address.|yes;here;is;address',
'Podpíšte sa tu, prosím.|Please sign here. (polite)|sign (polite command);yourself (part of podpísať sa);here;please',
'Tu? Koľko to stojí?|Here? How much does it cost?|here;how much;it;costs',
'Desať eur, prosím.|Ten euros, please.|ten;euros (genitive plural);please']);
dialogue(12,'Checking into a hotel',['Receptionist','Guest'],'Give a reservation name, ask about breakfast, and find your room.',[
'Dobrý deň, máte rezerváciu?|Hello, do you have a reservation? (polite)|good;day;you have (polite);reservation (object)',
'Áno, na meno Alex Smith.|Yes, under the name Alex Smith.|yes;under;name;Alex;Smith',
'Na dve noci?|For two nights?|for;two (feminine);nights',
'Áno. Sú raňajky v cene?|Yes. Is breakfast included in the price?|yes;are;breakfast (plural noun);in;price (location form)',
'Áno, raňajky sú o siedmej.|Yes, breakfast is at seven.|yes;breakfast (plural noun);are;at;seventh (hour understood)',
'Kde je moja izba?|Where is my room?|where;is;my (feminine);room',
'Na druhom poschodí. Tu je kľúč.|On the second floor. Here is the key.|on;second (location neuter);floor (location form);here;is;key',
'Ďakujem pekne.|Thank you very much.|I thank you;nicely (here: very much)']);
dialogue(13,'Yesterday and tomorrow',['Peter','Eva'],'Talk about yesterday, ask about tomorrow, and arrange a walk. Use the past-tense form that fits you.',[
'Čo si robila včera?|What did you do yesterday? (to a woman)|what;you did (auxiliary);did (feminine);yesterday',
'Bola som doma. A ty?|I was at home. And you? (female speaker)|was (feminine);I was (auxiliary);at home;and;you',
'Bol som v práci.|I was at work. (male speaker)|was (masculine);I was (auxiliary);at;work (location form)',
'Čo budeš robiť zajtra?|What will you do tomorrow? (informal)|what;you will;do;tomorrow',
'Pôjdem do mesta. Máš čas?|I will go into town. Do you have time?|I will go;to;town (destination form);you have;time',
'Áno, mám čas poobede.|Yes, I have time in the afternoon.|yes;I have;time;in the afternoon',
'Poďme na prechádzku.|Let’s go for a walk.|let us go;for;walk (object)',
'Dobre, to je dobrý nápad.|Okay, that is a good idea.|okay;that;is;good (masculine);idea']);
dialogue(14,'A full restaurant conversation',['Server','Guest'],'Complete the exchange without English. Then repeat with an allergy, a different order, and separate payment.',[
'Dobrý deň, nech sa páči.|Hello, welcome.|good;day;let;reflexive part of páčiť sa;it pleases (whole phrase: welcome / here you are)',
'Máte stôl pre dvoch?|Do you have a table for two? (polite)|you have (polite);table;for;two (people)',
'Áno. Čo si dáte na pitie?|Yes. What would you like to drink?|yes;what;for yourself;you will have (polite);for;drinking',
'Prosím si vodu. Máte jedálny lístok?|I would like water. Do you have a menu?|please / I ask;for myself;water (object);you have (polite);dining (adjective);menu / list',
'Áno, nech sa páči.|Yes, here you are.|yes;let;reflexive part of páčiť sa;it pleases (whole phrase: here you are)',
'Ďakujem. Je v polievke mlieko?|Thank you. Is there milk in the soup?|I thank you;is;in;soup (location form);milk',
'Nie, nie je.|No, there is not.|no;not;is',
'Dobre, prosím si polievku a šalát.|Okay, I would like soup and a salad.|okay;please / I ask;for myself;soup (object);and;salad']);

// Supplementary vocabulary is attached to the relevant lesson, so it participates in reviews.
function addVocab(id,s){C.lessons[id].vocab.push(...s.split('|').map(x=>{const[sk,en]=x.split('=');return {sk,en}}))}
addVocab(2,'India=India|Nemecko=Germany|Ukrajina=Ukraine|Česko=Czechia|Francúzsko=France|Poľsko=Poland|Rakúsko=Austria|Maďarsko=Hungary');
addVocab(6,'január=January|február=February|marec=March|apríl=April|máj=May|jún=June|júl=July|august=August|september=September|október=October|november=November|december=December');
addVocab(7,'prvý=first (masculine)|druhý=second (masculine)|tretí=third (masculine)|štvrtý=fourth (masculine)|piaty=fifth (masculine)|šiesty=sixth (masculine)|siedmy=seventh (masculine)|ôsmy=eighth (masculine)|deviaty=ninth (masculine)|desiaty=tenth (masculine)|poobede=in the afternoon|predpoludním=in the morning / before noon');
addVocab(8,'dedko=grandfather (informal)|vnuk=grandson|vnučka=granddaughter|teta=aunt|strýko=uncle|bratranec=male cousin|sesternica=female cousin|súrodenec=sibling');
addVocab(9,'pekný=pretty / nice (masculine)|pekná=pretty / nice (feminine)|pekné=pretty / nice (neuter)|malý=small (masculine)|malá=small (feminine)|malé=small (neuter)|veľký=big (masculine)|veľká=big (feminine)|veľké=big (neuter)');
addVocab(10,'šťastná=happy (feminine)|smutná=sad (feminine)|chorá=ill (feminine)|zdravá=healthy (feminine)|nervózny=nervous (masculine)|nervózna=nervous (feminine)');
addVocab(18,'vidlička=fork|nôž=knife|hrniec=pot|panvica=frying pan|cesnak=garlic|kurča=chicken|hovädzie mäso=beef|bravčové mäso=pork');
addVocab(20,'jahoda=strawberry|hrozno=grapes|citrón=lemon|paprika=pepper (vegetable)|kapusta=cabbage|zemiaky=potatoes|hrášok=peas|fazuľa=beans');
addVocab(22,'žltý=yellow (masculine)|sivý=grey (masculine)|ružový=pink (masculine)|fialový=purple (masculine)|oranžový=orange (masculine)|sveter=jumper / sweater|kabát=coat|ponožky=socks|čiapka=hat / cap|sukňa=skirt');
addVocab(23,'šesťdesiat=sixty|sedemdesiat=seventy|osemdesiat=eighty|deväťdesiat=ninety|dvesto=two hundred|päťsto=five hundred');
addVocab(28,'nos=nose|ústa=mouth|oko=eye|srdce=heart|koleno=knee|prst=finger / toe|koža=skin|rameno=shoulder');
addVocab(32,'programátorka=programmer (female)|kuchárka=cook (female)|zamestnankyňa=employee (female)|lekárnik=pharmacist (male)|lekárnička=pharmacist (female) / first-aid kit|technik=technician (male)');
addVocab(41,'prepáč=sorry / excuse me (informal)|ďakovať=to thank|súhlasiť=to agree|nesúhlasiť=to disagree|môžem=I can|musím=I must|chcem=I want|potrebujem=I need');
addVocab(49,'sneží=it is snowing|fúka=it blows / is blowing|prší=it is raining|zamračené=overcast|slnečno=sunny|stupeň=degree');
addVocab(50,'pes=dog|mačka=cat|vták=bird|kôň=horse|strom=tree|kvet=flower|tráva=grass|more=sea');

function grammar(title,body,examples){C.grammar.push({title,body,examples:examples.map(x=>{const[sk,en,g]=x.split('|');return{sk,en,gloss:g.split(';')}})})}
grammar('Sounds, spelling & stress','Stress is normally on the first syllable, not on the long vowel. An acute accent marks length: a and á are different. Hold long vowels longer. The letters č, š, ž sound approximately like English ch in church, sh in ship, and s in measure. Slovak j sounds like English y in yes. Ch is a single sound, like ch in Scottish loch. These English comparisons are only approximations; listen and imitate.',[
'má|has|has','ma|me (object)|me','čaj|tea|tea','škola|school|school','žena|woman|woman','ja|I|I','chlieb|bread|bread']);
grammar('Soft sounds & syllabic consonants','Ď, ť, ň and ľ are soft consonants. D, t, n and l before e, i, í, ia, ie or iu are often soft, with exceptions. R and l can form a syllable, and ŕ and ĺ are their long forms. I and y have the same vowel sound; their spelling matters. Ô is a diphthong. Start slowly and then listen at natural speed.',[
'ďakujem|thank you|I thank you','päť|five|five','deň|day|day','ľudia|people|people','krk|neck|neck','vlk|wolf|wolf','stôl|table|table']);
grammar('Greetings & levels of politeness','Use polite plural verb forms when addressing an adult stranger. Informal singular is for friends, family, and children. Ahoj is informal; Dobrý deň is polite. In a shop, use a polite greeting and prosím. Ďakujem means thank you; prosím can mean please or you are welcome.',[
'Ako sa máš?|How are you? (informal)|how;reflexive part of mať sa;you have (here: you are doing)',
'Ako sa máte?|How are you? (polite/plural)|how;reflexive part of mať sa;you have (here: you are doing, polite)']);
grammar('To be: present tense','Learn all six forms of byť. Subject pronouns are often omitted. Slovak has no articles corresponding to a or the. A yes/no question can use the same word order as a statement, with question intonation.',[
'Ja som.|I am.|I;I am','Ty si.|You are. (informal)|you;you are','On je.|He is.|he;is','Ona je.|She is.|she;is','My sme.|We are.|we;we are','Vy ste.|You are. (polite/plural)|you;you are','Oni sú.|They are. (masculine animate)|they;are']);
grammar('To have & negation','Mať changes by person. Its negative adds ne-. The present negative of byť uses separate nie: nie som, nie je. Do not mechanically add ne- to every present form of byť.',[
'Ja mám.|I have.|I;I have','Ty máš.|You have.|you;you have','Ona má.|She has.|she;has','My máme.|We have.|we;we have','Vy máte.|You have. (polite/plural)|you;you have','Oni majú.|They have.|they;have','Nemám čas.|I do not have time.|I do not have;time','Nie som doma.|I am not at home.|not;I am;at home']);
grammar('Gender & adjective agreement','Most nouns ending in a consonant are masculine, many in -a are feminine, and many in -o or -e are neuter. These are clues, not universal rules. Learn the gender with the noun. Adjectives agree with the noun. Animacy also matters for masculine nouns.',[
'nový byt|a new flat|new (masculine);flat','nová škola|a new school|new (feminine);school','nové auto|a new car|new (neuter);car']);
grammar('Possession & pointing things out','Môj, moja and moje mean my and agree with the thing possessed. Tvoj is informal your; váš is polite or plural your. Jeho means his, jej means her, and ich means their. Toto is useful when introducing something.',[
'môj brat|my brother|my (masculine);brother','moja sestra|my sister|my (feminine);sister','moje auto|my car|my (neuter);car','váš dom|your house (polite/plural)|your (masculine polite/plural);house','Toto je jej kniha.|This is her book.|this;is;her;book']);
grammar('Present verbs & reflexive words','Learn a verb with a useful present form rather than guessing its conjugation. Sa and si are short grammatical words that are part of some verbs. They often follow the first sentence element and are not always translated separately. Učiť means to teach; učiť sa means to learn.',[
'Pracujem doma.|I work at home.|I work;at home','Čítam knihu.|I am reading a book.|I read;book (object)','Pijem vodu.|I drink water.|I drink;water (object)','Učím sa.|I am learning.|I learn;reflexive part of učiť sa','Volám sa Eva.|My name is Eva.|I call;myself;Eva']);
grammar('Questions you can reuse','Kde asks about location; kam asks about destination. Odkiaľ asks about origin. Aký asks what something is like; ktorý asks which one. Question words that act like adjectives change their endings.',[
'Kto je to?|Who is that?|who;is;that','Čo robíte?|What are you doing? (polite/plural)|what;you do','Kde bývate?|Where do you live? (polite)|where;you live','Kam idete?|Where are you going? (polite)|where to;you go','Prečo?|Why?|why']);
grammar('Objects: the accusative','A direct object is often in the accusative. Common feminine nouns in -a usually change to -u. Many masculine inanimate and neuter nouns stay the same. Masculine animate nouns often change. Learn useful examples before memorising complete tables.',[
'Mám sestru.|I have a sister.|I have;sister (object)','Vidím brata.|I see my brother.|I see;brother (object)','Mám auto.|I have a car.|I have;car','Prosím si vodu.|I would like water.|please / I ask;for myself;water (object)']);
grammar('Origins, quantities & without: the genitive','Do, z and bez take the genitive. Quantities such as a glass of water or a kilo of apples also use it. Endings differ by noun pattern; do not infer them just by replacing the last letter.',[
'do práce|to work|to;work (genitive)','z Anglicka|from England|from;England (genitive)','bez cukru|without sugar|without;sugar (genitive)','pohár vody|a glass of water|glass;water (genitive)','kilo jabĺk|a kilo of apples|kilo;apples (genitive plural)']);
grammar('Location: the locative','For being in or at a place, v and na often take the locative. Compare v škole (at school) and do školy (to school). The locative is used with a preposition. V sometimes becomes vo for easier pronunciation.',[
'v škole|at school|at;school (locative)','v práci|at work|at;work (locative)','na stole|on the table|on;table (locative)','vo voľnom čase|in free time|in;free (locative);time (locative)']);
grammar('With & by: the instrumental','S or so meaning with takes the instrumental. A way of travelling or paying may use the instrumental without a preposition. Common endings include feminine -ou, masculine/neuter -om, but there are exceptions.',[
's kamarátom|with a male friend|with;male friend (instrumental)','s učiteľkou|with a female teacher|with;female teacher (instrumental)','s mliekom|with milk|with;milk (instrumental)','Platím kartou.|I pay by card.|I pay;card (instrumental)','Idem autobusom.|I am going by bus.|I go;bus (instrumental)']);
grammar('To me, to you & liking things','Mi means to me; vám means to you (polite or plural). In páči sa mi, the thing you like is the subject. A plural thing takes páčia. Rozumieť takes a dative object, which is why tomuto slovu has those endings.',[
'Páči sa mi táto kniha.|I like this book.|is pleasing;reflexive part of páčiť sa;to me;this;book','Páčia sa mi tieto knihy.|I like these books.|are pleasing;reflexive part of páčiť sa;to me;these;books','Nerozumiem tomuto slovu.|I do not understand this word.|I do not understand;this (dative);word (dative)']);
grammar('Numbers & prices','One agrees with gender: jeden, jedna, jedno. Two uses dva for masculine inanimate and dve for feminine/neuter. After 2–4, many nouns use a counting plural; after 5 and higher, the genitive plural is common. Numbers ending in 1 do not universally take the singular.',[
'jedno euro|one euro|one (neuter);euro','dve eurá|two euros|two (neuter);euros','päť eur|five euros|five;euros (genitive plural)','dve hodiny|two hours|two (feminine);hours','päť hodín|five hours|five;hours (genitive plural)']);
grammar('Can, must & want','Use a conjugated modal verb followed by an infinitive. Môžem means I can or may; musím means I must; chcem means I want. Nemusím means I do not have to, not I must not. For a prohibition, nesmiem means I am not allowed to.',[
'Môžem prísť.|I can come.|I can;come','Musím pracovať.|I have to work.|I must;work','Chcem jesť.|I want to eat.|I want;eat','Nemusím ísť.|I do not have to go.|I do not have to;go','Nesmiem tu parkovať.|I am not allowed to park here.|I am not allowed;here;park']);
grammar('Past: what happened','Past forms agree with gender and number. First and second persons also use an auxiliary. Use masculine bol som or feminine bola som. Auxiliary words normally sit near the start, after the first sentence element. Some verbs have irregular stems.',[
'Bol som doma.|I was at home. (male speaker)|was (masculine);I was (auxiliary);at home','Bola som doma.|I was at home. (female speaker)|was (feminine);I was (auxiliary);at home','Včera sme pracovali.|We worked yesterday.|yesterday;we did (auxiliary);worked (plural)','Ona čítala.|She was reading.|she;read (feminine past)']);
grammar('Future & verb aspect','For an ongoing or repeated future activity, many imperfective verbs use budem plus the infinitive. Perfective verbs often have a simple future form instead. The everyday future of ísť is pôjdem. Learn high-frequency pairs gradually; this course prioritises usable phrases.',[
'Budem čítať.|I will read / be reading.|I will;read','Zajtra pôjdem do školy.|Tomorrow I will go to school.|tomorrow;I will go;to;school (destination form)','Pošlem vám správu.|I will send you a message. (polite)|I will send;to you (polite);message (object)']);
grammar('Requests & instructions','Prosím si is a useful request at a café or shop. Commands have informal singular and polite/plural forms. Learn common polite instructions so you can understand staff, teachers and doctors. A question with môžete can soften a request.',[
'Počkajte, prosím.|Please wait. (polite/plural)|wait (polite command);please','Počkaj, prosím.|Please wait. (informal)|wait (informal command);please','Môžete otvoriť okno?|Can you open the window? (polite)|you can (polite);open;window']);
grammar('Building a longer answer','Join small sentences with a (and), ale (but) and pretože (because). Slovak word order is flexible, but copying a simple model is safer than moving short grammatical words at random. Use an answer, one detail, then a question back.',[
'Som doma, pretože som chorá.|I am at home because I am ill. (female speaker)|I am;at home;because;I am;ill (feminine)','Chcem ísť, ale nemám čas.|I want to go, but I do not have time.|I want;go;but;I do not have;time']);

C.units.forEach((u,i)=>{u.days=[];for(let j=0;j<6;j++){const lesson=j<4?C.lessons[u.topics[j]]:null;u.days.push({day:i*6+j+1,unit:i,kind:j<4?'lesson':j===4?'conversation':'checkpoint',lesson:lesson?.id,title:lesson?.title||(j===4?u.dialog.title:'Checkpoint '+(i+1)),task:lesson?.task||(j===4?u.dialog.mission:u.goal)})}});
C.days=C.units.flatMap(u=>u.days);
C.allPhrases=[];
for(const l of C.lessons)l.phrases.forEach((p,i)=>{p.id='l'+l.id+'p'+i;p.unit=l.unit;p.lesson=l.id;C.allPhrases.push(p)});
for(const u of C.units)u.dialog.lines.forEach((p,i)=>{p.id='u'+u.id+'d'+i;p.unit=u.id;C.allPhrases.push(p)});
for(const [j,g] of C.grammar.entries())g.examples.forEach((p,i)=>{p.id='g'+j+'p'+i;p.unit=-1;C.allPhrases.push(p)});
C.words=[];
const vocabByKey=new Map();
for(const l of C.lessons)for(const v of l.vocab){const key=v.sk+'|'+v.en;if(!vocabByKey.has(key)){const item={...v,id:'w'+C.words.length,lesson:l.id,unit:l.unit};vocabByKey.set(key,item);C.words.push(item)}v.id=vocabByKey.get(key).id}
C.phraseMap=Object.fromEntries(C.allPhrases.map(p=>[p.id,p]));
C.wordMap=Object.fromEntries(C.words.map(w=>[w.id,w]));
