/* Islamic History — Seerah, Caliphs, Empires, Golden Age */
const HISTORY_ERAS = [
{
 title:"The Seerah — Life of Prophet Muhammad ﷺ",
 titleUr:"سیرتِ نبوی ﷺ",
 period:"570 – 632 CE",
 events:[
 ["570 CE — The Year of the Elephant","Born in Makkah to Abdullah and Amina. His father had died before his birth; his mother died when he was 6. Raised by grandfather Abdul Muttalib, then uncle Abu Talib."],
 ["610 CE — First Revelation","At age 40, in the Cave of Hira, Angel Jibreel brought the first verses: 'Read, in the name of your Lord...' (96:1). Khadija (RA), his wife, was the first believer."],
 ["613 CE — Public Call","After 3 years of private preaching, he called people openly to one God. The Quraysh mocked, boycotted and persecuted the early Muslims."],
 ["615–616 CE — Migration to Abyssinia","To escape persecution, groups of Muslims migrated to Abyssinia, where the Christian king Negus protected them."],
 ["619 CE — Year of Sorrow","Khadija (RA) and Abu Talib died. The Prophet ﷺ was stoned at Taif yet prayed for its people instead of cursing them."],
 ["620 CE — Isra & Mi'raj","The miraculous Night Journey from Makkah to Jerusalem and ascension through the heavens, where the five daily prayers were ordained."],
 ["622 CE — Hijrah to Madinah","Migrated to Yathrib (Madinah). This marks Year 1 of the Islamic calendar. He built the Prophet's Mosque and united Muhajirun and Ansar as brothers."],
 ["624 CE — Battle of Badr","313 poorly-equipped Muslims defeated ~1,000 Quraysh. A turning point proving divine support."],
 ["625 CE — Battle of Uhud","Muslim archers left their post; the battle turned. Hamza (RA) was martyred. A lesson in obedience."],
 ["627 CE — Battle of the Trench (Khandaq)","Madinah defended by a trench on Salman Farsi's (RA) advice. The confederate siege failed."],
 ["628 CE — Treaty of Hudaybiyyah","A 10-year peace treaty the Quraysh thought was their victory — but it opened Arabia to Islam. 'A clear victory' (48:1)."],
 ["630 CE — Conquest of Makkah","8 AH: 10,000 Muslims entered Makkah peacefully. The Prophet ﷺ forgave his persecutors: 'No blame on you today.' The Kaaba was cleansed of idols."],
 ["632 CE — Farewell Sermon & Passing","At Arafat during Hajj he gave the Farewell Sermon: no superiority of Arab over non-Arab, women's rights, sanctity of life and property. He passed away in Madinah at 63 and is buried in the Prophet's Mosque."]
 ]
},
{
 title:"The Rashidun Caliphs — الخلفاء الراشدون",
 titleUr:"خلفائے راشدین",
 period:"632 – 661 CE",
 events:[
 ["632–634 — Abu Bakr al-Siddiq (RA)","The first caliph. United Arabia after the Ridda (apostasy) wars, compiled the Quran into one book, and sent armies toward Persia and Byzantium. Died after 2 years."],
 ["634–644 — Umar ibn al-Khattab (RA)","Islam's greatest expansion: Persia, Syria, Egypt and Jerusalem conquered. Founded the Hijri calendar, the diwan (state register), and night patrols. Assassinated by a Persian slave."],
 ["644–656 — Uthman ibn Affan (RA)","Compiled the official Quran codex (Mushaf Uthmani) sent to all provinces — the text Muslims read today. Expanded the navy; ruled 12 years. Martyred by rebels while reading the Quran."],
 ["656–661 — Ali ibn Abi Talib (RA)","The Prophet's ﷺ cousin and son-in-law. Faced civil strife (Battles of Jamal and Siffin). Renowned for knowledge, justice and courage. Assassinated in Kufa."]
 ]
},
{
 title:"The Umayyad Caliphate — الدولة الأموية",
 titleUr:"سلطنتِ امویہ",
 period:"661 – 750 CE",
 events:[
 ["661 — Muawiya I founds the dynasty","Capital at Damascus. The empire stretched from Spain to Central Asia — the largest the world had seen."],
 ["680 — Karbala","Husayn ibn Ali (RA), the Prophet's ﷺ grandson, was martyred at Karbala by Yazid's forces — a tragedy mourned by Muslims to this day."],
 ["711 — Spain (Al-Andalus)","Tariq ibn Ziyad crossed into Spain (Gibraltar = Jabal Tariq). Muslim rule in Iberia began, lasting nearly 800 years."],
 ["712 — Sindh","Muhammad ibn Qasim entered Sindh — Islam's arrival in South Asia."],
 ["717–720 — Umar ibn Abd al-Aziz","The 'fifth rightly-guided caliph' — reversed Umayyad excesses, ruled with legendary justice for 2.5 years."]
 ]
},
{
 title:"The Abbasid Golden Age — العصر الذهبي",
 titleUr:"عہدِ زریں",
 period:"750 – 1258 CE",
 events:[
 ["750 — Abbasid Revolution","The Abbasids overthrew the Umayyads; capital moved to Baghdad, the 'City of Peace'."],
 ["786–809 — Harun al-Rashid","Baghdad became the world's richest city. The Bayt al-Hikmah (House of Wisdom) translated Greek, Persian and Indian knowledge."],
 ["9th century — Science flourishes","Al-Khwarizmi (algebra, algorithms), Ibn al-Haytham (optics), Al-Zahrawi (surgery), Ibn Sina's Canon of Medicine — used in Europe for 600 years."],
 ["976–1008 — Cordoba's peak","In Spain, Cordoba's library held 400,000 books; street lighting and running water while London was a mud village."],
 ["1099 — Crusaders take Jerusalem","After 88 years of occupation, Salahuddin al-Ayyubi retook Jerusalem in 1187 — and unlike the Crusaders, spared its people."],
 ["1258 — Fall of Baghdad","The Mongols sacked Baghdad, ending the Abbasid caliphate. Legend says the Tigris ran black with ink from destroyed books."]
 ]
},
{
 title:"The Ottoman Empire — دولتِ عثمانیہ",
 titleUr:"سلطنتِ عثمانیہ",
 period:"1299 – 1922 CE",
 events:[
 ["1299 — Osman I founds the state","A small Anatolian principality that would become a world empire."],
 ["1453 — Conquest of Constantinople","Sultan Mehmed II (Fatih) took the city at 21, fulfilling the Prophet's ﷺ prophecy: 'Constantinople will be conquered...'"],
 ["1520–1566 — Suleiman the Magnificent","The empire's peak: three continents, Suleiman's legal reforms, Sinan's mosques (Suleymaniye), stunning art and architecture."],
 ["1571–1683 — Gradual decline","Lepanto, failed Vienna siege; military and economic stagnation set in."],
 ["1922–1924 — End of the Caliphate","After WWI the empire was dissolved; Mustafa Kemal abolished the caliphate in 1924, ending 1,300 years of caliphal history."]
 ]
},
{
 title:"Islam in South Asia — برصغیر میں اسلام",
 titleUr:"برصغیر میں اسلام",
 period:"712 CE – present",
 events:[
 ["712 — Arrival in Sindh","Muhammad ibn Qasim's expedition brought Islam to the Indus valley."],
 ["1206 — Delhi Sultanate","Qutb-ud-din Aibak founded Muslim rule in Delhi; the Qutb Minar was built."],
 ["1526 — Mughal Empire","Babur's victory at Panipat began 300+ years of Mughal rule — Akbar, Shah Jahan (Taj Mahal, 1632), Aurangzeb."],
 ["1857 — End of Mughal rule","After the War of Independence, the British exiled Bahadur Shah Zafar; direct colonial rule began."],
 ["1947 — Pakistan created","Muhammad Ali Jinnah led the movement for a separate Muslim homeland; Pakistan emerged on 14 August 1947."]
 ]
}
];
const HISTORY_FIGURES = [
["Salahuddin al-Ayyubi","صلاح الدین ایوبی","Retook Jerusalem in 1187 with legendary chivalry — even his enemies admired him."],
["Tariq ibn Ziyad","طارق بن زیاد","Burned his ships at Gibraltar: 'The sea is behind you, the enemy before you.' Conquered Spain in 711."],
["Al-Khwarizmi","الخوارزمی","Father of algebra — the word 'algorithm' comes from his name."],
["Ibn Sina (Avicenna)","ابن سینا","His Canon of Medicine was Europe's medical textbook for 600 years."],
["Ibn al-Haytham","ابن الہیثم","Father of optics; invented the scientific method centuries before Europe."],
["Fatima al-Fihri","فاطمہ الفہری","Founded the world's first university (Al-Qarawiyyin, Fez, 859 CE) — still running."],
["Mehmed II (Fatih)","محمد فاتح","Conquered Constantinople at 21, fulfilling the Prophet's ﷺ prophecy."],
["Tipu Sultan","ٹیپو سلطان","The 'Tiger of Mysore' — pioneered rocket artillery against the British."]
];
