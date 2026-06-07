/**
 * data.js — csspastpapers.com
 * All static data used across the practice pages.
 * Edit this file to add more topics, passages, MCQs, or questions.
 */

/* ================================================================
   1. ESSAY TOPICS (100 topics)
   ================================================================ */
const ESSAY_TOPICS = [
  // Democracy & Governance
  { topic: "Democracy is the worst form of government except all others that have been tried.", hint: "Explore Churchill's paradox — critique democracy's flaws while defending it against alternatives." },
  { topic: "Good governance is the cornerstone of national development.", hint: "Link institutions, rule of law, and transparency to sustainable growth." },
  { topic: "Elected governments are not always democratic governments.", hint: "Distinguish electoral democracy from liberal democracy, majoritarianism, rule of law." },
  { topic: "Judicial independence is the last line of defence for democracy.", hint: "Cover judicial activism, constitutional review, Pakistan's Article 184(3)." },
  { topic: "The media: the fourth pillar of the state or the first weapon of chaos?", hint: "Examine media freedom, fake news, press ownership, censorship in Pakistan." },
  { topic: "Federalism as a solution to ethnic and regional grievances.", hint: "Pakistan's 18th amendment, India's federalism, Belgium's consociationalism." },
  { topic: "Constitutional crises are symptoms of weak institutions.", hint: "Pakistan's constitutional history, repeated martial laws, parliamentary fragility." },
  { topic: "Local government is the school of democracy.", hint: "Devolution, de Tocqueville's thesis, Pakistan's local government history." },

  // Pakistan Affairs
  { topic: "The greatest threat to Pakistan is not external but internal.", hint: "Extremism, corruption, institutional decay, economic inequality." },
  { topic: "Pakistan's foreign policy challenges in the 21st century.", hint: "CPEC, regional neighbors, US-China rivalry, Afghan border dynamics." },
  { topic: "Economic development cannot be achieved without political stability.", hint: "Investment climate, rule of law, policy continuity, South East Asian examples." },
  { topic: "Water scarcity: Pakistan's looming existential crisis.", hint: "Indus Waters Treaty, climate change impact, dam controversies, policy gaps." },
  { topic: "Urbanization and its discontents in Pakistan.", hint: "Karachi's crisis, rural-urban migration, smart city planning, slums." },
  { topic: "Energy crisis: the Achilles heel of Pakistan's economy.", hint: "Circular debt, IPPs, renewable transition, power sector reform." },
  { topic: "CPEC: a game changer or a debt trap?", hint: "Infrastructure gains, debt sustainability, sovereignty concerns, geostrategic dimensions." },
  { topic: "Youth unemployment: the ticking time bomb of Pakistan.", hint: "Demographic dividend vs. burden, skills mismatch, NEET generation." },
  { topic: "Agriculture remains the backbone of Pakistan's economy yet it remains neglected.", hint: "Land reforms, water use, value chain, subsistence farming vs. agribusiness." },
  { topic: "The menace of corruption and its impact on national development.", hint: "NAB reforms, accountability narrative, institutional weaknesses, TI index." },
  { topic: "Women empowerment and its role in national development.", hint: "UNDP indices, Aurat March debates, women in STEM, legal reforms." },
  { topic: "Religious extremism: causes, consequences, and cures.", hint: "Madrassa reform, foreign funding, counter-narratives, state complicity." },

  // Social Issues
  { topic: "Education is the most powerful weapon to change the world.", hint: "Address Pakistan's literacy crisis, gender disparity, higher education reform." },
  { topic: "The gap between the rich and the poor is the greatest injustice of our time.", hint: "Income inequality, Piketty's thesis, social mobility, Gini coefficient." },
  { topic: "Child labour is a symptom, not a disease.", hint: "Poverty root causes, bonded labour, EOBI, Brick Kiln cases, policy failures." },
  { topic: "Mental health: the silent crisis of the 21st century.", hint: "Stigma, WHO data, Pakistan's mental health gap, COVID-19 impact." },
  { topic: "Drug addiction is a social problem, not a criminal one.", hint: "Harm reduction, decriminalization debate, rehabilitation vs. prosecution." },
  { topic: "The caste and class system remains entrenched in Pakistani society.", hint: "Feudalism, biradari, social mobility barriers, urban vs. rural divide." },
  { topic: "Population explosion is Pakistan's most underrated challenge.", hint: "TFR data, family planning taboo, resource strain, demographic window." },
  { topic: "Intolerance is the cancer of a civil society.", hint: "Blasphemy law abuse, minority rights, lynching, social media hate speech." },
  { topic: "Street crime and its socio-economic roots.", hint: "Urban poverty, unemployment, policing failures, rehabilitation programs." },

  // Education
  { topic: "Rote learning kills creativity and critical thinking.", hint: "Pakistan's examination system, Bloom's taxonomy, project-based learning." },
  { topic: "The medium of instruction debate: Urdu, English, or mother tongue?", hint: "Linguistic justice, colonial legacy, multilingual education research." },
  { topic: "Higher education without quality is a degree factory.", hint: "HEC reforms, plagiarism crisis, employability gap, global rankings." },
  { topic: "Public education in Pakistan is a tale of two worlds.", hint: "Elite vs. state schools, Oxford vs. katchi abadi, social stratification." },
  { topic: "Technical and vocational training: the missing link in Pakistan's economy.", hint: "TEVTA, skill gap, German model, blue-collar dignity, export potential." },

  // Environment & Science
  { topic: "Climate change: an existential threat or a manageable challenge?", hint: "Balance scientific consensus with economic realities of developing nations." },
  { topic: "Pakistan contributes 1% of emissions but faces 10% of the world's climate vulnerability.", hint: "Floods 2022, glacial melts, agriculture impact, climate justice argument." },
  { topic: "Deforestation is not just an environmental problem but an economic and security one.", hint: "KP forests, timber mafia, watershed protection, biodiversity loss." },
  { topic: "Renewable energy: Pakistan's untapped potential.", hint: "Solar irradiance, wind corridors, hydro potential, financing challenges." },
  { topic: "Artificial Intelligence: a boon or a threat to humanity?", hint: "Job displacement, ethical dilemmas, warfare, and developing world access gaps." },
  { topic: "The digital divide perpetuates inequality in the information age.", hint: "Internet access, digital literacy, rural-urban gap, e-governance." },
  { topic: "Space exploration: a luxury for rich nations or a shared human imperative?", hint: "SpaceX, SUPARCO, dual-use technology, scientific returns, resource extraction." },
  { topic: "Biotechnology: the double-edged sword of modern science.", hint: "GMOs, gene editing, bioweapons, agricultural revolution, CRISPR debate." },

  // International Relations & Geopolitics
  { topic: "The world is not becoming more peaceful — it is just changing the nature of its conflicts.", hint: "Proxy wars, cyberwarfare, economic coercion, grey-zone conflicts." },
  { topic: "The United Nations has failed as a peacekeeping body.", hint: "Veto power paralysis, Syria, Myanmar, reform proposals, post-WWII design." },
  { topic: "Nationalism vs. globalization: an irreconcilable tension.", hint: "Brexit, Trump, BRI, WTO, identity politics, deglobalization trend." },
  { topic: "The rise of China and its implications for the global order.", hint: "Thucydides Trap, BRI, South China Sea, Taiwan, US-China decoupling." },
  { topic: "Nuclear deterrence remains the only guarantor of peace in South Asia.", hint: "MAD theory, credibility, first vs. second strike, Pakistan's full-spectrum deterrence." },
  { topic: "Sanctions as a foreign policy tool: effective or counterproductive?", hint: "Iran, Russia, North Korea — effectiveness debate, humanitarian impact, alternatives." },
  { topic: "Afghanistan: the graveyard of empires and the nursery of instability.", hint: "Historical pattern, Taliban 2.0, TTP, refugee crisis, Pakistan's strategic depth." },
  { topic: "The Abraham Accords: a new dawn or a betrayal of Palestinian rights?", hint: "Gulf normalization, two-state solution, Palestinian reaction, US role." },

  // Economics
  { topic: "Free market capitalism has failed the developing world.", hint: "Washington Consensus, structural adjustment, inequality, mixed economy alternatives." },
  { topic: "Microfinance: a poverty alleviation tool or a debt trap for the poor?", hint: "Grameen Bank, Akhuwat, repayment rates, women empowerment, evidence debate." },
  { topic: "Remittances: a lifeline that masks structural economic failure.", hint: "Pakistan's $27B remittances, brain drain, Dutch disease, structural reform need." },
  { topic: "Tax reform is the foundation of a self-reliant Pakistani economy.", hint: "Tax-to-GDP ratio, agriculture tax, property tax, FBR culture, documentation." },
  { topic: "Tourism: Pakistan's sleeping giant.", hint: "Northern areas, Gandhara sites, visa reforms, infrastructure, safety narrative." },
  { topic: "The informal economy: Pakistan's largest sector that the state ignores.", hint: "60% of GDP, labour rights, documentation challenges, policy inclusion." },

  // Technology & Media
  { topic: "Social media has done more harm than good to society.", hint: "Mental health, misinformation, political polarization vs. connectivity and activism." },
  { topic: "Internet shutdowns are an act of governance, not security.", hint: "Pakistan's shutdown record, economic cost, right to information, protest suppression." },
  { topic: "Cybersecurity is the new frontier of national security.", hint: "State-sponsored hacking, critical infrastructure, PEMRA, data sovereignty." },
  { topic: "The mobile phone: the greatest equalizer or the greatest distraction?", hint: "Financial inclusion, e-learning, addiction, attention economy, rural connectivity." },
  { topic: "E-commerce can transform Pakistan's small business landscape.", hint: "Daraz, Shopify exports, logistics infrastructure, digital payments, women entrepreneurs." },
  { topic: "Fake news is more dangerous than no news.", hint: "Infodemic, election manipulation, WhatsApp misinformation, media literacy solutions." },

  // Philosophy & Culture
  { topic: "A society that loses its cultural identity loses its soul.", hint: "Globalization, Westernization, indigenous knowledge, identity politics, linguistic diversity." },
  { topic: "History is written by the victors.", hint: "Colonial historiography, subaltern studies, Pakistan's textbook narratives." },
  { topic: "Tolerance is not agreement — it is the decision to coexist despite disagreement.", hint: "Religious tolerance, pluralism, Mill's harm principle, Pakistan's blasphemy context." },
  { topic: "Art and literature are the mirrors of society.", hint: "Faiz, Manto, colonial-era writing, censorship, contemporary Pakistani literature." },
  { topic: "Language is not just a tool of communication but of power.", hint: "Urdu-English divide, regional languages, linguistic imperialism, Chomsky." },
  { topic: "The clash of civilizations: a self-fulfilling prophecy?", hint: "Huntington's thesis, post-9/11 world, interfaith dialogue, Islamophobia." },

  // Ethics & Human Rights
  { topic: "Human rights are universal, not Western impositions.", hint: "Cultural relativism vs. universalism, UDHR, CEDAW, Pakistan's reservations." },
  { topic: "Capital punishment: justice or state-sanctioned murder?", hint: "Pakistan's death row, Amnesty data, deterrence debate, wrongful conviction risk." },
  { topic: "Refugee rights in an age of nationalism.", hint: "Afghan refugees, 1951 Refugee Convention, non-refoulement, burden-sharing." },
  { topic: "Press freedom is the canary in the coal mine of democracy.", hint: "CPJ rankings, journalist murders, PEMRA regulations, digital surveillance." },
  { topic: "Poverty is the greatest human rights violation.", hint: "Sen's capability approach, absolute vs. relative poverty, SDG 1, structural causes." },
  { topic: "Surveillance capitalism: selling your attention and your freedom.", hint: "Shoshana Zuboff, data brokers, GDPR, Pakistan's data protection void." },

  // Health
  { topic: "Universal healthcare is not a luxury but a fundamental right.", hint: "Sehat Sahulat, NHS model, out-of-pocket spending, insurance vs. state provision." },
  { topic: "COVID-19 revealed the fragility of global public health infrastructure.", hint: "WHO failures, vaccine nationalism, Pakistan's response, One Health framework." },
  { topic: "Polio eradication in Pakistan: a test of state capacity.", hint: "Conspiracy theories, vaccinators' murders, programmatic failures, surveillance." },
  { topic: "Diet and lifestyle diseases are the new epidemic of urban Pakistan.", hint: "Diabetes, hypertension, processed food, physical inactivity, awareness gap." },

  // Gender
  { topic: "Gender equality is not just a women's issue — it is a national development imperative.", hint: "Economic returns, labor force participation, SDG 5, men as allies." },
  { topic: "Honour killing is not culture — it is murder.", hint: "Tribal law, Qandeel Baloch case, Pakistan's legal framework, societal silence." },
  { topic: "Child marriage: tradition or human rights violation?", hint: "Sindh Child Marriage Restraint Act, age of consent debate, educational impact." },

  // Philosophy of Life
  { topic: "The pen is mightier than the sword, but only if someone is willing to read.", hint: "Literacy, free press, digital age, information warfare, intellectual leadership." },
  { topic: "True patriotism is service, not sentiment.", hint: "Distinguish nationalism from civic duty, volunteerism, tax compliance, brain drain." },
  { topic: "Simplicity is the ultimate sophistication.", hint: "Da Vinci's principle applied to governance, design, education, and lifestyle." },
  { topic: "In a world of abundance, hunger remains a political choice.", hint: "Global food security, food waste, supply chain politics, Pakistan's wheat crisis." },
  { topic: "Knowledge without character is a dangerous weapon.", hint: "Educated elite corruption, technocracy failures, moral leadership deficit." },
  { topic: "The greatest leaders are those who make themselves obsolete.", hint: "Institutional building, Nelson Mandela, Jinnah, leadership succession in Pakistan." },
  { topic: "Speed of change has outpaced humanity's ability to adapt.", hint: "Fourth Industrial Revolution, social disruption, policy lag, psychological toll." },
  { topic: "Patience is the companion of wisdom.", hint: "Short-termism in politics and economics, long-term thinking, delayed gratification research." },

  // Islamic Studies angle
  { topic: "The idea of a welfare state in Islam: theory and practice.", hint: "Zakat system, Bait-ul-Mal, Medina Charter, modern Islamic states comparison." },
  { topic: "Ijtihad is not optional — it is obligatory for Muslim progress.", hint: "Closing of ijtihad gates, Iqbal's reconstruction, contemporary Islamic thought." },
  { topic: "Islam and science: historical partnership or modern antagonism?", hint: "Golden Age, Al-Khawarizmi, modern Muslim world's scientific output, secularism debate." },
  { topic: "Religious moderation is the only sustainable path for Muslim nations.", hint: "OIC, Turkey model, Saudi reform, Pakistan's oscillation between extremes." },

  // Additional topics to reach 103
  { topic: "The future belongs to those who prepare for it today.", hint: "Long-term planning, education investment, state foresight, individual responsibility." },
  { topic: "Bureaucracy: the steel frame or the iron cage of Pakistan?", hint: "Weber's bureaucracy, CSS history, red tape, elite capture, reform proposals." },
  { topic: "Justice delayed is justice denied — Pakistan's judicial crisis.", hint: "Case backlogs, lower courts, plea bargaining, NADRA-linked reforms, legal aid." },
  { topic: "The gig economy: freedom or exploitation?", hint: "Freelancing, Fiverr Pakistan boom, labour rights void, social protection gaps." },
  { topic: "Pakistan's relationship with the IMF: necessity or dependency?", hint: "Balance of payments cycles, structural conditionality, debt trap, domestic reforms." },
  { topic: "Can Pakistan achieve middle-income status by 2047?", hint: "GDP growth requirements, structural transformation, human capital, governance reforms needed." },
  { topic: "The Indus Valley Civilization: lessons for a modern Pakistan.", hint: "Urban planning, trade networks, decline theories, identity and heritage, archaeological preservation." },
  { topic: "Is South Asia condemned to rivalry, or can it choose cooperation?", hint: "SAARC failures, India-Pakistan relations, regional trade potential, identity politics." },
  { topic: "Prison reform: punishment or rehabilitation?", hint: "Pakistan's prison conditions, recidivism, juvenile justice, international standards, overcrowding." },
  { topic: "The paradox of plenty: why resource-rich nations often fail to develop.", hint: "Dutch disease, resource curse theory, Nigeria, Venezuela, Balochistan parallel." }
];


/* ================================================================
   2. PRECIS PASSAGES (50 passages — short/medium/long mix)
   ================================================================ */
const PRECIS_PASSAGES = [
  // ── SHORT (80–120 words) ───────────────────────────────────
  {
    text: "A nation's ability to prosper depends not merely on its natural resources or geographic position but on the quality of its human capital. Countries like Japan and South Korea, which lack abundant natural resources, have achieved remarkable economic success through sustained investment in education and skill development. Pakistan, despite possessing fertile land, mineral wealth, and a young population, continues to underperform economically. The missing link is not opportunity but the political will and institutional capacity to invest in citizens rather than in short-term political gains. Without educated, healthy, and skilled citizens, no amount of foreign aid or investment can substitute for the human foundation of development.",
    wordCount: 107,
    level: "Short"
  },
  {
    text: "Corruption is not simply a moral failing but a systemic disease that undermines the foundations of governance and economic development. When public officials divert resources meant for schools, hospitals, and infrastructure to personal gain, the entire citizenry suffers. The most vulnerable populations bear the greatest burden, as they depend most heavily on state services. Anti-corruption efforts in Pakistan have been inconsistent and politically motivated, often targeting opponents rather than genuinely reforming institutions. Sustainable reform requires independent accountability bodies, transparent procurement systems, and a culture where integrity is rewarded rather than punished.",
    wordCount: 92,
    level: "Short"
  },
  {
    text: "Water is no longer merely an environmental concern — it is rapidly becoming a matter of national security. Pakistan faces a dual crisis of water scarcity and water mismanagement. The Indus river system, which sustains over 200 million people, is under increasing stress from population growth, climate change, and inefficient agricultural practices. Despite being an agrarian economy, Pakistan loses enormous quantities of water to evaporation, seepage, and outdated flood irrigation. Without urgent investment in water storage, conservation technology, and equitable distribution policies, the country risks a water crisis that would dwarf any previous economic or political challenge.",
    wordCount: 99,
    level: "Short"
  },
  {
    text: "The relationship between free press and democracy is not merely theoretical — it is empirically verifiable. Nations with vibrant, independent media tend to have stronger democratic institutions, more accountable governments, and better economic performance. A free press serves as the watchdog of public interest, exposing corruption, informing citizens, and facilitating public debate. In Pakistan, however, media freedom has faced persistent threats through regulatory pressure, physical attacks on journalists, and economic coercion of media houses. A democracy without a free press is merely an electoral process without substance.",
    wordCount: 90,
    level: "Short"
  },
  {
    text: "The smartphone revolution has compressed distances, democratized information, and connected billions. Yet it has simultaneously created new forms of addiction, shortened attention spans, and enabled the viral spread of misinformation. For developing nations like Pakistan, mobile internet has leapfrogged traditional infrastructure, bringing financial services, healthcare information, and educational content to remote areas. But the same platforms that empower also polarize, as algorithms amplify outrage and create echo chambers that deepen social divisions. The technology itself is neutral; the governance frameworks we build around it determine whether it serves human flourishing or undermines it.",
    wordCount: 97,
    level: "Short"
  },
  {
    text: "Climate justice is not merely an environmental argument but a moral and economic one. The nations least responsible for greenhouse gas emissions are disproportionately vulnerable to climate impacts. Pakistan emits less than one percent of global carbon dioxide yet faces floods, droughts, and glacial lake outburst floods that cost billions of dollars annually. The 2022 floods affected one third of the country, displacing millions and destroying crops that fed a nation already struggling with food insecurity. The international community's climate finance commitments have been slow and insufficient. For vulnerable nations, climate action is not a choice but a survival imperative.",
    wordCount: 101,
    level: "Short"
  },

  // ── MEDIUM (120–180 words) ─────────────────────────────────
  {
    text: "The relationship between education and national development is neither simple nor linear, yet few scholars dispute its fundamental importance. A nation's capacity to grow economically, to innovate technologically, and to sustain democratic institutions is deeply intertwined with the quality and reach of its educational system. Pakistan, as a developing state with enormous human capital potential, finds itself at a crossroads. With over 22 million out-of-school children and a literacy rate that lags behind regional peers, the country faces a formidable challenge. Investment in primary and secondary education must be treated not merely as a social expenditure but as the most essential infrastructure of the modern state. Without educated citizens capable of critical thought and professional competence, no amount of foreign investment or natural resource wealth can substitute for the foundational deficit that illiteracy creates. Education, therefore, is not a sector among many — it is the sector upon which all others rest.",
    wordCount: 152,
    level: "Medium"
  },
  {
    text: "Urbanization is one of the most powerful forces reshaping Pakistani society. The country is experiencing one of the fastest rates of urban growth in South Asia, with cities ill-equipped to absorb the influx of rural migrants seeking economic opportunity. Karachi, Lahore, and Faisalabad are expanding outward in sprawling, unplanned settlements that lack clean water, sanitation, and legal land tenure. The political system, still dominated by feudal interests with a stake in keeping rural populations dependent, has shown little appetite for the bold investment in urban planning that this transformation demands. Yet urbanization also carries seeds of progress — cities are historically engines of innovation, social mobility, and democratic participation. The question is whether Pakistan can manage this transition strategically or will allow it to accumulate into an urban crisis of historic proportions.",
    wordCount: 144,
    level: "Medium"
  },
  {
    text: "The concept of national security has undergone a profound transformation in the post-Cold War era. Where once it was defined almost exclusively in military terms — armies, weapons, and territorial defence — contemporary analysts increasingly recognize that security encompasses economic stability, food security, environmental sustainability, cyber resilience, and social cohesion. Pakistan's security discourse, long dominated by conventional military considerations, has been slow to incorporate these broader dimensions. The country spends a disproportionate share of its GDP on defence relative to spending on health and education. A nation whose citizens cannot read, cannot access clean water, and cannot afford medical care is not secure in any meaningful sense, regardless of the sophistication of its weapons systems. Redefining national security to centre on human security is not idealism — it is pragmatic statecraft for a resource-constrained developing nation.",
    wordCount: 146,
    level: "Medium"
  },
  {
    text: "The role of women in Pakistan's economic development remains critically underutilized. Female labor force participation in Pakistan is among the lowest in the world, hovering around 25 percent compared to a global average exceeding 48 percent. This is not a reflection of women's capabilities but of structural barriers including cultural norms, lack of childcare infrastructure, discriminatory inheritance laws, restricted mobility, and workplace harassment. Research consistently demonstrates that increasing women's economic participation is one of the highest-return investments a developing country can make. The World Bank estimates that eliminating gender gaps in employment would increase per capita income by over 20 percent. Beyond the economic argument, women's empowerment is a question of fundamental justice. A society that excludes half its talent from productive contribution is not only inefficient but profoundly unjust.",
    wordCount: 141,
    level: "Medium"
  },
  {
    text: "Artificial intelligence represents both the greatest opportunity and the most complex governance challenge of the 21st century. Its applications span medicine, agriculture, education, transport, and national security, promising to compress decades of development into years for countries willing to embrace it strategically. Yet the same technology that can diagnose cancer from a smartphone image can also automate millions of jobs, generate convincing deepfakes for political manipulation, and concentrate economic power in a handful of technology corporations. For developing nations like Pakistan, the risk is not merely being left behind in the AI race but of having AI-driven disruption import unemployment and social instability before domestic capacity to manage it has been built. The governance frameworks, regulatory institutions, and educational curricula required to navigate the AI transition must be developed now, before the technology's pace of change makes reactive policy obsolete.",
    wordCount: 154,
    level: "Medium"
  },
  {
    text: "China's Belt and Road Initiative represents the most ambitious infrastructure investment program in modern history, spanning over 140 countries and promising trillions of dollars in roads, ports, railways, and energy facilities. For Pakistan, the China-Pakistan Economic Corridor is the flagship BRI project, promising to connect Gwadar on the Arabian Sea to Kashgar in western China through a network of highways, pipelines, and power plants. Proponents argue that CPEC will end Pakistan's chronic energy shortages, create hundreds of thousands of jobs, and integrate the country into regional and global supply chains. Critics counter that the terms of financing create unsustainable debt obligations, that economic benefits flow disproportionately to Chinese firms and workers, and that the strategic implications of deep economic integration with China create new dependencies that constrain Pakistan's foreign policy autonomy. The truth likely lies somewhere in between these extremes, requiring careful negotiation, transparency, and domestic capacity building to realize the potential benefits while managing the risks.",
    wordCount: 168,
    level: "Medium"
  },
  {
    text: "The menace of extremism has roots far deeper than ideology. Scholars have identified a complex web of contributing factors: economic marginalization, political exclusion, foreign interference, weak state institutions, and the exploitation of legitimate grievances by radical organizations. In Pakistan, decades of strategic use of militant groups as instruments of foreign policy created an infrastructure of violence that eventually turned inward. The state's response has oscillated between military operations and peace deals, rarely addressing the socio-economic and governance failures that make radicalization attractive to young men with few alternatives. Counter-extremism requires not only security measures but sustained investment in education, economic opportunity, and civic participation — making the state relevant and trustworthy in communities where it has been absent or predatory for generations. There are no quick fixes; the problem was built over decades and will require decades to unwind.",
    wordCount: 149,
    level: "Medium"
  },
  {
    text: "Democratic backsliding is one of the defining political trends of our era. Nations that appeared to be on steady democratic trajectories have experienced significant erosions of civil liberties, press freedom, judicial independence, and electoral integrity. Hungary, Turkey, and India have all seen democratic institutions weakened by elected leaders who use democratic mechanisms to consolidate power and weaken checks and balances. Political scientists call this process autocratization — not the dramatic coup d'état of the 20th century but the slow, constitutional dismantling of the guardrails that constrain executive power. Pakistan's own democratic history is a cautionary tale of how fragile the democratic gains of any particular era can be in the absence of strong institutions, a vibrant civil society, and a political culture that values accountability over partisan loyalty.",
    wordCount: 143,
    level: "Medium"
  },

  // ── LONG (200–280 words) ───────────────────────────────────
  {
    text: "Climate change is no longer a distant hypothetical discussed in academic journals but an immediate reality reshaping the lived experience of millions across South Asia. Pakistan, which contributes less than one percent of global greenhouse gas emissions, finds itself disproportionately among the world's most climate-vulnerable nations, ranked among the top ten most affected countries by the Global Climate Risk Index. The catastrophic floods of 2022, which submerged approximately one-third of the country, killed over 1,700 people, displaced more than 33 million, and caused economic losses estimated at $30 billion, offered a brutal illustration of this vulnerability. The challenge is compounded by the country's heavy dependence on agriculture, which employs the largest share of its workforce and remains acutely sensitive to shifts in rainfall patterns, temperature extremes, and glacial melts in the northern mountain ranges that feed the Indus river system. Pakistan possesses over 7,000 glaciers, more than any country outside the polar regions, and many are retreating at alarming rates, threatening both catastrophic flooding in the near term and severe water scarcity in the longer term. Addressing this crisis requires not only aggressive mitigation measures and adaptive strategies within Pakistan but also a more assertive and unified voice in international climate negotiations, where the interests of vulnerable developing nations must be forcefully represented against the historically large emitters who bear the greater responsibility for the crisis but who have the least immediate incentive to act. Climate justice — the principle that those who contributed least to the problem should not disproportionately bear its costs — must become the central organizing principle of global climate diplomacy.",
    wordCount: 247,
    level: "Long"
  },
  {
    text: "The question of whether democracy is the most suitable system for all nations has occupied political philosophers and practitioners for centuries. Those who argue for universal democratic applicability point to the empirical record: democracies rarely go to war with one another, tend to produce more prosperous and equitable societies over the long term, and provide institutional mechanisms for peaceful transfers of power that prevent the cycles of violent political succession that have plagued authoritarian states. The democratic peace theory, one of the most robust findings in international relations scholarship, suggests that the spread of democracy is the most reliable path to global stability. Critics of democratic universalism, however, argue that Western liberal democracy represents a particular historical and cultural configuration, shaped by Enlightenment philosophy, the Protestant Reformation, and the specific political struggles of Western Europe. They point to the failures of externally imposed democracy in Iraq and Afghanistan, to the electoral authoritarian regimes in Asia and Africa that hold elections without substantive democratic accountability, and to the democratic backsliding of countries like Hungary and Turkey to suggest that democratic consolidation requires specific preconditions — levels of economic development, civic culture, independent institutions, and educated citizenry — that cannot simply be transplanted. Pakistan's own democratic experience reflects this complexity, with repeated military interventions interrupting democratic processes and elected governments themselves often failing to meet the standards of accountability and institutional respect that democratic governance requires. The debate is not merely academic; it shapes the foreign policies of major powers and the development strategies of international institutions in ways that have profound consequences for billions of people.",
    wordCount: 261,
    level: "Long"
  },
  {
    text: "The energy crisis that has gripped Pakistan for the past two decades represents one of the most consequential failures of public policy in the country's history. At its heart lies a fundamental mismatch between the structure of electricity generation contracts — heavily weighted toward expensive imported fuel — and the state's capacity and willingness to ensure that those costs are borne by those who consume the electricity. Independent Power Producers (IPPs) were invited into the sector with generous guaranteed return arrangements that made sense when fuel prices were low and the state anticipated strong growth in electricity demand. When fuel prices rose, demand growth disappointed, and fiscal pressures mounted, the state began accumulating arrears rather than either raising tariffs to cost-recovery levels or renegotiating contracts. The resulting circular debt, now amounting to trillions of rupees, has become a permanent feature of the fiscal landscape, consuming budgetary resources that could otherwise fund education, health, and infrastructure. The irony is that the system that was designed to solve the energy crisis has itself become a source of chronic fiscal instability. Pakistan's renewable energy potential — exceptional solar radiation across the country, significant wind corridors in Sindh and Balochistan, and untapped hydropower resources in the northern mountains — offers an alternative path, but realizing it requires precisely the kind of long-term planning, institutional capacity, and political will to make difficult decisions that the energy sector's history suggests is in short supply. The energy crisis is, at its deepest level, not a technical problem but a governance problem.",
    wordCount: 258,
    level: "Long"
  },
  {
    text: "The rapid spread of social media platforms has fundamentally altered the information environment in which democracies operate, with consequences that political scientists, psychologists, and technologists are only beginning to understand. The original promise of social media as a democratizing force — giving voice to the voiceless, connecting activists across borders, enabling citizens to hold power accountable — was genuine and has been partially realized. The Arab Spring, while its outcomes proved deeply mixed, demonstrated that social media platforms could coordinate popular movements at a speed and scale previously impossible. In Pakistan, social media has played a significant role in political mobilization, from PTI's remarkable 2011 Lahore jalsa to the current digital political warfare that defines the country's fractious politics. Yet the same characteristics that make social media effective at mobilization — algorithmic amplification of emotionally engaging content, frictionless sharing without verification, the collapse of editorial gatekeeping — also make it an extraordinarily effective vehicle for misinformation, hate speech, and political manipulation. Research from MIT found that false news spreads six times faster than true news on Twitter, and that emotionally arousing content consistently outperforms accurate but dry factual reporting. The platforms' advertising-based business models create a structural incentive to maximize engagement regardless of whether the engaging content is true, constructive, or socially harmful. Regulatory responses vary widely: the European Union has moved toward comprehensive platform regulation through its Digital Services Act, while countries like Pakistan have oscillated between internet shutdowns and ad hoc content demands that serve political rather than public interest goals. No society has yet found the balance between free expression and the governance of information quality that a functioning democracy requires.",
    wordCount: 271,
    level: "Long"
  },
  {
    text: "Pakistan's economic history is a story of repeated near-misses. In the 1960s, the country was cited alongside South Korea as an example of successful development, and World Bank economists held up its planning model as worthy of emulation. In the 1980s, remittances and Cold War strategic rents from the United States sustained growth without requiring structural reform. In the 2000s, post-9/11 strategic aid and consumer credit expansion generated a decade of growth that concealed a deteriorating industrial base and a rapidly expanding fiscal deficit. In each of these cycles, a period of apparent prosperity was followed by a balance of payments crisis, an appeal to the International Monetary Fund, and a painful stabilization program that squeezed consumption without addressing the structural causes of vulnerability. The recurring diagnosis from every credible economic analysis is consistent: a tax-to-GDP ratio among the world's lowest, an agriculture sector largely exempt from income tax, a state enterprise sector that consumes subsidies without producing value, a regulatory environment that discourages formal business registration and investment, and a security expenditure profile that crowds out investment in education and health. Transforming this pattern requires not merely technical economic reform but a fundamental political bargain in which the elite constituencies — feudal landowners, large industrialists, military-connected commercial interests — accept a larger share of the tax burden in exchange for a more functional state. That bargain has been deferred for generations, and the cost of continued deferral is measured in foregone development, emigrating talent, and a young population growing up without the opportunities their potential deserves.",
    wordCount: 268,
    level: "Long"
  },
  {
    text: "The intersection of religion and politics has defined Pakistani society since its inception as an ideological state founded in the name of Islam. The founders of Pakistan, particularly Jinnah, envisioned a modern Muslim state where religion would define cultural and social identity without encroaching on the rights of minorities or the functioning of democratic institutions. This vision has been progressively complicated by successive governments that instrumentalized religion for political legitimacy, by the gradual Islamization of laws and educational curricula particularly during the Zia era, and by the rise of militant organizations that drew on religious ideology to justify violence. Today, the relationship between the state and religious parties reflects an uneasy coexistence in which political parties depend on religious constituencies for electoral support and street power, while religious organizations depend on political access and patronage for resources and influence. The result is a system of mutual accommodation that resists reform of laws and policies — from the blasphemy statutes to the madrassa curriculum — that perpetuate intolerance and constrain individual freedoms. Reform requires neither secularism in the Western sense nor theocracy but a principled renegotiation of the boundary between religious and civic life that protects genuine religious freedom, including the freedom of minorities and dissenters, while maintaining the democratic foundations of political governance. This is as much a theological challenge — requiring the engagement of progressive Islamic scholarship — as it is a political one, and the two dimensions must advance together.",
    wordCount: 256,
    level: "Long"
  },

  // ── More MEDIUM passages ───────────────────────────────────
  {
    text: "Technical and vocational education has long been the neglected stepchild of Pakistan's education policy, consistently underfunded and socially stigmatized relative to the academic stream leading to university degrees. Yet it is precisely the technical and vocational pipeline that produces the electricians, plumbers, machinists, software developers, and construction workers on whom economic activity depends. Germany's dual education system, which combines classroom instruction with structured workplace apprenticeships, has produced one of the world's most productive and adaptable industrial workforces. Pakistan's attempts to replicate aspects of this model through TEVTA and similar institutions have been hampered by inadequate industry linkage, outdated curricula, poorly qualified instructors, and the persistent social stigma that treats vocational training as a consolation prize rather than a prestigious pathway. Changing this requires both policy reform and cultural shift.",
    wordCount: 138,
    level: "Medium"
  },
  {
    text: "The population of Pakistan crossed 230 million in the 2023 census, making it the world's fifth most populous nation. With a total fertility rate still above three children per woman and a population growth rate that adds approximately four million people annually, Pakistan's demographic trajectory poses serious challenges to its capacity for development. The educational system is already struggling to provide quality schooling for existing students; the health system cannot adequately serve present needs; the housing stock in major cities is grossly insufficient; and the labour market, unable to absorb the eight hundred thousand young people entering it every month, produces chronic unemployment and underemployment among youth. The window for a demographic dividend — the economic windfall that comes when a young working-age population is large relative to dependents — is closing without being captured, as the precondition of a skilled, educated workforce has not been met. Family planning programs remain controversial, underfunded, and politically hamstrung by social and religious resistance that successive governments have been unwilling to challenge.",
    wordCount: 170,
    level: "Medium"
  },
  {
    text: "The judiciary plays an indispensable role in democratic governance as the guardian of constitutional rights and the check on executive overreach. Pakistan's Supreme Court has at various times been both a defender of constitutionalism and an enabler of authoritarian consolidation. The doctrine of necessity, invoked repeatedly by the court to legitimize military takeovers, represents one of the most damaging jurisprudential precedents in the country's legal history. More recently, judicial activism through suo motu proceedings has generated both acclaim — for cases exposing corruption and protecting citizens — and criticism for overstepping into legislative and executive domains in ways that blur the separation of powers. The independence of the judiciary requires not only security of tenure for judges but a culture of restraint, professionalism, and fidelity to constitutional text rather than political outcomes.",
    wordCount: 143,
    level: "Medium"
  },
  {
    text: "The concept of soft power — the ability of a nation to attract and persuade rather than coerce — has taken on increasing relevance in contemporary international relations. Joseph Nye, who coined the term, argued that a country's culture, values, and foreign policies can be powerful instruments of influence when they resonate as legitimate and admirable in the eyes of others. For Pakistan, soft power potential lies in its rich Sufi musical heritage, its Gandharan archaeological treasures, its diaspora communities in the United Kingdom and North America, and the growing global interest in its northern mountain landscapes. Yet realizing this potential has been repeatedly undermined by the country's association with terrorism, its treatment of minorities, and governance failures that undercut the credibility of its democratic claims. Building soft power requires sustained investment in cultural diplomacy, tourism infrastructure, educational exchange, and above all the domestic governance improvements that would give Pakistan's self-presentation genuine credibility.",
    wordCount: 161,
    level: "Medium"
  },
  {
    text: "The refugee crisis emanating from Afghanistan represents one of the most protracted and underfunded humanitarian challenges in the world. Pakistan has hosted millions of Afghan refugees for over four decades, longer than any other country in history, without adequate burden-sharing by the international community. The economic costs — in strain on public services, labour market competition, and security challenges — have been enormous and disproportionately borne by Pakistan's frontier regions that were already among the country's poorest. The international community's 1951 Refugee Convention framework was designed for a post-World War II European context and has proven inadequate for managing large-scale, protracted displacement in the developing world. A more equitable system of refugee management would require wealthier nations to contribute more substantially to the costs and to accept a larger share of refugee resettlement, relieving the burden on frontline states.",
    wordCount: 154,
    level: "Medium"
  },
  {
    text: "Leadership is among the most studied and least understood phenomena in the social sciences. Decades of research have identified traits, behaviours, and contextual factors that correlate with effective leadership, yet the predictive power of any model remains limited. What we do know is that transformational leadership — the capacity to inspire genuine commitment rather than mere compliance, to articulate a compelling vision, and to develop the capabilities of followers rather than simply directing them — consistently outperforms transactional management in complex, dynamic environments. Pakistan's governance challenges are, in significant part, leadership challenges. The country possesses the human capital, institutional frameworks, and natural resources to develop rapidly, but the translation of potential into performance requires leaders at every level of the state who combine vision with integrity, technical competence with political skill, and the courage to make decisions that serve the long-term public good over short-term political survival.",
    wordCount: 158,
    level: "Medium"
  },
  {
    text: "Food security, defined as consistent access by all people to sufficient, safe, and nutritious food, remains an elusive goal for approximately 800 million people globally and for a substantial portion of Pakistan's population. Pakistan paradoxically is a major agricultural producer — among the world's top producers of wheat, cotton, sugarcane, and rice — yet suffers from high rates of malnutrition, particularly among women and children. The paradox reflects not a production problem but a distribution, economic access, and governance problem. Price volatility, post-harvest losses estimated at 15 to 20 percent of production, inadequate cold chain infrastructure, and the dominance of middlemen who capture value at the expense of both farmers and consumers combine to produce a food system that underserves much of the population it should sustain.",
    wordCount: 140,
    level: "Medium"
  },
  {
    text: "The internet has fundamentally altered the architecture of knowledge and learning, creating possibilities for democratic access to education that were literally inconceivable a generation ago. A student in rural Sindh today can, in principle, access lectures from MIT, research from the world's leading universities, tutorials from global experts, and collaborative communities of learners across every discipline. Massive Open Online Courses (MOOCs), YouTube educational channels, Wikipedia, and a proliferating ecosystem of learning platforms have demolished the geographic and economic barriers that previously confined quality education to privileged institutions in wealthy countries. Yet the reality of digital learning in Pakistan remains far short of this potential. Connectivity gaps, device costs, digital literacy deficits, the absence of high-quality content in Urdu and regional languages, and the structural demands of traditional employment that leave little time for self-directed learning all constrain uptake. Bridging the gap between digital learning's promise and its practice in Pakistan requires targeted public investment, not mere optimism about technology's transformative power.",
    wordCount: 172,
    level: "Medium"
  },

  // ── More SHORT passages ────────────────────────────────────
  {
    text: "The concept of merit in public service is under constant pressure from nepotism, political patronage, and ethnic or regional favoritism in Pakistan. The CSS examination was designed precisely to create a merit-based gateway to the civil service, recruiting capable individuals regardless of background. Yet even where meritocratic selection operates, the incentive structures within the bureaucracy — transfers, postings, and promotions — remain deeply politicized, rewarding compliance over competence and loyalty over performance. The result is a civil service demoralized by the disconnect between the ideals it was recruited on and the realities it operates within. Civil service reform requires both procedural safeguards against political interference and a cultural shift that genuinely values and rewards professional excellence.",
    wordCount: 119,
    level: "Short"
  },
  {
    text: "The philosophy of Iqbal provides an enduringly relevant framework for understanding the challenges confronting Muslim civilization. His concept of khudi — the development of the self through creative assertion and engagement with the world — was a direct response to the stagnation and passivity he observed in colonial-era Muslim societies. Iqbal's call for ijtihad, the reopening of independent legal reasoning, was simultaneously a theological argument and a cultural manifesto, insisting that intellectual dynamism was not merely permitted in Islam but required by it. The tension between his vision of a spiritually grounded, intellectually dynamic Muslim civilization and the actually existing condition of Muslim societies — including Pakistan, the state that was in many ways his political vision realized — remains the defining unresolved question of post-colonial Islamic political thought.",
    wordCount: 130,
    level: "Short"
  },
  {
    text: "Microfinance was once heralded as a revolution in poverty alleviation, a tool that could deliver the financial inclusion needed to lift millions out of poverty by enabling small entrepreneurs to invest in income-generating activities. The reality has proven considerably more complex. While access to credit can be genuinely transformative for some borrowers, the evidence on microfinance's aggregate impact on poverty reduction is mixed at best. Critics point to high interest rates that trap vulnerable borrowers in debt cycles, to the use of social pressure within lending groups to enforce repayment in ways that can be coercive, and to the tendency of microcredit to finance consumption rather than productive investment. Pakistan's Akhuwat model, which provides interest-free loans on Islamic principles, represents a more equitable variant that merits careful study and scaling.",
    wordCount: 135,
    level: "Short"
  },
  {
    text: "Sports diplomacy, long dismissed as peripheral to serious foreign policy, has proven its value as a tool of people-to-people engagement, national image projection, and even conflict de-escalation. Pakistan's cricket team carries a diplomatic weight that its foreign ministry might envy: a Pakistani victory in a marquee series generates more goodwill — and more international visibility — than most conventional diplomatic events. The resumption of India-Pakistan cricket following years of suspension has historically preceded improvements in bilateral relations, and the cricket-watching public in both countries has consistently expressed greater appetite for engagement than their governments. Sport's capacity to humanize the opponent, to create moments of shared emotional experience, and to frame competition in contained, rule-governed terms gives it a unique communicative power in politically strained bilateral relationships.",
    wordCount: 132,
    level: "Short"
  },
  {
    text: "The concept of sovereignty has been eroded by economic globalisation in ways that have significant implications for developing countries. When a nation's debt is held by foreign creditors, when its currency is subject to speculative attack, when its regulatory decisions can trigger capital flight, and when its policy space is constrained by IMF conditionality, the formal sovereignty guaranteed by international law becomes a limited instrument of actual self-governance. Pakistan's repeated recourse to IMF programs illustrates this dynamic: each program exchanges short-term balance of payments relief for medium-term policy commitments — on tariffs, subsidies, exchange rates, and fiscal policy — that significantly constrain the government's freedom of action. The challenge for developing nations is not to reject international economic integration but to build the domestic fiscal and institutional capacity that enables participation in the global economy without surrendering the policy tools necessary for developmental governance.",
    wordCount: 143,
    level: "Short"
  },

  // ── Additional passages ────────────────────────────────────
  {
    text: "The rule of law is the cornerstone upon which all other development achievements rest, yet it is perhaps the dimension of governance most consistently neglected in Pakistan's development discourse. Property rights, contract enforcement, personal security from crime and arbitrary state action, equal treatment under the law regardless of social status, and access to timely and impartial justice are not merely desirable features of a well-governed society — they are the preconditions for sustained investment, economic activity, and social trust. The World Justice Project's Rule of Law Index consistently ranks Pakistan in the lower quartiles globally, reflecting weaknesses in criminal justice, civil justice, absence of corruption, and open government. Improving the rule of law requires judicial reform, police reform, legal aid expansion, alternative dispute resolution mechanisms, and most fundamentally a political commitment to apply the law equally to the powerful and the powerless. Without this, development remains structurally fragile.",
    wordCount: 152,
    level: "Medium"
  },
  {
    text: "Pakistan's diaspora, numbering approximately 10 million people in countries ranging from the Gulf states to the United Kingdom, the United States, and Canada, represents an extraordinary national asset whose full potential has never been systematically harnessed. Diaspora remittances, now exceeding $27 billion annually, are the country's single most reliable source of foreign exchange, outstripping exports in many years and providing a countercyclical cushion during economic downturns. Beyond financial flows, the diaspora represents a repository of human capital, entrepreneurial experience, global networks, and technological knowledge that could be catalytic for Pakistan's development if engaged through intelligent policy. Countries like India have made significant strides in leveraging their diaspora communities through Persons of Indian Origin card programs, investment facilitation, technology transfer initiatives, and cultural diplomacy. Pakistan's engagement with its diaspora, beyond the mechanics of remittance facilitation, has been episodic and insufficiently institutionalized.",
    wordCount: 152,
    level: "Medium"
  },
  {
    text: "The Belt and Road Initiative's reception in recipient countries reveals a complex reality that defies both enthusiastic celebration and alarmist critique. Early projects in countries like Sri Lanka, Kenya, and Zambia generated controversy when debt repayment difficulties led to renegotiations that critics characterized as predatory. The Hambantota Port case in Sri Lanka, where debt-for-equity arrangements gave China a 99-year lease, became the emblem of so-called debt trap diplomacy in Western media coverage. Subsequent research has found the reality more nuanced: Chinese lending terms vary significantly by country and project, many borrower countries had genuine infrastructure needs that could not be financed otherwise, and the agency of recipient country governments in negotiating (or failing to negotiate) favorable terms is often underappreciated in accounts that portray them as passive victims. The lesson for Pakistan is not to accept or reject CPEC uncritically but to develop the negotiating capacity, transparency mechanisms, and domestic economic strategy needed to maximize benefits while managing risks.",
    wordCount: 178,
    level: "Medium"
  },

  /* ── Additional passages to reach 50 ─────────────────────── */
  {
    text: "The proliferation of private schools in Pakistan over the past three decades reflects both the failure of the public education system and the entrepreneurial energy of communities determined to secure better outcomes for their children. Low-cost private schools serving lower-middle-class families in cities like Lahore and Karachi have produced measurably better learning outcomes than their government counterparts at similar or lower per-pupil costs, a finding documented in rigorous research by the International Growth Centre. Yet private schooling also deepens social stratification, as the quality of education a child receives becomes increasingly correlated with the economic capacity of their parents. The challenge for education policy is not to suppress the private sector but to use its energy and innovation while ensuring that quality education is not rationed by wealth.",
    wordCount: 132,
    level: "Short"
  },
  {
    text: "The legal status of women in Pakistan presents a paradox that illuminates deeper tensions in the country's social and political structure. On paper, Pakistan's constitutional framework guarantees equality of citizens regardless of sex, and successive governments have enacted legislation — from the Protection against Harassment of Women at the Workplace Act to the Domestic Violence Act in some provinces — that reflects international human rights norms. In practice, implementation is sparse, social norms remain deeply patriarchal in many regions, and customary law and informal dispute resolution mechanisms often override formal legal protections. Women who seek to exercise rights granted by law face not only practical obstacles but active social sanctions from communities that view such assertions as violations of family and tribal honour. Closing the gap between legal provision and lived reality requires not only law reform but sustained investment in women's legal literacy, accessible courts, and the gradual cultural transformation that education and economic participation can, over time, produce.",
    wordCount: 158,
    level: "Medium"
  },
  {
    text: "The global financial crisis of 2008 exposed fundamental vulnerabilities in the architecture of international finance that had been obscured by two decades of apparent prosperity. The crisis originated in the United States housing market, where the securitization of subprime mortgages had distributed risk through the financial system in ways that few participants fully understood, creating systemic fragility invisible to both regulators and investors. When housing prices fell and defaults mounted, the interconnected exposures of major financial institutions triggered a near-collapse of the global financial system that required unprecedented government intervention to prevent. The crisis demonstrated the dangers of regulatory arbitrage, the inadequacy of risk models that failed to account for correlated failures, and the moral hazard created when financial institutions operate with an implicit government guarantee while their profits accrue to private shareholders. Reforms enacted in its aftermath — higher capital requirements, stress testing, resolution frameworks for systemically important institutions — have made the system more resilient, though fundamental tensions in the structure of modern finance remain unresolved.",
    wordCount: 171,
    level: "Medium"
  },
  {
    text: "Globalization has simultaneously been the most powerful force for poverty reduction and the most significant driver of inequality in the modern era. The integration of East Asian economies — first Japan, then South Korea and Taiwan, then China — into global supply chains lifted hundreds of millions of people out of poverty and transformed the economic landscape of an entire region within a single generation. Yet within the advanced economies that anchored this system, globalization contributed to the hollowing out of manufacturing employment, wage stagnation for the median worker, and the concentration of gains among those with the skills, capital, and mobility to benefit from global markets. The political consequences — the rise of economic nationalism, skepticism toward multilateral institutions, and the electoral appeal of protectionist agendas — reflect the failure to distribute globalization's gains more equitably and to adequately support those displaced by its disruptions.",
    wordCount: 149,
    level: "Medium"
  },
  {
    text: "The management of public debt is among the most consequential and least understood dimensions of economic governance. When a government borrows, it is in effect making a promise that future citizens will pay taxes to service obligations incurred by present decision-makers — a transfer across generations that requires careful justification. Borrowing to finance productive investment in infrastructure, education, or health can be entirely rational, as the economic returns from such investment can comfortably exceed the cost of financing. Borrowing to cover current expenditure — paying salaries, subsidies, and interest on previous debt — is structurally problematic, as it delivers no asset to set against the liability. Pakistan's public debt trajectory reflects the latter pattern far more than the former, with successive governments borrowing heavily to bridge fiscal gaps without the structural reforms needed to expand the revenue base or reduce unproductive expenditure.",
    wordCount: 149,
    level: "Medium"
  },
  {
    text: "The relationship between economic development and environmental sustainability was long framed as a fundamental trade-off: nations could be rich or clean but not both. This framing has been progressively undermined by evidence that the most advanced economies have achieved significant decarbonization of their electricity systems while maintaining prosperity, that renewable energy has become the cheapest source of new electricity generation globally, and that the economic costs of climate change — through extreme weather, agricultural disruption, and public health impacts — far exceed the costs of transitioning away from fossil fuels. For a country like Pakistan, which faces acute climate vulnerability while simultaneously requiring massive energy investment to fuel economic growth, the energy transition is not a luxury but a strategic imperative that can address climate risk and energy security simultaneously.",
    wordCount: 135,
    level: "Short"
  },
  {
    text: "Peacebuilding in post-conflict societies requires far more than the cessation of hostilities and the signing of peace agreements. The literature on peace processes identifies a spectrum of challenges that must be addressed to prevent relapse into conflict: security sector reform to create professional, accountable armed forces; transitional justice to address the legacy of atrocities without triggering renewed cycles of grievance; economic reconstruction to create livelihoods for ex-combatants and war-affected communities; institution building to establish legitimate governance where state authority had collapsed or been predatory; and social reconciliation to rebuild trust between communities divided by violence. These tasks are difficult individually and fiendishly complex in combination, requiring sustained international support and local ownership over timelines that typically exceed the attention spans of major donors.",
    wordCount: 131,
    level: "Short"
  },
  {
    text: "The history of science is in significant part a history of paradigm shifts — moments when the accumulating weight of anomalies that a dominant theoretical framework cannot explain finally triggers a revolutionary reconceptualization of the field. Thomas Kuhn's landmark work 'The Structure of Scientific Revolutions' proposed that normal science proceeds through the gradual accumulation of knowledge within an established paradigm, punctuated by periods of crisis and revolutionary change when a new paradigm displaces the old. The transition from Newtonian mechanics to Einsteinian relativity, from miasma theory to germ theory, from geological catastrophism to plate tectonics — each required scientists to abandon not merely a specific theory but an entire way of framing questions and interpreting evidence. Understanding this dynamic has implications beyond the history of science, illuminating how innovation occurs in any domain where established frameworks constrain as much as they enable.",
    wordCount: 147,
    level: "Medium"
  },
  {
    text: "Entrepreneurship has emerged as a central element in contemporary economic development strategies, celebrated as the engine of job creation, innovation, and inclusive growth. The global startup ecosystem has produced extraordinary companies that have transformed entire industries, created enormous wealth, and reshaped the daily lives of billions of people. Yet the romantic narrative of the lone entrepreneur whose vision and grit build an empire from nothing obscures the structural conditions that determine whether entrepreneurial talent can flourish. Access to capital, quality education, functioning legal systems, reliable infrastructure, and networks of knowledge and connection are not equally distributed, and in their absence entrepreneurial potential withers regardless of individual talent or ambition. Pakistan possesses a young, increasingly digitally connected population with demonstrated entrepreneurial energy, as evidenced by the rapid growth of its technology startup sector. Translating this potential into sustained economic transformation requires not just celebrating entrepreneurs but building the ecosystem conditions in which they can succeed.",
    wordCount: 162,
    level: "Medium"
  },
  {
    text: "The phenomenon of brain drain — the emigration of highly educated and skilled individuals from developing to developed countries — represents one of the most contested issues in the economics of migration and development. Traditional analysis emphasized the loss to sending countries: investment in human capital that generates returns elsewhere, the departure of precisely the individuals most capable of building institutions and driving innovation. More recent scholarship has complicated this picture, pointing to remittance flows that exceed aid and foreign investment in many sending countries, to the role of diaspora networks in facilitating trade and investment between origin and destination countries, and to the possibility of 'brain circulation' as some emigrants return with skills, capital, and global connections acquired abroad. Pakistan's experience contains elements of all these dynamics, with a diaspora of approximately ten million generating over twenty-seven billion dollars in annual remittances while the country simultaneously struggles to retain the engineers, doctors, and academics on whom its long-term development depends.",
    wordCount: 168,
    level: "Medium"
  },
  {
    text: "Nuclear weapons represent the most profound and enduring challenge to international order that the twentieth century produced. Their existence transformed the nature of great power competition, making direct armed conflict between nuclear-armed states so potentially catastrophic that rational decision-makers have consistently found ways to avoid it — a dynamic that strategists call the nuclear peace. Yet the same weapons that may have prevented great power war have also created new dangers: the risk of nuclear use by states facing existential pressure, the possibility of accidents or miscalculations in crisis situations, the challenge of extending deterrence to allies without encouraging proliferation, and the slow but real risk that nuclear weapons will eventually be acquired by non-state actors with no territory to hold hostage. In South Asia, where India and Pakistan maintain nuclear arsenals with relatively short delivery times and unresolved territorial disputes, these dangers are particularly acute. The argument that nuclear deterrence has kept the peace in South Asia is difficult to refute but equally difficult to sustain indefinitely as a governance strategy.",
    wordCount: 178,
    level: "Medium"
  },
  {
    text: "Artificial intelligence is rapidly transforming the nature of work across sectors, automating tasks that previously required human cognition, perception, and judgment. Unlike earlier waves of automation that primarily displaced routine manual labour, AI systems are increasingly capable of performing non-routine cognitive tasks — reading medical images, drafting legal documents, writing software code, analyzing financial data — that were previously the exclusive domain of highly educated professionals. The economic implications are profound and contested. Optimists argue that, as with previous general-purpose technologies, AI will ultimately create more jobs than it destroys by generating new industries, increasing productivity, and freeing human labour for tasks requiring creativity, empathy, and social intelligence. Pessimists counter that the pace and breadth of AI-driven displacement may overwhelm the economy's capacity for adjustment, particularly in developing countries without robust social protection systems or the industrial base to generate alternative employment at scale. Pakistan, with its large population of young workers entering a labour market already struggling to generate sufficient formal employment, faces this challenge with unusual urgency.",
    wordCount: 181,
    level: "Medium"
  },
  {
    text: "The concept of restorative justice offers a fundamentally different answer to the question of what society should do in response to crime. Where the conventional retributive model focuses on establishing guilt and imposing proportionate punishment, restorative justice asks a different set of questions: who has been harmed, what are their needs, and how can the offender, the victim, and the community work together to repair the harm and restore relationships? Pioneered in contexts as diverse as Canadian indigenous communities, New Zealand's youth justice system, and South Africa's Truth and Reconciliation Commission, restorative approaches have demonstrated the capacity to produce higher rates of victim satisfaction, lower rates of reoffending, and more cost-effective outcomes than conventional prosecution and incarceration. Their application to Pakistan's overcrowded, under-resourced criminal justice system — where trials can stretch across years and prisons function as schools of crime rather than rehabilitation — merits serious policy consideration.",
    wordCount: 156,
    level: "Medium"
  },
  {
    text: "The question of national identity is particularly complex for states like Pakistan that were created through political will rather than pre-existing ethnic or linguistic unity. Jinnah's vision of Pakistan as a homeland for Muslims of the subcontinent provided a powerful mobilizing ideology for the independence movement but left unresolved the question of what would bind together a state whose Muslim population spoke dozens of languages, practised different sectarian traditions, and was divided by profound regional, class, and cultural differences. Successive governments have attempted to construct a unified national identity through a combination of state Islam, Urdu-language promotion, and a nationalist historical narrative that often conflicted with the lived experiences of Bengalis, Sindhis, Baloch, Pashtuns, and other communities. The secession of East Pakistan in 1971 demonstrated the catastrophic consequences of this approach at its most extreme. Building a genuinely inclusive national identity — one that accommodates linguistic and cultural diversity rather than suppressing it — remains one of the most important and most difficult tasks of Pakistani statecraft.",
    wordCount: 174,
    level: "Medium"
  }
];


/* ================================================================
   3. MCQ BANK (100+ questions across subjects)
   ================================================================ */
const MCQ_BANK = {
  "pakistan-affairs": [
    { q: "The Lahore Resolution of 1940 demanded:", opts: ["A unitary state for all Muslims of India", "Independent states in Muslim-majority regions", "Provincial autonomy within a united India", "A federation with Muslim reserved seats"], ans: 1 },
    { q: "Pakistan's first constitution was promulgated in:", opts: ["1947", "1949", "1956", "1962"], ans: 2 },
    { q: "The Objectives Resolution was passed in:", opts: ["March 1940", "March 1949", "March 1956", "March 1962"], ans: 1 },
    { q: "The Indus Waters Treaty was signed between India and Pakistan in:", opts: ["1955", "1960", "1965", "1972"], ans: 1 },
    { q: "Which constitutional amendment introduced the Concurrent Legislative List?", opts: ["14th Amendment", "18th Amendment", "21st Amendment", "8th Amendment"], ans: 1 },
    { q: "The first general elections in Pakistan after independence were held in:", opts: ["1954", "1965", "1970", "1977"], ans: 2 },
    { q: "Operation Zarb-e-Azb was launched in which year?", opts: ["2009", "2012", "2014", "2016"], ans: 2 },
    { q: "CPEC connects Gwadar port to which Chinese region?", opts: ["Beijing", "Shanghai", "Xinjiang (Kashgar)", "Tibet"], ans: 2 },
    { q: "Article 25A of Pakistan's Constitution deals with:", opts: ["Freedom of religion", "Right to free and compulsory education", "Equality of citizens", "Freedom of speech"], ans: 1 },
    { q: "National Action Plan (NAP) was launched in response to:", opts: ["2007 Lal Masjid operation", "2014 Army Public School Peshawar attack", "2009 Swat military operation", "Mumbai attacks 2008"], ans: 1 },
    { q: "The NFC Award distributes resources between:", opts: ["Federal government and armed forces", "Federal and provincial governments", "Provincial and local governments", "Government and private sector"], ans: 1 },
    { q: "Simla Agreement of 1972 was signed between:", opts: ["Ayub Khan and Nehru", "Zulfikar Bhutto and Indira Gandhi", "Pervez Musharraf and Atal Vajpayee", "Nawaz Sharif and Rajiv Gandhi"], ans: 1 },
    { q: "Kargil conflict took place in:", opts: ["1996", "1998", "1999", "2001"], ans: 2 },
    { q: "Pakistan became a nuclear power (conducted tests) in:", opts: ["1990", "1995", "1998", "2000"], ans: 2 },
    { q: "The 18th Amendment transferred which major subjects from federal to provinces?", opts: ["Defence and foreign affairs", "Education and health", "Taxation and customs", "Currency and banking"], ans: 1 },
    { q: "Pakistan's Gwadar port is located in:", opts: ["Sindh", "Punjab", "Balochistan", "KP"], ans: 2 },
    { q: "The doctrine of necessity was first applied in Pakistan by:", opts: ["Justice Munir in the Maulvi Tamizuddin case", "Justice Alvin Robert Cornelius", "Justice Dorab Patel", "Justice Hamoodur Rahman"], ans: 0 },
    { q: "Sehat Sahulat Programme is Pakistan's:", opts: ["Pension scheme", "Universal health coverage initiative", "Agricultural subsidy program", "IT development fund"], ans: 1 },
    { q: "How many senators does each province elect to the Senate of Pakistan?", opts: ["14", "23", "23 + reserved seats", "25"], ans: 1 },
    { q: "The FCR (Frontier Crimes Regulations) was abolished in:", opts: ["2009", "2015", "2018", "2021"], ans: 2 }
  ],

  "current-affairs": [
    { q: "The BRICS expansion in 2024 added which countries?", opts: ["Turkey, Mexico, Indonesia", "Saudi Arabia, UAE, Egypt, Iran, Ethiopia, Argentina", "Bangladesh, Nigeria, Vietnam", "Both A and C"], ans: 1 },
    { q: "COP29 (UN Climate Conference 2024) was held in:", opts: ["Dubai", "Baku, Azerbaijan", "Cairo", "Glasgow"], ans: 1 },
    { q: "The Abraham Accords normalized relations between Israel and:", opts: ["Saudi Arabia and Jordan", "UAE, Bahrain, Sudan, Morocco", "Egypt and Kuwait", "Qatar and Oman"], ans: 1 },
    { q: "SCO (Shanghai Cooperation Organisation) headquarters is in:", opts: ["Moscow", "Beijing", "Almaty", "Islamabad"], ans: 1 },
    { q: "The Sustainable Development Goals (SDGs) target year is:", opts: ["2025", "2030", "2035", "2050"], ans: 1 },
    { q: "Pakistan's total fertility rate (TFR) according to the 2023 census is approximately:", opts: ["2.1", "3.0", "3.6", "4.5"], ans: 1 },
    { q: "Which organization publishes the Global Peace Index?", opts: ["Transparency International", "Institute for Economics and Peace", "World Economic Forum", "Amnesty International"], ans: 1 },
    { q: "The QUAD grouping consists of:", opts: ["USA, UK, Australia, New Zealand", "USA, Japan, India, Australia", "USA, Japan, South Korea, Taiwan", "G7 minus Europe"], ans: 1 },
    { q: "Remittances to Pakistan in FY 2023-24 were approximately:", opts: ["$10 billion", "$19 billion", "$27 billion", "$35 billion"], ans: 2 },
    { q: "The IMF's Extended Fund Facility (EFF) for Pakistan in 2023 was approximately:", opts: ["$1.1 billion", "$3 billion", "$6 billion", "$10 billion"], ans: 2 },
    { q: "Pakistan's Human Development Index (HDI) rank places it in:", opts: ["Very High HDI group", "High HDI group", "Medium HDI group", "Low HDI group"], ans: 2 },
    { q: "The Global Hunger Index 2023 classified Pakistan's hunger situation as:", opts: ["Moderate", "Serious", "Alarming", "Extremely alarming"], ans: 1 },
    { q: "AUKUS is a security pact between:", opts: ["Australia, UK, USA", "Austria, Ukraine, USA", "Australia, UK, Singapore", "Asian Union Security Partners"], ans: 0 },
    { q: "Inflation in Pakistan peaked at approximately what level in 2023?", opts: ["14%", "24%", "38%", "48%"], ans: 2 },
    { q: "The Pakistan-Afghanistan border fence (Durand Line fencing) was largely completed by:", opts: ["2015", "2019", "2021", "2023"], ans: 2 },
    { q: "Gaza-Israel conflict escalated significantly after the Hamas attack in:", opts: ["September 2022", "October 2023", "March 2024", "January 2025"], ans: 1 },
    { q: "Russia-Ukraine war began with full-scale invasion in:", opts: ["February 2021", "February 2022", "April 2022", "January 2023"], ans: 1 },
    { q: "Pakistan's 2023 census recorded total population at approximately:", opts: ["200 million", "220 million", "241 million", "260 million"], ans: 2 },
    { q: "The Global Climate Risk Index consistently ranks Pakistan among the top:", opts: ["3 most affected", "5 most affected", "10 most affected", "20 most affected"], ans: 2 },
    { q: "Pakistan joined which Chinese-led infrastructure initiative as the flagship country?", opts: ["BRI", "CPEC", "AIIB", "RCEP"], ans: 1 }
  ],

  "islamic-studies": [
    { q: "The concept of Ijtihad in Islamic jurisprudence refers to:", opts: ["Consensus of scholars", "Independent legal reasoning", "Analogical deduction", "Following a school of thought (Taqleed)"], ans: 1 },
    { q: "Which Caliph was known as 'Al-Farooq'?", opts: ["Abu Bakr", "Umar ibn al-Khattab", "Uthman ibn Affan", "Ali ibn Abi Talib"], ans: 1 },
    { q: "Zakat is obligatory on a Muslim whose nisab threshold has been held for:", opts: ["Three months", "Six months", "One lunar year", "Three lunar years"], ans: 2 },
    { q: "The Treaty of Hudaybiyyah was signed in:", opts: ["2 AH", "4 AH", "6 AH", "8 AH"], ans: 2 },
    { q: "Maqasid al-Shariah (Objectives of Islamic Law) protect:", opts: ["Only life and property", "Life, religion, intellect, lineage, property", "State authority and economy", "Caliph's sovereignty"], ans: 1 },
    { q: "Which battle is regarded as the turning point establishing Muslim power?", opts: ["Uhud", "Badr", "Khandaq", "Yarmouk"], ans: 1 },
    { q: "Ijma as a source of Islamic law means:", opts: ["Individual opinion", "Collective consensus of scholars", "Analogical reasoning", "Prophetic tradition"], ans: 1 },
    { q: "The Quran was compiled into a single volume (Mushaf) during the caliphate of:", opts: ["Abu Bakr", "Umar", "Uthman", "Ali"], ans: 2 },
    { q: "Waqf in Islamic law refers to:", opts: ["Obligatory alms", "Voluntary religious endowment", "Annual tax on crops", "Blood money"], ans: 1 },
    { q: "The Golden Age of Islam in science and philosophy is generally associated with:", opts: ["Umayyad Caliphate", "Abbasid Caliphate (8th–13th century)", "Ottoman Empire", "Mughal Empire"], ans: 1 },
    { q: "Murabaha is an Islamic finance concept based on:", opts: ["Interest-free loans", "Cost-plus-profit sale (transparent markup)", "Profit-loss sharing", "Forward contracts"], ans: 1 },
    { q: "The Medina Charter (Sahifah al-Madinah) is significant because:", opts: ["It was the first written constitution in history", "It established the Islamic calendar", "It authorized military expansion", "It codified Zakat rates"], ans: 0 },
    { q: "Shura (consultation) is mentioned in which Quranic verse?", opts: ["Surah Baqarah 2:177", "Surah Shura 42:38", "Surah Nisa 4:34", "Surah Maidah 5:8"], ans: 1 },
    { q: "Fiqh refers to:", opts: ["Islamic theology (Kalam)", "Islamic jurisprudence (understanding of law)", "Quranic exegesis (Tafsir)", "Science of Hadith"], ans: 1 },
    { q: "The Hijra (migration to Medina) marks the beginning of:", opts: ["The Islamic calendar", "The first revelation", "The Battle of Badr", "The compilation of Quran"], ans: 0 },
    { q: "Allama Iqbal's concept of 'Khudi' (self) advocates:", opts: ["Withdrawal from worldly affairs", "Spiritual self-development and creative assertion", "Blind submission to colonial authority", "Imitation of Western individualism"], ans: 1 },
    { q: "The five pillars of Islam are:", opts: ["Tawhid, Salah, Sawm, Hajj, Jihad", "Kalimah, Salah, Zakat, Sawm, Hajj", "Iman, Salah, Khums, Sawm, Hajj", "Tawhid, Iman, Salah, Sadaqah, Hajj"], ans: 1 },
    { q: "Pakistan's Council of Islamic Ideology (CII) functions as:", opts: ["Pakistan's Supreme Court on Islamic matters", "An advisory body on the compatibility of laws with Islam", "The official body that issues fatwas", "A ministry of religious affairs"], ans: 1 }
  ],

  "general-science": [
    { q: "The SI unit of electric current is:", opts: ["Volt", "Watt", "Ampere", "Ohm"], ans: 2 },
    { q: "Which gas makes up approximately 78% of Earth's atmosphere?", opts: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], ans: 2 },
    { q: "The speed of light in vacuum is approximately:", opts: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10⁵ km/hr"], ans: 1 },
    { q: "DNA stands for:", opts: ["Dioxyribose Nucleic Acid", "Deoxyribonucleic Acid", "Deoxyribose Nitric Acid", "Dinitrogen Acetic compound"], ans: 1 },
    { q: "Pakistan possesses more glaciers than any non-polar region. Approximately how many?", opts: ["1,000", "3,000", "7,000+", "12,000"], ans: 2 },
    { q: "The ozone layer primarily absorbs:", opts: ["Infrared radiation", "Ultraviolet (UV-B) radiation", "X-rays", "Radio waves"], ans: 1 },
    { q: "Photosynthesis converts light energy into:", opts: ["Kinetic energy", "Chemical energy (glucose)", "Electrical energy", "Thermal energy"], ans: 1 },
    { q: "The human body's largest organ is:", opts: ["Liver", "Brain", "Skin", "Intestines"], ans: 2 },
    { q: "Newton's Third Law states:", opts: ["F = ma", "Every action has an equal and opposite reaction", "Objects at rest stay at rest", "Energy cannot be created or destroyed"], ans: 1 },
    { q: "The pH value of pure water at 25°C is:", opts: ["0", "5", "7", "14"], ans: 2 },
    { q: "Antibiotic resistance is primarily caused by:", opts: ["Overuse and misuse of antibiotics", "Genetic mutations in humans", "Viral infections", "Inadequate vitamin intake"], ans: 0 },
    { q: "Which planet has the most moons in our solar system (as of latest count)?", opts: ["Jupiter", "Saturn", "Uranus", "Neptune"], ans: 1 },
    { q: "Climate Change is primarily measured by increase in:", opts: ["Stratospheric temperature", "Average global surface temperature", "Ocean salinity", "Atmospheric pressure"], ans: 1 },
    { q: "CRISPR-Cas9 is a technology used for:", opts: ["Gene editing", "Drug delivery", "Protein synthesis only", "Stem cell extraction"], ans: 0 },
    { q: "An electron has a charge of:", opts: ["Positive", "Negative", "Neutral", "Alternating"], ans: 1 },
    { q: "The GLOF (Glacial Lake Outburst Flood) risk is highest in Pakistan's:", opts: ["Thar Desert", "Indus Plains", "Karakoram, Hindukush, and Himalayas", "Coastal Makran"], ans: 2 }
  ],

  "english": [
    { q: "Choose the correct sentence:", opts: ["Neither the boys nor their teacher were present.", "Neither the boys nor their teacher was present.", "Neither the boys nor their teacher are present.", "Neither of the boys or teacher were present."], ans: 1 },
    { q: "'Enervate' most nearly means:", opts: ["Energize", "Weaken", "Confuse", "Enlarge"], ans: 1 },
    { q: "The passive voice of 'She will write a letter' is:", opts: ["A letter would be written by her", "A letter will have been written by her", "A letter will be written by her", "A letter is written by her"], ans: 2 },
    { q: "A 'précis' should be approximately what fraction of the original passage?", opts: ["Half", "One-third", "One-quarter", "Two-thirds"], ans: 1 },
    { q: "'Prolix' means:", opts: ["Brief and concise", "Tediously long and wordy", "Unclear and vague", "Original and creative"], ans: 1 },
    { q: "Which is the correct spelling?", opts: ["Accomodate", "Accommodate", "Accommmodate", "Accomoaate"], ans: 1 },
    { q: "The figure of speech in 'The pen is mightier than the sword' is:", opts: ["Simile", "Metaphor", "Personification", "Hyperbole"], ans: 1 },
    { q: "'Whom did you see?' — The underlined word 'whom' functions as:", opts: ["Subject", "Indirect object", "Direct object", "Predicate nominative"], ans: 2 },
    { q: "Select the antonym of 'Verbose':", opts: ["Wordy", "Eloquent", "Concise", "Fluent"], ans: 2 },
    { q: "An essay's thesis statement typically appears:", opts: ["In the conclusion only", "In the introduction, usually at the end", "At the beginning of each body paragraph", "After the first body paragraph"], ans: 1 },
    { q: "The literary device of attributing human characteristics to non-human things is:", opts: ["Metaphor", "Simile", "Personification", "Alliteration"], ans: 2 },
    { q: "'Ameliorate' means to:", opts: ["Worsen conditions", "Improve or make better", "Remain neutral", "Completely destroy"], ans: 1 }
  ]
};


/* ================================================================
   4. CSS-STYLE PRACTICE QUESTIONS (100+ across subjects)
   ================================================================ */
const PRACTICE_QUESTIONS = {
  "pakistan-affairs": [
    { q: "Critically evaluate Pakistan's water management policy in the context of increasing regional tensions with India over the Indus Waters Treaty.", hint: "Define issue → Historical background → Current challenges → Critical evaluation → Policy recommendations." },
    { q: "Discuss the impact of the 18th Constitutional Amendment on centre-province relations in Pakistan.", hint: "Devolution of powers, NFC Award, provincial capacity, implementation gaps." },
    { q: "Analyze the role of the military establishment in Pakistan's democratic transition.", hint: "Historical pattern, civil-military imbalance, hybrid democracy theory, recent developments." },
    { q: "What are the socio-economic implications of Pakistan's rapidly growing youth population?", hint: "Demographic dividend vs. burden — education, employment, civic engagement, urbanization." },
    { q: "Examine the causes and consequences of political instability in Pakistan since 1947.", hint: "Institutional weakness, foreign interference, regional issues, federal structure tensions." },
    { q: "Evaluate the performance of the National Accountability Bureau (NAB) as an anti-corruption institution.", hint: "Mandate, legal framework, selective accountability critique, recent amendments." },
    { q: "Discuss the role of the Higher Education Commission (HEC) in improving quality of higher education in Pakistan.", hint: "Establishment rationale, achievements, criticisms, ranking performance, funding issues." },
    { q: "Analyze Pakistan's energy crisis and suggest a sustainable solution.", hint: "Circular debt, IPP contracts, renewable potential, governance failures, regional cooperation." },
    { q: "How has CPEC impacted Pakistan's economic development? Critically analyze.", hint: "Infrastructure, energy, trade, debt sustainability, regional connectivity, sovereignty concerns." },
    { q: "Discuss the challenges of federalism in Pakistan with reference to smaller provinces.", hint: "Resource distribution, provincial autonomy, ethnicity, FATA merger, Gilgit-Baltistan status." },
    { q: "Examine the impact of Afghan refugee crisis on Pakistan's economy and security.", hint: "Economic cost, labour market, security externalities, international burden-sharing, policy response." },
    { q: "Critically evaluate Pakistan's foreign policy towards Afghanistan post-2021.", hint: "Taliban recognition, TTP problem, border management, trade opportunities, regional isolation risk." },
    { q: "What are the major impediments to tax reform in Pakistan?", hint: "Narrow tax base, agriculture exemption, FBR capacity, political elite resistance, informal economy." },
    { q: "Discuss the role of civil society in strengthening democracy in Pakistan.", hint: "Media, NGOs, lawyers' movement, Aurat March, digital activism, limitations." },
    { q: "Analyze the phenomenon of brain drain in Pakistan and suggest remedial measures.", hint: "Scale, causes, economic cost, diaspora engagement, enabling environment, IT sector retention." }
  ],

  "current-affairs": [
    { q: "Analyze the geopolitical implications of the Russia-Ukraine war for Pakistan's foreign policy.", hint: "Energy prices, wheat supply, US-Russia tensions, non-alignment dilemma, economic impact." },
    { q: "Discuss the challenges and opportunities presented by the Fourth Industrial Revolution for developing economies.", hint: "Automation, AI, skill gaps, digital divide, policy responses, leapfrogging potential." },
    { q: "Critically evaluate the role of the United Nations Security Council in maintaining global peace.", hint: "Veto power paralysis, reform proposals, recent failures (Gaza, Ukraine), success cases." },
    { q: "Assess the impact of the US-China strategic competition on South Asian geopolitics.", hint: "India-China-Pakistan triangle, Quad, AUKUS, BRI vs. PGII, regional security implications." },
    { q: "How has climate change transformed from an environmental issue to a security concern?", hint: "Resource conflicts, migration, food insecurity, military competition, climate refugees." },
    { q: "Examine the causes and global implications of rising food insecurity.", hint: "Ukraine war impact, climate change, supply chains, commodity prices, developing world vulnerability." },
    { q: "Discuss the significance of the BRICS expansion and its implications for the global order.", hint: "New members, dedollarization agenda, Global South solidarity, Western response, limitations." },
    { q: "Analyze the humanitarian crisis in Gaza and international law implications.", hint: "International humanitarian law, R2P, UN paralysis, war crimes debate, two-state solution prospects." },
    { q: "Evaluate the Paris Agreement framework's adequacy in addressing climate change.", hint: "NDC ambition gap, finance pledges, loss and damage, Global Stocktake findings, enforcement." },
    { q: "Discuss the role of artificial intelligence in reshaping the global economy and labor market.", hint: "Job displacement, productivity gains, regulatory responses, developing country challenges, equity." },
    { q: "Analyze the Sahel region's security crisis and its implications for global stability.", hint: "Coup wave, French withdrawal, Wagner/Africa Corps, jihadist expansion, migration to Europe." },
    { q: "How is the global energy transition affecting geopolitics of oil-dependent economies?", hint: "Petrostates' vulnerability, renewable race, critical minerals, energy security redefinition." }
  ],

  "international-relations": [
    { q: "Compare and contrast realism and liberalism as frameworks for understanding Pakistan's foreign policy.", hint: "Define both theories → apply to Pakistan's security behavior → critique the frameworks." },
    { q: "Discuss the concept of nuclear deterrence in the context of South Asia.", hint: "MAD theory, credibility, first vs. second strike, Pakistan's full spectrum deterrence." },
    { q: "Evaluate the effectiveness of economic sanctions as a tool of foreign policy.", hint: "Iran, Russia, North Korea cases — effectiveness debate, humanitarian impact, alternatives." },
    { q: "How has the concept of sovereignty evolved in the post-Cold War international system?", hint: "R2P doctrine, humanitarian intervention, cyber sovereignty, non-state actors, pooled sovereignty." },
    { q: "Critically examine the theory of democratic peace with reference to South Asian context.", hint: "Define DPT → Test against India-Pakistan conflict → Critique assumptions → Regional implications." },
    { q: "Analyze Pakistan's relationship with the United States: a partnership or a dependency?", hint: "Historical alliance, aid dynamics, Kerry-Lugar Act, post-2011 tensions, CSF, current reset." },
    { q: "Discuss the role of soft power in Pakistan's foreign policy toolkit.", hint: "Cultural diplomacy, diaspora, cricket, tourism, limitations vs. India and China." },
    { q: "Examine the impact of non-state actors on contemporary international security.", hint: "Al-Qaeda, ISIS, TTP, Houthis — definitional issues, state vs. non-state conflict, counter-terrorism." },
    { q: "How does the Shanghai Cooperation Organisation (SCO) serve Pakistan's strategic interests?", hint: "Regional connectivity, counter-terrorism cooperation, China-Russia alignment, India tensions within SCO." },
    { q: "Analyze the concept of strategic depth in Pakistan's Afghan policy.", hint: "Definition, historical rationale, post-9/11 recalibration, 2021 implications, current rethink." }
  ],

  "political-science": [
    { q: "Critically examine Gramsci's concept of hegemony and its relevance to Pakistani politics.", hint: "Cultural hegemony, civil society, consent vs. coercion, elite capture, media." },
    { q: "Discuss the role of interest groups in democratic governance.", hint: "Pluralism, corporatism, capture theory, business lobbies, civil society in Pakistan." },
    { q: "What is the significance of judicial review in constitutional democracies?", hint: "Marbury vs. Madison, Pakistan's Article 199/184(3), judicial activism critique, balance of powers." },
    { q: "Examine federalism as a solution to ethnic and regional conflicts with examples.", hint: "Pakistan 18th Amendment, Indian federalism, Ethiopian case, Belgium consociationalism." },
    { q: "Discuss the concept of civil-military relations and its implications for democracy.", hint: "Huntington's model, Pakistan's experience, Turkish case, democratic consolidation theory." },
    { q: "Analyze the concept of political culture and its impact on democratic development.", hint: "Almond & Verba, participant vs. subject culture, Pakistan's feudal political culture." },
    { q: "Critically evaluate the role of political parties in democratic consolidation.", hint: "Programmatic vs. patronage parties, internal democracy, party financing, Pakistan's parties." },
    { q: "Discuss the theory of social contract and its relevance to state-citizen relations in Pakistan.", hint: "Hobbes, Locke, Rousseau — apply to weak state, selective service delivery, citizenship." },
    { q: "Examine the concept of populism and its manifestations in South Asian politics.", hint: "Left vs. right populism, PTI as case study, anti-establishment appeal, dangers." },
    { q: "How does authoritarianism persist in the 21st century despite global democratic norms?", hint: "Competitive authoritarianism, institutional manipulation, surveillance capitalism, legitimation strategies." }
  ],

  "islamic-studies": [
    { q: "Discuss the concept of Shura and its relevance to modern democratic governance.", hint: "Quranic basis (42:38), classical models, contemporary Islamic democracies, scholarly debate." },
    { q: "Analyze the concept of Ijtihad and the conditions under which it may be applied.", hint: "Historical closing vs. reopening debate, qualifications for mujtahid, contemporary need." },
    { q: "Explain the Islamic economic system and how it differs from capitalism and socialism.", hint: "Riba prohibition, zakat, Islamic banking, property rights with social function." },
    { q: "Critically evaluate the role of religious scholars (Ulama) in Pakistani state and society.", hint: "Historical influence, Deoband vs. Barelvi, political Islam, madrassa system, reform." },
    { q: "Discuss the rights of minorities in an Islamic state with reference to historical and contemporary examples.", hint: "Dhimmi system, Medina Charter, Pakistan's constitutional provisions, minority experience." },
    { q: "Examine the concept of Jihad: its classical definition, categories, and modern misappropriation.", hint: "Greater vs. lesser jihad, jus ad bellum conditions, modern distortions, scholarly response." },
    { q: "Analyze the concept of Zakat as a tool of poverty alleviation in modern states.", hint: "Classical mechanism, modern state implementation, Pakistan's Zakat Act, effectiveness." },
    { q: "Discuss the challenges of implementing an Islamic economic system in a globalized world.", hint: "Islamic banking limitations, SWIFT/global finance, regulatory compatibility, sukuk market." },
    { q: "Critically examine the relationship between Islam and human rights frameworks.", hint: "UDHR vs. Cairo Declaration, universalism vs. cultural relativism, Muslim reformers." },
    { q: "Discuss Allama Iqbal's vision of Islamic renaissance and its relevance for Pakistan.", hint: "Reconstruction of Religious Thought, khudi concept, pan-Islamism, criticism of taqleed." }
  ],

  "english-essay": [
    { q: "Write an essay on: 'True democracy requires an informed electorate — does Pakistan have one?'", hint: "Literacy rates, media literacy, election manipulation, voter turnout, education-democracy link." },
    { q: "Discuss: 'Science without conscience is the ruin of the soul.'", hint: "Rabelais quote context — AI ethics, bioweapons, nuclear arms, corporate science, regulation." },
    { q: "Write an essay: 'The greatest threat to Pakistan is not external but internal.'", hint: "Extremism, corruption, institutional decay, economic inequality — internal vs. external analysis." },
    { q: "A society that loses its cultural identity loses its soul — discuss.", hint: "Globalization, Westernization, indigenous knowledge, identity politics, linguistic diversity." },
    { q: "Examine: 'Poverty is not a lack of money but a lack of options.'", hint: "Sen's capability approach, structural poverty, social mobility, opportunity deprivation." },
    { q: "Write on: 'The pen is mightier than the sword, but only if someone is willing to read.'", hint: "Literacy, free press, censorship, digital age, intellectual leadership deficit." },
    { q: "Discuss: 'Pakistan's greatest untapped resource is its women.'", hint: "Labour force participation, barriers, economic returns to gender equality, examples." },
    { q: "Examine: 'Corruption is not just about money — it is about broken trust.'", hint: "Social capital, institutional trust, political corruption, everyday corruption, reform." },
    { q: "Write an essay: 'Climate change is Pakistan's most urgent national security threat.'", hint: "Floods, water security, food security, glacial melts, displacement, defence spending comparison." },
    { q: "Discuss: 'Education without values is education incomplete.'", hint: "Moral education debate, rote learning critique, character formation, religious vs. secular education." }
  ]
};


/* ================================================================
   5. SUBJECT ICONS (for display)
   ================================================================ */
const SUBJECT_META = {
  "english-essay":      { name: "English Essay",             icon: "✍️", color: "#3b82f6" },
  "english-precis":     { name: "English Précis & Comp.",    icon: "📝", color: "#8b5cf6" },
  "gsa":                { name: "General Science & Ability", icon: "🔬", color: "#0ea5e9" },
  "current-affairs":    { name: "Current Affairs",           icon: "🌍", color: "#f59e0b" },
  "pakistan-affairs":   { name: "Pakistan Affairs",          icon: "🇵🇰", color: "#16a34a" },
  "islamic-studies":    { name: "Islamic Studies",           icon: "☪️", color: "#854d0e" },
  "ir":                 { name: "International Relations",   icon: "🤝", color: "#2563eb" },
  "political-science":  { name: "Political Science",         icon: "⚖️", color: "#dc2626" }
};
