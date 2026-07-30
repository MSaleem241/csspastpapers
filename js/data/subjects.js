/**
 * subjects.js — Complete CSS syllabus data
 * Used by: roadmap, dashboard, subject pages, planner
 *
 * Structure: SUBJECTS array of subject objects.
 * Each subject has topic groups with individual topics.
 * topicId values are used as localStorage keys — do not change them.
 */

const SUBJECTS = [
  {
    id: 'english-essay',
    name: 'English Essay',
    icon: '✍️',
    color: '#3b82f6',
    description: 'Develop argument-led essay writing for CSS standard',
    totalMarks: 100,
    papers: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
    groups: [
      {
        name: 'Foundation',
        topics: [
          { id: 'ee-t1', label: 'Essay structure (intro, body, conclusion)' },
          { id: 'ee-t2', label: 'Thesis statement writing' },
          { id: 'ee-t3', label: 'Paragraph development (PEEL)' },
          { id: 'ee-t4', label: 'Transitional phrases & coherence' },
          { id: 'ee-t5', label: 'Argument vs. narrative vs. descriptive' },
        ]
      },
      {
        name: 'Technique',
        topics: [
          { id: 'ee-t6',  label: 'Hook & opening strategies' },
          { id: 'ee-t7',  label: 'Counter-argument & refutation' },
          { id: 'ee-t8',  label: 'Use of evidence and examples' },
          { id: 'ee-t9',  label: 'Avoiding passive voice overuse' },
          { id: 'ee-t10', label: 'Vocabulary and style register' },
        ]
      },
      {
        name: 'Topics by Category',
        topics: [
          { id: 'ee-t11', label: 'Pakistan Affairs essay themes' },
          { id: 'ee-t12', label: 'International relations essays' },
          { id: 'ee-t13', label: 'Social issues essays' },
          { id: 'ee-t14', label: 'Science & technology essays' },
          { id: 'ee-t15', label: 'Philosophy & ethics essays' },
        ]
      },
      {
        name: 'Exam Strategy',
        topics: [
          { id: 'ee-t16', label: 'Time management (2.5 hours)' },
          { id: 'ee-t17', label: 'Topic selection strategy' },
          { id: 'ee-t18', label: 'Word count targets (1000–1500)' },
          { id: 'ee-t19', label: 'Revision and proofreading time' },
          { id: 'ee-t20', label: 'Examiner expectations' },
        ]
      },
    ]
  },
  {
    id: 'english-precis',
    name: 'English Précis & Composition',
    icon: '📝',
    color: '#7c3aed',
    description: 'Précis writing, comprehension, translation, and grammar',
    totalMarks: 100,
    papers: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
    groups: [
      {
        name: 'Précis Writing',
        topics: [
          { id: 'ep-t1', label: 'Rules of précis writing' },
          { id: 'ep-t2', label: 'Identifying key ideas' },
          { id: 'ep-t3', label: 'Maintaining third person & past tense' },
          { id: 'ep-t4', label: 'One-third reduction practice' },
          { id: 'ep-t5', label: 'Giving a suitable title' },
        ]
      },
      {
        name: 'Grammar & Composition',
        topics: [
          { id: 'ep-t6',  label: 'Tenses and their correct use' },
          { id: 'ep-t7',  label: 'Active and passive voice' },
          { id: 'ep-t8',  label: 'Direct and indirect speech' },
          { id: 'ep-t9',  label: 'Sentence correction and error detection' },
          { id: 'ep-t10', label: 'Fill in the blanks with prepositions/articles' },
        ]
      },
      {
        name: 'Vocabulary',
        topics: [
          { id: 'ep-t11', label: 'Synonyms and antonyms' },
          { id: 'ep-t12', label: 'Idioms and phrases' },
          { id: 'ep-t13', label: 'Word pairs (affect/effect, etc.)' },
          { id: 'ep-t14', label: 'Academic word list' },
          { id: 'ep-t15', label: 'CSS-level vocabulary practice' },
        ]
      },
      {
        name: 'Comprehension & Translation',
        topics: [
          { id: 'ep-t16', label: 'Reading comprehension strategies' },
          { id: 'ep-t17', label: 'Urdu-to-English translation basics' },
          { id: 'ep-t18', label: 'Letter and application writing' },
          { id: 'ep-t19', label: 'Expansion of ideas' },
          { id: 'ep-t20', label: 'Paragraph writing' },
        ]
      },
    ]
  },
  {
    id: 'gsa',
    name: 'General Science & Ability',
    icon: '🔬',
    color: '#0891b2',
    description: 'Physics, chemistry, biology, logical reasoning, and Pakistan geography',
    totalMarks: 100,
    papers: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
    groups: [
      {
        name: 'Basic Sciences',
        topics: [
          { id: 'gsa-t1', label: 'Basic physics (motion, energy, electricity)' },
          { id: 'gsa-t2', label: 'Chemistry fundamentals (periodic table, bonds)' },
          { id: 'gsa-t3', label: 'Biology basics (cells, genetics, ecosystems)' },
          { id: 'gsa-t4', label: 'Environmental science & climate change' },
          { id: 'gsa-t5', label: 'Astronomy and space science' },
        ]
      },
      {
        name: 'Pakistan Geography & Environment',
        topics: [
          { id: 'gsa-t6',  label: 'Pakistan geography (rivers, mountains, deserts)' },
          { id: 'gsa-t7',  label: 'Pakistan climate zones' },
          { id: 'gsa-t8',  label: 'Natural resources of Pakistan' },
          { id: 'gsa-t9',  label: 'Glaciers and water resources' },
          { id: 'gsa-t10', label: 'Environmental issues in Pakistan' },
        ]
      },
      {
        name: 'Technology & IT',
        topics: [
          { id: 'gsa-t11', label: 'Computer basics and internet' },
          { id: 'gsa-t12', label: 'Artificial Intelligence fundamentals' },
          { id: 'gsa-t13', label: 'Biotechnology and genetic engineering' },
          { id: 'gsa-t14', label: 'Scientific inventions and discoveries' },
          { id: 'gsa-t15', label: 'Medical science developments' },
        ]
      },
      {
        name: 'Mental Ability',
        topics: [
          { id: 'gsa-t16', label: 'Mathematical reasoning (ratios, percentages)' },
          { id: 'gsa-t17', label: 'Logical sequences and patterns' },
          { id: 'gsa-t18', label: 'Verbal reasoning' },
          { id: 'gsa-t19', label: 'Spatial ability' },
          { id: 'gsa-t20', label: 'Data interpretation (tables, graphs)' },
        ]
      },
    ]
  },
  {
    id: 'current-affairs',
    name: 'Current Affairs',
    icon: '🌍',
    color: '#d97706',
    description: 'Global and regional events, institutions, and trends',
    totalMarks: 100,
    papers: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
    groups: [
      {
        name: 'Pakistan Current Affairs',
        topics: [
          { id: 'ca-t1', label: 'Political developments in Pakistan' },
          { id: 'ca-t2', label: 'Economic indicators and IMF programs' },
          { id: 'ca-t3', label: 'CPEC and development projects' },
          { id: 'ca-t4', label: 'Security and counter-terrorism' },
          { id: 'ca-t5', label: 'Constitutional and judicial developments' },
        ]
      },
      {
        name: 'Regional Affairs',
        topics: [
          { id: 'ca-t6',  label: 'India-Pakistan relations' },
          { id: 'ca-t7',  label: 'Afghanistan: post-2021 developments' },
          { id: 'ca-t8',  label: 'China-Pakistan strategic partnership' },
          { id: 'ca-t9',  label: 'South Asian regional organizations (SAARC)' },
          { id: 'ca-t10', label: 'Iran, Turkey, and Gulf relations' },
        ]
      },
      {
        name: 'International Affairs',
        topics: [
          { id: 'ca-t11', label: 'US-China strategic competition' },
          { id: 'ca-t12', label: 'Russia-Ukraine conflict and implications' },
          { id: 'ca-t13', label: 'Middle East: Gaza, Yemen, Saudi-Iran' },
          { id: 'ca-t14', label: 'Global organizations: UN, IMF, WB, WTO' },
          { id: 'ca-t15', label: 'BRICS, SCO, and emerging alliances' },
        ]
      },
      {
        name: 'Global Challenges',
        topics: [
          { id: 'ca-t16', label: 'Climate change and COP agreements' },
          { id: 'ca-t17', label: 'Global food and energy crises' },
          { id: 'ca-t18', label: 'Refugee and migration crises' },
          { id: 'ca-t19', label: 'Artificial intelligence and tech geopolitics' },
          { id: 'ca-t20', label: 'Nuclear proliferation and disarmament' },
        ]
      },
    ]
  },
  {
    id: 'pakistan-affairs',
    name: 'Pakistan Affairs',
    icon: '🇵🇰',
    color: '#16a34a',
    description: 'History, constitution, politics, economy, and society of Pakistan',
    totalMarks: 100,
    papers: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
    groups: [
      {
        name: 'History',
        topics: [
          { id: 'pa-t1',  label: 'Pakistan Movement and Partition 1947' },
          { id: 'pa-t2',  label: 'Early political history (1947–1958)' },
          { id: 'pa-t3',  label: 'Military rule: Ayub Khan era' },
          { id: 'pa-t4',  label: 'Separation of East Pakistan (1971)' },
          { id: 'pa-t5',  label: 'Bhutto era and 1973 Constitution' },
          { id: 'pa-t6',  label: 'Zia ul-Haq and Islamization' },
          { id: 'pa-t7',  label: 'Democratic transitions (1988–1999)' },
          { id: 'pa-t8',  label: 'Musharraf era and post-9/11' },
          { id: 'pa-t9',  label: 'Democratic governments (2008–2018)' },
          { id: 'pa-t10', label: 'Post-2018 political developments' },
        ]
      },
      {
        name: 'Constitution & Governance',
        topics: [
          { id: 'pa-t11', label: '1956, 1962, and 1973 Constitutions' },
          { id: 'pa-t12', label: '18th Constitutional Amendment' },
          { id: 'pa-t13', label: 'Fundamental rights in the Constitution' },
          { id: 'pa-t14', label: 'Federal structure and NFC Award' },
          { id: 'pa-t15', label: 'Judiciary and Supreme Court role' },
        ]
      },
      {
        name: 'Economy & Development',
        topics: [
          { id: 'pa-t16', label: 'Pakistan economic history and crises' },
          { id: 'pa-t17', label: 'IMF programs and debt management' },
          { id: 'pa-t18', label: 'Agriculture, industry, and services' },
          { id: 'pa-t19', label: 'Human development and poverty' },
          { id: 'pa-t20', label: 'China-Pakistan Economic Corridor (CPEC)' },
        ]
      },
      {
        name: 'Society & Culture',
        topics: [
          { id: 'pa-t21', label: 'Languages, ethnicities, and regional diversity' },
          { id: 'pa-t22', label: 'Education system and HEC' },
          { id: 'pa-t23', label: 'Women empowerment and gender issues' },
          { id: 'pa-t24', label: 'Religious minorities and tolerance' },
          { id: 'pa-t25', label: 'Media, civil society, and NGOs' },
        ]
      },
    ]
  },
  {
    id: 'islamic-studies',
    name: 'Islamic Studies',
    icon: '☪️',
    color: '#854d0e',
    description: 'Quran, Hadith, fiqh, Islamic history, and contemporary issues',
    totalMarks: 100,
    papers: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
    groups: [
      {
        name: 'Quran & Hadith',
        topics: [
          { id: 'is-t1', label: 'Quran: revelation, compilation, and preservation' },
          { id: 'is-t2', label: 'Important Quranic verses and their meanings' },
          { id: 'is-t3', label: 'Hadith: classification and authenticity' },
          { id: 'is-t4', label: 'Six canonical Hadith collections' },
          { id: 'is-t5', label: 'Sunnah and its importance' },
        ]
      },
      {
        name: 'Islamic Law (Fiqh)',
        topics: [
          { id: 'is-t6',  label: 'Sources of Islamic law (Quran, Sunnah, Ijma, Qiyas)' },
          { id: 'is-t7',  label: 'Schools of thought (Hanafi, Shafi\'i, Maliki, Hanbali)' },
          { id: 'is-t8',  label: 'Ijtihad and its contemporary application' },
          { id: 'is-t9',  label: 'Maqasid al-Shariah (Objectives of Islamic Law)' },
          { id: 'is-t10', label: 'Islamic economic system and prohibition of riba' },
        ]
      },
      {
        name: 'Islamic History',
        topics: [
          { id: 'is-t11', label: 'Seerah: Life of the Prophet ﷺ' },
          { id: 'is-t12', label: 'Rightly Guided Caliphs (Khulafa-e-Rashideen)' },
          { id: 'is-t13', label: 'Umayyad Caliphate' },
          { id: 'is-t14', label: 'Abbasid Caliphate and Islamic Golden Age' },
          { id: 'is-t15', label: 'Ottoman Empire and decline' },
        ]
      },
      {
        name: 'Contemporary Islamic Issues',
        topics: [
          { id: 'is-t16', label: 'Islam and democracy' },
          { id: 'is-t17', label: 'Islam and human rights' },
          { id: 'is-t18', label: 'Islamic finance and banking' },
          { id: 'is-t19', label: 'Women\'s rights in Islam' },
          { id: 'is-t20', label: 'Pakistan as an Islamic state: theory vs. practice' },
        ]
      },
    ]
  },
  {
    id: 'ir',
    name: 'International Relations',
    icon: '🤝',
    color: '#2563eb',
    description: 'IR theories, global institutions, foreign policy, and geopolitics',
    totalMarks: 100,
    papers: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
    groups: [
      {
        name: 'Theories of IR',
        topics: [
          { id: 'ir-t1', label: 'Realism: classical and neo-realism' },
          { id: 'ir-t2', label: 'Liberalism and neo-liberal institutionalism' },
          { id: 'ir-t3', label: 'Constructivism' },
          { id: 'ir-t4', label: 'Marxism and dependency theory in IR' },
          { id: 'ir-t5', label: 'Post-colonialism and feminist IR' },
        ]
      },
      {
        name: 'Global Institutions',
        topics: [
          { id: 'ir-t6',  label: 'United Nations: structure and reform' },
          { id: 'ir-t7',  label: 'IMF, World Bank, WTO roles' },
          { id: 'ir-t8',  label: 'NATO and collective security' },
          { id: 'ir-t9',  label: 'SCO, ASEAN, AU, and regional bodies' },
          { id: 'ir-t10', label: 'International Court of Justice and ICC' },
        ]
      },
      {
        name: 'Foreign Policy Concepts',
        topics: [
          { id: 'ir-t11', label: 'Sovereignty and non-interference' },
          { id: 'ir-t12', label: 'Deterrence theory and nuclear weapons' },
          { id: 'ir-t13', label: 'Soft power vs. hard power vs. smart power' },
          { id: 'ir-t14', label: 'Diplomacy: bilateral, multilateral, public' },
          { id: 'ir-t15', label: 'Economic sanctions as foreign policy tool' },
        ]
      },
      {
        name: 'Pakistan\'s Foreign Policy',
        topics: [
          { id: 'ir-t16', label: 'Pakistan-US relations: history and current state' },
          { id: 'ir-t17', label: 'Pakistan-China strategic partnership' },
          { id: 'ir-t18', label: 'Pakistan-India relations and Kashmir dispute' },
          { id: 'ir-t19', label: 'Pakistan and the Muslim world' },
          { id: 'ir-t20', label: 'Pakistan\'s role in UN peacekeeping' },
        ]
      },
    ]
  },
  {
    id: 'political-science',
    name: 'Political Science',
    icon: '⚖️',
    color: '#dc2626',
    description: 'Political theory, comparative politics, and public administration',
    totalMarks: 100,
    papers: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2024],
    groups: [
      {
        name: 'Political Theory',
        topics: [
          { id: 'ps-t1', label: 'Social contract theories (Hobbes, Locke, Rousseau)' },
          { id: 'ps-t2', label: 'Liberalism: classical and modern' },
          { id: 'ps-t3', label: 'Marxism and socialism' },
          { id: 'ps-t4', label: 'Nationalism and its variants' },
          { id: 'ps-t5', label: 'Feminism and gender in political theory' },
        ]
      },
      {
        name: 'State & Government',
        topics: [
          { id: 'ps-t6',  label: 'Theories of state origin and legitimacy' },
          { id: 'ps-t7',  label: 'Forms of government: presidential vs. parliamentary' },
          { id: 'ps-t8',  label: 'Federalism: types and examples' },
          { id: 'ps-t9',  label: 'Separation of powers and checks & balances' },
          { id: 'ps-t10', label: 'Electoral systems and democracy' },
        ]
      },
      {
        name: 'Comparative Politics',
        topics: [
          { id: 'ps-t11', label: 'Political culture and political socialization' },
          { id: 'ps-t12', label: 'Political parties and party systems' },
          { id: 'ps-t13', label: 'Interest groups and civil society' },
          { id: 'ps-t14', label: 'Military in politics' },
          { id: 'ps-t15', label: 'Democratization and democratic backsliding' },
        ]
      },
      {
        name: 'Public Administration',
        topics: [
          { id: 'ps-t16', label: 'Bureaucracy: Weberian model and critique' },
          { id: 'ps-t17', label: 'Civil service reform' },
          { id: 'ps-t18', label: 'Good governance and anti-corruption' },
          { id: 'ps-t19', label: 'Public policy: formulation and implementation' },
          { id: 'ps-t20', label: 'Decentralization and local government' },
        ]
      },
    ]
  },
];

// Compute total topics per subject (for progress calculations)
SUBJECTS.forEach(s => {
  s.totalTopics = s.groups.reduce((sum, g) => sum + g.topics.length, 0);
});

// All subjects topic summary for overall progress
const ALL_SUBJECTS_TOPICS = SUBJECTS.map(s => ({ id: s.id, count: s.totalTopics }));

// Subject lookup
const SUBJECT_MAP = Object.fromEntries(SUBJECTS.map(s => [s.id, s]));

window.SUBJECTS          = SUBJECTS;
window.ALL_SUBJECTS_TOPICS = ALL_SUBJECTS_TOPICS;
window.SUBJECT_MAP       = SUBJECT_MAP;
