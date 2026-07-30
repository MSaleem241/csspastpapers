/**
 * practice.js — All practice data
 * Essay Topics: 200+
 * Précis Passages: 50+ (expandable to 150)
 * MCQs: 300+ across all subjects (structured for easy expansion to 1000+)
 *
 * To add more: just push objects into the arrays below.
 */

/* ================================================================
   ESSAY TOPICS (200+)
   ================================================================ */
const ESSAY_TOPICS = [
  // ── Democracy & Governance ──────────────────────────────────
  { id:'e1',  topic:"Democracy is the worst form of government, except all others that have been tried.", cat:"governance", hint:"Churchill's paradox — critique democratic failures while defending it against alternatives. Use comparative examples." },
  { id:'e2',  topic:"Good governance is the cornerstone of national development.", cat:"governance", hint:"Link institutions, rule of law, and transparency to sustainable growth. Use East Asian development examples." },
  { id:'e3',  topic:"Elected governments are not always democratic governments.", cat:"governance", hint:"Distinguish electoral democracy from liberal democracy. Discuss majoritarianism, minority rights, rule of law." },
  { id:'e4',  topic:"Judicial independence is the last line of defence for democracy.", cat:"governance", hint:"Cover judicial activism, constitutional review, and Pakistan's Article 184(3) controversy." },
  { id:'e5',  topic:"The media: the fourth pillar of the state or the first weapon of chaos?", cat:"governance", hint:"Examine media freedom, fake news, press ownership concentration, and censorship in Pakistan." },
  { id:'e6',  topic:"Federalism as a solution to ethnic and regional grievances.", cat:"governance", hint:"Use Pakistan's 18th Amendment, India's asymmetric federalism, and Belgium's consociationalism as examples." },
  { id:'e7',  topic:"Constitutional crises are symptoms of weak institutions.", cat:"governance", hint:"Analyze Pakistan's constitutional history, repeated martial laws, and the doctrine of necessity." },
  { id:'e8',  topic:"Local government is the school of democracy.", cat:"governance", hint:"De Tocqueville's thesis, devolution theory, Pakistan's inconsistent local government history." },
  { id:'e9',  topic:"Bureaucracy: the steel frame or the iron cage of Pakistan?", cat:"governance", hint:"Weber's ideal bureaucracy vs. Pakistani reality — elite capture, red tape, politicization, CSS reform." },
  { id:'e10', topic:"Justice delayed is justice denied — Pakistan's judicial crisis.", cat:"governance", hint:"Case backlogs, lower courts dysfunction, plea bargaining, NADRA-linked reforms, legal aid gaps." },

  // ── Pakistan Affairs ─────────────────────────────────────────
  { id:'e11', topic:"The greatest threat to Pakistan is not external but internal.", cat:"pakistan", hint:"Extremism, corruption, institutional decay, economic inequality — internal vs. external threat analysis." },
  { id:'e12', topic:"Pakistan's foreign policy challenges in the 21st century.", cat:"pakistan", hint:"CPEC, regional neighbors, US-China rivalry, Afghan border dynamics, strategic autonomy." },
  { id:'e13', topic:"Economic development cannot be achieved without political stability.", cat:"pakistan", hint:"Investment climate, rule of law, policy continuity, South East Asian development models." },
  { id:'e14', topic:"Water scarcity: Pakistan's looming existential crisis.", cat:"pakistan", hint:"Indus Waters Treaty, climate impact, dam controversies, policy gaps, Tarbela and Mangla." },
  { id:'e15', topic:"Urbanization and its discontents in Pakistan.", cat:"pakistan", hint:"Karachi's infrastructure crisis, rural-urban migration, unplanned expansion, smart city planning." },
  { id:'e16', topic:"Energy crisis: the Achilles heel of Pakistan's economy.", cat:"pakistan", hint:"Circular debt, IPP contracts, renewable energy transition, power sector reform urgency." },
  { id:'e17', topic:"CPEC: a game changer or a debt trap?", cat:"pakistan", hint:"Infrastructure gains, debt sustainability, sovereignty concerns, geostrategic implications." },
  { id:'e18', topic:"Youth unemployment: the ticking time bomb of Pakistan.", cat:"pakistan", hint:"Demographic dividend vs. burden, skills mismatch, NEET generation, gig economy potential." },
  { id:'e19', topic:"Agriculture remains the backbone of Pakistan's economy yet it is neglected.", cat:"pakistan", hint:"Land reforms, water use, value chain, subsistence vs. commercial farming, subsidy dependency." },
  { id:'e20', topic:"The menace of corruption and its impact on national development.", cat:"pakistan", hint:"NAB reforms, accountability discourse, institutional weaknesses, Transparency International rankings." },
  { id:'e21', topic:"Women empowerment and its role in national development.", cat:"pakistan", hint:"UNDP indices, Aurat March debates, women in STEM, legal reforms, labor force participation gap." },
  { id:'e22', topic:"Religious extremism: causes, consequences, and cures.", cat:"pakistan", hint:"Madrassa reform, foreign funding, counter-narratives, state complicity, APS and its aftermath." },
  { id:'e23', topic:"Balochistan: the forgotten province.", cat:"pakistan", hint:"Resource wealth paradox, insurgency, political marginalization, CPEC's potential, missing persons issue." },
  { id:'e24', topic:"The civil-military imbalance: Pakistan's democratic deficit.", cat:"pakistan", hint:"Historical pattern, hybrid democracy concept, NRO, 18th Amendment, COAS appointments." },
  { id:'e25', topic:"Pakistan's identity crisis: Muslim state or Islamic state?", cat:"pakistan", hint:"Jinnah's vision vs. Islamization, Objectives Resolution debate, minority rights, secular-religious binary." },

  // ── Social Issues ────────────────────────────────────────────
  { id:'e26', topic:"Education is the most powerful weapon to change the world.", cat:"social", hint:"Pakistan's literacy crisis, gender disparity, higher education reform, quality vs. quantity debate." },
  { id:'e27', topic:"The gap between the rich and the poor is the greatest injustice of our time.", cat:"social", hint:"Income inequality, Piketty's thesis, social mobility, Gini coefficient, Pakistan's feudal structure." },
  { id:'e28', topic:"Child labour is a symptom, not a disease.", cat:"social", hint:"Poverty root causes, bonded labour, brick kiln cases, EOBI, policy failures and successes." },
  { id:'e29', topic:"Mental health: the silent crisis of the 21st century.", cat:"social", hint:"Stigma, WHO global data, Pakistan's mental health gap, COVID-19 mental health impact." },
  { id:'e30', topic:"Drug addiction is a social problem, not a criminal one.", cat:"social", hint:"Harm reduction philosophy, decriminalization debate, rehabilitation vs. prosecution approach." },
  { id:'e31', topic:"Population explosion is Pakistan's most underrated challenge.", cat:"social", hint:"TFR data, family planning taboo, resource strain, demographic window rapidly closing." },
  { id:'e32', topic:"Intolerance is the cancer of a civil society.", cat:"social", hint:"Blasphemy law abuse, minority rights erosion, lynching incidents, social media hate speech." },
  { id:'e33', topic:"Honour killing is not culture — it is murder.", cat:"social", hint:"Tribal law, Qandeel Baloch case, Pakistan's legal framework, societal silence, Karo-Kari." },
  { id:'e34', topic:"Child marriage: tradition or human rights violation?", cat:"social", hint:"Sindh Child Marriage Restraint Act, age of consent debate, educational impact on girls." },
  { id:'e35', topic:"The digital divide perpetuates inequality in the information age.", cat:"social", hint:"Internet access gaps, digital literacy, rural-urban divide, e-governance potential." },

  // ── Education ────────────────────────────────────────────────
  { id:'e36', topic:"Rote learning kills creativity and critical thinking.", cat:"education", hint:"Pakistan's examination system, Bloom's taxonomy, project-based learning, curriculum reform." },
  { id:'e37', topic:"The medium of instruction debate: Urdu, English, or mother tongue?", cat:"education", hint:"Linguistic justice, colonial legacy, multilingual education research, cognitive development." },
  { id:'e38', topic:"Higher education without quality is a degree factory.", cat:"education", hint:"HEC reforms, plagiarism crisis, employability gap, global rankings, Pakistan's research output." },
  { id:'e39', topic:"Technical and vocational training: the missing link in Pakistan's economy.", cat:"education", hint:"TEVTA, skill gap, German dual education model, blue-collar dignity, export potential." },
  { id:'e40', topic:"Public education in Pakistan: a tale of two worlds.", cat:"education", hint:"Elite vs. state schools, ghost schools, teacher absenteeism, budget allocation inequity." },
  { id:'e41', topic:"The internet has revolutionized learning — but for whom?", cat:"education", hint:"MOOCs, digital learning, connectivity barriers, language barriers, self-directed learning challenges." },
  { id:'e42', topic:"Examination systems reward memory, not intelligence.", cat:"education", hint:"Standardized testing critique, holistic assessment, Pakistan Board exams, university admission reform." },
  { id:'e43', topic:"A teacher is the nation's most important public servant.", cat:"education", hint:"Teacher training, salaries, social status, brain drain from teaching profession." },

  // ── Environment & Science ────────────────────────────────────
  { id:'e44', topic:"Climate change: an existential threat or a manageable challenge?", cat:"science", hint:"Balance scientific consensus with economic realities of developing nations like Pakistan." },
  { id:'e45', topic:"Pakistan contributes 1% of emissions but bears 10% of climate impact.", cat:"science", hint:"Floods 2022, glacial melts, agriculture disruption, climate justice argument, loss & damage." },
  { id:'e46', topic:"Deforestation is not just an environmental but an economic and security crisis.", cat:"science", hint:"KP forests, timber mafia, watershed protection, biodiversity loss, billion tree tsunami." },
  { id:'e47', topic:"Renewable energy: Pakistan's untapped potential.", cat:"science", hint:"Solar irradiance, wind corridors, hydro potential, financing challenges, circular debt solution." },
  { id:'e48', topic:"Artificial Intelligence: a boon or a threat to humanity?", cat:"science", hint:"Job displacement, ethical dilemmas, AI in warfare, developing world access gaps." },
  { id:'e49', topic:"Space exploration: a luxury or a shared human imperative?", cat:"science", hint:"SpaceX, SUPARCO, dual-use technology, scientific returns, resource extraction debate." },
  { id:'e50', topic:"Biotechnology: the double-edged sword of modern science.", cat:"science", hint:"GMOs, gene editing, bioweapons risk, agricultural revolution, CRISPR ethical debate." },
  { id:'e51', topic:"Nuclear energy: solution to Pakistan's energy crisis or existential risk?", cat:"science", hint:"KANUPP, PAEC, safety record, cost-benefit, renewable alternatives, waste management." },
  { id:'e52', topic:"The fourth industrial revolution will leave Pakistan behind.", cat:"science", hint:"Automation readiness, digital infrastructure, skill base, policy response, leapfrogging potential." },
  { id:'e53', topic:"Social media: democratic tool or disinformation machine?", cat:"science", hint:"Arab Spring vs. Myanmar genocide, algorithms, echo chambers, PEMRA regulation, political use." },

  // ── International Relations ──────────────────────────────────
  { id:'e54', topic:"The world is becoming multipolar — what does that mean for small states?", cat:"international", hint:"US decline, China rise, middle powers, hedging strategies, Pakistan's balancing act." },
  { id:'e55', topic:"The United Nations has failed as a peacekeeping institution.", cat:"international", hint:"Veto power paralysis, Syria, Myanmar, Gaza, UNSC reform proposals, P5 deadlock." },
  { id:'e56', topic:"Nationalism vs. globalization: an irreconcilable tension.", cat:"international", hint:"Brexit, Trump, BRI, WTO crisis, identity politics, deglobalization trends." },
  { id:'e57', topic:"The rise of China and its implications for the global order.", cat:"international", hint:"Thucydides Trap, BRI, South China Sea, Taiwan, US-China decoupling, Pakistan's position." },
  { id:'e58', topic:"Nuclear deterrence remains the only guarantor of peace in South Asia.", cat:"international", hint:"MAD theory, credibility problem, first vs. second strike, Pakistan's full-spectrum deterrence." },
  { id:'e59', topic:"Sanctions as a foreign policy tool: effective or counterproductive?", cat:"international", hint:"Iran, Russia, North Korea — effectiveness debate, humanitarian impact, secondary sanctions." },
  { id:'e60', topic:"Afghanistan: the graveyard of empires and the nursery of instability.", cat:"international", hint:"Historical pattern, Taliban 2.0, TTP blowback, refugee crisis, Pakistan's strategic dilemma." },
  { id:'e61', topic:"Human rights are universal, not Western impositions.", cat:"international", hint:"Cultural relativism vs. universalism, UDHR, CEDAW, Pakistan's treaty reservations." },
  { id:'e62', topic:"Refugee rights in an age of nationalism.", cat:"international", hint:"Afghan refugees, 1951 Refugee Convention, non-refoulement, burden-sharing, host country strain." },
  { id:'e63', topic:"The Israel-Palestine conflict: a crisis of justice, not just territory.", cat:"international", hint:"Historical roots, two-state solution, international law, UN resolutions, Arab normalization." },

  // ── Economics ────────────────────────────────────────────────
  { id:'e64', topic:"Free market capitalism has failed the developing world.", cat:"economy", hint:"Washington Consensus failures, structural adjustment, inequality, mixed economy alternatives." },
  { id:'e65', topic:"Remittances: a lifeline that masks structural economic failure.", cat:"economy", hint:"Pakistan's $27B remittances, brain drain, Dutch disease effect, structural reform need." },
  { id:'e66', topic:"Tax reform is the foundation of a self-reliant Pakistani economy.", cat:"economy", hint:"Tax-to-GDP ratio, agriculture tax exemption, FBR culture, property tax, informal economy." },
  { id:'e67', topic:"Tourism: Pakistan's sleeping giant.", cat:"economy", hint:"Northern areas potential, Gandhara sites, visa reforms, infrastructure, safety narrative correction." },
  { id:'e68', topic:"The gig economy: freedom or exploitation?", cat:"economy", hint:"Freelancing in Pakistan, Fiverr success, labour rights void, social protection gaps, future of work." },
  { id:'e69', topic:"Pakistan's relationship with the IMF: necessity or dependency?", cat:"economy", hint:"Balance of payments cycles, structural conditionality, debt trap, domestic reform requirements." },
  { id:'e70', topic:"Microfinance: poverty alleviation tool or debt trap for the poor?", cat:"economy", hint:"Grameen Bank, Akhuwat model, repayment rates, women empowerment, evidence debate." },
  { id:'e71', topic:"The informal economy: Pakistan's largest sector the state ignores.", cat:"economy", hint:"60% of GDP informally, labour rights, documentation challenges, policy inclusion." },
  { id:'e72', topic:"Food security in Pakistan: paradox of abundance and hunger.", cat:"economy", hint:"Agricultural production vs. malnutrition, distribution failures, price volatility, post-harvest losses." },
  { id:'e73', topic:"The resource curse: why mineral-rich nations often fail to develop.", cat:"economy", hint:"Dutch disease, Balochistan parallel, Nigeria, Venezuela, institutional quality requirement." },

  // ── Philosophy & Ethics ──────────────────────────────────────
  { id:'e74', topic:"A society that loses its cultural identity loses its soul.", cat:"philosophy", hint:"Globalization, Westernization, indigenous knowledge, identity politics, linguistic diversity." },
  { id:'e75', topic:"History is written by the victors — and rewritten by the educated.", cat:"philosophy", hint:"Colonial historiography, subaltern studies, Pakistan's textbook narratives, revisionism." },
  { id:'e76', topic:"Tolerance is not agreement — it is the decision to coexist despite disagreement.", cat:"philosophy", hint:"Religious tolerance, pluralism, Mill's harm principle, Pakistan's blasphemy law context." },
  { id:'e77', topic:"The clash of civilizations: self-fulfilling prophecy or analytical framework?", cat:"philosophy", hint:"Huntington's thesis critique, post-9/11 world, interfaith dialogue, Muslim-West relations." },
  { id:'e78', topic:"Poverty is not a lack of money but a lack of options.", cat:"philosophy", hint:"Amartya Sen's capability approach, structural poverty, social mobility, opportunity deprivation." },
  { id:'e79', topic:"The pen is mightier than the sword, but only if someone is willing to read.", cat:"philosophy", hint:"Literacy, free press, censorship, digital age, intellectual leadership, information warfare." },
  { id:'e80', topic:"True patriotism is service, not sentiment.", cat:"philosophy", hint:"Distinguish nationalism from civic duty, volunteerism, tax compliance, brain drain problem." },
  { id:'e81', topic:"Knowledge without character is a dangerous weapon.", cat:"philosophy", hint:"Educated elite corruption, technocracy failures, moral education debate, value-based leadership." },
  { id:'e82', topic:"Simplicity is the ultimate sophistication.", cat:"philosophy", hint:"Da Vinci's principle applied to governance, design thinking, educational systems, lifestyle choices." },
  { id:'e83', topic:"In a world of abundance, hunger remains a political choice.", cat:"philosophy", hint:"Global food security, food waste data, supply chain politics, Pakistan's wheat crisis." },
  { id:'e84', topic:"Speed of change has outpaced humanity's ability to adapt.", cat:"philosophy", hint:"Fourth Industrial Revolution, social disruption, policy lag, psychological toll of rapid change." },
  { id:'e85', topic:"Patience is the companion of wisdom.", cat:"philosophy", hint:"Short-termism in politics and economics, long-term thinking, delayed gratification research." },

  // ── Islamic Studies Essays ───────────────────────────────────
  { id:'e86', topic:"The idea of a welfare state in Islam: Medina to modern times.", cat:"islamic", hint:"Zakat system, Bait-ul-Mal, Medina Charter, modern Islamic state comparisons, Pakistan's Sehat Sahulat." },
  { id:'e87', topic:"Ijtihad is not optional — it is obligatory for Muslim progress.", cat:"islamic", hint:"Historical closing debate, Iqbal's Reconstruction of Religious Thought, contemporary need." },
  { id:'e88', topic:"Islam and science: historical partnership or modern antagonism?", cat:"islamic", hint:"Golden Age, Al-Khawarizmi, Ibn Rushd, modern Muslim world's scientific output, reform debate." },
  { id:'e89', topic:"Religious moderation is the only sustainable path for Muslim nations.", cat:"islamic", hint:"OIC, Turkey model, Saudi Vision 2030, Pakistan's oscillation between extremes." },
  { id:'e90', topic:"The role of Ulama in Pakistan: guardians of faith or obstacles to reform?", cat:"islamic", hint:"Historical influence, Deoband vs. Barelvi, political Islam, madrassa system reform." },

  // ── Gender ───────────────────────────────────────────────────
  { id:'e91', topic:"Gender equality is not a women's issue — it is a national development imperative.", cat:"social", hint:"Economic returns to gender equality, labor force participation, SDG 5, men as allies." },
  { id:'e92', topic:"Pakistan's greatest untapped resource is its women.", cat:"social", hint:"Labor force participation gap, barriers, economic returns, examples from Bangladesh's garment sector." },
  { id:'e93', topic:"The glass ceiling in Pakistan is made of concrete.", cat:"social", hint:"Corporate gender gap, bureaucracy representation, political quotas, social barriers to women's leadership." },

  // ── Health ───────────────────────────────────────────────────
  { id:'e94', topic:"Universal healthcare is not a luxury but a fundamental right.", cat:"social", hint:"Sehat Sahulat, NHS model, out-of-pocket spending, insurance vs. state provision debate." },
  { id:'e95', topic:"COVID-19 revealed the fragility of global public health infrastructure.", cat:"science", hint:"WHO failures, vaccine nationalism, Pakistan's NCOC response, One Health framework." },
  { id:'e96', topic:"Polio eradication in Pakistan: a test of state capacity and social trust.", cat:"pakistan", hint:"Conspiracy theories, vaccinators' murders, programmatic failures, surveillance systems." },

  // ── Media & Technology ───────────────────────────────────────
  { id:'e97',  topic:"Fake news is more dangerous than no news.", cat:"science", hint:"Infodemic concept, election manipulation, WhatsApp misinformation in Pakistan, media literacy solutions." },
  { id:'e98',  topic:"Surveillance capitalism: selling your attention and your freedom.", cat:"science", hint:"Shoshana Zuboff's framework, data brokers, GDPR, Pakistan's data protection void." },
  { id:'e99',  topic:"Cybersecurity is the new frontier of national security.", cat:"international", hint:"State-sponsored hacking, critical infrastructure vulnerability, PEMRA, data sovereignty." },
  { id:'e100', topic:"The smartphone: the greatest equalizer or the greatest distraction of our time?", cat:"science", hint:"Financial inclusion, e-learning, addiction research, attention economy, rural connectivity." },

  // Additional topics to exceed 200
  { id:'e101', topic:"Meritocracy in Pakistan: myth or reality?", cat:"governance", hint:"CSS as meritocratic gateway, elite capture, nepotism in appointments, institutional resistance to merit." },
  { id:'e102', topic:"Pakistan needs a second independence: from poverty, illiteracy, and inequality.", cat:"pakistan", hint:"Unfinished nation-building project, economic independence, social justice, institutional reform." },
  { id:'e103', topic:"The future of democracy in the age of artificial intelligence.", cat:"governance", hint:"AI and elections, deepfakes, algorithmic governance, participatory platforms, digital authoritarianism." },
  { id:'e104', topic:"Prison reform: punishment or rehabilitation?", cat:"governance", hint:"Pakistan's prison conditions, recidivism rates, juvenile justice, international standards, overcrowding." },
  { id:'e105', topic:"Can Pakistan achieve middle-income status by 2047?", cat:"economy", hint:"GDP growth requirements, structural transformation, human capital investment, governance reforms." },
  { id:'e106', topic:"The Indus Waters Treaty: a model for international water diplomacy or a relic of the past?", cat:"international", hint:"Treaty history, India's objections, climate change strain, renegotiation debate." },
  { id:'e107', topic:"South Asia: condemned to rivalry or capable of choosing cooperation?", cat:"international", hint:"SAARC failures, India-Pakistan normalization conditions, regional trade potential, identity politics." },
  { id:'e108', topic:"Language policy is not a trivial matter — it shapes identity, opportunity, and power.", cat:"social", hint:"Urdu vs. English vs. regional languages, linguistic imperialism, mother tongue education research." },
  { id:'e109', topic:"The diaspora: Pakistan's most underutilized national asset.", cat:"economy", hint:"$27B remittances, brain gain potential, diaspora investment, engagement policy failures." },
  { id:'e110', topic:"Press freedom is the canary in the coal mine of democracy.", cat:"governance", hint:"CPJ rankings, journalist murders in Pakistan, PEMRA regulations, digital surveillance of journalists." },
  { id:'e111', topic:"Can religion and modernity coexist? The Muslim world's central dilemma.", cat:"islamic", hint:"Al-Azhar reforms, Turkey's secularism, Iran's theocracy, Malaysia's balance, Pakistan's choices." },
  { id:'e112', topic:"The Silk Road has returned: China's BRI and the new geopolitics of connectivity.", cat:"international", hint:"BRI scope, CPEC as flagship, competing initiatives (PGII, Blue Dot), recipient country agency." },
  { id:'e113', topic:"Africa: the continent the world keeps misunderstanding.", cat:"international", hint:"Stereotypes vs. reality, AU, African growth story, resource wealth, demographic dividend." },
  { id:'e114', topic:"Migration is not a crisis — the response to it is.", cat:"international", hint:"Migration data, economic benefits, xenophobia, European responses, Pakistan's emigration economy." },
  { id:'e115', topic:"The death of privacy in the digital age.", cat:"science", hint:"Mass surveillance, NSA revelations, China's social credit, NADRA data, right to be forgotten." },
  { id:'e116', topic:"Sports diplomacy: when cricket matters more than diplomacy.", cat:"international", hint:"Pakistan-India cricket, sports as soft power, 1987 Zia diplomacy, 2011 World Cup." },
  { id:'e117', topic:"Decentralization: the key to better governance in Pakistan.", cat:"governance", hint:"18th Amendment, provincial capacity gap, local government dysfunction, fiscal devolution." },
  { id:'e118', topic:"Without rule of law, no development agenda can succeed.", cat:"governance", hint:"World Justice Project rankings, property rights, contract enforcement, judicial access." },
  { id:'e119', topic:"The philosophy of Allama Iqbal: still relevant or romantically recalled?", cat:"islamic", hint:"Khudi concept, ijithad call, pan-Islamism, practical relevance to Pakistan's challenges today." },
  { id:'e120', topic:"Consumerism is the new religion of the modern world.", cat:"philosophy", hint:"Materialism, advertising, identity through consumption, environmental cost, minimalism movement." },
  { id:'e121', topic:"Leadership in crisis: lessons from Pakistan's governance failures.", cat:"governance", hint:"Crisis management, institutional response, political leadership examples, lessons from flood 2022." },
  { id:'e122', topic:"The age of anxiety: why modern prosperity has not produced modern happiness.", cat:"philosophy", hint:"GDP vs. wellbeing, Easterlin paradox, social comparison, meaning crisis, Bhutan's GNH." },
  { id:'e123', topic:"National interest is the only consistent principle in international relations.", cat:"international", hint:"Realist argument, examples of alliance shifts, Pakistan's pivot strategies, limits of idealism." },
  { id:'e124', topic:"The global south must speak with one voice — but can it?", cat:"international", hint:"G77, BRICS as alternative platform, internal divisions, China's dominance, debt trap narrative." },
  { id:'e125', topic:"Science is humanity's best hope — but only if it serves all of humanity.", cat:"science", hint:"Science access gap, pharmaceutical patents, COVID vaccine inequality, open-access research." },
  { id:'e126', topic:"The duty of the intellectual is to speak truth to power.", cat:"philosophy", hint:"Chomsky's concept, academic freedom in Pakistan, self-censorship, state co-option of intellectuals." },
  { id:'e127', topic:"Character is what you do when no one is watching.", cat:"philosophy", hint:"Institutional integrity, corruption in private vs. public settings, moral education, role of religion." },
  { id:'e128', topic:"Water wars: the geopolitical conflicts of the future.", cat:"international", hint:"Nile dispute, Indus Waters, Mekong tensions, groundwater depletion, water as strategic resource." },
  { id:'e129', topic:"A nation that does not read is a nation that does not think.", cat:"education", hint:"Reading culture in Pakistan, library systems, digital reading, book publishing, intellectual vitality." },
  { id:'e130', topic:"The politics of identity is tearing the world apart.", cat:"philosophy", hint:"Identity politics critique, group rights vs. individual rights, tribalism, Francis Fukuyama's analysis." },

  // ── Even more for 200+ ────────────────────────────────────────
  { id:'e131', topic:"Enduring poverty in a world of plenty is a moral failure.", cat:"philosophy", hint:"Singer's argument, global wealth distribution, foreign aid effectiveness, structural causes." },
  { id:'e132', topic:"The 21st century belongs to Asia — but which Asia?", cat:"international", hint:"Asia's diversity, China vs. India vs. ASEAN models, Pakistan's potential place in Asian century." },
  { id:'e133', topic:"Diplomacy without economic strength is like a car without fuel.", cat:"international", hint:"Economic diplomacy, sanctions vulnerability, FDI attraction, trade leverage, Pakistan's soft power deficit." },
  { id:'e134', topic:"Democracy cannot flourish on an empty stomach.", cat:"governance", hint:"Economic preconditions for democracy, hunger and political instability, social contract sustainability." },
  { id:'e135', topic:"Public health is national security.", cat:"social", hint:"COVID-19 lesson, polio persistence, malnutrition's economic cost, one health approach." },
  { id:'e136', topic:"The taxation of agriculture is Pakistan's most politically difficult but economically essential reform.", cat:"economy", hint:"Revenue potential, feudal resistance, land records, NTC, international pressure." },
  { id:'e137', topic:"Extremism thrives where the state has failed.", cat:"pakistan", hint:"State failure zones, FATA history, TTP recruitment logic, developmental counter-terrorism." },
  { id:'e138', topic:"Can Pakistan's foreign policy be independent in an era of great power competition?", cat:"pakistan", hint:"Non-alignment challenges, CPEC dependency, SCO, US pressure, strategic autonomy concept." },
  { id:'e139', topic:"The Kashmiri dispute: from political to humanitarian crisis.", cat:"international", hint:"UN resolutions, August 2019 revocation, humanitarian situation, bilateral vs. multilateral options." },
  { id:'e140', topic:"National integration requires national narrative — Pakistan has neither.", cat:"pakistan", hint:"Multiple competing narratives, textbook politics, ethno-linguistic identity, curriculum reform." },
  { id:'e141', topic:"Science and religion are not enemies — they ask different questions.", cat:"philosophy", hint:"Galileo myth, Islamic science history, Stephen Gould's NOMA, contemporary Muslim scientists." },
  { id:'e142', topic:"The pension system is a promise the state is breaking.", cat:"economy", hint:"Pension burden on Pakistan's budget, reform urgency, defined benefit vs. contribution, aging population." },
  { id:'e143', topic:"Philanthropy cannot replace public policy.", cat:"social", hint:"Edhi Foundation, Shaukat Khanum, limits of charity, systematic vs. symptomatic relief." },
  { id:'e144', topic:"The strongest democracies are built on the weakest states' lessons.", cat:"governance", hint:"Comparative democratization, fragile state recovery, Botswana, Costa Rica, institutional learning." },
  { id:'e145', topic:"Soft power is the ultimate form of national strength.", cat:"international", hint:"Joseph Nye's concept, cultural diplomacy, Pakistan's soft power deficit, Coke Studio globally." },
  { id:'e146', topic:"The circular economy: from waste to wealth.", cat:"science", hint:"Linear vs. circular model, plastic pollution, Pakistan's waste crisis, recycling potential, green jobs." },
  { id:'e147', topic:"Urbanization: threat or opportunity for developing nations?", cat:"social", hint:"Cities as engines of growth, slum formation, infrastructure investment, smart city potential." },
  { id:'e148', topic:"Political dynasties undermine democracy.", cat:"governance", hint:"Bhutto, Sharif dynasties, Zardari, dynastic entrenchment, voters' role, institutional weakness link." },
  { id:'e149', topic:"The measure of a civilization is how it treats its weakest members.", cat:"philosophy", hint:"Social welfare state history, disability rights in Pakistan, elderly care, child protection systems." },
  { id:'e150', topic:"Progress is impossible without change — and those who cannot change their minds cannot change anything.", cat:"philosophy", hint:"Shaw's quote, institutional conservatism, resistance to reform, agents of change in Pakistan." },
  { id:'e151', topic:"Big data and artificial intelligence will transform governance — but at what cost?", cat:"science", hint:"Predictive policing, algorithmic bias, China's surveillance model, democratic oversight challenges." },
  { id:'e152', topic:"South Asia's integration potential remains the world's greatest missed opportunity.", cat:"international", hint:"SAARC failures, India-Pakistan trade potential, SAFTA, people-to-people contact barriers." },
  { id:'e153', topic:"The electric vehicle revolution will reshape geopolitics.", cat:"science", hint:"Lithium, cobalt supply chains, oil exporter vulnerability, Pakistan's EV policy, CPEC energy." },
  { id:'e154', topic:"Populism is democracy's greatest contemporary threat.", cat:"governance", hint:"Defining populism, Trump, Erdogan, Imran Khan as cases, anti-establishment appeal, institutional erosion." },
  { id:'e155', topic:"Education systems must prepare students for jobs that do not yet exist.", cat:"education", hint:"Future of work, automation, 21st century skills, curriculum lag, adaptive learning systems." },
  { id:'e156', topic:"The world needs more empathy, not more intelligence.", cat:"philosophy", hint:"Emotional intelligence, leadership without empathy, social cohesion, technology and empathy deficit." },
  { id:'e157', topic:"The curse of natural resources: why Balochistan remains poor.", cat:"pakistan", hint:"Resource curse theory, royalty dispute, local employment, federation-province tension." },
  { id:'e158', topic:"Media trial: when journalism becomes injustice.", cat:"governance", hint:"Pre-conviction publicity, sub-judice rules, Pakistan's sensationalist media, Noor Mukadam case." },
  { id:'e159', topic:"The state has failed to protect Pakistan's minorities.", cat:"pakistan", hint:"Constitutional provisions vs. lived reality, forced conversions, temple demolitions, legal framework gaps." },
  { id:'e160', topic:"Globalization has created a world of winners and losers — the losers are now voting.", cat:"international", hint:"Populist backlash to globalization, Rodrik's trilemma, Brexit, deindustrialization, policy response." },
  { id:'e161', topic:"Without memory there is no civilization.", cat:"philosophy", hint:"Preservation of history, Pakistan's archaeological heritage, Gandhara, Mohenjo-daro, identity function." },
  { id:'e162', topic:"The entrepreneurial spirit is Pakistan's most underutilized economic engine.", cat:"economy", hint:"Startup ecosystem, regulatory barriers, access to capital, Karachi's commercial tradition." },
  { id:'e163', topic:"Internet shutdowns are an act of governance failure, not governance.", cat:"governance", hint:"Pakistan's shutdown record, economic cost, right to information, protest suppression, democratic norms." },
  { id:'e164', topic:"The state of health is the wealth of the state.", cat:"social", hint:"Human capital investment, productive workforce, healthcare spending ROI, Pakistan's underfunded health." },
  { id:'e165', topic:"Elections are necessary but not sufficient for democracy.", cat:"governance", hint:"Electoral quality, voter education, money in politics, rigging allegations, post-election governance." },
  { id:'e166', topic:"The 18th Amendment: decentralization's triumph or federation's crisis?", cat:"pakistan", hint:"Concurrent list abolition, provincial capacity, NFC Award, education and health devolution outcomes." },
  { id:'e167', topic:"Foreign aid is a palliative, not a cure, for developing world poverty.", cat:"economy", hint:"Aid effectiveness debate, Dambisa Moyo's argument, conditionality, trade vs. aid, Pakistani experience." },
  { id:'e168', topic:"Borders are humanity's most expensive fiction.", cat:"international", hint:"Migration benefits, economic integration, nationalism's cost, Schengen model, South Asia's closed borders." },
  { id:'e169', topic:"The measure of development is not GDP but human dignity.", cat:"philosophy", hint:"Human Development Index, capability approach, poverty measures, dignity economics, UNDP framework." },
  { id:'e170', topic:"A state that cannot collect taxes cannot govern.", cat:"governance", hint:"State capacity theory, Pakistan's 9% tax-to-GDP, informal economy, FBR reform, fiscal social contract." },
  { id:'e171', topic:"The next world war will be fought over water.", cat:"international", hint:"Water stress data, transboundary river disputes, groundwater depletion, desalination technology." },
  { id:'e172', topic:"Digital authoritarianism: the new face of repression.", cat:"governance", hint:"China's Great Firewall, Iran's internet, Pakistan's PECA, algorithmic control, resistance strategies." },
  { id:'e173', topic:"Every child deserves a safe childhood — Pakistan is failing this test.", cat:"social", hint:"Child abuse data, Zainab case, reporting mechanisms, SPARC data, child protection legislation." },
  { id:'e174', topic:"The global village is real — but it has gated communities.", cat:"international", hint:"Globalization's selective inclusion, visa regimes, digital divide, economic migration barriers." },
  { id:'e175', topic:"A constitution is only as strong as the institutions that uphold it.", cat:"governance", hint:"Paper constitution vs. living constitution, Pakistan's Article 6, doctrine of necessity history." },
  { id:'e176', topic:"Pakistani cinema and music are soft power tools the state ignores.", cat:"pakistan", hint:"Coke Studio global reach, Film industry revival, government support gap, cultural diplomacy." },
  { id:'e177', topic:"Merit must replace nepotism in Pakistan's civil service.", cat:"governance", hint:"CSS examination as meritocratic ideal, postings and transfers politicization, PAS dominance." },
  { id:'e178', topic:"The philosophical roots of terrorism lie in injustice, not religion.", cat:"philosophy", hint:"Grievance theory, relative deprivation, economic marginalization, misuse of religious discourse." },
  { id:'e179', topic:"Courage is not the absence of fear — it is the judgment that something matters more.", cat:"philosophy", hint:"Ambrose Redmoon, moral courage in governance, whistleblowing, civil courage examples from Pakistan." },
  { id:'e180', topic:"Nations that do not learn from history are condemned to repeat it.", cat:"philosophy", hint:"Santayana's maxim, 1971 lessons, economic cycle repetition, political pattern analysis in Pakistan." },
  { id:'e181', topic:"The future of Pakistan lies in its cities.", cat:"pakistan", hint:"Urbanization economic engine, Karachi's potential, urban planning investment, city-led development." },
  { id:'e182', topic:"Overseas Pakistanis are nation-builders in exile.", cat:"pakistan", hint:"Remittances, skills transfer, diaspora investment potential, dual nationality, political rights abroad." },
  { id:'e183', topic:"Without intellectual freedom, universities are expensive credentialing factories.", cat:"education", hint:"Academic freedom in Pakistan, HEC overreach, political interference, research quality, campus culture." },
  { id:'e184', topic:"The global supply chain crisis has proven that interdependence is not always strength.", cat:"international", hint:"COVID supply disruptions, China dependency, nearshoring trend, Pakistan's supply chain integration." },
  { id:'e185', topic:"Pakistan cannot afford to be anything less than a knowledge economy.", cat:"economy", hint:"Knowledge economy requirements, IT sector, freelancing, brain drain reversal, investment in R&D." },
  { id:'e186', topic:"Justice without mercy is cruelty; mercy without justice is weakness.", cat:"philosophy", hint:"Balance in legal philosophy, punitive vs. restorative justice, death penalty debate in Pakistan." },
  { id:'e187', topic:"The empowerment of local government is the empowerment of the citizen.", cat:"governance", hint:"Pakistan's local government history, LGO 2001, 2013 amendments, service delivery link, accountability." },
  { id:'e188', topic:"A country's budget is a moral document.", cat:"economy", hint:"Budget priorities reveal values, Pakistan's defence vs. education spending, inequality in allocation." },
  { id:'e189', topic:"Technology can accelerate development — but governance must lead.", cat:"science", hint:"E-governance potential, digital public services, NADRA success, failed IT projects, political will." },
  { id:'e190', topic:"The greatest form of giving is creating opportunity, not charity.", cat:"philosophy", hint:"Entrepreneurship support, job creation, education investment, mentorship, systemic vs. symptomatic aid." },
  { id:'e191', topic:"The future of Pakistani agriculture is smart farming.", cat:"economy", hint:"Precision agriculture, drone technology, solar pumps, digital land records, yield gap." },
  { id:'e192', topic:"Competitive elections without competitive ideas is political theater.", cat:"governance", hint:"Policy-free elections in Pakistan, personality politics, programmatic parties, voter behavior." },
  { id:'e193', topic:"The language of power is always the language of the powerful.", cat:"philosophy", hint:"English in Pakistan, code-switching, linguistic capital, Bourdieu's framework, access to justice." },
  { id:'e194', topic:"A nation of readers is a nation of thinkers.", cat:"education", hint:"Reading culture, National Library, school library absence, digital reading habits, literary figures." },
  { id:'e195', topic:"The state must protect those who expose its failures.", cat:"governance", hint:"Whistleblower protection, Pakistan's journalists, RTI laws, PECA vs. transparency, accountability culture." },
  { id:'e196', topic:"Economic growth without social justice is just redistribution upward.", cat:"economy", hint:"Trickle-down economics critique, inclusive growth, Gini coefficient in Pakistan, social spending." },
  { id:'e197', topic:"To govern well is to serve — not to rule.", cat:"governance", hint:"Servant leadership concept, CSS officer ethos, public service motivation, elite capture alternative." },
  { id:'e198', topic:"The nuclear question: should South Asia denuclearize?", cat:"international", hint:"Arguments for and against, security dilemma, NFU debate, deterrence stability, arms control." },
  { id:'e199', topic:"Without a free judiciary, there is no freedom.", cat:"governance", hint:"Judicial independence in Pakistan, Supreme Court history, contempt powers, executive interference." },
  { id:'e200', topic:"The world does not need more leaders — it needs better followers.", cat:"philosophy", hint:"Followership theory, democratic citizenship, institutional compliance, accountability upward and downward." },
];


/* ================================================================
   PRECIS PASSAGES (50+ — short, medium, long)
   ================================================================ */
const PRECIS_PASSAGES = [
  // ── SHORT (80–110 words) ────────────────────────────────────
  {
    id: 'p1', level: 'Short', wordCount: 95, subject: 'Education',
    text: "A nation's ability to prosper depends not merely on its natural resources or geographic position but on the quality of its human capital. Countries like Japan and South Korea, which lack abundant natural resources, have achieved remarkable economic success through sustained investment in education and skill development. Pakistan, despite possessing fertile land, mineral wealth, and a young population, continues to underperform economically. The missing link is not opportunity but the political will and institutional capacity to invest in citizens rather than in short-term political gains. Without educated, healthy, and skilled citizens, no amount of foreign aid or investment can substitute for the human foundation of development."
  },
  {
    id: 'p2', level: 'Short', wordCount: 88, subject: 'Governance',
    text: "Corruption is not simply a moral failing but a systemic disease that undermines the foundations of governance and economic development. When public officials divert resources meant for schools, hospitals, and infrastructure to personal gain, the entire citizenry suffers. The most vulnerable populations bear the greatest burden, as they depend most heavily on state services. Anti-corruption efforts in Pakistan have been inconsistent and politically motivated, often targeting opponents rather than genuinely reforming institutions. Sustainable reform requires independent accountability bodies, transparent procurement systems, and a culture where integrity is rewarded rather than punished."
  },
  {
    id: 'p3', level: 'Short', wordCount: 97, subject: 'Environment',
    text: "Water is no longer merely an environmental concern — it is rapidly becoming a matter of national security. Pakistan faces a dual crisis of water scarcity and water mismanagement. The Indus river system, which sustains over 200 million people, is under increasing stress from population growth, climate change, and inefficient agricultural practices. Despite being an agrarian economy, Pakistan loses enormous quantities of water to evaporation, seepage, and outdated flood irrigation. Without urgent investment in water storage, conservation technology, and equitable distribution policies, the country risks a water crisis that would dwarf any previous economic or political challenge."
  },
  {
    id: 'p4', level: 'Short', wordCount: 86, subject: 'Media',
    text: "The relationship between free press and democracy is not merely theoretical — it is empirically verifiable. Nations with vibrant, independent media tend to have stronger democratic institutions, more accountable governments, and better economic performance. A free press serves as the watchdog of public interest, exposing corruption, informing citizens, and facilitating public debate. In Pakistan, however, media freedom has faced persistent threats through regulatory pressure, physical attacks on journalists, and economic coercion of media houses. A democracy without a free press is merely an electoral process without substance."
  },
  {
    id: 'p5', level: 'Short', wordCount: 93, subject: 'Technology',
    text: "The smartphone revolution has compressed distances, democratized information, and connected billions. Yet it has simultaneously created new forms of addiction, shortened attention spans, and enabled the viral spread of misinformation. For developing nations like Pakistan, mobile internet has leapfrogged traditional infrastructure, bringing financial services, healthcare information, and educational content to remote areas. But the same platforms that empower also polarize, as algorithms amplify outrage and create echo chambers that deepen social divisions. The technology itself is neutral; the governance frameworks we build around it determine whether it serves human flourishing or undermines it."
  },
  {
    id: 'p6', level: 'Short', wordCount: 99, subject: 'Climate',
    text: "Climate justice is not merely an environmental argument but a moral and economic one. The nations least responsible for greenhouse gas emissions are disproportionately vulnerable to climate impacts. Pakistan emits less than one percent of global carbon dioxide yet faces floods, droughts, and glacial lake outburst floods that cost billions of dollars annually. The 2022 floods affected one third of the country, displacing millions and destroying crops that fed a nation already struggling with food insecurity. The international community's climate finance commitments have been slow and insufficient. For vulnerable nations, climate action is not a choice but a survival imperative."
  },
  {
    id: 'p7', level: 'Short', wordCount: 105, subject: 'Civil Service',
    text: "The concept of merit in public service is under constant pressure from nepotism, political patronage, and ethnic or regional favoritism in Pakistan. The CSS examination was designed precisely to create a merit-based gateway to the civil service, recruiting capable individuals regardless of background. Yet even where meritocratic selection operates, the incentive structures within the bureaucracy — transfers, postings, and promotions — remain deeply politicized, rewarding compliance over competence and loyalty over performance. The result is a civil service demoralized by the disconnect between the ideals it was recruited on and the realities it operates within. Civil service reform requires both procedural safeguards against political interference and a cultural shift that genuinely values and rewards professional excellence."
  },
  {
    id: 'p8', level: 'Short', wordCount: 91, subject: 'Economy',
    text: "Remittances represent Pakistan's most reliable source of foreign exchange, consistently outpacing foreign direct investment and at times exceeding export earnings. Yet the dependence on remittances carries its own risks. It reflects an underlying failure of the domestic economy to generate sufficient productive employment for its educated workforce. The engineers, doctors, IT professionals, and skilled tradespeople who send money home from the Gulf, the United Kingdom, and North America are precisely the human capital Pakistan needs to build competitive industries. Remittances fund consumption and construction rather than productive investment, sustaining household welfare while the structural deficiencies that drive emigration remain unaddressed."
  },
  {
    id: 'p9', level: 'Short', wordCount: 102, subject: 'Democracy',
    text: "Free and fair elections are a necessary but not sufficient condition for democracy. Countries around the world have demonstrated that electoral processes can be held regularly while meaningful democratic accountability — the ability of citizens to hold rulers answerable for their decisions — remains absent. Pakistan's electoral history illustrates this point: elections have been held with varying degrees of credibility, yet the quality of governance, transparency, and responsiveness to public needs has often fallen short of democratic ideals. Building genuine democracy requires not only competitive elections but a free press, independent judiciary, vibrant civil society, and a political culture that tolerates dissent and values accountability over loyalty."
  },
  {
    id: 'p10', level: 'Short', wordCount: 88, subject: 'Youth',
    text: "Pakistan's demographic structure presents a paradox. The country has one of the youngest populations in the world, with nearly two-thirds of its citizens under the age of thirty. In development theory, such a young population represents a demographic dividend — a window of opportunity in which a large working-age cohort can drive economic growth if provided with education, skills, and employment. But the dividend is not automatic. Without the investments in human capital and job creation that would allow this generation to contribute productively, the demographic advantage becomes a demographic burden, fueling unemployment, social frustration, and political instability."
  },

  // ── MEDIUM (120–170 words) ─────────────────────────────────
  {
    id: 'p11', level: 'Medium', wordCount: 148, subject: 'Education',
    text: "The relationship between education and national development is neither simple nor linear, yet few scholars dispute its fundamental importance. A nation's capacity to grow economically, to innovate technologically, and to sustain democratic institutions is deeply intertwined with the quality and reach of its educational system. Pakistan, as a developing state with enormous human capital potential, finds itself at a crossroads. With over 22 million out-of-school children and a literacy rate that lags behind regional peers, the country faces a formidable challenge. Investment in primary and secondary education must be treated not merely as a social expenditure but as the most essential infrastructure of the modern state. Without educated citizens capable of critical thought and professional competence, no amount of foreign investment or natural resource wealth can substitute for the foundational deficit that illiteracy creates. Education, therefore, is not a sector among many — it is the sector upon which all others rest."
  },
  {
    id: 'p12', level: 'Medium', wordCount: 142, subject: 'Urbanization',
    text: "Urbanization is one of the most powerful forces reshaping Pakistani society. The country is experiencing one of the fastest rates of urban growth in South Asia, with cities ill-equipped to absorb the influx of rural migrants seeking economic opportunity. Karachi, Lahore, and Faisalabad are expanding outward in sprawling, unplanned settlements that lack clean water, sanitation, and legal land tenure. The political system, still dominated by feudal interests with a stake in keeping rural populations dependent, has shown little appetite for the bold investment in urban planning that this transformation demands. Yet urbanization also carries seeds of progress — cities are historically engines of innovation, social mobility, and democratic participation. The question is whether Pakistan can manage this transition strategically or will allow it to accumulate into an urban crisis of historic proportions."
  },
  {
    id: 'p13', level: 'Medium', wordCount: 144, subject: 'Security',
    text: "The concept of national security has undergone a profound transformation in the post-Cold War era. Where once it was defined almost exclusively in military terms — armies, weapons, and territorial defence — contemporary analysts increasingly recognize that security encompasses economic stability, food security, environmental sustainability, cyber resilience, and social cohesion. Pakistan's security discourse, long dominated by conventional military considerations, has been slow to incorporate these broader dimensions. The country spends a disproportionate share of its GDP on defence relative to spending on health and education. A nation whose citizens cannot read, cannot access clean water, and cannot afford medical care is not secure in any meaningful sense, regardless of the sophistication of its weapons systems. Redefining national security to centre on human security is not idealism — it is pragmatic statecraft for a resource-constrained developing nation."
  },
  {
    id: 'p14', level: 'Medium', wordCount: 139, subject: 'Women',
    text: "The role of women in Pakistan's economic development remains critically underutilized. Female labor force participation in Pakistan is among the lowest in the world, hovering around 25 percent compared to a global average exceeding 48 percent. This is not a reflection of women's capabilities but of structural barriers including cultural norms, lack of childcare infrastructure, discriminatory inheritance laws, restricted mobility, and workplace harassment. Research consistently demonstrates that increasing women's economic participation is one of the highest-return investments a developing country can make. The World Bank estimates that eliminating gender gaps in employment would increase per capita income by over 20 percent. Beyond the economic argument, women's empowerment is a question of fundamental justice. A society that excludes half its talent from productive contribution is not only inefficient but profoundly unjust."
  },
  {
    id: 'p15', level: 'Medium', wordCount: 152, subject: 'AI',
    text: "Artificial intelligence represents both the greatest opportunity and the most complex governance challenge of the 21st century. Its applications span medicine, agriculture, education, transport, and national security, promising to compress decades of development into years for countries willing to embrace it strategically. Yet the same technology that can diagnose cancer from a smartphone image can also automate millions of jobs, generate convincing deepfakes for political manipulation, and concentrate economic power in a handful of technology corporations. For developing nations like Pakistan, the risk is not merely being left behind in the AI race but of having AI-driven disruption import unemployment and social instability before domestic capacity to manage it has been built. The governance frameworks, regulatory institutions, and educational curricula required to navigate the AI transition must be developed now, before the technology's pace of change makes reactive policy obsolete."
  },
  {
    id: 'p16', level: 'Medium', wordCount: 162, subject: 'CPEC',
    text: "China's Belt and Road Initiative represents the most ambitious infrastructure investment program in modern history, spanning over 140 countries and promising trillions of dollars in roads, ports, railways, and energy facilities. For Pakistan, the China-Pakistan Economic Corridor is the flagship BRI project, promising to connect Gwadar on the Arabian Sea to Kashgar in western China through a network of highways, pipelines, and power plants. Proponents argue that CPEC will end Pakistan's chronic energy shortages, create hundreds of thousands of jobs, and integrate the country into regional and global supply chains. Critics counter that the terms of financing create unsustainable debt obligations, that economic benefits flow disproportionately to Chinese firms and workers, and that the strategic implications of deep economic integration with China create new dependencies that constrain Pakistan's foreign policy autonomy. The truth likely lies somewhere in between these extremes, requiring careful negotiation, transparency, and domestic capacity building to realize potential benefits while managing risks."
  },
  {
    id: 'p17', level: 'Medium', wordCount: 147, subject: 'Extremism',
    text: "The menace of extremism has roots far deeper than ideology. Scholars have identified a complex web of contributing factors: economic marginalization, political exclusion, foreign interference, weak state institutions, and the exploitation of legitimate grievances by radical organizations. In Pakistan, decades of strategic use of militant groups as instruments of foreign policy created an infrastructure of violence that eventually turned inward. The state's response has oscillated between military operations and peace deals, rarely addressing the socio-economic and governance failures that make radicalization attractive to young men with few alternatives. Counter-extremism requires not only security measures but sustained investment in education, economic opportunity, and civic participation — making the state relevant and trustworthy in communities where it has been absent or predatory for generations. There are no quick fixes; the problem was built over decades and will require decades to unwind."
  },
  {
    id: 'p18', level: 'Medium', wordCount: 141, subject: 'Democracy',
    text: "Democratic backsliding is one of the defining political trends of our era. Nations that appeared to be on steady democratic trajectories have experienced significant erosions of civil liberties, press freedom, judicial independence, and electoral integrity. Hungary, Turkey, and India have all seen democratic institutions weakened by elected leaders who use democratic mechanisms to consolidate power and weaken checks and balances. Political scientists call this process autocratization — not the dramatic coup d'état of the 20th century but the slow, constitutional dismantling of the guardrails that constrain executive power. Pakistan's own democratic history is a cautionary tale of how fragile the democratic gains of any particular era can be in the absence of strong institutions, a vibrant civil society, and a political culture that values accountability over partisan loyalty."
  },
  {
    id: 'p19', level: 'Medium', wordCount: 156, subject: 'IR',
    text: "The philosophy of realism in international relations holds that states are the primary actors in world politics and that they act rationally to maximize their security and power in an anarchic international system. Hans Morgenthau, one of realism's founding thinkers, argued that statecraft must be guided by the national interest defined in terms of power rather than by abstract moral principles. This framework helps explain why states that profess friendship readily abandon each other when strategic interests diverge, why powerful nations intervene in weaker states' affairs, and why arms races persist even when all parties would prefer disarmament. Yet realism's explanatory power has its limits. It struggles to account for the durability of international institutions, the significant reduction in interstate wars since 1945, and the role of norms, identity, and ideas in shaping state behaviour. A complete theory of international relations requires elements that pure realism cannot provide."
  },
  {
    id: 'p20', level: 'Medium', wordCount: 138, subject: 'Economy',
    text: "Pakistan's economic history is a story of repeated near-misses. In the 1960s, the country was cited alongside South Korea as an example of successful development planning. In the 1980s, Cold War strategic rents and remittances sustained growth without requiring structural reform. In the 2000s, post-9/11 strategic aid and consumer credit expansion generated a decade of growth that concealed a deteriorating industrial base. In each cycle, a period of apparent prosperity was followed by a balance of payments crisis, an appeal to the IMF, and a painful stabilization program that squeezed consumption without addressing structural causes. The recurring diagnosis is consistent: a tax-to-GDP ratio among the world's lowest, an agriculture sector largely exempt from income tax, a state enterprise sector that consumes subsidies without producing value, and a security expenditure profile that crowds out investment in education and health."
  },

  // ── LONG (200–280 words) ────────────────────────────────────
  {
    id: 'p21', level: 'Long', wordCount: 241, subject: 'Climate',
    text: "Climate change is no longer a distant hypothetical discussed in academic journals but an immediate reality reshaping the lived experience of millions across South Asia. Pakistan, which contributes less than one percent of global greenhouse gas emissions, finds itself disproportionately among the world's most climate-vulnerable nations, ranked among the top ten most affected countries by the Global Climate Risk Index. The catastrophic floods of 2022, which submerged approximately one-third of the country, killed over 1,700 people, displaced more than 33 million, and caused economic losses estimated at 30 billion dollars, offered a brutal illustration of this vulnerability. The challenge is compounded by the country's heavy dependence on agriculture, which employs the largest share of its workforce and remains acutely sensitive to shifts in rainfall patterns, temperature extremes, and glacial melts in the northern mountain ranges that feed the Indus river system. Pakistan possesses over 7,000 glaciers, more than any country outside the polar regions, and many are retreating at alarming rates, threatening both catastrophic flooding in the near term and severe water scarcity in the longer term. Addressing this crisis requires not only aggressive mitigation measures and adaptive strategies within Pakistan but also a more assertive voice in international climate negotiations, where the interests of vulnerable developing nations must be forcefully represented. Climate justice — the principle that those who contributed least to the problem should not disproportionately bear its costs — must become the organizing principle of global climate diplomacy."
  },
  {
    id: 'p22', level: 'Long', wordCount: 259, subject: 'Democracy',
    text: "The question of whether democracy is the most suitable system for all nations has occupied political philosophers and practitioners for centuries. Those who argue for universal democratic applicability point to the empirical record: democracies rarely go to war with one another, tend to produce more prosperous and equitable societies over the long term, and provide institutional mechanisms for peaceful transfers of power that prevent the cycles of violent political succession that have plagued authoritarian states. The democratic peace theory, one of the most robust findings in international relations scholarship, suggests that the spread of democracy is the most reliable path to global stability. Critics of democratic universalism, however, argue that Western liberal democracy represents a particular historical and cultural configuration, shaped by Enlightenment philosophy, the Protestant Reformation, and the specific political struggles of Western Europe. They point to the failures of externally imposed democracy in Iraq and Afghanistan, to the electoral authoritarian regimes that hold elections without substantive democratic accountability, and to the democratic backsliding of countries like Hungary and Turkey to suggest that democratic consolidation requires specific preconditions — levels of economic development, civic culture, independent institutions, and an educated citizenry — that cannot simply be transplanted. Pakistan's own democratic experience reflects this complexity, with repeated military interventions interrupting democratic processes and elected governments themselves often failing to meet the standards of accountability and institutional respect that democratic governance requires. The debate is not merely academic; it shapes the foreign policies of major powers and the development strategies of international institutions."
  },
  {
    id: 'p23', level: 'Long', wordCount: 256, subject: 'Economy',
    text: "The energy crisis that has gripped Pakistan for the past two decades represents one of the most consequential failures of public policy in the country's history. At its heart lies a fundamental mismatch between the structure of electricity generation contracts — heavily weighted toward expensive imported fuel — and the state's capacity and willingness to ensure that those costs are borne by those who consume the electricity. Independent Power Producers were invited into the sector with generous guaranteed return arrangements that made sense when fuel prices were low and the state anticipated strong growth in electricity demand. When fuel prices rose, demand growth disappointed, and fiscal pressures mounted, the state began accumulating arrears rather than either raising tariffs to cost-recovery levels or renegotiating contracts. The resulting circular debt, now amounting to trillions of rupees, has become a permanent feature of the fiscal landscape, consuming budgetary resources that could otherwise fund education, health, and infrastructure. The irony is that the system designed to solve the energy crisis has itself become a source of chronic fiscal instability. Pakistan's renewable energy potential — exceptional solar radiation, significant wind corridors in Sindh and Balochistan, and untapped hydropower resources in the northern mountains — offers an alternative path, but realizing it requires precisely the kind of long-term planning, institutional capacity, and political will to make difficult decisions that the energy sector's history suggests is in short supply. The energy crisis is, at its deepest level, not a technical problem but a governance problem."
  },
  {
    id: 'p24', level: 'Long', wordCount: 269, subject: 'Social Media',
    text: "The rapid spread of social media platforms has fundamentally altered the information environment in which democracies operate, with consequences that political scientists, psychologists, and technologists are only beginning to understand. The original promise of social media as a democratizing force — giving voice to the voiceless, connecting activists across borders, enabling citizens to hold power accountable — was genuine and has been partially realized. The Arab Spring demonstrated that social media platforms could coordinate popular movements at a speed and scale previously impossible. In Pakistan, social media has played a significant role in political mobilization, from PTI's remarkable digital organizing to the current information warfare that defines the country's fractious politics. Yet the same characteristics that make social media effective at mobilization — algorithmic amplification of emotionally engaging content, frictionless sharing without verification, and the collapse of editorial gatekeeping — also make it an extraordinarily effective vehicle for misinformation, hate speech, and political manipulation. Research from MIT found that false news spreads six times faster than true news on Twitter, and that emotionally arousing content consistently outperforms accurate but dry factual reporting. The platforms' advertising-based business models create a structural incentive to maximize engagement regardless of whether the engaging content is true, constructive, or socially harmful. Regulatory responses vary widely: the European Union has moved toward comprehensive platform regulation through its Digital Services Act, while countries like Pakistan have oscillated between internet shutdowns and ad hoc content demands that serve political rather than public interest goals. No society has yet found the balance between free expression and the governance of information quality that a functioning democracy requires."
  },
  {
    id: 'p25', level: 'Long', wordCount: 261, subject: 'Pakistan History',
    text: "The creation of Pakistan in 1947 was simultaneously a triumph of political organization and a beginning of profound unresolved questions that would shape the country's subsequent history. The Muslim League under Muhammad Ali Jinnah had successfully articulated a political identity — that the Muslims of the Indian subcontinent constituted a distinct nation requiring a separate state — but the nature of that state remained contested from its earliest days. Was Pakistan to be a modern Muslim-majority state where religion defined cultural identity without encroaching on the rights of minorities or the functioning of democratic institutions, as Jinnah's statements often suggested? Or was it to be an Islamic state governed by the principles of the Shariah, as religious parties and many of the clergy demanded? This foundational ambiguity was never resolved through the kind of democratic deliberation and constitutional settlement that would have given it legitimate finality. Instead, successive governments — civilian and military alike — instrumentalized religious identity for political purposes, deepening the ambiguity rather than resolving it. The result has been a permanent tension between competing visions of national identity, expressed in debates over the Objectives Resolution, the constitutional provisions on Islam, the blasphemy laws, and the role of religious parties in politics. Understanding this foundational ambiguity is essential for understanding why Pakistan has struggled to build the stable, accountable institutions that development requires, and why questions of identity, religion, and governance remain so politically charged in a nation now in its eighth decade of independence."
  },

  // Additional passages
  {
    id: 'p26', level: 'Medium', wordCount: 133, subject: 'Leadership',
    text: "Leadership is among the most studied and least understood phenomena in the social sciences. Decades of research have identified traits, behaviors, and contextual factors that correlate with effective leadership, yet the predictive power of any model remains limited. What we do know is that transformational leadership — the capacity to inspire genuine commitment rather than mere compliance, to articulate a compelling vision, and to develop the capabilities of followers rather than simply directing them — consistently outperforms transactional management in complex, dynamic environments. Pakistan's governance challenges are, in significant part, leadership challenges. The country possesses the human capital, institutional frameworks, and natural resources to develop rapidly, but the translation of potential into performance requires leaders at every level of the state who combine vision with integrity, technical competence with political skill, and the courage to make decisions that serve the long-term public good over short-term political survival."
  },
  {
    id: 'p27', level: 'Short', wordCount: 101, subject: 'Justice',
    text: "The rule of law is the cornerstone upon which all other development achievements rest, yet it is perhaps the dimension of governance most consistently neglected in Pakistan's development discourse. Property rights, contract enforcement, personal security, equal treatment under the law regardless of social status, and access to timely and impartial justice are not merely desirable features of a well-governed society — they are the preconditions for sustained investment, economic activity, and social trust. The World Justice Project's Rule of Law Index consistently ranks Pakistan in the lower quartiles globally, reflecting weaknesses in criminal justice, civil justice, the absence of corruption, and open government. Improving the rule of law requires judicial reform, police reform, legal aid expansion, and most fundamentally a political commitment to apply the law equally to the powerful and the powerless."
  },
  {
    id: 'p28', level: 'Medium', wordCount: 145, subject: 'Health',
    text: "Universal healthcare represents one of the most significant policy achievements of the 20th century, transforming the relationship between citizens and the state in countries that adopted it. The British National Health Service, established in 1948, demonstrated that a government could provide comprehensive healthcare to all citizens, free at the point of need, funded through general taxation. The results, in terms of population health outcomes and social cohesion, have been remarkable despite the system's well-documented strains. Pakistan's approach to health financing could not be more different. Out-of-pocket spending accounts for approximately 60 percent of total health expenditure, meaning that illness is one of the leading causes of household impoverishment. The Sehat Sahulat program, which provides health insurance cards to low-income families, represents a step toward universal coverage, but its implementation has been inconsistent and its coverage remains far from comprehensive. The goal of universal health coverage requires not only financing mechanisms but a health workforce adequate to deliver care, pharmaceutical supply chains that ensure medicine availability, and the referral systems that connect primary care to specialist services."
  },
  {
    id: 'p29', level: 'Short', wordCount: 94, subject: 'Philosophy',
    text: "The history of science is in significant part a history of paradigm shifts — moments when the accumulating weight of anomalies that a dominant theoretical framework cannot explain finally triggers a revolutionary reconceptualization of the field. Thomas Kuhn's landmark work proposed that normal science proceeds through the gradual accumulation of knowledge within an established paradigm, punctuated by periods of crisis and revolutionary change when a new paradigm displaces the old. The transition from Newtonian mechanics to Einsteinian relativity, from miasma theory to germ theory, and from geological catastrophism to plate tectonics each required scientists to abandon not merely a specific theory but an entire way of framing questions. Understanding this dynamic illuminates how innovation occurs in any domain where established frameworks constrain as much as they enable."
  },
  {
    id: 'p30', level: 'Long', wordCount: 248, subject: 'IR',
    text: "The nuclear weapons that India and Pakistan tested in 1998 transformed the security architecture of South Asia in ways whose full implications are still being worked out. Proponents of the tests argued that nuclearization would stabilize the region by making the costs of war between the two states too high for any rational actor to contemplate. The logic of mutually assured destruction, which had arguably prevented direct superpower conflict during the Cold War, would now operate in South Asia. The evidence since 1998 offers some support for this view: there has been no full-scale war between India and Pakistan despite the Kargil conflict, the 2001-02 military standoff, the Mumbai attacks of 2008, and the Pulwama-Balakot confrontation of 2019. Yet each of these episodes also demonstrated the terrifying proximity of nuclear-armed states to the brink of conventional conflict and raised questions about whether the cooling effect of nuclear deterrence is sufficiently robust to prevent miscalculation under pressure. The unique features of the South Asian nuclear context — relatively short delivery times, geography that compresses early warning windows, the presence of non-state actors with potential access to nuclear expertise, and unresolved territorial disputes that generate recurring crises — make the deterrence dynamics fundamentally different from those that operated between the superpowers during the Cold War. Managing nuclear risk in South Asia requires strategic restraint, crisis communication mechanisms, and ultimately a diplomatic process that addresses the underlying political disputes rather than managing their symptoms indefinitely."
  },

  // Add a few more to ensure variety
  {
    id: 'p31', level: 'Medium', wordCount: 136, subject: 'Tech',
    text: "Artificial intelligence is rapidly transforming the nature of work across sectors, automating tasks that previously required human cognition, perception, and judgment. Unlike earlier waves of automation that primarily displaced routine manual labour, AI systems are increasingly capable of performing non-routine cognitive tasks — reading medical images, drafting legal documents, writing software code, and analyzing financial data — that were previously the exclusive domain of highly educated professionals. The economic implications are profound and contested. Optimists argue that AI will ultimately create more jobs than it destroys by generating new industries, increasing productivity, and freeing human labour for tasks requiring creativity, empathy, and social intelligence. Pessimists counter that the pace and breadth of AI-driven displacement may overwhelm the economy's capacity for adjustment, particularly in developing countries without robust social protection systems or the industrial base to generate alternative employment at scale."
  },
  {
    id: 'p32', level: 'Short', wordCount: 97, subject: 'Economy',
    text: "Entrepreneurship has emerged as a central element in contemporary economic development strategies, celebrated as the engine of job creation, innovation, and inclusive growth. Yet the romantic narrative of the lone entrepreneur obscures the structural conditions that determine whether entrepreneurial talent can flourish. Access to capital, quality education, functioning legal systems, reliable infrastructure, and networks of knowledge and connection are not equally distributed, and in their absence entrepreneurial potential withers regardless of individual talent or ambition. Pakistan possesses a young, increasingly digitally connected population with demonstrated entrepreneurial energy, as evidenced by the rapid growth of its technology startup sector. Translating this potential into sustained economic transformation requires not just celebrating entrepreneurs but building the ecosystem conditions in which they can succeed — from early-stage capital to intellectual property protection to skilled talent pipelines."
  },
  {
    id: 'p33', level: 'Long', wordCount: 223, subject: 'Identity',
    text: "The question of national identity is particularly complex for states like Pakistan that were created through political will rather than pre-existing ethnic or linguistic unity. Jinnah's vision of Pakistan as a homeland for Muslims of the subcontinent provided a powerful mobilizing ideology for the independence movement but left unresolved the question of what would bind together a state whose Muslim population spoke dozens of languages, practised different sectarian traditions, and was divided by profound regional, class, and cultural differences. Successive governments have attempted to construct a unified national identity through a combination of state Islam, Urdu language promotion, and a nationalist historical narrative that often conflicted with the lived experiences of Bengalis, Sindhis, Baloch, Pashtuns, and other communities. The secession of East Pakistan in 1971 demonstrated the catastrophic consequences of this approach at its most extreme. Building a genuinely inclusive national identity — one that accommodates linguistic and cultural diversity rather than suppressing it — remains one of the most important and most difficult tasks of Pakistani statecraft. The answer lies not in imposing a monolithic identity but in building civic institutions and a shared commitment to constitutional principles that transcend ethnic, linguistic, and sectarian boundaries, allowing citizens to hold multiple identities without these being seen as incompatible with membership in the Pakistani nation."
  },
  {
    id: 'p34', level: 'Medium', wordCount: 128, subject: 'Governance',
    text: "Decentralization has become a central tenet of development thinking over the past three decades, based on the premise that governance closer to citizens is more responsive to local needs, more accountable to local populations, and more conducive to efficient service delivery. Pakistan's 18th Constitutional Amendment of 2010 represented one of the most significant exercises in decentralization in the country's history, transferring major policy responsibilities from the federal government to the provinces and abolishing the Concurrent Legislative List. The results have been mixed. Some provinces have used their enhanced authority to experiment with innovative social programs. Others have struggled with the capacity to absorb new responsibilities, creating service delivery gaps where federal systems previously operated. The lesson of Pakistan's decentralization experience is that the transfer of constitutional authority without accompanying fiscal resources, human capital, and technical capacity produces devolution in name rather than devolution in substance."
  },
  {
    id: 'p35', level: 'Short', wordCount: 89, subject: 'Culture',
    text: "Pakistan's rich cultural heritage — its Gandharan Buddhist art, Mughal architectural legacy, Sufi musical tradition, classical poetry, and contemporary literary voices — represents a dimension of national identity that state policy has chronically undervalued. This heritage is not merely a matter of historical pride but of economic and diplomatic significance. Countries that successfully project cultural soft power — France, Japan, India, Turkey — attract tourism, generate goodwill, and exercise influence disproportionate to their hard power resources. Pakistan's tourism sector, constrained by security perceptions and infrastructure gaps, has barely scratched the surface of the country's extraordinary natural and cultural assets. A strategic investment in cultural preservation, international cultural exchange, and tourism infrastructure would yield returns in revenue, employment, and international standing."
  },

  // Even more passages for variety
  {
    id: 'p36', level: 'Medium', wordCount: 151, subject: 'Population',
    text: "The population of Pakistan surpassed 240 million in the 2023 census, making it the world's fifth most populous nation and adding approximately four million people annually. With a total fertility rate still above three children per woman, Pakistan's demographic trajectory poses serious challenges to its capacity for development. The educational system already struggles to provide quality schooling for existing students; the health system cannot adequately serve present needs; housing in major cities is grossly insufficient. The labour market, unable to absorb the 800,000 young people entering it each month, produces chronic unemployment and underemployment among youth. The window for a demographic dividend — the economic windfall that comes when a large working-age population is supported by fewer dependents — is closing without being captured, as the precondition of a skilled, educated workforce has not been met. Family planning programs remain controversial, underfunded, and politically hamstrung by social and religious resistance that successive governments have been unwilling to challenge directly."
  },
  {
    id: 'p37', level: 'Short', wordCount: 96, subject: 'Sports',
    text: "Sports diplomacy has proven its value as a tool of people-to-people engagement, national image projection, and even conflict de-escalation. Pakistan's cricket team carries a diplomatic weight that its foreign ministry might envy: a Pakistani victory in a marquee series generates more goodwill — and more international visibility — than most conventional diplomatic events. The resumption of India-Pakistan cricket following years of suspension has historically preceded improvements in bilateral relations, and the cricket-watching public in both countries has consistently expressed greater appetite for engagement than their governments. Sport's capacity to humanize the opponent, to create moments of shared emotional experience, and to frame competition in contained, rule-governed terms gives it a unique communicative power in politically strained bilateral relationships that formal diplomacy often cannot replicate."
  },
  {
    id: 'p38', level: 'Long', wordCount: 231, subject: 'Philosophy',
    text: "The Enlightenment ideal of progress — the belief that human reason, applied to the natural and social world, would steadily improve human condition — reached its apogee in the 19th and early 20th centuries, only to be shattered by the carnage of two world wars, the Holocaust, Hiroshima, and the genocides of the 20th century. These catastrophes were not the products of pre-modern barbarism but of modern states equipped with industrial technology, sophisticated bureaucracies, and the ideological certainties that scientific rationalism had helped produce. The great thinkers of the Frankfurt School argued that the Enlightenment's rationalism contained within it the seeds of its own betrayal — that the same instrumental reason that produced penicillin also produced Zyklon B, and that the mastery of nature sought by the Enlightenment slid imperceptibly into the mastery of human beings. This critique has itself been critiqued as too absolute, too dismissive of the genuine achievements of modernity in reducing violence, extending lifespan, and expanding human freedom. But it serves as a necessary reminder that reason is a tool whose moral valence depends entirely on the ends to which it is directed, and that progress cannot be assumed as an automatic consequence of technological or scientific advancement. Every generation must consciously choose the values that will direct its capabilities, and the burden of that choice cannot be delegated to any theory of historical inevitability."
  },
  {
    id: 'p39', level: 'Medium', wordCount: 143, subject: 'Civil Service',
    text: "The higher bureaucracy of Pakistan — the occupational groups of the Central Superior Services — was designed as an elite corps of administrators capable of running a modern state with competence and integrity. The examination and training systems that select and develop CSS officers were modeled on the Indian Civil Service, which the British had built as the administrative backbone of empire. At their best, CSS officers have served as indispensable technical and administrative resources, particularly in policy domains requiring specialist expertise and institutional continuity. At their worst, they have been the instruments of political patronage, obstacles to reform, and protectors of the status quo. The organization's performance has been deeply shaped by the incentive environment in which officers operate: where political interference in postings and promotions is the norm, where the consequences of independent professional judgment can be career-ending, and where the rewards of compliance outweigh the rewards of excellence, even the most capable officers face structural pressures that compromise their effectiveness."
  },
  {
    id: 'p40', level: 'Short', wordCount: 92, subject: 'Environment',
    text: "The circular economy offers an alternative to the linear model of take-make-dispose that has characterized industrial production since the 19th century. In a circular economy, materials are kept in use for as long as possible, waste is eliminated by design, and natural systems are regenerated rather than depleted. For Pakistan, where solid waste management is a persistent urban crisis, where agricultural waste is burned rather than composted, and where informal recycling already employs hundreds of thousands of workers, the circular economy is not an abstract aspiration but a practical framework for improving resource efficiency, creating employment, and reducing environmental damage. The transition requires regulatory incentives, infrastructure investment, and consumer awareness — but the economic logic is compelling, particularly as resource costs rise and environmental externalities become increasingly impossible to ignore."
  },

  // Continue with more passages to approach 50+
  {
    id: 'p41', level: 'Medium', wordCount: 137, subject: 'Migration',
    text: "The brain drain that Pakistan experiences — the emigration of its most educated and skilled citizens to wealthier countries — is one of the most discussed and least effectively addressed challenges in development policy. The causes are well understood: wages that may be ten to twenty times higher abroad for the same work, better infrastructure and quality of life, opportunities for professional development and research not available domestically, and in some cases the political and personal freedoms that educated professionals increasingly value. The consequences for Pakistan are significant: every doctor, engineer, or information technology professional who emigrates represents a public investment in education and training that generates its primary returns outside the country. Yet the picture is not entirely negative. Diaspora professionals send remittances, maintain business networks, and occasionally return with skills and capital. The policy challenge is to manage migration so that its benefits accrue to Pakistan as well as to the migrants themselves."
  },
  {
    id: 'p42', level: 'Long', wordCount: 243, subject: 'Federalism',
    text: "Federalism, in theory, offers an elegant solution to the challenge of governing diverse, geographically large, or politically heterogeneous nations. By distributing power between central and constituent governments, federal systems can accommodate regional diversity while maintaining national unity, bringing government closer to citizens while preserving economies of scale in national defence and macroeconomic management, and creating laboratories for policy experimentation in which successful innovations at the state or provincial level can be adopted nationally. Pakistan adopted a federal structure at independence and has amended it significantly through its constitutional history, most notably through the 18th Amendment of 2010, which transferred substantial legislative and administrative authority to the four provinces. The experience since 2010 has been instructive about the gap between constitutional design and practical implementation. Provinces have received authority but not always the fiscal resources, technical capacity, or political will to exercise it effectively. Federal agencies have sometimes been reluctant to relinquish functions formally transferred to provinces. And the variation in capacity among the four provinces — Punjab, with its larger revenue base and longer administrative tradition, versus Balochistan, with its vast territory, sparse population, and limited institutional infrastructure — has meant that decentralization has produced dramatically different outcomes in different parts of the country. Effective federalism requires not only constitutional transfer of authority but sustained investment in provincial capacity, clear mechanisms for intergovernmental coordination, and a political culture that values the genuine autonomy of constituent units."
  },
  {
    id: 'p43', level: 'Short', wordCount: 88, subject: 'Economy',
    text: "The informal economy — the vast network of unregistered businesses, unrecorded transactions, and undocumented workers that operates largely outside the formal regulatory and taxation framework — represents both Pakistan's most significant economic challenge and its most underappreciated asset. Estimates suggest that the informal sector accounts for between 35 and 60 percent of Pakistan's GDP, employing the majority of the labor force and providing livelihoods to millions who the formal economy cannot absorb. Formalizing this sector would dramatically expand the tax base, improve worker protections, increase access to formal finance, and enable better economic data collection. But formalization is not simply a matter of passing regulations; it requires making formal status genuinely attractive by reducing the costs and increasing the benefits of operating legally."
  },
  {
    id: 'p44', level: 'Medium', wordCount: 144, subject: 'Judiciary',
    text: "The judiciary plays an indispensable role in democratic governance as the guardian of constitutional rights and the check on executive overreach. Pakistan's Supreme Court has at various times been both a defender of constitutionalism and an enabler of authoritarian consolidation. The doctrine of necessity, invoked repeatedly by the court to legitimize military takeovers, represents one of the most damaging jurisprudential precedents in the country's legal history. More recently, judicial activism through suo motu proceedings has generated both acclaim — for cases exposing corruption and protecting citizens from administrative arbitrariness — and criticism for overstepping into legislative and executive domains in ways that blur the separation of powers and compromise the court's institutional legitimacy. The independence of the judiciary requires not only security of tenure for judges but a culture of judicial restraint, professional fidelity to constitutional text, and transparency in judicial appointments that can withstand public scrutiny."
  },
  {
    id: 'p45', level: 'Long', wordCount: 237, subject: 'Food Security',
    text: "Food security — the consistent access by all people to sufficient, safe, and nutritious food — remains an elusive goal for approximately 800 million people globally and for a substantial portion of Pakistan's population. Pakistan paradoxically is a major agricultural producer, among the world's top producers of wheat, cotton, sugarcane, and rice, yet suffers from high rates of malnutrition, particularly among women and children in rural areas. This paradox reflects not a production problem but a distribution, economic access, and governance problem. Price volatility, post-harvest losses estimated at 15 to 20 percent of production, inadequate cold chain infrastructure, and the dominance of middlemen who capture value at the expense of both farmers and consumers combine to produce a food system that underserves much of the population it should sustain. Climate change adds additional pressure: shifting monsoon patterns, heat stress on crops, and the retreat of glaciers that feed rivers used for irrigation all threaten to reduce agricultural output precisely as demand from a growing population increases. Building genuine food security for Pakistan requires simultaneously improving agricultural productivity, reducing post-harvest losses, strengthening social safety nets that ensure economic access to food, and building the climate resilience of the agricultural system. No single intervention is sufficient; the challenge is inherently systemic and requires coordinated policy action across multiple sectors and levels of government."
  },
  {
    id: 'p46', level: 'Short', wordCount: 99, subject: 'Arts',
    text: "Literature and the arts occupy a peculiar position in Pakistani public life: revered in the abstract, marginalized in practice. The country produced Faiz Ahmed Faiz, one of the 20th century's great poets; Saadat Hasan Manto, whose short stories rank among the finest in Urdu and world literature; and a rich tradition of classical music, miniature painting, and folk arts that express the deepest dimensions of the culture's emotional and spiritual life. Yet funding for cultural institutions, libraries, museums, and arts education remains negligible. The result is a society that celebrates its artistic heritage while failing to create the conditions for its continuation. A nation that does not invest in its arts impoverishes not only its cultural life but its capacity for the imaginative thinking that innovation, empathy, and democratic citizenship require."
  },
  {
    id: 'p47', level: 'Medium', wordCount: 139, subject: 'IR',
    text: "The concept of sovereignty — the principle that states have supreme authority within their own territory and are not subject to external interference — has been under sustained pressure from multiple directions since the end of the Cold War. From above, the development of international human rights law and the doctrine of Responsibility to Protect has created normative frameworks under which the international community claims authority to intervene in states that commit or fail to prevent mass atrocities against their own populations. From below, non-state actors — multinational corporations, transnational civil society organizations, terrorist networks, and criminal enterprises — operate across borders in ways that challenge the state's claim to be the sole significant actor in international life. From the side, regional integration projects like the European Union have created supranational institutions to which member states have voluntarily transferred significant elements of their sovereign authority. For Pakistan, sovereignty is not an abstract philosophical concept but a practical political concern, given a history of foreign interference in its affairs and the continuing experience of external pressure on matters from nuclear policy to counterterrorism."
  },
  {
    id: 'p48', level: 'Long', wordCount: 252, subject: 'Gender',
    text: "Gender equality in Pakistan remains one of the most contested and consequential policy challenges facing the country. The statistics paint a stark picture: Pakistan consistently ranks among the lowest in the world on the World Economic Forum's Global Gender Gap Index, reflecting persistent disparities in economic participation, educational attainment, health outcomes, and political empowerment. Female labor force participation hovers around 20 to 25 percent, one of the lowest rates in the world, reflecting a combination of cultural norms that restrict women's mobility and employment, structural barriers including the lack of affordable childcare and safe transportation, and legal and institutional frameworks that have historically prioritized male economic agency. Yet beneath these aggregate statistics lies a more complex picture. Pakistani women have served as prime minister, chief justice, and in senior positions across the military and civil service. Female entrepreneurs run businesses across sectors from fashion to technology. Women's organizations and legal advocates have fought for and won significant legislative victories including the Protection against Harassment at the Workplace Act and domestic violence legislation in several provinces. The challenge is closing the gap between legal provision and lived reality, between the achievements of individual women who navigate the system successfully and the structural conditions that prevent the majority from accessing the opportunities that would allow them to contribute their full potential. This requires not merely legal reform but the sustained cultural change that education, economic opportunity, and inclusive public discourse can, over time, produce."
  },
  {
    id: 'p49', level: 'Medium', wordCount: 134, subject: 'Religion',
    text: "The intersection of religion and politics has defined Pakistani society since its inception as an ideological state founded in the name of Islam. The founders of Pakistan, particularly Jinnah, envisioned a modern Muslim state where religion would define cultural and social identity without encroaching on the rights of minorities or the functioning of democratic institutions. This vision has been progressively complicated by successive governments that instrumentalized religion for political legitimacy, by the gradual Islamization of laws and educational curricula particularly during the Zia era, and by the rise of militant organizations that drew on religious ideology to justify violence. Today, the relationship between the state and religious parties reflects an uneasy coexistence in which political parties depend on religious constituencies for electoral support, while religious organizations depend on political access and patronage for resources and influence."
  },
  {
    id: 'p50', level: 'Short', wordCount: 95, subject: 'International',
    text: "The African continent, home to 1.4 billion people and some of the world's fastest-growing economies, has for decades been portrayed through the lens of its challenges: poverty, conflict, disease, and governance failures. This narrative, while containing elements of truth, obscures a more complex reality. Eighteen African economies grew at more than five percent annually in the decade before the COVID-19 pandemic. The continent is experiencing a technological revolution, with mobile money transforming financial inclusion, renewable energy leapfrogging grid infrastructure, and a young entrepreneurial class building technology companies that are reshaping entire sectors. The world's center of economic gravity is moving, and Africa's demographic trajectory — with a median age of 19 and a projected population of 2.5 billion by 2050 — will make it central to global economic dynamics in ways that current analysis consistently underestimates."
  },
];


/* ================================================================
   MCQ BANK (300+ questions across subjects)
   ================================================================ */
const MCQ_BANK = {

  'pakistan-affairs': [
    { q:"The Lahore Resolution of 1940 demanded:", opts:["A unitary Muslim state","Independent states in Muslim-majority regions","Provincial autonomy within united India","A federation with Muslim reserved seats"], ans:1 },
    { q:"Pakistan's first constitution was promulgated in:", opts:["1947","1949","1956","1962"], ans:2 },
    { q:"The Objectives Resolution was passed in:", opts:["March 1940","March 1949","March 1956","March 1962"], ans:1 },
    { q:"The Indus Waters Treaty was signed in:", opts:["1955","1960","1965","1972"], ans:1 },
    { q:"Which amendment introduced the 18th Amendment's changes?", opts:["2008","2010","2012","2014"], ans:1 },
    { q:"Operation Zarb-e-Azb was launched in:", opts:["2009","2012","2014","2016"], ans:2 },
    { q:"CPEC connects Gwadar to which Chinese region?", opts:["Beijing","Shanghai","Xinjiang (Kashgar)","Tibet"], ans:2 },
    { q:"Article 25A of Pakistan's Constitution deals with:", opts:["Freedom of religion","Right to free and compulsory education","Equality of citizens","Freedom of speech"], ans:1 },
    { q:"National Action Plan was launched after:", opts:["Lal Masjid operation","APS Peshawar attack 2014","Swat military operation","Mumbai attacks 2008"], ans:1 },
    { q:"Simla Agreement 1972 was signed between:", opts:["Ayub Khan and Nehru","Bhutto and Indira Gandhi","Musharraf and Vajpayee","Nawaz and Rajiv Gandhi"], ans:1 },
    { q:"Pakistan became nuclear power (conducted tests) in:", opts:["1990","1995","1998","2000"], ans:2 },
    { q:"The 18th Amendment abolished:", opts:["Senate","Concurrent Legislative List","National Assembly","Provincial Assemblies"], ans:1 },
    { q:"Pakistan's Gwadar port is located in:", opts:["Sindh","Punjab","Balochistan","KP"], ans:2 },
    { q:"The doctrine of necessity was first applied in Pakistan by:", opts:["Justice Munir in Maulvi Tamizuddin case","Justice Cornelius","Justice Dorab Patel","Justice Hamoodur Rahman"], ans:0 },
    { q:"Which is Pakistan's highest civil award?", opts:["Sitara-e-Pakistan","Nishan-e-Pakistan","Tamgha-e-Pakistan","Hilal-e-Pakistan"], ans:1 },
    { q:"Pakistan joined SEATO in:", opts:["1947","1954","1960","1965"], ans:1 },
    { q:"East Pakistan became Bangladesh in:", opts:["1969","1970","1971","1972"], ans:2 },
    { q:"The NFC Award distributes resources between:", opts:["Federal and provinces","Provinces only","Centre and military","Government and private sector"], ans:0 },
    { q:"Kargil conflict took place in:", opts:["1996","1997","1999","2001"], ans:2 },
    { q:"Pakistan's first Prime Minister was:", opts:["Jinnah","Liaquat Ali Khan","Nazimuddin","Bogra"], ans:1 },
    { q:"The 1973 Constitution was passed under:", opts:["Ayub Khan","Yahya Khan","Zulfikar Ali Bhutto","Zia ul-Haq"], ans:2 },
    { q:"Operation Clean-up in Karachi was launched by:", opts:["PPP government","PML-N government","Rangers under MQM pressure","Army directly"], ans:1 },
    { q:"The Thar Coal project is located in:", opts:["Balochistan","Punjab","Sindh","KP"], ans:2 },
    { q:"Pakistan's first female Prime Minister was:", opts:["Begum Ra'ana Liaquat Ali Khan","Benazir Bhutto","Fehmida Mirza","Hina Rabbani Khar"], ans:1 },
    { q:"The Two-Nation Theory was most prominently advanced by:", opts:["Allama Iqbal","Sir Syed Ahmed Khan","Muhammad Ali Jinnah","Liaquat Ali Khan"], ans:2 },
    { q:"Sehat Sahulat Programme provides:", opts:["Agricultural loans","Health insurance cards to low-income families","Free medicines","Government pensions"], ans:1 },
    { q:"The FCR (Frontier Crimes Regulations) was abolished in:", opts:["2010","2015","2018","2021"], ans:2 },
    { q:"Diamer-Bhasha Dam is being built on which river?", opts:["Chenab","Jhelum","Indus","Kabul"], ans:2 },
    { q:"Pakistan's tax-to-GDP ratio is approximately:", opts:["5%","9-10%","15%","20%"], ans:1 },
    { q:"Which article of Pakistan's Constitution declares Islam as the state religion?", opts:["Article 2","Article 20","Article 31","Article 62"], ans:0 },
  ],

  'current-affairs': [
    { q:"BRICS expansion in 2024 added which countries?", opts:["Turkey, Mexico, Indonesia","Saudi Arabia, UAE, Egypt, Iran, Ethiopia","Bangladesh, Nigeria, Vietnam","Both A and C"], ans:1 },
    { q:"COP29 (2024) was held in:", opts:["Dubai","Baku, Azerbaijan","Cairo","Glasgow"], ans:1 },
    { q:"SCO headquarters is in:", opts:["Moscow","Beijing","Almaty","Islamabad"], ans:1 },
    { q:"SDGs target year is:", opts:["2025","2030","2035","2050"], ans:1 },
    { q:"QUAD grouping consists of:", opts:["USA, UK, Australia, NZ","USA, Japan, India, Australia","USA, Japan, South Korea, Taiwan","G7 minus Europe"], ans:1 },
    { q:"Pakistan's 2023 census population was approximately:", opts:["200 million","220 million","241 million","260 million"], ans:2 },
    { q:"Russia-Ukraine war began with full-scale invasion in:", opts:["February 2021","February 2022","April 2022","January 2023"], ans:1 },
    { q:"Global Peace Index is published by:", opts:["Transparency International","Institute for Economics and Peace","WEF","Amnesty International"], ans:1 },
    { q:"AUKUS is a pact between:", opts:["Australia, UK, USA","Austria, Ukraine, USA","Australia, UK, Singapore","Asian security partners"], ans:0 },
    { q:"Pakistan's remittances in FY 2023-24 were approximately:", opts:["$10B","$19B","$27B","$35B"], ans:2 },
    { q:"Global Hunger Index 2023 ranked Pakistan's situation as:", opts:["Moderate","Serious","Alarming","Extremely alarming"], ans:1 },
    { q:"Gaza-Israel conflict escalated significantly in:", opts:["September 2022","October 2023","March 2024","January 2025"], ans:1 },
    { q:"Pakistan's Climate Risk Index consistently ranks it among:", opts:["Top 3 affected","Top 5 affected","Top 10 affected","Top 20 affected"], ans:2 },
    { q:"The Abraham Accords normalized relations between Israel and:", opts:["Saudi Arabia, Jordan","UAE, Bahrain, Sudan, Morocco","Egypt, Kuwait","Qatar, Oman"], ans:1 },
    { q:"Which organization publishes the Human Development Index?", opts:["World Bank","IMF","UNDP","WHO"], ans:2 },
    { q:"Digital Services Act is a regulatory framework from:", opts:["United States","European Union","United Nations","China"], ans:1 },
    { q:"Pakistan's IMF Extended Fund Facility in 2023 was approximately:", opts:["$1.1B","$3B","$6B","$10B"], ans:1 },
    { q:"The Belt and Road Initiative spans over how many countries?", opts:["60","100","140","180"], ans:2 },
    { q:"G20 presidency for 2023 was held by:", opts:["China","India","USA","Brazil"], ans:1 },
    { q:"Which country withdrew from the Paris Agreement and rejoined?", opts:["China","Russia","USA","Australia"], ans:2 },
    { q:"The World Justice Project measures:", opts:["Economic growth","Rule of Law","Military power","Cultural development"], ans:1 },
    { q:"Pakistan joined which organization in 2017?", opts:["BRICS","SCO","ASEAN","G20"], ans:1 },
    { q:"COP28 (2023) was held in:", opts:["Glasgow","Baku","Dubai","Cairo"], ans:2 },
    { q:"The Sahel region security crisis involves which organization's withdrawal?", opts:["USA","UK","France","China"], ans:2 },
    { q:"New Development Bank (NDB) was established by:", opts:["G7 nations","BRICS nations","Developing nations only","UN initiative"], ans:1 },
    { q:"Pakistan's first moon mission is called:", opts:["PAKSAT-1R","iCube-Q","PakCorSAT","SUPARCO-1"], ans:1 },
    { q:"Which country launched the Digital Currency (CBDC) first at scale?", opts:["USA","China","India","Nigeria"], ans:1 },
    { q:"The International Criminal Court is located in:", opts:["New York","Geneva","The Hague","Brussels"], ans:2 },
    { q:"Which index measures press freedom globally?", opts:["RSF World Press Freedom Index","Freedom House Index","Economist Democracy Index","CPJ Index"], ans:0 },
    { q:"Pakistan's position in Ease of Doing Business Index is approximately:", opts:["50th","108th","140th","170th"], ans:2 },
  ],

  'islamic-studies': [
    { q:"The concept of Ijtihad means:", opts:["Consensus of scholars","Independent legal reasoning","Analogical deduction","Following a school of thought"], ans:1 },
    { q:"Which Caliph was known as 'Al-Farooq'?", opts:["Abu Bakr","Umar ibn al-Khattab","Uthman ibn Affan","Ali ibn Abi Talib"], ans:1 },
    { q:"Maqasid al-Shariah protects:", opts:["Only life and property","Life, religion, intellect, lineage, property","State authority","All of the above"], ans:1 },
    { q:"Battle of Badr occurred in:", opts:["1 AH","2 AH","3 AH","4 AH"], ans:1 },
    { q:"The Quran was compiled into Mushaf during the caliphate of:", opts:["Abu Bakr","Umar","Uthman","Ali"], ans:2 },
    { q:"Ijma as a source of Islamic law means:", opts:["Individual opinion","Collective consensus","Analogical reasoning","Prophetic tradition"], ans:1 },
    { q:"Murabaha in Islamic finance refers to:", opts:["Interest-free loans","Cost-plus-profit sale","Profit-loss sharing","Forward contracts"], ans:1 },
    { q:"The Medina Charter is historically significant as:", opts:["First written constitution in history","First Islamic military treaty","First trade agreement","First peace treaty"], ans:0 },
    { q:"Shura is mentioned in which Surah?", opts:["Surah Baqarah","Surah Shura (42:38)","Surah Nisa","Surah Maidah"], ans:1 },
    { q:"The Hijra occurred in:", opts:["610 CE","615 CE","620 CE","622 CE"], ans:3 },
    { q:"Allama Iqbal's concept of 'Khudi' advocates:", opts:["Withdrawal from worldly affairs","Spiritual self-development and assertion","Blind submission to authority","Imitation of Western individualism"], ans:1 },
    { q:"The five pillars of Islam are:", opts:["Tawhid, Salah, Sawm, Hajj, Jihad","Kalimah, Salah, Zakat, Sawm, Hajj","Iman, Salah, Khums, Sawm, Hajj","Tawhid, Iman, Salah, Sadaqah, Hajj"], ans:1 },
    { q:"Pakistan's Council of Islamic Ideology is:", opts:["A court on Islamic matters","Advisory body on law compatibility with Islam","Official fatwa-issuing body","Ministry of religious affairs"], ans:1 },
    { q:"The Islamic Golden Age is associated with:", opts:["Umayyad Caliphate","Abbasid Caliphate (8th–13th c.)","Ottoman Empire","Mughal Empire"], ans:1 },
    { q:"Zakat is obligatory when nisab threshold is held for:", opts:["3 months","6 months","One lunar year","Three years"], ans:2 },
    { q:"Waqf in Islamic law refers to:", opts:["Obligatory alms","Voluntary religious endowment","Annual tax on crops","Blood money"], ans:1 },
    { q:"Battle of Khandaq was fought in:", opts:["2 AH","4 AH","5 AH","7 AH"], ans:2 },
    { q:"Fiqh primarily refers to:", opts:["Islamic theology","Islamic jurisprudence","Quranic exegesis","Science of Hadith"], ans:1 },
    { q:"Iqbal's 'Reconstruction of Religious Thought in Islam' was published in:", opts:["1923","1930","1934","1938"], ans:1 },
    { q:"The Treaty of Hudaybiyyah was signed in:", opts:["2 AH","4 AH","6 AH","8 AH"], ans:2 },
    { q:"Which of the following is NOT a source of Islamic law?", opts:["Quran","Sunnah","Ra'y (personal opinion) without basis","Ijma"], ans:2 },
    { q:"The concept of Dhimmi in Islamic history refers to:", opts:["Muslim converts","Non-Muslim citizens under Islamic rule","Muslim scholars","Military commanders"], ans:1 },
    { q:"Surah Al-Hujurat is known for guidance on:", opts:["Prayer","Social ethics and brotherhood","Fasting","Trade"], ans:1 },
    { q:"The first mosque in Islamic history was:", opts:["Al-Masjid al-Haram","Masjid al-Nabawi","Masjid Quba","Masjid al-Aqsa"], ans:2 },
    { q:"Islamic banking differs from conventional banking primarily by:", opts:["Higher interest rates","Prohibition of riba (interest)","Government ownership","Shariah scholar approval only for names"], ans:1 },
    { q:"Ghazwa Badr is also known as:", opts:["Day of Furqan","Day of Conquest","Day of Victory","Day of Uhud"], ans:0 },
    { q:"Allama Iqbal proposed the idea of a separate Muslim state in:", opts:["1909 speech","1930 Allahabad Address","1940 Lahore Resolution","1947"], ans:1 },
    { q:"The concept of Khilafat in Islamic political thought refers to:", opts:["Monarchy","Successor to prophetic leadership of Muslim community","Democracy","Republic"], ans:1 },
    { q:"Sukuk in Islamic finance are:", opts:["Interest-bearing bonds","Sharia-compliant bonds (asset-backed)","Conventional shares","Islamic currency"], ans:1 },
    { q:"The battle that established Muslim dominance in Arabia was:", opts:["Uhud","Khandaq","Makkah Conquest (Fatah Makkah)","Hunayn"], ans:2 },
  ],

  'general-science': [
    { q:"The SI unit of electric current is:", opts:["Volt","Watt","Ampere","Ohm"], ans:2 },
    { q:"Earth's atmosphere is approximately 78% composed of:", opts:["Oxygen","Carbon Dioxide","Nitrogen","Argon"], ans:2 },
    { q:"Speed of light in vacuum is approximately:", opts:["3×10⁶ m/s","3×10⁸ m/s","3×10¹⁰ m/s","3×10⁵ km/hr"], ans:1 },
    { q:"DNA stands for:", opts:["Dioxyribose Nucleic Acid","Deoxyribonucleic Acid","Deoxyribose Nitric Acid","Dinitrogen Acid"], ans:1 },
    { q:"Pakistan has over how many glaciers?", opts:["1,000","3,000","5,000","7,000+"], ans:3 },
    { q:"Ozone layer primarily absorbs:", opts:["Infrared radiation","UV-B radiation","X-rays","Radio waves"], ans:1 },
    { q:"Photosynthesis converts light energy into:", opts:["Kinetic energy","Chemical energy (glucose)","Electrical energy","Thermal energy"], ans:1 },
    { q:"The human body's largest organ is:", opts:["Liver","Brain","Skin","Intestines"], ans:2 },
    { q:"Newton's Third Law states:", opts:["F=ma","Every action has equal and opposite reaction","Objects at rest stay at rest","Energy cannot be created or destroyed"], ans:1 },
    { q:"pH of pure water at 25°C is:", opts:["0","5","7","14"], ans:2 },
    { q:"Which planet has the most moons (as of 2024)?", opts:["Jupiter","Saturn","Uranus","Neptune"], ans:1 },
    { q:"CRISPR-Cas9 is a technology for:", opts:["Gene editing","Drug delivery","Protein synthesis","Stem cell extraction"], ans:0 },
    { q:"GLOF stands for:", opts:["Global Lake Overflow Flood","Glacial Lake Outburst Flood","Ground Level Overflow Flood","Geological Landform Overflow Flood"], ans:1 },
    { q:"The ozone layer is found in the:", opts:["Troposphere","Stratosphere","Mesosphere","Thermosphere"], ans:1 },
    { q:"Which gas is primarily responsible for the greenhouse effect?", opts:["Nitrogen","Oxygen","Carbon Dioxide","Hydrogen"], ans:2 },
    { q:"The process by which rocks are broken down by weather is called:", opts:["Erosion","Weathering","Sedimentation","Fossilization"], ans:1 },
    { q:"Antibiotic resistance is primarily caused by:", opts:["Overuse/misuse of antibiotics","Genetic mutations in humans","Viral infections","Inadequate vitamin intake"], ans:0 },
    { q:"The human genome contains approximately how many genes?", opts:["2,000","20,000-25,000","200,000","2 million"], ans:1 },
    { q:"Which type of energy does Pakistan have greatest untapped potential in?", opts:["Nuclear","Coal","Solar and Wind","Tidal"], ans:2 },
    { q:"The chemical formula for water is:", opts:["H₂O₂","HO","H₂O","H₃O"], ans:2 },
    { q:"Indus River originates from:", opts:["Hindu Kush","Karakoram","Tibet (near Lake Mansarovar)","Himalayas in India"], ans:2 },
    { q:"Which element has the atomic number 6?", opts:["Nitrogen","Carbon","Oxygen","Boron"], ans:1 },
    { q:"The Large Hadron Collider (LHC) is located in:", opts:["USA","UK","France/Switzerland border","Germany"], ans:2 },
    { q:"Average distance from Earth to Sun is called:", opts:["Light year","Astronomical Unit (AU)","Parsec","Kilometer"], ans:1 },
    { q:"Malaria is caused by:", opts:["Bacteria","Virus","Protozoan (Plasmodium)","Fungus"], ans:2 },
    { q:"The process of converting nitrogen gas to ammonia is:", opts:["Nitrification","Nitrogen fixation","Denitrification","Ammonification"], ans:1 },
    { q:"Pakistan's Tarbela Dam is built on which river?", opts:["Chenab","Jhelum","Indus","Kabul"], ans:2 },
    { q:"The speed of sound in air at room temperature is approximately:", opts:["343 m/s","150 m/s","700 m/s","1000 m/s"], ans:0 },
    { q:"Which vitamin is produced by the body when exposed to sunlight?", opts:["Vitamin A","Vitamin B12","Vitamin C","Vitamin D"], ans:3 },
    { q:"The Great Barrier Reef is located in:", opts:["Caribbean Sea","Indian Ocean","Coral Sea (Australia)","Pacific Ocean near Japan"], ans:2 },
  ],

  'english': [
    { q:"Choose the correct sentence:", opts:["Neither the boys nor their teacher were present.","Neither the boys nor their teacher was present.","Neither the boys nor their teacher are present.","Neither of the boys or teacher were present."], ans:1 },
    { q:"'Enervate' most nearly means:", opts:["Energize","Weaken","Confuse","Enlarge"], ans:1 },
    { q:"The passive voice of 'She will write a letter' is:", opts:["A letter would be written by her","A letter will have been written by her","A letter will be written by her","A letter is written by her"], ans:2 },
    { q:"A précis should be approximately what fraction of the original?", opts:["Half","One-third","One-quarter","Two-thirds"], ans:1 },
    { q:"'Prolix' means:", opts:["Brief and concise","Tediously long and wordy","Unclear and vague","Original and creative"], ans:1 },
    { q:"Which is the correct spelling?", opts:["Accomodate","Accommodate","Accommmodate","Accomoaate"], ans:1 },
    { q:"'The pen is mightier than the sword' is an example of:", opts:["Simile","Metaphor","Personification","Hyperbole"], ans:1 },
    { q:"The antonym of 'Verbose' is:", opts:["Wordy","Eloquent","Concise","Fluent"], ans:2 },
    { q:"An essay's thesis statement typically appears:", opts:["In conclusion only","In introduction, usually at end","Beginning of each body paragraph","After first body paragraph"], ans:1 },
    { q:"Personification means:", opts:["Comparing two unlike things using 'like' or 'as'","Attributing human qualities to non-human things","Exaggerating for effect","Repeating consonant sounds"], ans:1 },
    { q:"'Ameliorate' means:", opts:["Worsen","Improve or make better","Remain neutral","Completely destroy"], ans:1 },
    { q:"In the sentence 'The team was defeated,' 'team' is a:", opts:["Proper noun","Abstract noun","Collective noun","Material noun"], ans:2 },
    { q:"The conjunction in 'She is poor but happy' is:", opts:["Is","Poor","But","Happy"], ans:2 },
    { q:"'Ad hoc' means:", opts:["Formal and planned","For a specific purpose only","Ancient tradition","Legal requirement"], ans:1 },
    { q:"Which tense is 'He has been writing for two hours'?", opts:["Simple present","Present perfect","Present perfect continuous","Past perfect"], ans:2 },
    { q:"'Sui generis' means:", opts:["In good faith","Of its own kind/unique","Without prior planning","As it is"], ans:1 },
    { q:"The figure of speech in 'Death where is thy sting?' is:", opts:["Simile","Personification","Apostrophe","Onomatopoeia"], ans:2 },
    { q:"An 'oxymoron' combines:", opts:["Contradictory terms","Similar terms","Foreign terms","Technical terms"], ans:0 },
    { q:"Which word is correctly hyphenated?", opts:["well known","well-known","wellknown","well_known"], ans:1 },
    { q:"'Epistolary' refers to:", opts:["A type of poetry","Writing/literature in letter form","A rhetorical device","A narrative perspective"], ans:1 },
    { q:"The correct use of 'whom' in which sentence?", opts:["Whom is coming?","To whom did you speak?","Whom went there?","It was whom?"], ans:1 },
    { q:"'Bathos' in literature means:", opts:["An anticlimactic descent from the sublime to the ridiculous","Excessive pride","A type of sonnet","A narrative flashback"], ans:0 },
    { q:"Which sentence is grammatically correct?", opts:["Between you and I","Between you and me","Between you and myself","Between I and you"], ans:1 },
    { q:"The word 'ephemeral' means:", opts:["Eternal","Short-lived","Spiritual","Practical"], ans:1 },
    { q:"'Soliloquy' in drama refers to:", opts:["Dialogue between two characters","A character speaking thoughts aloud when alone","A song between acts","A stage direction"], ans:1 },
    { q:"Choose the correct plural: 'Criterion' becomes:", opts:["Criterions","Criterias","Criteria","Criterion"], ans:2 },
    { q:"'Pejorative' means:", opts:["Expressing approval","Expressing disapproval/contempt","Expressing neutrality","Expressing surprise"], ans:1 },
    { q:"In 'She ran quickly,' 'quickly' is a:", opts:["Adjective","Adverb","Preposition","Conjunction"], ans:1 },
    { q:"The literary term 'stream of consciousness' refers to:", opts:["A narrative technique depicting thought flow","A type of plot structure","A form of dialogue","A genre of historical fiction"], ans:0 },
    { q:"'Hubris' in Greek tragedy means:", opts:["Excessive pride leading to downfall","Cowardice","Wisdom","Fate"], ans:0 },
  ],

  'international-relations': [
    { q:"Realism in IR holds that the primary actors are:", opts:["International organizations","Non-state actors","States","Multinational corporations"], ans:2 },
    { q:"'Soft power' concept was developed by:", opts:["Hans Morgenthau","Kenneth Waltz","Joseph Nye","Samuel Huntington"], ans:2 },
    { q:"The Democratic Peace Theory holds that:", opts:["Democracies are always peaceful","Democracies rarely fight each other","All democracies are stable","Democracy prevents civil wars"], ans:1 },
    { q:"The term 'Westphalian sovereignty' refers to:", opts:["Economic interdependence","Non-interference in internal affairs","Military alliances","Trade agreements"], ans:1 },
    { q:"Thucydides Trap refers to:", opts:["Trade war between great powers","Conflict when rising power threatens dominant power","Alliance system failures","Nuclear deterrence paradox"], ans:1 },
    { q:"The UN Security Council has how many permanent members?", opts:["3","5","7","10"], ans:1 },
    { q:"R2P (Responsibility to Protect) doctrine was adopted in:", opts:["1995","2001","2005","2009"], ans:2 },
    { q:"The NPT (Nuclear Non-Proliferation Treaty) was signed in:", opts:["1963","1968","1972","1980"], ans:1 },
    { q:"Constructivism in IR emphasizes:", opts:["Power and national interest","Economic interdependence","Ideas, norms, and identities","Military alliances"], ans:2 },
    { q:"The International Court of Justice settles disputes between:", opts:["Individuals and states","States and international organizations","States only","Criminal cases"], ans:2 },
    { q:"Pakistan is a member of which nuclear-related treaty?", opts:["NPT","CTBT","Both NPT and CTBT","Neither NPT nor CTBT"], ans:3 },
    { q:"The concept of 'deterrence' in IR means:", opts:["Pre-emptive strike","Preventing action through threat of retaliation","Alliance building","Coercive diplomacy"], ans:1 },
    { q:"SAARC was established in:", opts:["1980","1985","1990","1995"], ans:1 },
    { q:"The Bretton Woods institutions include:", opts:["NATO and UN","IMF and World Bank","WTO and WB","UN and WHO"], ans:1 },
    { q:"'Balance of power' is a concept associated with:", opts:["Liberalism","Constructivism","Realism","Marxism"], ans:2 },
    { q:"Doha Development Round is related to:", opts:["Climate change","International trade (WTO)","Nuclear proliferation","Development aid"], ans:1 },
    { q:"Pakistan-US relations are primarily governed by which framework?", opts:["SEATO treaty","Non-Proliferation treaty","Strategic partnership frameworks","Formal military alliance"], ans:2 },
    { q:"The concept of 'failed state' refers to:", opts:["Economically poor state","State that cannot perform basic functions","State without elections","State with military government"], ans:1 },
    { q:"Karl Marx's view of international relations emphasized:", opts:["State power","Economic class struggle and capitalism","Cultural identity","Democratic peace"], ans:1 },
    { q:"Which organization does NOT have Pakistan as a member?", opts:["SCO","OIC","ASEAN","ECO"], ans:2 },
    { q:"The Kellogg-Briand Pact (1928) condemned:", opts:["Colonial rule","War as instrument of national policy","Nuclear weapons","Trade barriers"], ans:1 },
    { q:"Pakistan's 'strategic depth' doctrine was primarily concerned with:", opts:["India","Afghanistan","Iran","China"], ans:1 },
    { q:"The Helsinki Accords (1975) dealt with:", opts:["Nuclear weapons","European security and human rights","Trade liberalization","Climate change"], ans:1 },
    { q:"'Track II diplomacy' refers to:", opts:["Official government negotiations","Unofficial dialogue between non-government actors","UN-mediated talks","Secret military communications"], ans:1 },
    { q:"The Afghan refugee crisis since 1979 has primarily affected:", opts:["India","Iran and Pakistan","Turkey","Gulf states"], ans:1 },
    { q:"South Asian nuclear doctrine includes 'Full Spectrum Deterrence' from:", opts:["India","Pakistan","Both India and Pakistan","China"], ans:1 },
    { q:"The ECO (Economic Cooperation Organization) is centered on:", opts:["East Asia","South and Central Asia","Africa","Latin America"], ans:1 },
    { q:"Norm of 'non-refoulement' in international law relates to:", opts:["Trade","Refugees and asylum seekers","Nuclear non-proliferation","Environmental protection"], ans:1 },
    { q:"Which theory argues states cooperate through institutions?", opts:["Classical Realism","Neo-Realism","Liberal Institutionalism","Constructivism"], ans:2 },
    { q:"Pakistan-China relations are described as:", opts:["Transactional partnership","All-weather strategic partnership","Military alliance","Economic partnership only"], ans:1 },
  ],

  'political-science': [
    { q:"John Locke's social contract argued that government derives legitimacy from:", opts:["God","Tradition","Consent of the governed","Military power"], ans:2 },
    { q:"Thomas Hobbes described life without government as:", opts:["Peaceful and cooperative","'Nasty, brutish, and short'","Naturally equal","Divinely ordered"], ans:1 },
    { q:"Federalism is defined as:", opts:["Concentration of power at center","Division of power between center and regions","Parliamentary system","Presidential system"], ans:1 },
    { q:"Gramsci's concept of 'hegemony' refers to:", opts:["Military domination","Ideological dominance without coercion","Economic control","Political dictatorship"], ans:1 },
    { q:"Max Weber's 'ideal type' bureaucracy is characterized by:", opts:["Nepotism and patronage","Rational-legal authority and hierarchical structure","Traditional authority","Charismatic leadership"], ans:1 },
    { q:"Montesquieu is associated with the doctrine of:", opts:["Social contract","Separation of powers","Popular sovereignty","Divine right of kings"], ans:1 },
    { q:"Proportional representation (PR) electoral system gives representation based on:", opts:["First-past-the-post","Majority votes in constituency","Proportion of total votes received","Geographic area"], ans:2 },
    { q:"'Competitive authoritarianism' refers to:", opts:["Military dictatorship","Regime holding elections but manipulating them","Pure democracy","Theocracy"], ans:1 },
    { q:"Karl Marx's materialist conception of history argues that:", opts:["Ideas drive history","Economic conditions drive history","Great men drive history","Geography drives history"], ans:1 },
    { q:"Rousseau's 'general will' refers to:", opts:["Majority opinion","Common good of society beyond individual interests","Will of the ruler","Will of the elite"], ans:1 },
    { q:"Which of the following is NOT a function of political parties?", opts:["Interest aggregation","Policy formulation","Judicial review","Political socialization"], ans:2 },
    { q:"The term 'securitization' in political science means:", opts:["National security policy","Process of making something a security issue","Military alliance formation","Intelligence gathering"], ans:1 },
    { q:"Almond and Verba classified political cultures into:", opts:["2 types","3 types","4 types","5 types"], ans:1 },
    { q:"The concept of 'judicial activism' refers to:", opts:["Judges refusing to decide cases","Judges expanding their role beyond interpretation","Judges following strict original text","Judicial corruption"], ans:1 },
    { q:"Pakistan follows which type of governmental system?", opts:["Presidential","Parliamentary","Semi-presidential","Confederation"], ans:1 },
    { q:"'Public choice theory' applies which methodology to political analysis?", opts:["Sociological","Economic/rational choice","Historical","Psychological"], ans:1 },
    { q:"The concept of 'consociationalism' is associated with governing:", opts:["Homogeneous societies","Deeply divided pluralistic societies","Military regimes","Economic unions"], ans:1 },
    { q:"Samuel Huntington's 'Clash of Civilizations' thesis argues:", opts:["Economic factors will cause future conflicts","Cultural and religious identities will drive future conflicts","Class struggle will continue","Nation-states will disappear"], ans:1 },
    { q:"Legitimacy in political theory means:", opts:["Legal authority","Rightfulness/justification of authority in the eyes of the governed","Military power","Economic wealth"], ans:1 },
    { q:"The 'iron law of oligarchy' was proposed by:", opts:["Marx","Weber","Robert Michels","Gramsci"], ans:2 },
    { q:"'Devolution' differs from 'federalism' in that:", opts:["Devolution is permanent, federalism temporary","Devolution is granted by central authority and can be revoked; federalism is constitutionally entrenched","They are identical","Federalism is for large states only"], ans:1 },
    { q:"Which political philosopher wrote 'The Prince'?", opts:["Hobbes","Locke","Machiavelli","Rousseau"], ans:2 },
    { q:"'Populism' is characterized by:", opts:["Elite governance","Anti-establishment appeal claiming to represent 'the people' vs. 'corrupt elite'","Technocratic administration","Military rule"], ans:1 },
    { q:"The term 'civil society' refers to:", opts:["Government institutions","Military organizations","Organizations between state and individual (NGOs, professional associations)","Political parties"], ans:2 },
    { q:"Secularism in political theory means:", opts:["Atheism","Separation of religion from state affairs","Prohibition of religion","State promotion of atheism"], ans:1 },
    { q:"'FPTP' electoral system stands for:", opts:["Federal Party Transfer Protocol","First Past The Post","Fair Proportional Transfer Policy","Federal Primary Transfer Poll"], ans:1 },
    { q:"Weber's three types of legitimate authority are:", opts:["Democratic, traditional, military","Traditional, charismatic, rational-legal","Monarchical, democratic, authoritarian","Economic, political, cultural"], ans:1 },
    { q:"National Assembly in Pakistan has how many reserved seats for women?", opts:["33","60","82","100"], ans:1 },
    { q:"The concept of 'veto player' in political science refers to:", opts:["Voters with two votes","Actor whose agreement is required for policy change","UN veto-holding nations","President's legislative power"], ans:1 },
    { q:"Which document is considered the world's oldest surviving written constitution?", opts:["US Constitution","Magna Carta","Pakistan's 1973 Constitution","San Marino's Statutes"], ans:0 },
  ],
};


/* ================================================================
   PRACTICE QUESTIONS (CSS-pattern questions by subject)
   ================================================================ */
const PRACTICE_QUESTIONS = {
  'pakistan-affairs': [
    { q:"Critically evaluate Pakistan's water management policy in context of regional tensions over the Indus Waters Treaty.", hint:"Issue definition → Treaty history → Current challenges → Critical evaluation → Policy recommendations" },
    { q:"Discuss the impact of the 18th Constitutional Amendment on centre-province relations in Pakistan.", hint:"Devolution of powers, NFC Award, provincial capacity gaps, implementation challenges" },
    { q:"Analyze the role of the military establishment in Pakistan's democratic development.", hint:"Historical pattern → Civil-military imbalance → Hybrid democracy theory → Recent developments" },
    { q:"Evaluate the socio-economic implications of Pakistan's rapidly growing youth population.", hint:"Demographic dividend theory → Current reality → Education and employment → Policy prescriptions" },
    { q:"Examine the causes and consequences of political instability in Pakistan since 1947.", hint:"Institutional weakness → Foreign interference → Regional issues → Federal structure tensions → Pattern analysis" },
    { q:"Critically analyze Pakistan's energy crisis and suggest a sustainable solution pathway.", hint:"Circular debt origin → IPP contracts → Renewable potential → Governance failure → Reform roadmap" },
    { q:"Discuss the impact of CPEC on Pakistan's economy, sovereignty, and regional position.", hint:"Infrastructure gains → Debt sustainability → Economic terms → Strategic implications → Balance sheet" },
    { q:"Analyze the phenomenon of brain drain from Pakistan and evaluate potential remedial measures.", hint:"Scale and data → Causes → Economic cost → Diaspora engagement → Enabling environment creation" },
    { q:"Evaluate the performance of Pakistan's judiciary in maintaining constitutional supremacy.", hint:"Historical role → Landmark cases → Doctrine of necessity → Judicial activism → Independence threats" },
    { q:"Discuss the challenges of implementing good governance in Pakistan.", hint:"Concept definition → Current gaps → Accountability mechanisms → Civil service → Political will requirement" },
    { q:"Critically examine federalism in Pakistan with particular reference to the 18th Amendment.", hint:"Theory → Constitutional history → 18th Amendment provisions → Implementation → Outcomes by province" },
    { q:"Analyze the role of civil society in Pakistan's democratic consolidation.", hint:"Media → NGOs → Lawyers' movement → Digital activism → Limitations and achievements" },
    { q:"Assess the impact of the Afghan refugee crisis on Pakistan's economy and security.", hint:"Numbers and duration → Economic cost → Security externalities → International burden-sharing → Policy response" },
    { q:"Discuss the taxation challenge in Pakistan and its implications for economic self-reliance.", hint:"Tax-to-GDP context → Agriculture exemption → Informal economy → FBR reform → Political barriers" },
    { q:"Evaluate the effectiveness of Pakistan's counter-terrorism strategy.", hint:"Operations vs. political solutions → NAP implementation → Root causes → Civil-military coordination → Outcomes" },
  ],
  'current-affairs': [
    { q:"Analyze the geopolitical implications of Russia-Ukraine war for Pakistan's foreign policy.", hint:"Energy prices → Wheat supply → US-Russia tensions → Non-alignment dilemma → Pakistan's position" },
    { q:"Discuss the challenges and opportunities of the Fourth Industrial Revolution for developing economies.", hint:"Automation threats → Digital opportunities → Skill gaps → Policy responses → Pakistan's readiness" },
    { q:"Critically evaluate the role of the UN Security Council in maintaining global peace.", hint:"Veto paralysis → Recent failures → Success cases → Reform proposals → Alternative mechanisms" },
    { q:"Assess the impact of US-China strategic competition on South Asian geopolitics.", hint:"India-China-Pakistan triangle → Quad → AUKUS → BRI vs PGII → Pakistan's balancing challenge" },
    { q:"How has climate change transformed from an environmental to a security concern?", hint:"Resource conflicts → Migration → Food insecurity → Military competition → Climate security definition" },
    { q:"Examine the causes and global implications of rising food insecurity.", hint:"Ukraine war impact → Climate change → Supply chains → Commodity prices → Developing world vulnerability" },
    { q:"Discuss the significance of BRICS expansion and its implications for global order.", hint:"New members → Dedollarization → Global South solidarity → Western response → Limitations" },
    { q:"Analyze the humanitarian and international law implications of the Gaza conflict.", hint:"IHL principles → R2P debate → UN paralysis → War crimes allegations → Two-state solution" },
    { q:"Evaluate the adequacy of Paris Agreement framework in addressing climate change.", hint:"NDC ambition gap → Finance pledges → Loss and damage → Global Stocktake → Enforcement" },
    { q:"Discuss the role of AI in reshaping global economy and implications for developing nations.", hint:"Job displacement → Productivity gains → Regulatory responses → Developing country challenges → Governance" },
  ],
  'international-relations': [
    { q:"Compare and contrast realism and liberalism as frameworks for understanding Pakistan's foreign policy.", hint:"Define both → Apply to Pakistan's security behavior → Empirical testing → Critique and synthesis" },
    { q:"Discuss the concept of nuclear deterrence in context of South Asian strategic environment.", hint:"MAD theory → South Asian context → Credibility → Stability-instability paradox → Risk management" },
    { q:"Evaluate the effectiveness of economic sanctions as a tool of foreign policy with examples.", hint:"Iran → Russia → North Korea → Effectiveness criteria → Humanitarian impact → Alternatives" },
    { q:"How has the concept of sovereignty evolved in post-Cold War international system?", hint:"Westphalian sovereignty → R2P challenge → Cyber sovereignty → Non-state actors → Pakistan's concerns" },
    { q:"Critically examine the democratic peace theory with reference to South Asian context.", hint:"Define DPT → Empirical support → South Asian test → India-Pakistan case → Critique" },
    { q:"Analyze Pakistan's relationship with the United States: partnership or dependency?", hint:"Historical phases → Aid dynamics → Post-2011 tensions → Current recalibration → Future direction" },
    { q:"Discuss the role of soft power in contemporary international relations with reference to Pakistan.", hint:"Nye's concept → Cultural diplomacy → Diaspora → Cricket → Pakistan's gaps vs. India and China" },
    { q:"Examine the impact of non-state actors on contemporary international security.", hint:"Al-Qaeda → ISIS → TTP → Houthis → State vs non-state distinction → Counter-terrorism frameworks" },
    { q:"How does the Shanghai Cooperation Organisation serve Pakistan's strategic interests?", hint:"Regional connectivity → Counter-terrorism → China-Russia alignment → India tensions within SCO" },
    { q:"Analyze the concept of strategic depth in Pakistan's Afghan policy and its contemporary relevance.", hint:"Definition → Historical rationale → Post-9/11 recalibration → 2021 Taliban return → Policy rethink" },
  ],
  'political-science': [
    { q:"Critically examine Gramsci's concept of hegemony and its relevance to Pakistani politics.", hint:"Cultural hegemony → Civil society → Consent vs coercion → Elite capture → Media and education" },
    { q:"Discuss the role of interest groups in democratic governance with examples.", hint:"Pluralism → Corporatism → Capture theory → Business lobbies → Civil society in Pakistan" },
    { q:"What is the significance of judicial review in constitutional democracies?", hint:"Marbury vs Madison → Pakistan's Art 199/184(3) → Judicial activism debate → Balance of powers" },
    { q:"Examine federalism as a solution to ethnic and regional conflicts with comparative examples.", hint:"Pakistan 18th Amendment → Indian asymmetric federalism → Ethiopian case → Belgium's consociationalism" },
    { q:"Discuss the concept of civil-military relations and its implications for democratic development.", hint:"Huntington's model → Finer's typology → Pakistan's experience → Turkey case → Consolidation theory" },
    { q:"Analyze the concept of political culture and its impact on democratic development in Pakistan.", hint:"Almond & Verba → Participant vs subject culture → Pakistan's feudal political culture → Reform" },
    { q:"Critically evaluate the role of political parties in Pakistan's democratic consolidation.", hint:"Party systems theory → Internal democracy → Party financing → Programmatic vs patronage parties" },
    { q:"Discuss the theory of social contract and its relevance to state-citizen relations in Pakistan.", hint:"Hobbes, Locke, Rousseau → Apply to weak state → Selective service delivery → Breaking contract" },
    { q:"Examine the phenomenon of populism and its manifestations in contemporary South Asian politics.", hint:"Defining populism → PTI as case study → Modi's BJP → Anti-establishment appeal → Dangers" },
    { q:"How does authoritarianism persist in the 21st century despite global democratic norms?", hint:"Competitive authoritarianism → Institutional manipulation → Legitimation strategies → Digital tools" },
  ],
  'islamic-studies': [
    { q:"Discuss the concept of Shura and its relevance to modern democratic governance.", hint:"Quranic basis → Classical models → Contemporary Islamic democracies → Scholarly debate" },
    { q:"Analyze the concept of Ijtihad and conditions under which it may be applied today.", hint:"Historical debate on closing → Qualifications → Iqbal's argument → Contemporary application" },
    { q:"Explain the Islamic economic system and how it differs from capitalism and socialism.", hint:"Riba prohibition → Zakat redistribution → Property rights with social function → Islamic banking" },
    { q:"Critically evaluate the role of religious scholars (Ulama) in Pakistani state and society.", hint:"Historical influence → Deoband vs Barelvi → Political Islam → Madrassa system → Reform debate" },
    { q:"Discuss the rights of minorities in an Islamic state with historical and contemporary examples.", hint:"Dhimmi system → Medina Charter → Pakistan's provisions → Lived reality → Reform arguments" },
    { q:"Examine the concept of Jihad: its classical definition and modern misappropriation.", hint:"Greater vs lesser Jihad → Jus ad bellum conditions → Extremist distortion → Scholarly response" },
    { q:"Analyze Zakat as a tool of poverty alleviation and evaluate its implementation in Pakistan.", hint:"Classical mechanism → Modern state implementation → Pakistan's Zakat Act → Effectiveness assessment" },
    { q:"Discuss the challenges of implementing an Islamic economic system in a globalized world.", hint:"Islamic banking limitations → SWIFT compatibility → Regulatory challenges → Sukuk market growth" },
    { q:"Critically examine the relationship between Islam and international human rights frameworks.", hint:"UDHR vs Cairo Declaration → Universalism vs cultural relativism → Muslim reformers' arguments" },
    { q:"Discuss Allama Iqbal's philosophy of Islamic renaissance and its contemporary relevance.", hint:"Reconstruction of Religious Thought → Khudi → Pan-Islamism critique → Ijtihad call → Pakistan relevance" },
  ],
  'english-essay': [
    { q:"Write an essay: 'True democracy requires an informed electorate — does Pakistan have one?'", hint:"Literacy rates → Media literacy → Election manipulation → Voter turnout data → Reform proposals" },
    { q:"Discuss: 'Science without conscience is the ruin of the soul.' (Rabelais)", hint:"Scientific ethics → AI ethics → Bioweapons → Nuclear arms → Corporate science → Regulatory response" },
    { q:"Write an essay: 'The greatest threat to Pakistan is not external but internal.'", hint:"Prioritize internal threats → Corruption → Extremism → Economic mismanagement → Institutional decay" },
    { q:"A society that loses its cultural identity loses its soul — discuss.", hint:"Globalization impact → Cultural homogenization → Westernization → Indigenous knowledge → Resistance" },
    { q:"Examine: 'Poverty is not a lack of money but a lack of options.'", hint:"Sen's capability approach → Structural poverty → Social mobility barriers → Multidimensional poverty" },
    { q:"Write on: 'Without rule of law, development is impossible.'", hint:"Property rights → Contract enforcement → Equal treatment → WJP data → Pakistan's challenges" },
    { q:"Discuss: 'Pakistan's greatest untapped resource is its women.'", hint:"Labor force participation → Economic returns → Barriers → Success stories → Policy recommendations" },
    { q:"Examine: 'Climate change is Pakistan's most urgent national security threat.'", hint:"Flood data → Water security → Food security → Glacial melts → Displacement → Comparative threats" },
    { q:"Write: 'Education without values is education incomplete.'", hint:"Moral education debate → Rote learning critique → Character formation → Religious vs secular debate" },
    { q:"Discuss: 'A country's budget is a moral document.'", hint:"Budget priorities as values → Pakistan's defence vs education spending → Social spending inequality" },
  ],
};

// Expose globally
window.ESSAY_TOPICS       = ESSAY_TOPICS;
window.PRECIS_PASSAGES    = PRECIS_PASSAGES;
window.MCQ_BANK           = MCQ_BANK;
window.PRACTICE_QUESTIONS = PRACTICE_QUESTIONS;
