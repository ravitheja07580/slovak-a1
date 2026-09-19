// Original teaching content. Each phrase has an explicit, contextual gloss for every token.
window.COURSE={units:[],lessons:[],grammar:[]};
const C=window.COURSE;
function unit(title,goal,grammar){C.units.push({id:C.units.length,title,goal,grammar,topics:[],dialog:[]});}
function topic(title,task,vocab,phrases){const u=C.units.at(-1);const l={id:C.lessons.length,unit:u.id,title,task,vocab:vocab.split('|').map(x=>{const [sk,en]=x.split('=');return {sk,en}}),phrases:phrases.map(x=>{const [sk,en,g]=x.split('|');return {sk,en,gloss:g.split(';')}})};C.lessons.push(l);u.topics.push(l.id);}
unit('First connections','Greet people, introduce yourself, and ask for help.','Start with polite forms for adult strangers. Slovak usually leaves out the subject pronoun because the verb ending tells you who is speaking. Learn short expressions as complete chunks.');
topic('Hello, Slovakia','Greet a neighbour politely, then say hello and goodbye to a friend.','ahoj=hello / bye (informal)|dobrý=good (masculine)|deň=day|ráno=morning|večer=evening|noc=night|ďakujem=thank you|prosím=please / you’re welcome|áno=yes|nie=no|prepáčte=excuse me / sorry (polite)|dovidenia=goodbye',[
'Dobrý deň.|Hello. (polite daytime greeting)|good;day',
'Dobré ráno.|Good morning.|good (neuter);morning',
'Dobrý večer.|Good evening.|good (masculine);evening',
'Ďakujem pekne.|Thank you very much.|I thank you;nicely (here: very much)',
'Ahoj, ako sa máš?|Hi, how are you? (informal)|hi;how;reflexive part of mať sa;you have (here: you are doing)']);
topic('Names and introductions','Introduce yourself and ask two people their names.','meno=first name / name|priezvisko=surname|ja=I|ty=you (informal singular)|vy=you (polite or plural)|som=I am|ste=you are (polite or plural)|človek=person|priateľ=male friend / boyfriend|priateľka=female friend / girlfriend|pán=Mr / gentleman|pani=Ms / lady',[
'Volám sa Alex.|My name is Alex.|I call;myself (part of volám sa);Alex',
'Ako sa voláte?|What is your name? (polite)|how;yourself (part of volať sa);you are called (polite)',
'Teší ma.|Nice to meet you.|it pleases;me',
'Toto je moja kamarátka.|This is my friend. (female)|this;is;my (feminine);female friend',
'Ako sa voláš?|What is your name? (informal)|how;yourself (part of volať sa);you are called (informal)']);
topic('Where you are from','Say where you are from, where you live, and which language you speak.','Slovensko=Slovakia|slovenčina=Slovak language|angličtina=English language|krajina=country|mesto=town / city|dedina=village|domov=home (destination)|tu=here|tam=there|odkiaľ=where from|bývať=to live / reside|hovoriť=to speak',[
'Odkiaľ ste?|Where are you from? (polite)|where from;you are (polite)',
'Som z Anglicka.|I am from England.|I am;from;England (after z)',
'Bývam v Bratislave.|I live in Bratislava.|I live;in;Bratislava (location form)',
'Hovorím po anglicky.|I speak English.|I speak;in (language expression);English (adverb)',
'Učím sa po slovensky.|I am learning Slovak.|I learn;reflexive part of učiť sa;in (language expression);Slovak (adverb)']);
topic('Keep the conversation going','Ask someone to repeat a sentence and speak more slowly.','rozumieť=to understand|opakovať=to repeat|pomaly=slowly|rýchlo=quickly|slovo=word|veta=sentence|otázka=question|odpoveď=answer|trochu=a little|dobre=well|ešte=still / yet / more|pomoc=help',[
'Nerozumiem.|I do not understand.|I do not understand',
'Môžete to zopakovať, prosím?|Can you repeat that, please? (polite)|you can (polite);that;repeat (once);please',
'Hovorte pomaly, prosím.|Please speak slowly. (polite)|speak (polite command);slowly;please',
'Čo to znamená?|What does that mean?|what;that;means',
'Hovorím len trochu po slovensky.|I speak only a little Slovak.|I speak;only;a little;in (language expression);Slovak (adverb)']);
unit('Numbers, time & plans','Understand numbers, give contact details, and arrange a time.','Numbers change with gender and case. First learn the dictionary forms and fixed combinations. For clear beginner time expressions, use whole hours; digital times are also useful.');
topic('Numbers and age','Count from zero to twenty, then say your age.','nula=zero|jeden=one (masculine)|dva=two (masculine inanimate)|tri=three|štyri=four|päť=five|šesť=six|sedem=seven|osem=eight|deväť=nine|desať=ten|rok=year',[
'Koľko máte rokov?|How old are you? (polite)|how many;you have (polite);years (genitive plural)',
'Mám tridsať rokov.|I am thirty years old.|I have;thirty;years (genitive plural)',
'Mám dve deti.|I have two children.|I have;two (feminine/neuter);children',
'To je moje číslo.|That is my number.|that;is;my (neuter);number',
'Prosím, ešte raz.|Please, once more.|please;again / more;once']);
topic('Phone numbers and contact details','Read a phone number digit by digit and give an email address.','jedenásť=eleven|dvanásť=twelve|trinásť=thirteen|štrnásť=fourteen|pätnásť=fifteen|šestnásť=sixteen|sedemnásť=seventeen|osemnásť=eighteen|devätnásť=nineteen|dvadsať=twenty|telefón=telephone|adresa=address',[
'Aké je vaše telefónne číslo?|What is your phone number? (polite)|what (neuter);is;your (polite);telephone (adjective);number',
'Máte e-mail?|Do you have an email address? (polite)|you have (polite);email',
'Moja adresa je tu.|My address is here.|my (feminine);address;is;here',
'Môžete mi to napísať?|Can you write that down for me? (polite)|you can (polite);to me;that;write (once)',
'Nula, deväť, jeden, dva.|Zero, nine, one, two.|zero;nine;one;two']);
topic('Days and the calendar','Say what day it is and arrange something for tomorrow.','pondelok=Monday|utorok=Tuesday|streda=Wednesday|štvrtok=Thursday|piatok=Friday|sobota=Saturday|nedeľa=Sunday|dnes=today|zajtra=tomorrow|včera=yesterday|týždeň=week|mesiac=month',[
'Dnes je pondelok.|Today is Monday.|today;is;Monday',
'Zajtra mám čas.|I have time tomorrow.|tomorrow;I have;time',
'V piatok pracujem.|I work on Friday.|on;Friday;I work',
'Cez víkend som doma.|I am at home over the weekend.|over;weekend;I am;at home',
'Kedy máte čas?|When do you have time? (polite)|when;you have (polite);time']);
topic('Telling the time','Ask the time and agree to meet at three.','hodina=hour / lesson|minúta=minute|čas=time|teraz=now|potom=then / afterwards|skoro=early / almost|neskoro=late|poludnie=noon|polnoc=midnight|ráno=in the morning / morning|večer=in the evening / evening|stretnutie=meeting',[
'Koľko je hodín?|What time is it?|how many;is;hours (genitive plural)',
'Je jedna hodina.|It is one o’clock.|is;one (feminine);hour',
'Sú tri hodiny.|It is three o’clock.|are;three;hours',
'Stretneme sa o tretej.|We will meet at three.|we will meet;reflexive part of stretnúť sa;at;third (hour understood)',
'Mám čas o piatej.|I am free at five.|I have;time;at;fifth (hour understood)']);
unit('People & family','Talk about family, describe people, and express feelings.','Nouns have grammatical gender. Adjectives and possessives agree: masculine, feminine, and neuter forms differ. Both male and female speaker variants appear when the Slovak wording requires them.');
topic('Your family','Describe three members of your family.','rodina=family|mama=mum|otec=father|brat=brother|sestra=sister|syn=son|dcéra=daughter|dieťa=child|rodičia=parents|manžel=husband|manželka=wife|babka=grandmother (informal)',[
'Toto je moja rodina.|This is my family.|this;is;my (feminine);family',
'Mám brata a sestru.|I have a brother and a sister.|I have;brother (object);and;sister (object)',
'Moja mama býva tu.|My mum lives here.|my (feminine);mum;lives;here',
'Máte deti?|Do you have children? (polite)|you have (polite);children',
'Nemám deti.|I do not have children.|I do not have;children']);
topic('Describing people','Describe someone’s appearance using three short sentences.','vysoký=tall (masculine)|nízky=short / low (masculine)|mladý=young (masculine)|starý=old (masculine)|milý=nice / kind (masculine)|veselý=cheerful (masculine)|vlasy=hair|oči=eyes|krátky=short (masculine)|dlhý=long (masculine)|hnedý=brown (masculine)|modrý=blue (masculine)',[
'Môj brat je vysoký.|My brother is tall.|my (masculine);brother;is;tall (masculine)',
'Moja sestra je milá.|My sister is kind.|my (feminine);sister;is;kind (feminine)',
'Má krátke vlasy.|He or she has short hair.|has;short (plural);hair',
'Má modré oči.|He or she has blue eyes.|has;blue (plural);eyes',
'Ako vyzerá váš brat?|What does your brother look like? (polite)|how;looks;your (polite masculine);brother']);
topic('Feelings and needs','Explain how you feel and ask a friend how they are.','šťastný=happy (masculine)|smutný=sad (masculine)|unavený=tired (masculine)|hlad=hunger|smäd=thirst|strach=fear|radosť=joy|chorý=ill (masculine)|zdravý=healthy (masculine)|zle=badly / unwell|výborne=excellent / excellently|oddych=rest',[
'Mám sa dobre.|I am well.|I have;reflexive part of mať sa;well',
'Som unavený.|I am tired. (male speaker)|I am;tired (masculine)',
'Som unavená.|I am tired. (female speaker)|I am;tired (feminine)',
'Mám hlad a smäd.|I am hungry and thirsty.|I have;hunger;and;thirst',
'Ako sa dnes cítiš?|How do you feel today? (informal)|how;reflexive part of cítiť sa;today;you feel']);
topic('Friends and relationships','Introduce a friend and suggest spending time together.','kamarát=male friend|kamarátka=female friend|kolega=male colleague|kolegyňa=female colleague|sused=male neighbour|suseda=female neighbour|spolu=together|sám=alone (masculine)|sama=alone (feminine)|ľudia=people|návšteva=visit / visitor|pozvanie=invitation',[
'Toto je môj kamarát Peter.|This is my friend Peter.|this;is;my (masculine);male friend;Peter',
'Bývame spolu.|We live together.|we live;together',
'Chceš ísť na kávu?|Do you want to go for coffee? (informal)|you want;go;for;coffee (object)',
'Áno, mám čas.|Yes, I have time.|yes;I have;time',
'Prepáč, dnes nemôžem.|Sorry, I cannot today. (informal)|sorry (informal);today;I cannot']);
unit('Home & neighbourhood','Describe your home, find things, and handle simple household problems.','Use location phrases as chunks: doma means at home; domov means home as a destination. Prepositions often require a different noun ending. Learn v kuchyni and do kuchyne separately.');
topic('Rooms and your home','Give a short tour of your home.','dom=house|byt=flat / apartment|izba=room|kuchyňa=kitchen|kúpeľňa=bathroom|spálňa=bedroom|obývačka=living room|chodba=hallway|balkón=balcony|záhrada=garden|poschodie=floor / storey|výťah=lift / elevator',[
'Bývam v byte.|I live in a flat.|I live;in;flat (location form)',
'Kde je kúpeľňa?|Where is the bathroom?|where;is;bathroom',
'Kuchyňa je malá.|The kitchen is small.|kitchen;is;small (feminine)',
'Máme dve izby.|We have two rooms.|we have;two (feminine);rooms',
'Výťah je vpravo.|The lift is on the right.|lift;is;on the right']);
topic('Furniture and belongings','Describe where five objects are in your room.','stôl=table / desk|stolička=chair|posteľ=bed|skriňa=wardrobe / cupboard|okno=window|dvere=door / doors|kľúč=key|lampa=lamp|chladnička=fridge|práčka=washing machine|pohovka=sofa|polica=shelf',[
'Kľúč je na stole.|The key is on the table.|key;is;on;table (location form)',
'Kniha je tu.|The book is here.|book;is;here',
'Kde sú moje kľúče?|Where are my keys?|where;are;my (plural);keys',
'Prosím, otvorte okno.|Please open the window. (polite)|please;open (polite command);window',
'Dvere sú zatvorené.|The door is closed.|door (plural noun);are;closed (plural)']);
topic('Rent and household problems','Report a broken appliance and ask for help.','nájom=rent|zmluva=contract|majiteľ=owner (male)|elektrina=electricity|voda=water|kúrenie=heating|internet=internet|problém=problem|oprava=repair|fungovať=to work / function|pokazený=broken (masculine)|teplý=warm (masculine)',[
'Kúrenie nefunguje.|The heating is not working.|heating;does not work',
'Nemáme teplú vodu.|We do not have hot water.|we do not have;warm / hot (object feminine);water (object)',
'Potrebujem pomoc.|I need help.|I need;help',
'Koľko stojí nájom?|How much is the rent?|how much;costs;rent',
'Môžete prísť zajtra?|Can you come tomorrow? (polite)|you can (polite);come;tomorrow']);
topic('Around your neighbourhood','Tell someone what is near your home.','ulica=street|námestie=square|park=park|obchod=shop|pošta=post office|banka=bank|lekáreň=pharmacy|škola=school|blízko=near|ďaleko=far|vedľa=next to|oproti=opposite',[
'Obchod je blízko.|The shop is nearby.|shop;is;nearby',
'Bývam na tejto ulici.|I live on this street.|I live;on;this (location feminine);street (location form)',
'Pošta je vedľa banky.|The post office is next to the bank.|post office;is;next to;bank (after vedľa)',
'Je tu park?|Is there a park here?|is;here;park',
'Škola je oproti pošte.|The school is opposite the post office.|school;is;opposite;post office (after oproti)']);
unit('Food & drink','Talk about meals, order a drink, and explain basic food preferences.','To request something, prosím si is useful for any speaker. Food as an object often changes ending: voda becomes vodu. Do not assume dictionary forms work after every verb.');
topic('Everyday food','Name what you eat for breakfast and lunch.','chlieb=bread|rožok=bread roll|maslo=butter|syr=cheese|vajce=egg|mäso=meat|ryža=rice|zemiak=potato|cestoviny=pasta|polievka=soup|šalát=salad|ryba=fish',[
'Na raňajky jem chlieb.|I eat bread for breakfast.|for;breakfast;I eat;bread',
'Na obed máme polievku.|We are having soup for lunch.|for;lunch;we have;soup (object)',
'Jem ryžu a zeleninu.|I eat rice and vegetables.|I eat;rice (object);and;vegetables (object)',
'Máte čerstvý chlieb?|Do you have fresh bread? (polite)|you have (polite);fresh (masculine);bread',
'To je veľmi dobré.|That is very good.|that;is;very;good (neuter)']);
topic('Drinks and a café','Order a drink and ask for the bill.','káva=coffee|čaj=tea|mlieko=milk|džús=juice|minerálka=mineral water|pivo=beer|víno=wine|cukor=sugar|pohár=glass|šálka=cup|účet=bill / account|kaviareň=café',[
'Prosím si kávu.|I would like a coffee, please.|please / I ask;for myself;kávu: coffee (object)',
'S mliekom alebo bez mlieka?|With milk or without milk?|with;milk (with-form);or;without;milk (without-form)',
'Bez cukru, prosím.|Without sugar, please.|without;sugar (after bez);please',
'Prosím si pohár vody.|I would like a glass of water.|please / I ask;for myself;glass;of water',
'Účet, prosím.|The bill, please.|bill;please']);
topic('Meals and cooking','Explain what you cook and when you eat.','raňajky=breakfast|obed=lunch|večera=dinner|variť=to cook|jesť=to eat|piť=to drink|soľ=salt|korenie=pepper / spice|olej=oil|múka=flour|tanier=plate|lyžica=spoon',[
'Varím večeru.|I am cooking dinner.|I cook;dinner (object)',
'Kedy obedujete?|When do you have lunch? (polite/plural)|when;you eat lunch',
'Potrebujem soľ.|I need salt.|I need;salt',
'Večeriame o siedmej.|We have dinner at seven.|we eat dinner;at;seventh (hour understood)',
'Dobrú chuť!|Enjoy your meal!|good (feminine object);appetite (object)']);
topic('Preferences and dietary needs','Explain what you do not eat and ask about ingredients.','zelenina=vegetables|ovocie=fruit|orech=nut|lepok=gluten|alergia=allergy|vegetarián=vegetarian (male)|vegetariánka=vegetarian (female)|sladký=sweet (masculine)|slaný=salty (masculine)|horúci=hot (masculine)|studený=cold (masculine)|príloha=side dish',[
'Nejem mäso.|I do not eat meat.|I do not eat;meat',
'Mám alergiu na orechy.|I have a nut allergy.|I have;allergy (object);to;nuts',
'Je v tom mlieko?|Is there milk in it?|is;in;that (location form);milk',
'Mám rád ovocie.|I like fruit. (male speaker)|I have;fond (masculine: mám rád = I like);fruit',
'Mám rada zeleninu.|I like vegetables. (female speaker)|I have;fond (feminine: mám rada = I like);vegetables (object)']);
unit('Shopping & markets','Buy groceries and clothes, understand prices, and handle payment.','For quantities, learn fixed patterns such as kilo jabĺk. Price forms include jedno euro, dve eurá, päť eur. In shops, address staff politely.');
topic('At the market','Buy fruit and vegetables by weight.','jablko=apple|hruška=pear|banán=banana|pomaranč=orange|paradajka=tomato|uhorka=cucumber|cibuľa=onion|mrkva=carrot|kilo=kilogram (informal)|gram=gram|trh=market|čerstvý=fresh (masculine)',[
'Prosím si kilo jabĺk.|I would like a kilo of apples.|please / I ask;for myself;kilo;of apples',
'Koľko stoja paradajky?|How much are the tomatoes?|how much;cost (plural);tomatoes',
'Ešte dve uhorky, prosím.|Two more cucumbers, please.|more;two (feminine);cucumbers;please',
'To je všetko, ďakujem.|That is all, thank you.|that;is;everything;I thank you',
'Sú tieto jablká sladké?|Are these apples sweet?|are;these (plural);apples;sweet (plural)']);
topic('At the supermarket','Find products, ask for a bag, and pay.','supermarket=supermarket|pokladňa=checkout / cash desk|taška=bag|košík=basket|vozík=trolley|cena=price|zľava=discount|balenie=package|fľaša=bottle|jogurt=yoghurt|mrazený=frozen (masculine)|účtenka=receipt',[
'Kde nájdem mlieko?|Where can I find milk?|where;I will find;milk',
'Potrebujete tašku?|Do you need a bag? (polite)|you need (polite);bag (object)',
'Áno, jednu tašku, prosím.|Yes, one bag, please.|yes;one (feminine object);bag (object);please',
'Môžem platiť kartou?|Can I pay by card?|I can;pay;by card',
'Prosím si účtenku.|I would like a receipt.|please / I ask;for myself;receipt (object)']);
topic('Clothes and sizes','Ask for a size, try something on, and choose a colour.','tričko=T-shirt|košeľa=shirt|nohavice=trousers|šaty=dress|bunda=jacket|topánky=shoes|veľkosť=size|farba=colour|biely=white (masculine)|čierny=black (masculine)|červený=red (masculine)|zelený=green (masculine)',[
'Máte väčšiu veľkosť?|Do you have a larger size? (polite)|you have (polite);larger (feminine object);size',
'Môžem si to vyskúšať?|Can I try it on?|I can;for myself;it;try',
'Tieto topánky sú malé.|These shoes are small.|these;shoes;are;small (plural)',
'Páči sa mi táto bunda.|I like this jacket.|is pleasing;reflexive part of páčiť sa;to me;this (feminine);jacket',
'Kde sú skúšobné kabínky?|Where are the fitting rooms?|where;are;fitting (plural adjective);cubicles']);
topic('Prices, payment and returns','Understand a price and explain a simple problem with a purchase.','euro=euro|cent=cent|hotovosť=cash|karta=card|drahý=expensive (masculine)|lacný=cheap (masculine)|tridsať=thirty|štyridsať=forty|päťdesiat=fifty|sto=one hundred|tisíc=one thousand|vrátiť=to return (something)',[
'Koľko to stojí?|How much does it cost?|how much;it;costs',
'Stojí to päť eur.|It costs five euros.|costs;it;five;euros (genitive plural)',
'Platím v hotovosti.|I am paying in cash.|I pay;in;cash (location form)',
'Je to príliš drahé.|It is too expensive.|is;it;too;expensive (neuter)',
'Chcem to vrátiť. Mám účtenku.|I want to return it. I have the receipt.|I want;it;return;I have;receipt (object)']);
unit('Getting around','Ask directions, use public transport, and buy a train ticket.','Distinguish where you are from where you are going. Learn destination phrases as units: do centra, na stanicu. Motion verbs are irregular; idem means I am going, pôjdem means I will go.');
topic('Asking for directions','Ask where the station is and follow simple directions.','vľavo=on/to the left|vpravo=on/to the right|rovno=straight ahead|späť=back|stanica=station|most=bridge|roh=corner|centrum=centre|mapa=map|cesta=road / journey|prechod=crossing|semafor=traffic light',[
'Prosím vás, kde je stanica?|Excuse me, where is the station?|please / I ask;you (polite object);where;is;station',
'Choďte rovno.|Go straight ahead. (polite)|go (polite command);straight ahead',
'Potom odbočte vľavo.|Then turn left. (polite)|then;turn (polite command);left',
'Je to ďaleko?|Is it far?|is;it;far',
'Ako sa dostanem do centra?|How do I get to the centre?|how;reflexive part of dostať sa;I will get;to;centre (after do)']);
topic('Buses and trams','Find your stop and ask which bus to take.','autobus=bus|električka=tram|trolejbus=trolleybus|zastávka=stop|lístok=ticket|vodič=driver (male)|cestujúci=passenger (male) / passengers|linka=route / line|smer=direction|odchod=departure|príchod=arrival|prestup=transfer',[
'Kde je zastávka autobusu?|Where is the bus stop?|where;is;stop;of the bus',
'Ide tento autobus na stanicu?|Does this bus go to the station?|goes;this (masculine);bus;to;station (destination form)',
'Kde mám vystúpiť?|Where should I get off?|where;I should (here: mám);get off',
'Potrebujem jeden lístok.|I need one ticket.|I need;one (masculine);ticket',
'Musíte prestúpiť.|You have to change. (polite)|you must (polite);transfer / change vehicles']);
topic('Trains and longer journeys','Buy a ticket and find your platform.','vlak=train|nástupište=platform|koľaj=track / rail|spiatočný=return (adjective masculine)|jednosmerný=one-way (masculine)|miestenka=seat reservation|meškanie=delay|rýchlik=express train|vozeň=carriage|miesto=seat / place|batožina=luggage|cestovný poriadok=timetable',[
'Prosím si lístok do Košíc.|I would like a ticket to Košice.|please / I ask;for myself;ticket;to;Košice (destination form)',
'Jednosmerný alebo spiatočný?|One-way or return?|one-way (ticket understood);or;return (ticket understood)',
'Z ktorého nástupišťa odchádza vlak?|Which platform does the train leave from?|from;which (after z);platform (after z);departs;train',
'Vlak má meškanie.|The train is delayed.|train;has;delay',
'Je toto miesto voľné?|Is this seat free?|is;this (neuter);seat;free (neuter)']);
topic('Driving and taxis','Give a destination and ask where to park.','auto=car|taxík=taxi|parkovisko=car park|benzín=petrol|nafta=diesel|čerpacia stanica=petrol station|diaľnica=motorway|križovatka=junction|vchod=entrance|východ=exit|pás=seat belt / belt|letisko=airport',[
'Na letisko, prosím.|To the airport, please.|to;airport;please',
'Koľko stojí cesta?|How much is the journey?|how much;costs;journey',
'Môžem tu parkovať?|Can I park here?|I can;here;park',
'Zastavte tu, prosím.|Stop here, please. (polite)|stop (polite command);here;please',
'Potrebujem taxík na ráno.|I need a taxi for the morning.|I need;taxi;for;morning']);
unit('Health & getting help','Describe symptoms, arrange a visit, and communicate urgent needs.','These are language exercises, not treatment instructions. Learn symptom phrases as complete units. Bolí ma hlava literally uses a singular subject: my head hurts me. Bolia ma zuby uses a plural subject.');
topic('Your body and symptoms','Explain where it hurts and how you feel.','hlava=head|hrdlo=throat|brucho=abdomen / belly|chrbát=back|ruka=hand / arm|noha=foot / leg|zub=tooth|ucho=ear|teplota=temperature / fever|kašeľ=cough|bolesť=pain|nádcha=runny nose / cold',[
'Bolí ma hlava.|I have a headache.|hurts (singular);me;head',
'Bolia ma zuby.|My teeth hurt.|hurt (plural);me;teeth',
'Mám teplotu a kašeľ.|I have a fever and a cough.|I have;fever (object);and;cough',
'Necítim sa dobre.|I do not feel well.|I do not feel;reflexive part of cítiť sa;well',
'Bolí ma tu.|It hurts here.|hurts;me;here']);
topic('A doctor’s appointment','Ask for an appointment and explain how long you have been ill.','lekár=doctor (male)|lekárka=doctor (female)|sestra=nurse / sister|ambulancia=outpatient clinic / consulting room|čakáreň=waiting room|termín=appointment / date|vyšetrenie=examination|preukaz=card / pass|poistenie=insurance|pacient=patient (male)|recept=prescription / recipe|kontrola=check-up / check',[
'Potrebujem termín u lekára.|I need a doctor’s appointment.|I need;appointment;at / with;doctor (after u)',
'Mám zdravotné poistenie.|I have health insurance.|I have;health (neuter adjective);insurance',
'Trvá to dva dni.|It has been going on for two days.|lasts;it;two;days',
'Kde je čakáreň?|Where is the waiting room?|where;is;waiting room',
'Môžete mi to vysvetliť?|Can you explain it to me? (polite)|you can (polite);to me;it;explain']);
topic('At the pharmacy','Ask a pharmacist for help and clarify the instructions.','liek=medicine|tabletka=tablet / pill|sirup=syrup|kvapky=drops|obväz=bandage|náplasť=plaster / adhesive bandage|dávka=dose|návod=instructions|užívať=to take (medicine)|pred=before / in front of|po=after / along|jedlo=food / meal',[
'Máte niečo na bolesť hrdla?|Do you have something for a sore throat? (polite)|you have (polite);something;for;pain;of the throat',
'Potrebujem na to recept?|Do I need a prescription for that?|I need;for;that;prescription',
'Ako mám tento liek užívať?|How should I take this medicine?|how;I should;this (masculine);medicine;take (medicine)',
'Pred jedlom alebo po jedle?|Before or after food?|before;food (after pred);or;after;food (after po)',
'Prosím, napíšte mi to.|Please write it down for me. (polite)|please;write (polite command);to me;it']);
topic('Hospital and urgent help','State an urgent need, your location, and an allergy clearly.','nemocnica=hospital|pohotovosť=emergency medical service|sanitka=ambulance|nehoda=accident|polícia=police|hasiči=firefighters|nebezpečenstvo=danger|súrny=urgent (masculine)|dýchať=to breathe|krv=blood|doklad=document / ID|alergický=allergic (masculine)',[
'Pomôžte mi, prosím!|Please help me! (polite/plural)|help (polite command);me;please',
'Zavolajte sanitku!|Call an ambulance! (polite/plural)|call (polite command);ambulance (object)',
'Nemôžem dýchať.|I cannot breathe.|I cannot;breathe',
'Som na Hlavnej ulici.|I am on Hlavná Street.|I am;on;Hlavná (location form);street (location form)',
'Mám alergiu na penicilín.|I am allergic to penicillin.|I have;allergy (object);to;penicillin']);
unit('Work & office life','Describe your job, arrange meetings, and ask for clarification at work.','Present-tense verbs change by person: pracujem, pracuješ, pracuje; pracujeme, pracujete, pracujú. Use polite requests with colleagues until informal address is established.');
topic('Jobs and workplaces','Say what you do and where you work.','práca=work / job|firma=company|kancelária=office|učiteľ=teacher (male)|učiteľka=teacher (female)|predavač=shop assistant (male)|predavačka=shop assistant (female)|kuchár=cook (male)|vodička=driver (female)|programátor=programmer (male)|zamestnanec=employee (male)|povolanie=profession',[
'Kde pracujete?|Where do you work? (polite)|where;you work (polite)',
'Pracujem v kancelárii.|I work in an office.|I work;in;office (location form)',
'Som učiteľka.|I am a teacher. (female speaker)|I am;teacher (female)',
'Hľadám prácu.|I am looking for a job.|I look for;work / job (object)',
'Pracujem od ôsmej do štvrtej.|I work from eight to four.|I work;from;eighth (hour understood);to;fourth (hour understood)']);
topic('Your working day','Explain your routine and ask about a break.','začiatok=start|koniec=end|prestávka=break|porada=work meeting|úloha=task|projekt=project|šéf=boss (male)|šéfka=boss (female)|obedná prestávka=lunch break|pracovať=to work|začať=to begin|skončiť=to finish',[
'Začínam o deviatej.|I start at nine.|I start;at;ninth (hour understood)',
'Kedy máme poradu?|When do we have the meeting?|when;we have;work meeting (object)',
'Teraz mám prestávku.|I am on a break now.|now;I have;break (object)',
'Dnes pracujem z domu.|I am working from home today.|today;I work;from;home (after z)',
'Končím o piatej.|I finish at five.|I finish;at;fifth (hour understood)']);
topic('Office equipment and requests','Ask for a document and report a computer problem.','počítač=computer|notebook=laptop|tlačiareň=printer|obrazovka=screen|klávesnica=keyboard|myš=mouse|súbor=file|dokument=document|heslo=password|papier=paper|pero=pen|správa=message / report',[
'Počítač nefunguje.|The computer is not working.|computer;does not work',
'Pošlite mi dokument, prosím.|Please send me the document. (polite)|send (polite command);to me;document;please',
'Môžem použiť tlačiareň?|Can I use the printer?|I can;use;printer (object)',
'Aké je heslo?|What is the password?|what (neuter);is;password',
'Potrebujem nový súbor.|I need a new file.|I need;new (masculine);file']);
topic('Meetings and simple messages','Arrange a meeting and explain that you will be late.','dohoda=agreement|plán=plan|zmena=change|dôležitý=important (masculine)|voľný=free / available (masculine)|zaneprázdnený=busy (masculine)|poslať=to send|zavolať=to call|čakať=to wait|hneď=immediately|neskôr=later|hotový=finished / ready (masculine)',[
'Môžeme sa stretnúť zajtra?|Can we meet tomorrow?|we can;reflexive part of stretnúť sa;meet;tomorrow',
'Budem meškať desať minút.|I will be ten minutes late.|I will;be late;ten;minutes (genitive plural)',
'Zavolám vám neskôr.|I will call you later. (polite)|I will call;you (polite indirect object);later',
'Úloha je hotová.|The task is finished.|task;is;finished (feminine)',
'Súhlasím.|I agree.|I agree']);
unit('School & learning','Navigate a school, talk about lessons, and communicate with a teacher.','Question words help you keep learning: kto asks who, čo asks what, kde asks where, kedy asks when, ako asks how, prečo asks why. Do not omit sa from učiť sa when you mean to learn.');
topic('In the classroom','Name classroom objects and ask for clarification.','žiak=pupil (male)|žiačka=pupil (female)|študent=student (male)|študentka=student (female)|trieda=class / classroom|tabuľa=board|kniha=book|zošit=exercise book|ceruzka=pencil|guma=eraser|strana=page / side|cvičenie=exercise',[
'Na ktorej strane sme?|What page are we on?|on;which (location feminine);page (location form);we are',
'Mám otázku.|I have a question.|I have;question (object)',
'Môžete mi pomôcť?|Can you help me? (polite)|you can (polite);me;help',
'Nerozumiem tomuto slovu.|I do not understand this word.|I do not understand;this (indirect object);word (indirect object)',
'Prosím, otvorte knihu.|Please open the book. (polite/plural)|please;open (polite command);book (object)']);
topic('Subjects and schedules','Describe your timetable and say what you study.','rozvrh=timetable|predmet=school subject / object|matematika=mathematics|dejepis=history (school subject)|zemepis=geography (school subject)|jazyk=language / tongue|hudba=music|telesná výchova=physical education|kurz=course|hodina=lesson / hour|skúška=exam|prázdniny=school holidays',[
'Učím sa slovenčinu.|I am learning Slovak.|I learn;reflexive part of učiť sa;Slovak language (object)',
'Kedy začína hodina?|When does the lesson start?|when;starts;lesson',
'Kurz je v utorok.|The course is on Tuesday.|course;is;on;Tuesday',
'Dnes máme matematiku.|We have maths today.|today;we have;mathematics (object)',
'Skúška je zajtra.|The exam is tomorrow.|exam;is;tomorrow']);
topic('Homework and study habits','Explain your study routine and ask about homework.','domáca úloha=homework|čítať=to read|písať=to write|počúvať=to listen|opakovať=to repeat / review|pamätať si=to remember|učiť sa=to learn|vedieť=to know how / know a fact|chyba=mistake|správny=correct (masculine)|ťažký=difficult / heavy (masculine)|ľahký=easy / light (masculine)',[
'Čo máme na domácu úlohu?|What do we have for homework?|what;we have;for;home (adjective object);task (object)',
'Každý deň čítam.|I read every day.|every (masculine);day;I read',
'Počúvam a opakujem.|I listen and repeat.|I listen;and;I repeat',
'Je to správne?|Is that correct?|is;that;correct (neuter)',
'Neviem odpoveď.|I do not know the answer.|I do not know;answer']);
topic('Parents, children and school','Tell a teacher your child is ill and arrange a conversation.','škôlka=kindergarten|riaditeľ=headteacher / director (male)|riaditeľka=headteacher / director (female)|ospravedlnenie=excuse / absence note / apology|dochádzka=attendance|výlet=trip|jedáleň=canteen|krúžok=after-school club / small circle|rodič=parent|spolužiak=classmate (male)|spolužiačka=classmate (female)|taška=bag',[
'Moja dcéra je chorá.|My daughter is ill.|my (feminine);daughter;is;ill (feminine)',
'Dnes nepríde do školy.|He or she will not come to school today.|today;will not come;to;school (destination form)',
'Kedy môžem prísť?|When can I come?|when;I can;come',
'Môj syn chodí do škôlky.|My son goes to kindergarten.|my (masculine);son;goes regularly;to;kindergarten (destination form)',
'Chcem hovoriť s učiteľkou.|I want to speak to the teacher. (female teacher)|I want;speak;with;female teacher (after s)']);
unit('Friends, visits & free time','Invite someone, be a guest, and talk about hobbies and celebrations.','Use informal singular forms with friends. Likes can use mám rád/rada or páči sa mi. The latter agrees with the thing liked: páči sa mi film but páčia sa mi filmy.');
topic('Hobbies and weekends','Talk about two things you enjoy and suggest an activity.','koníček=hobby|šport=sport|futbal=football|plávanie=swimming|beh=running|bicykel=bicycle|film=film|kino=cinema|divadlo=theatre|kniha=book|hra=game / play|prechádzka=walk',[
'Čo robíš cez víkend?|What do you do at the weekend? (informal)|what;you do;over;weekend',
'Rád čítam knihy.|I like reading books. (male speaker)|gladly (masculine);I read;books',
'Rada počúvam hudbu.|I like listening to music. (female speaker)|gladly (feminine);I listen;music (object)',
'Poďme do kina.|Let’s go to the cinema.|let us go;to;cinema (destination form)',
'Hrám futbal.|I play football.|I play;football']);
topic('Invitations and arrangements','Invite a friend, accept once, and politely decline once.','pozvať=to invite|prísť=to come|ísť=to go|stretnúť sa=to meet|zajtra=tomorrow|dnes=today|večer=evening|možno=maybe|určite=definitely|bohužiaľ=unfortunately|nápad=idea|dohodnuté=agreed',[
'Prídeš zajtra na návštevu?|Will you come to visit tomorrow? (informal)|you will come;tomorrow;for;visit (object)',
'Áno, prídem.|Yes, I will come.|yes;I will come',
'O koľkej sa stretneme?|At what time shall we meet?|at;which (hour understood);reflexive part of stretnúť sa;we will meet',
'Bohužiaľ, nemám čas.|Unfortunately, I do not have time.|unfortunately;I do not have;time',
'To je dobrý nápad.|That is a good idea.|that;is;good (masculine);idea']);
topic('Visiting someone’s home','Welcome a guest, offer a drink, and thank a host.','hosť=guest|hostiteľ=host (male)|hostiteľka=host (female)|darček=gift|kvety=flowers|koláč=cake / pastry|papuče=slippers|vitajte=welcome (polite/plural)|ďalej=further / inside|sadnúť si=to sit down|ponúknuť=to offer|pohodlie=comfort',[
'Vitajte, poďte ďalej.|Welcome, come in. (polite/plural)|welcome;come (polite command);inside (here)',
'Dáte si čaj?|Would you like some tea? (polite)|you will give / have;for yourself;tea',
'Áno, prosím.|Yes, please.|yes;please',
'Tento koláč je výborný.|This cake is excellent.|this (masculine);cake;is;excellent (masculine)',
'Ďakujem za pozvanie.|Thank you for the invitation.|I thank you;for;invitation']);
topic('Birthdays and celebrations','Wish someone a happy birthday and describe a celebration.','narodeniny=birthday|oslava=celebration / party|sviatok=holiday / special day|meniny=name day|torta=birthday cake / layer cake|sviečka=candle|Vianoce=Christmas|Veľká noc=Easter|svadba=wedding|šťastie=happiness / luck|zdravie=health|rok=year',[
'Všetko najlepšie k narodeninám!|Happy birthday!|everything;best;for / on;birthday (dative plural)',
'Kedy máš narodeniny?|When is your birthday? (informal)|when;you have;birthday',
'Oslava je v sobotu.|The party is on Saturday.|party;is;on;Saturday (object form)',
'Toto je darček pre teba.|This is a gift for you. (informal)|this;is;gift;for;you (after pre)',
'Šťastný nový rok!|Happy New Year!|happy (masculine);new (masculine);year']);
unit('Services & practical life','Use the post office, bank, salon, and public office.','Polite requests keep transactions simple. Potrebujem means I need; chcem means I want. To ask permission, use môžem plus an infinitive. Learn the names of documents you actually use.');
topic('Post office and deliveries','Send a parcel and ask where to collect it.','list=letter|pohľadnica=postcard|balík=parcel|známka=stamp|obálka=envelope|odosielateľ=sender|príjemca=recipient|doručenie=delivery|podpis=signature|okienko=service window|poštové smerovacie číslo=postal code|kuriér=courier',[
'Chcem poslať tento balík.|I want to send this parcel.|I want;send;this (masculine);parcel',
'Koľko stojí známka?|How much is a stamp?|how much;costs;stamp',
'Kde si môžem vyzdvihnúť balík?|Where can I collect my parcel?|where;for myself;I can;collect;parcel',
'Tu je moja adresa.|Here is my address.|here;is;my (feminine);address',
'Kde sa mám podpísať?|Where should I sign?|where;reflexive part of podpísať sa;I should;sign']);
topic('Banking and money','Ask for a bank account and report a card problem.','bankomat=cash machine|bankový účet=bank account|peniaze=money|platba=payment|prevod=transfer|poplatok=fee|výber=withdrawal / selection|zostatok=balance|minca=coin|bankovka=banknote|doklad totožnosti=identity document|platobná karta=payment card',[
'Kde je bankomat?|Where is the cash machine?|where;is;cash machine',
'Chcem si otvoriť účet.|I want to open an account.|I want;for myself;open;account',
'Moja karta nefunguje.|My card is not working.|my (feminine);card;does not work',
'Aký je poplatok?|What is the fee?|what (masculine);is;fee',
'Potrebujem zablokovať kartu.|I need to block my card.|I need;block;card (object)']);
topic('Appointments and personal services','Book a haircut and explain what you want.','kaderník=hairdresser (male)|kaderníčka=hairdresser (female)|holič=barber|strih=haircut / cut|objednávka=order / booking|rezervácia=reservation|voľno=free time / availability|opraviť=to repair|čistiareň=dry cleaner’s|servis=repair service|otvorené=open|zatvorené=closed',[
'Chcem sa objednať na strih.|I want to book a haircut.|I want;myself (part of objednať sa);book an appointment;for;haircut',
'Máte voľný termín?|Do you have an available appointment? (polite)|you have (polite);free / available (masculine);appointment',
'Len trochu skrátiť, prosím.|Just trim it a little, please.|only;a little;shorten;please',
'Kedy máte otvorené?|When are you open? (polite)|when;you have (polite);open',
'Môžem prísť v stredu?|Can I come on Wednesday?|I can;come;on;Wednesday (object form)']);
topic('Forms and public offices','Ask for a form and identify the information required.','úrad=public office|formulár=form|pas=passport|pobyt=residence / stay|občianstvo=citizenship|dátum=date|narodenie=birth|podpis=signature|príloha=attachment|kópia=copy|originál=original|povolenie=permit / permission',[
'Potrebujem tento formulár.|I need this form.|I need;this (masculine);form',
'Ktoré doklady potrebujem?|Which documents do I need?|which (plural);documents;I need',
'Tu je môj pas.|Here is my passport.|here;is;my (masculine);passport',
'Môžete mi pomôcť s formulárom?|Can you help me with the form? (polite)|you can (polite);me;help;with;form (after s)',
'Potrebujete originál alebo kópiu?|Do you need the original or a copy? (polite)|you need (polite);original;or;copy (object)']);
unit('Travel, weather & outdoors','Check into accommodation, discuss weather, and plan a simple outing.','Weather often uses impersonal expressions: prší means it is raining. For travel, recognise useful questions and short answers before trying longer explanations.');
topic('At a hotel','Check in, ask about breakfast, and report a room problem.','hotel=hotel|recepcia=reception|izba=room|noc=night|rezervácia=reservation|raňajky=breakfast|uterák=towel|posteľ=bed|sprcha=shower|kľúč=key|hosť=guest|ubytovanie=accommodation',[
'Mám rezerváciu na meno Alex Smith.|I have a reservation under the name Alex Smith.|I have;reservation (object);under;name;Alex;Smith',
'Prosím si izbu na dve noci.|I would like a room for two nights.|please / I ask;for myself;room (object);for;two (feminine);nights',
'Sú raňajky v cene?|Is breakfast included in the price?|are;breakfast (plural noun);in;price (location form)',
'Sprcha nefunguje.|The shower is not working.|shower;does not work',
'Kedy musím odísť?|When do I have to leave?|when;I must;leave']);
topic('Weather and seasons','Describe today’s weather and choose clothes for it.','počasie=weather|slnko=sun|dážď=rain|sneh=snow|vietor=wind|oblak=cloud|jar=spring|leto=summer|jeseň=autumn|zima=winter / cold|teplo=warmth / warm|chladno=chilly',[
'Aké je dnes počasie?|What is the weather like today?|what (neuter);is;today;weather',
'Dnes prší.|It is raining today.|today;it rains',
'Vonku je zima.|It is cold outside.|outside;is;cold',
'Svieti slnko.|The sun is shining.|shines;sun',
'Zajtra bude teplo.|It will be warm tomorrow.|tomorrow;will be;warm']);
topic('Nature and outings','Plan a walk and ask about a route.','hora=mountain|les=forest|rieka=river|jazero=lake|chodník=path / pavement|turistika=hiking|výlet=trip|batoh=backpack|voda=water|dáždnik=umbrella|príroda=nature|dedina=village',[
'Ideme na výlet.|We are going on a trip.|we go;on;trip',
'Chcem ísť do lesa.|I want to go to the forest.|I want;go;to;forest (destination form)',
'Je tento chodník bezpečný?|Is this path safe?|is;this (masculine);path;safe (masculine)',
'Máme dosť vody?|Do we have enough water?|we have;enough;water (after dosť)',
'Poďme späť.|Let’s go back.|let us go;back']);
topic('Sightseeing and tickets','Buy an entry ticket and ask about opening hours.','múzeum=museum|hrad=castle|kostol=church|galéria=gallery|vstupenka=entry ticket|vstupné=admission fee|otváracie hodiny=opening hours|fotografia=photograph|sprievodca=guide (male)|pamiatka=sight / monument|dospelý=adult (male) / adult adjective|dieťa=child',[
'Kedy je múzeum otvorené?|When is the museum open?|when;is;museum;open (neuter)',
'Prosím si dve vstupenky.|I would like two tickets.|please / I ask;for myself;two (feminine);entry tickets',
'Môžem tu fotografovať?|Can I take photos here?|I can;here;take photographs',
'Máte informácie po anglicky?|Do you have information in English? (polite)|you have (polite);information;in (language expression);English (adverb)',
'Kde je vchod?|Where is the entrance?|where;is;entrance']);
unit('Tell your story','Talk simply about your routine, yesterday, and future plans.','Past-tense forms show speaker gender: bol som / bola som. With imperfective verbs, future often uses budem plus the infinitive. Learn common irregular forms individually rather than applying one rule everywhere.');
topic('Daily routines','Describe your day from getting up to going to bed.','vstávať=to get up regularly|spať=to sleep|umývať sa=to wash oneself|obliekať sa=to get dressed|raňajkovať=to have breakfast|odchádzať=to leave regularly|vracať sa=to return regularly|upratovať=to clean / tidy|nakupovať=to shop|odpočívať=to rest|každý=every (masculine)|zvyčajne=usually',[
'Vstávam o siedmej.|I get up at seven.|I get up;at;seventh (hour understood)',
'Ráno sa umývam.|I wash in the morning.|in the morning;myself;I wash',
'Potom idem do práce.|Then I go to work.|then;I go;to;work (destination form)',
'Večer pozerám film.|I watch a film in the evening.|in the evening;I watch;film',
'Chodím spať o desiatej.|I go to bed at ten.|I go regularly;sleep;at;tenth (hour understood)']);
topic('Talking about yesterday','Say where you were and what you did yesterday.','včera=yesterday|minulý=last / past (masculine)|bol=was (masculine)|bola=was (feminine)|robil=did (masculine)|robila=did (feminine)|videl=saw (masculine)|videla=saw (feminine)|doma=at home|vtedy=then / at that time|víkend=weekend|večera=dinner',[
'Včera som bol doma.|I was at home yesterday. (male speaker)|yesterday;first-person singular past auxiliary;was (masculine);at home',
'Včera som bola v práci.|I was at work yesterday. (female speaker)|yesterday;first-person singular past auxiliary;was (feminine);at;work (location form)',
'Čo si robil včera?|What did you do yesterday? (to a male friend)|what;second-person singular past auxiliary;did (masculine);yesterday',
'Čo si robila včera?|What did you do yesterday? (to a female friend)|what;second-person singular past auxiliary;did (feminine);yesterday',
'Večer sme boli doma.|We were at home in the evening.|in the evening;first-person plural past auxiliary;were (plural);at home']);
topic('Tomorrow and future plans','Explain three plans for tomorrow.','budem=I will be|budeš=you will be (informal)|bude=he/she/it will be|budeme=we will be|budete=you will be (polite/plural)|budú=they will be|pôjdem=I will go|neskôr=later|budúci=next / future (masculine)|plánovať=to plan|dovolenka=holiday / leave|cestovať=to travel',[
'Zajtra budem pracovať.|I will work tomorrow.|tomorrow;I will;work',
'V sobotu pôjdem do mesta.|I will go into town on Saturday.|on;Saturday (object form);I will go;to;town (destination form)',
'Budúci týždeň mám dovolenku.|I am on holiday next week.|next (masculine);week;I have;holiday (object)',
'Čo budeš robiť zajtra?|What will you do tomorrow? (informal)|what;you will;do;tomorrow',
'Budeme doma.|We will be at home.|we will be;at home']);
topic('Opinions, reasons and comparisons','State a preference and give a simple reason.','pretože=because|ale=but|aj=also / too|alebo=or|preto=therefore / that is why|viac=more|menej=less|lepší=better (masculine)|horší=worse (masculine)|rovnaký=same (masculine)|iný=different / other (masculine)|zaujímavý=interesting (masculine)',[
'Dnes nejdem von, pretože prší.|I am not going out today because it is raining.|today;I am not going;out;because;it rains',
'Chcem čaj, ale nemáme vodu.|I want tea, but we have no water.|I want;tea;but;we do not have;water (object)',
'Tento byt je väčší.|This flat is bigger.|this (masculine);flat;is;bigger (masculine)',
'Myslím, že je to dobré.|I think that it is good.|I think;that (conjunction);is;it;good (neuter)',
'Aj ja sa učím po slovensky.|I am learning Slovak too.|also;I;reflexive part of učiť sa;I learn;in (language expression);Slovak (adverb)']);
unit('Independent everyday Slovak','Combine what you know to handle everyday situations and recover when stuck.','The final unit revisits high-value language in longer situations. Prioritise being understood, listening for key information, and asking for clarification. Repeat any unit whose checkpoint remains difficult.');
topic('Restaurant from start to finish','Ask for a table, order, and pay without using English.','reštaurácia=restaurant|jedálny lístok=menu|čašník=waiter|čašníčka=waitress|stôl=table|objednať si=to order for oneself|hlavné jedlo=main course|dezert=dessert|spolu=together|osobitne=separately|odporučiť=to recommend|rezervovaný=reserved (masculine)',[
'Máte stôl pre dvoch?|Do you have a table for two? (polite)|you have (polite);table;for;two (people)',
'Prosím si jedálny lístok.|I would like the menu.|please / I ask;for myself;dining (adjective);menu / list',
'Čo odporúčate?|What do you recommend? (polite)|what;you recommend (polite)',
'Prosím si polievku a šalát.|I would like soup and a salad.|please / I ask;for myself;soup (object);and;salad',
'Môžeme platiť osobitne?|Can we pay separately?|we can;pay;separately']);
topic('Solve a problem politely','Explain what is wrong and ask for a solution.','stratiť=to lose|nájsť=to find|zabudnúť=to forget|peňaženka=wallet|mobil=mobile phone|chyba=mistake|pomôcť=to help|vysvetliť=to explain|zopakovať=to repeat (once)|potvrdenie=confirmation / certificate|riešenie=solution|správne=correctly / correct (neuter)',[
'Prepáčte, toto nie je môj účet.|Excuse me, this is not my bill.|excuse me (polite);this;not;is;my (masculine);bill',
'Neviem nájsť peňaženku.|I cannot find my wallet.|I cannot (here: neviem);find;wallet (object)',
'Potrebujem potvrdenie.|I need a confirmation document.|I need;confirmation',
'Môžete to skontrolovať?|Can you check that? (polite)|you can (polite);that;check',
'Ďakujem za pomoc.|Thank you for your help.|I thank you;for;help']);
topic('A longer friendly conversation','Connect your introduction, work, hobbies, and plans in a two-minute conversation.','často=often|niekedy=sometimes|vždy=always|nikdy=never|väčšinou=mostly|naozaj=really|tiež=also|vlastne=actually|dúfať=to hope|myslieť=to think|rozprávať sa=to talk / converse|spoznať=to get to know',[
'Čo rád robíš vo voľnom čase?|What do you like doing in your free time? (to a male friend)|what;gladly (masculine);you do;in;free (location form);time (location form)',
'Čo rada robíš vo voľnom čase?|What do you like doing in your free time? (to a female friend)|what;gladly (feminine);you do;in;free (location form);time (location form)',
'Často chodím na prechádzky.|I often go for walks.|often;I go regularly;for;walks',
'A čo ty?|And what about you? (informal)|and;what;you',
'Dúfam, že sa čoskoro stretneme.|I hope we meet soon.|I hope;that;reflexive part of stretnúť sa;soon;we will meet']);
topic('Your A1 toolkit','Introduce yourself, explain a need, arrange a meeting, and ask for clarification in one practice session.','kto=who|čo=what|kde=where|kam=where to|kedy=when|prečo=why|ako=how|koľko=how much / how many|ktorý=which (masculine)|môcť=to be able / can|musieť=to have to / must|chcieť=to want',[
'Môžem sa niečo opýtať?|May I ask something?|I can;reflexive part of opýtať sa;something;ask',
'Potrebujem viac času.|I need more time.|I need;more;time (after viac)',
'Rozumiem, ale hovorím pomaly.|I understand, but I speak slowly.|I understand;but;I speak;slowly',
'Ako sa to povie po slovensky?|How do you say that in Slovak?|how;reflexive / impersonal marker;that;is said;in (language expression);Slovak (adverb)',
'Môžeme hovoriť po slovensky?|Can we speak Slovak?|we can;speak;in (language expression);Slovak (adverb)']);
