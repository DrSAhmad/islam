/* Fiqh of the Four Imams — bios, methodology, key rulings */
const FIQH_IMAMS = [
{
 name:"Imam Abu Hanifa",
 nameUr:"امام ابو حنیفہ",
 madhhab:"Hanafi — حنفی",
 born:"80 AH / 699 CE — Kufa, Iraq",
 died:"150 AH / 767 CE — Baghdad",
 title:"Al-Imam Al-A'zam (The Greatest Imam)",
 bio:"Nu'man ibn Thabit, known as Abu Hanifa, was a Persian-origin scholar of Kufa. A successful merchant who devoted himself to sacred knowledge, he studied under Ja'far al-Sadiq and learned from companions' students. He is the founder of the oldest Sunni school of law, followed today by most Muslims in South Asia, Turkey, Central Asia and the Balkans.",
 methodology:"Quran → Sunnah → consensus of companions → individual companion opinion → qiyas (analogy) → istihsan (juristic preference). Famous for systematic reasoning and use of analogy.",
 keyPoints:[
 "Wudu: wiping a quarter of the head suffices; washing feet is obligatory",
 "Prayer: hands folded below the navel; quiet 'Ameen'; Witr is wajib (3 rakats)",
 "Fasting: intention can be made until midday for voluntary fasts",
 "Zakat: due on gold/silver at 87.48g / 612.36g thresholds; also on trade goods",
 "Touching a woman does not break wudu unless desire is involved"
 ]
},
{
 name:"Imam Malik ibn Anas",
 nameUr:"امام مالک بن انس",
 madhhab:"Maliki — مالکی",
 born:"93 AH / 711 CE — Madinah",
 died:"179 AH / 795 CE — Madinah",
 title:"Imam Dar al-Hijrah (Imam of the City of Migration)",
 bio:"Malik ibn Anas spent his entire life in Madinah, the city of the Prophet ﷺ. His great work Al-Muwatta is one of the earliest hadith collections. He refused to leave Madinah, saying he would not abandon the city of the Prophet. The Maliki school dominates North and West Africa and parts of the Arabian Peninsula.",
 methodology:"Quran → Sunnah → practice of the people of Madinah ('amal ahl al-Madinah) → companion opinions → qiyas → maslaha (public interest). Unique in giving weight to the living tradition of Madinah.",
 keyPoints:[
 "Wudu: wiping the whole head is obligatory; intention (niyyah) required",
 "Prayer: hands left at sides (sadl) is the famous position; 'Ameen' said quietly",
 "Fasting: intention must be made at night before dawn",
 "Zakat: similar thresholds; emphasizes the practice of Madinah",
 "Dogs: their saliva is pure according to the famous Maliki view"
 ]
},
{
 name:"Imam Muhammad al-Shafi'i",
 nameUr:"امام محمد الشافعی",
 madhhab:"Shafi'i — شافعی",
 born:"150 AH / 767 CE — Gaza",
 died:"204 AH / 820 CE — Egypt",
 title:"Founder of Usul al-Fiqh (Principles of Jurisprudence)",
 bio:"Born in Gaza and raised in Makkah, al-Shafi'i studied under Imam Malik in Madinah and later under students of Abu Hanifa in Baghdad. His book Al-Risala founded the science of legal theory. The Shafi'i school is followed in Egypt, Yemen, East Africa, Indonesia, Malaysia and the Levant coast.",
 methodology:"Quran → Sunnah (with strict hadith criticism) → consensus → companion opinions → qiyas. He limited istihsan and emphasized the Sunnah's authority. Wrote the first systematic work on legal principles.",
 keyPoints:[
 "Wudu: wiping part of the head suffices; touching a non-mahram woman breaks wudu",
 "Prayer: hands folded on chest; 'Ameen' said aloud in congregational prayer",
 "Fasting: intention required each night before dawn",
 "Zakat: due on the standard categories; detailed rules on agricultural produce",
 "Bleeding does not break wudu (unlike the Hanafi view)"
 ]
},
{
 name:"Imam Ahmad ibn Hanbal",
 nameUr:"امام احمد بن حنبل",
 madhhab:"Hanbali — حنبلی",
 born:"164 AH / 780 CE — Baghdad",
 died:"241 AH / 855 CE — Baghdad",
 title:"Imam Ahl al-Sunnah (Imam of the People of Sunnah)",
 bio:"Ahmad ibn Hanbal was the great hadith master of Baghdad who endured imprisonment and torture under the Abbasid caliphs rather than accept the Mu'tazili doctrine that the Quran was created. His Musnad contains nearly 30,000 hadiths. The Hanbali school is followed in Saudi Arabia, Qatar and parts of the Levant.",
 methodology:"Quran → Sunnah (even weak hadith preferred over analogy) → companion fatwas → qiyas only as last resort. The most text-oriented school, closest to the literal sources.",
 keyPoints:[
 "Wudu: wiping the whole head required; eating camel meat breaks wudu",
 "Prayer: hands on chest; detailed rulings from hadith texts",
 "Fasting: intention at night required; strict on things breaking the fast",
 "Zakat: follows the textual evidences closely",
 "Beard: keeping it is strongly emphasized"
 ]
}
];
const FIQH_TOPICS = [
{topic:"Wudu (Ablution) — وضو",
 rows:[
 ["Wiping the head","Quarter suffices","Whole head","Part suffices","Whole head"],
 ["Touching a woman","Does not break*","Does not break","Breaks wudu","Breaks wudu"],
 ["Bleeding","Breaks wudu","Does not break","Does not break","Does not break"],
 ["Intention (niyyah)","Sunnah","Obligatory","Obligatory","Obligatory"]
 ]},
{topic:"Prayer (Salah) — نماز",
 rows:[
 ["Hand position","Below navel","At sides","On chest","On chest"],
 ["'Ameen' aloud","Quiet","Quiet","Aloud","Aloud"],
 ["Witr prayer","Wajib (3 rakat)","Sunnah","Sunnah","Sunnah"],
 ["Reciting behind imam","Disliked","Obligatory (Fatiha)","Obligatory (Fatiha)","Obligatory (Fatiha)"]
 ]},
{topic:"Fasting — روزہ",
 rows:[
 ["Night intention","Not required*","Required","Required","Required"],
 ["Kissing while fasting","Disliked","Allowed","Allowed","Allowed if safe"],
 ["Voluntary fast intent","Until midday","Before dawn","Before dawn","Before dawn"]
 ]},
{topic:"Zakat — زکوٰۃ",
 rows:[
 ["Gold threshold","87.48 g","87.48 g","87.48 g","87.48 g"],
 ["Trade goods","Zakat due","Zakat due","Zakat due","Zakat due"],
 ["Honey","No zakat","Zakat due","No zakat","Zakat due"]
 ]}
];
