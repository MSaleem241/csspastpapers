/**
 * articles.js — Article index and content
 * 100 articles organized by category.
 * Each article has metadata + full HTML content for featured articles.
 * Stub articles link to a generated template page.
 */

const ARTICLES = [
  // ── BEGINNER GUIDE (10 articles) ──────────────────────────
  {
    id: 'bg-01', cat: 'Beginner Guide', slug: 'what-is-css-exam',
    title: 'What is the CSS Examination? A Complete Introduction',
    desc: 'Everything a first-timer needs to know: structure, eligibility, timeline, and what to expect.',
    readTime: 8, featured: true,
    related: ['bg-02','bg-03','strat-01'],
    content: `
<h2>What is the CSS Examination?</h2>
<p>The Central Superior Services (CSS) examination is the most prestigious competitive examination in Pakistan, conducted annually by the Federal Public Service Commission (FPSC). It is the gateway to the country's elite civil service — the occupational groups that manage Pakistan's federal administration, foreign affairs, taxation, police, customs, and dozens of other critical functions of the state.</p>
<p>Clearing CSS is widely regarded as one of the most intellectually demanding achievements in Pakistan. Each year, approximately 15,000 to 20,000 candidates appear, and only around 200 to 400 are eventually recommended for training and appointment — a success rate of roughly 1 to 3 percent. This combination of difficulty and prestige makes CSS preparation a serious, multi-year undertaking for most aspirants.</p>

<h2>The Occupational Groups</h2>
<p>CSS officers are allocated to one of several occupational groups based on merit, preference, and the number of vacancies. The most sought-after groups include:</p>
<ul>
<li><strong>Pakistan Administrative Service (PAS)</strong> — the generalist administrative cadre, historically the most prestigious</li>
<li><strong>Foreign Service of Pakistan (FSP)</strong> — the diplomatic corps</li>
<li><strong>Pakistan Taxation Service (PTS)</strong> — the income tax cadre</li>
<li><strong>Pakistan Customs Service (PCS)</strong> — the customs administration</li>
<li><strong>Police Service of Pakistan (PSP)</strong> — the federal police cadre</li>
<li><strong>Commerce and Trade Group, Information Group, and others</strong></li>
</ul>
<p>Your final group allocation depends on your aggregate marks, your stated preferences, and the available vacancies in each group — making the competitive aspect about not merely passing but scoring as high as possible.</p>

<h2>Eligibility Requirements</h2>
<p>To appear in the CSS examination, candidates must meet the following criteria:</p>
<ul>
<li><strong>Nationality:</strong> Pakistani citizen (domiciled in Pakistan)</li>
<li><strong>Age:</strong> Between 21 and 30 years (with age relaxation for certain categories)</li>
<li><strong>Education:</strong> A bachelor's degree (minimum second division) from a recognized university</li>
<li><strong>Attempts:</strong> A maximum of three attempts at the examination</li>
</ul>
<p>These requirements mean that most aspirants begin preparing in their final year of university or immediately after graduation, giving them a window of several years to clear the examination within their three attempts.</p>

<h2>The Examination Structure</h2>
<p>The CSS examination consists of two stages: the written examination and the psychological assessment and interview (viva voce).</p>
<p>The written examination covers compulsory subjects (which every candidate must take) and optional subjects (which candidates choose from a prescribed list). The compulsory papers are:</p>
<ul>
<li>English Essay (100 marks)</li>
<li>English Précis and Composition (100 marks)</li>
<li>General Science and Ability (100 marks)</li>
<li>Current Affairs (100 marks)</li>
<li>Pakistan Affairs (100 marks)</li>
<li>Islamic Studies / Comparative Religion (100 marks)</li>
</ul>
<p>In addition, candidates must take optional subjects worth 600 marks in total, choosing from a list of subjects organized into groups. Popular optional choices include International Relations, Political Science, Public Administration, Economics, Sociology, and History.</p>
<p>Candidates must score at least 33 percent in each individual paper and at least 50 percent in aggregate to qualify for the psychological assessment and interview stage.</p>

<h2>The Marking and Selection Process</h2>
<p>After the written examination, candidates who meet the minimum threshold are called for psychological assessment (a written test designed to assess personality and suitability for public service) and a viva voce (an oral interview before a panel). The viva carries 300 marks, and the psychological assessment is qualifying in nature.</p>
<p>Final merit is calculated on the basis of the written examination aggregate plus viva marks, and candidates are recommended for appointment in order of merit against available vacancies.</p>

<h2>How Long Does Preparation Take?</h2>
<p>There is no single honest answer, but experienced mentors consistently suggest that candidates who have not already developed strong reading habits, subject knowledge, and writing skills should budget a minimum of 18 to 24 months of serious preparation. Candidates who come with a strong academic background in relevant subjects — political science, economics, history — may need less time, but the English language requirements alone (essay and précis writing at a high standard) demand sustained practice over many months.</p>

<h2>Where to Begin</h2>
<p>The best starting point is a clear-eyed assessment of your current strengths and weaknesses across the compulsory subjects, followed by a realistic study plan that allocates more time to weaker areas. Read the <a href="strat-01.html">Complete CSS Preparation Strategy</a> article for a structured roadmap, and use the <a href="../planner/index.html">Study Planner</a> to generate a personalized schedule.</p>

<blockquote>The CSS examination rewards sustained, disciplined preparation over cramming. Begin early, read widely, and write daily.</blockquote>

<h2>Summary</h2>
<ul>
<li>CSS is Pakistan's premier civil service examination, conducted by FPSC</li>
<li>Eligibility: Pakistani citizen, age 21–30, minimum bachelor's degree, maximum 3 attempts</li>
<li>Written exam: 6 compulsory papers (600 marks) + optional papers (600 marks)</li>
<li>Minimum qualifying: 33% per paper, 50% aggregate</li>
<li>Final stage: Psychological assessment + Viva voce (300 marks)</li>
<li>Typical preparation period: 18–24 months of serious study</li>
</ul>`
  },
  {
    id: 'bg-02', cat: 'Beginner Guide', slug: 'css-eligibility-criteria',
    title: 'CSS Eligibility, Age Limits, and Attempt Rules Explained',
    desc: 'A detailed breakdown of who can appear, age relaxations, domicile requirements, and maximum attempt rules.',
    readTime: 6, featured: false,
    related: ['bg-01','bg-03','strat-01'],
    content: null
  },
  {
    id: 'bg-03', cat: 'Beginner Guide', slug: 'css-exam-structure',
    title: 'CSS Exam Structure: Compulsory vs Optional Papers Explained',
    desc: 'How marks are distributed, which subjects are compulsory, and how to choose optional subjects strategically.',
    readTime: 7, featured: false,
    related: ['bg-01','bg-04','strat-02'],
    content: null
  },
  {
    id: 'bg-04', cat: 'Beginner Guide', slug: 'fpsc-process-timeline',
    title: 'The Complete FPSC CSS Process: From Application to Appointment',
    desc: 'Step-by-step guide through application, written exam, psychological assessment, viva, and final allocation.',
    readTime: 8, featured: false,
    related: ['bg-01','bg-03','strat-01'],
    content: null
  },
  {
    id: 'bg-05', cat: 'Beginner Guide', slug: 'css-optional-subjects-guide',
    title: 'How to Choose CSS Optional Subjects: A Strategic Guide',
    desc: 'Which optional subjects have the highest scoring potential, overlap with compulsory papers, and suit different academic backgrounds.',
    readTime: 10, featured: false,
    related: ['bg-03','strat-02','strat-03'],
    content: null
  },
  {
    id: 'bg-06', cat: 'Beginner Guide', slug: 'css-vs-pms-difference',
    title: 'CSS vs PMS: What is the Difference and Which to Choose?',
    desc: 'A clear comparison of federal CSS and provincial PMS examinations: scope, difficulty, groups, and career paths.',
    readTime: 6, featured: false,
    related: ['bg-01','bg-04'],
    content: null
  },
  {
    id: 'bg-07', cat: 'Beginner Guide', slug: 'css-passing-marks-analysis',
    title: 'CSS Passing Marks and Historical Pass Rate Analysis',
    desc: 'What scores you actually need to clear CSS, historical pass rates by year, and what the data tells you.',
    readTime: 7, featured: false,
    related: ['bg-01','strat-01','analytics-01'],
    content: null
  },
  {
    id: 'bg-08', cat: 'Beginner Guide', slug: 'css-books-first-month',
    title: 'What to Read in Your First Month of CSS Preparation',
    desc: 'A curated starter reading list: newspapers, basic books, and online resources for Day 1 of your CSS journey.',
    readTime: 8, featured: false,
    related: ['books-01','strat-01','bg-01'],
    content: null
  },
  {
    id: 'bg-09', cat: 'Beginner Guide', slug: 'css-myths-misconceptions',
    title: '10 Common CSS Myths That Are Holding Candidates Back',
    desc: "Debunking the most persistent misconceptions about CSS: coaching dependency, lucky guesses, overnight preparation, and more.",
    readTime: 7, featured: false,
    related: ['bg-01','strat-01','mistakes-01'],
    content: null
  },
  {
    id: 'bg-10', cat: 'Beginner Guide', slug: 'css-daily-routine',
    title: 'The Ideal Daily Routine for a CSS Aspirant',
    desc: 'How to structure your day for maximum retention: morning newspaper, subject study blocks, writing practice, and revision.',
    readTime: 8, featured: false,
    related: ['time-01','strat-01','revision-01'],
    content: null
  },

  // ── STRATEGY (10 articles) ────────────────────────────────
  {
    id: 'strat-01', cat: 'CSS Strategy', slug: 'complete-css-preparation-strategy',
    title: 'The Complete CSS Preparation Strategy: A 24-Month Roadmap',
    desc: 'A month-by-month preparation strategy covering all subjects, practice schedule, mock tests, and revision cycles.',
    readTime: 15, featured: true,
    related: ['strat-02','time-01','revision-01'],
    content: `
<h2>Why Strategy Matters More Than Effort</h2>
<p>Many CSS aspirants study hard and still fail. The examination does not merely reward the amount of time invested — it rewards the right kind of preparation, applied in the right sequence, with consistent writing practice and periodic revision. A student who reads 20 books without a coherent strategy is likely to be outperformed by one who reads 8 books with a well-structured preparation plan.</p>
<p>This article presents a 24-month preparation roadmap designed for a candidate starting with a good general education but no specific CSS preparation. Adjust the timeline based on your starting point — those with stronger academic backgrounds in relevant subjects may compress some phases.</p>

<h2>Phase 1: Foundation (Months 1–4)</h2>
<p>The foundation phase builds the habits and baseline knowledge that everything else rests on. Three activities define this phase:</p>
<ul>
<li><strong>Newspaper reading:</strong> Begin reading Dawn and one other quality publication (The News, The Express Tribune) cover to cover every morning. Read the editorials with particular attention — CSS examiners often expect the analytical vocabulary and framing style of quality editorial writing. Keep a vocabulary notebook for new words.</li>
<li><strong>Subject survey:</strong> Read an introductory text for each compulsory subject. For Pakistan Affairs, start with a concise history (Akbar Ahmed's <em>Jinnah, Pakistan and Islamic Identity</em> or Ayesha Jalal's accessible writing). For Islamic Studies, review your Intermediate-level text first. For Current Affairs, maintain a monthly current affairs register from Day 1.</li>
<li><strong>Writing habit:</strong> Write at least one paragraph every day. This can be a summary of an editorial, a response to a current affairs question, or a précis attempt. The goal is to build the habit before you focus on quality.</li>
</ul>

<h2>Phase 2: Subject Depth (Months 5–14)</h2>
<p>This is the longest and most intellectually demanding phase. Work through each subject systematically:</p>
<ul>
<li><strong>English Essay:</strong> Study essay structure, read 3–4 model essays per week, and attempt one full essay per week under timed conditions (2.5 hours). Analyze where your essays fall short: thesis clarity, argument development, evidence quality, or language.</li>
<li><strong>English Précis:</strong> Practice précis writing daily. Work through past papers. Master grammar rules (tenses, voice, reported speech, sentence correction). Build vocabulary systematically.</li>
<li><strong>Pakistan Affairs:</strong> Read chronologically through Pakistan's history. Build a mental framework of cause and effect — why things happened, not just when. The examiner rewards analytical understanding over factual recall.</li>
<li><strong>Current Affairs:</strong> Maintain a monthly digest. Organize notes by theme (economy, foreign policy, security, social issues) rather than chronologically. Practice writing analytical answers on current issues.</li>
<li><strong>Islamic Studies:</strong> Cover Quran and Hadith foundations, Fiqh sources, Islamic history, and contemporary Islamic issues. The questions increasingly require analytical engagement, not just factual recall.</li>
<li><strong>GSA:</strong> Work through the FPSC syllabus systematically. Mental ability questions require daily practice — use past papers for pattern recognition.</li>
</ul>

<h2>Phase 3: Optional Subjects (Months 10–18, overlapping with Phase 2)</h2>
<p>Begin optional subject preparation no later than month 10. Most candidates choose 3–4 optional subjects for 600 marks. Prioritize subjects where your existing knowledge base is strongest and where overlap with compulsory subjects is greatest (International Relations overlaps with Current Affairs and Pakistan Affairs significantly).</p>

<h2>Phase 4: Intensive Practice (Months 15–20)</h2>
<p>The practice phase shifts from reading to writing. Key activities:</p>
<ul>
<li>Attempt at least 2 full past paper question answers per day across all subjects</li>
<li>Write one complete essay per week and have it reviewed</li>
<li>Complete at least 50 précis passages</li>
<li>Solve 500+ MCQs for GSA and any optional subjects with MCQ components</li>
<li>Begin mock tests — full-length papers under examination conditions</li>
</ul>

<h2>Phase 5: Revision and Consolidation (Months 21–24)</h2>
<p>The final phase is not for learning new material. It is for consolidating what you know, identifying gaps, and ensuring your written expression is at peak standard.</p>
<ul>
<li>Revise all subject notes at least twice</li>
<li>Review your weakest past paper attempts and rewrite model answers</li>
<li>Continue newspaper reading and current affairs updates</li>
<li>Attempt 3–4 full mock examinations under strict time conditions</li>
<li>Prepare for the viva by practicing verbal articulation of your subject knowledge</li>
</ul>

<h2>The Writing Practice Non-Negotiable</h2>
<p>No element of CSS preparation is more consistently underestimated than writing practice. Most candidates read extensively but write infrequently, discovering only in the examination hall that they cannot translate their knowledge into organized, well-expressed written answers within time constraints. The solution is simple but demanding: write every single day throughout your preparation. No exceptions.</p>

<blockquote>Reading gives you material. Writing gives you marks. The examination is a writing test, not a reading test.</blockquote>

<h2>Summary Checklist</h2>
<ul>
<li>✓ Read a quality newspaper every day from Day 1</li>
<li>✓ Write something every day — précis, essay paragraph, question answer</li>
<li>✓ Maintain organized subject notes from the start</li>
<li>✓ Begin optional subject preparation by month 10</li>
<li>✓ Shift to intensive writing practice by month 15</li>
<li>✓ Attempt full mock examinations in the final months</li>
<li>✓ Revise systematically — do not just re-read passively</li>
</ul>`
  },
  {
    id: 'strat-02', cat: 'CSS Strategy', slug: 'how-to-prepare-in-one-year',
    title: 'How to Prepare for CSS in One Year: An Accelerated Plan',
    desc: 'For candidates with limited time: a focused, high-intensity 12-month preparation strategy that prioritizes ruthlessly.',
    readTime: 10, featured: false,
    related: ['strat-01','time-01','mistakes-01'],
    content: null
  },
  {
    id: 'strat-03', cat: 'CSS Strategy', slug: 'css-optional-subjects-strategy',
    title: 'Optional Subject Selection Strategy: Maximize Your CSS Score',
    desc: 'Data-driven analysis of which optional subjects historically score highest and how to build a complementary optional combination.',
    readTime: 12, featured: false,
    related: ['bg-05','strat-01'],
    content: null
  },
  {
    id: 'strat-04', cat: 'CSS Strategy', slug: 'css-second-attempt-strategy',
    title: 'How to Prepare for Your Second CSS Attempt After Failure',
    desc: 'A frank guide to diagnosing why you failed, rebuilding your strategy, and approaching the second attempt differently.',
    readTime: 10, featured: false,
    related: ['strat-01','mistakes-01','revision-01'],
    content: null
  },
  {
    id: 'strat-05', cat: 'CSS Strategy', slug: 'css-coaching-vs-self-study',
    title: 'CSS Coaching vs Self-Study: What the Evidence Says',
    desc: 'An honest assessment of what coaching academies offer, where they fall short, and how to structure effective self-study.',
    readTime: 9, featured: false,
    related: ['bg-09','strat-01','books-01'],
    content: null
  },
  {
    id: 'strat-06', cat: 'CSS Strategy', slug: 'css-viva-preparation',
    title: 'CSS Viva Preparation: How to Excel in the Interview',
    desc: 'What the CSS viva tests, how panelists evaluate candidates, and a practical preparation strategy for the 300-mark interview.',
    readTime: 11, featured: false,
    related: ['strat-01','bg-04'],
    content: null
  },
  {
    id: 'strat-07', cat: 'CSS Strategy', slug: 'css-past-papers-strategy',
    title: 'How to Use CSS Past Papers Most Effectively',
    desc: 'Why past papers are the single most important preparation resource and a systematic method for using them to build exam-ready skills.',
    readTime: 8, featured: false,
    related: ['strat-01','revision-01'],
    content: null
  },
  {
    id: 'strat-08', cat: 'CSS Strategy', slug: 'css-answer-writing-framework',
    title: 'The CSS Answer Writing Framework: Structure That Gets Marks',
    desc: 'A proven framework for structuring subjective answers: introduction, argument body, counter-argument, conclusion.',
    readTime: 10, featured: false,
    related: ['essay-01','strat-01'],
    content: null
  },
  {
    id: 'strat-09', cat: 'CSS Strategy', slug: 'css-preparation-with-job',
    title: 'How to Prepare for CSS While Working Full-Time',
    desc: 'Practical strategies for employed aspirants: early morning sessions, weekend intensives, commute learning, and realistic timelines.',
    readTime: 9, featured: false,
    related: ['time-01','strat-01'],
    content: null
  },
  {
    id: 'strat-10', cat: 'CSS Strategy', slug: 'css-psychological-test',
    title: 'The CSS Psychological Assessment: What It Tests and How to Prepare',
    desc: 'A detailed guide to the FPSC psychological test: format, what assessors look for, and how to present your best self.',
    readTime: 8, featured: false,
    related: ['strat-06','bg-04'],
    content: null
  },

  // ── ENGLISH ESSAY (8 articles) ────────────────────────────
  {
    id: 'essay-01', cat: 'English Essay', slug: 'how-to-write-css-essay',
    title: 'How to Write a CSS-Standard Essay: Complete Guide',
    desc: 'Structure, thesis development, argument building, evidence use, and the writing habits that separate top scorers from average candidates.',
    readTime: 14, featured: true,
    related: ['essay-02','essay-03','strat-08'],
    content: `
<h2>What the Examiner Is Looking For</h2>
<p>Before learning how to write a CSS essay, you must understand what the examiner is evaluating. According to FPSC guidelines and the pattern of marking, examiners assess candidates across four broad dimensions:</p>
<ul>
<li><strong>Relevance and coherence:</strong> Does the essay actually address the topic? Is there a clear, sustained argument?</li>
<li><strong>Content quality:</strong> Is the essay informed by factual knowledge, well-reasoned arguments, and relevant examples?</li>
<li><strong>Language:</strong> Is the expression clear, varied, and accurate? Is the register appropriate for formal writing?</li>
<li><strong>Structure:</strong> Is there a clear introduction with a thesis, organized body paragraphs, and a conclusion?</li>
</ul>
<p>The most common failure mode in CSS essays is writing a collection of loosely connected observations rather than a structured argument. An essay without a clear thesis is merely an extended response — it will not score in the distinction range regardless of the quality of individual paragraphs.</p>

<h2>Understanding the Essay Topic</h2>
<p>Before writing a single word, spend 10 minutes analyzing the topic. Ask yourself:</p>
<ul>
<li>What is the core claim or question the topic presents?</li>
<li>Is it asking you to evaluate, discuss, argue, or analyze?</li>
<li>What is your position on this topic? What do you actually think?</li>
<li>What are the strongest arguments for and against?</li>
<li>What examples, data, or cases can you use?</li>
</ul>
<p>Many candidates choose topics they find emotionally appealing rather than topics they know most about. Counterintuitively, a topic where you have strong factual knowledge and multiple arguments will produce a better essay than one you are merely passionate about without depth of knowledge.</p>

<h2>The Introduction: Thesis First, Context Second</h2>
<p>A strong CSS introduction does three things:</p>
<ol>
<li><strong>Opens with a hook</strong> — a striking statistic, a quotation, an illustrative vignette, or a bold statement that immediately establishes relevance</li>
<li><strong>Provides brief context</strong> — 2–3 sentences situating the topic in its broader significance</li>
<li><strong>States your thesis clearly</strong> — a specific, arguable claim that the rest of the essay will develop and defend</li>
</ol>
<p>The thesis is the most important sentence in your essay. A weak thesis ("This essay will discuss the pros and cons of democracy") produces a weak essay. A strong thesis ("Pakistan's democratic deficits are fundamentally institutional rather than cultural, and sustainable democratization requires structural reform rather than cultural transformation") gives every subsequent paragraph a direction and purpose.</p>

<h2>Body Paragraphs: The PEEL Structure</h2>
<p>Each body paragraph should follow a disciplined structure:</p>
<ul>
<li><strong>P — Point:</strong> State the argument of the paragraph in a clear topic sentence</li>
<li><strong>E — Evidence:</strong> Support the point with a fact, statistic, example, or quotation</li>
<li><strong>E — Explanation:</strong> Explain how the evidence supports your point and what it demonstrates</li>
<li><strong>L — Link:</strong> Connect back to your thesis or transition to the next paragraph</li>
</ul>
<p>A common weakness is including evidence without explanation — merely stating facts without demonstrating what they prove. Examiners want to see you reason, not just recall.</p>

<h2>The Counter-Argument Paragraph</h2>
<p>Top-scoring essays include at least one paragraph that honestly presents the strongest argument against the thesis, followed by a refutation. This demonstrates intellectual maturity, strengthens your credibility with the examiner, and shows that your conclusion is reached after genuine consideration of opposing evidence rather than selective cherry-picking.</p>
<p>Structure: "Critics argue that... [strongest version of counter-argument]. However, [your refutation with evidence]."</p>

<h2>Conclusion: Beyond Summary</h2>
<p>A weak conclusion merely summarizes what has been said. A strong conclusion:</p>
<ul>
<li>Restates the thesis in fresh language (not copied from the introduction)</li>
<li>Synthesizes the implications of the argument — what does it mean?</li>
<li>Ends with a forward-looking statement, a call for action, or a thought-provoking final observation</li>
</ul>
<p>The last sentence of your essay is the last impression you leave with the examiner. Make it count.</p>

<h2>Language and Style</h2>
<p>CSS essays require formal register — avoid contractions, slang, and overly colloquial expressions. However, "formal" does not mean "convoluted." Clear, precise prose beats ornate complexity. Aim for sentences that average 18–22 words; vary sentence length for rhythm. Use transitional phrases to guide the reader: "Furthermore," "In contrast," "This suggests that," "The evidence therefore points to."</p>

<h2>Practical Writing Tips</h2>
<ul>
<li>Aim for 1,000–1,400 words — long enough to develop arguments fully, short enough to maintain quality under time pressure</li>
<li>Allocate your 2.5 hours: 10 minutes planning, 100 minutes writing, 20 minutes review</li>
<li>Never start writing without a plan — even a rough outline of 5–7 paragraph topics</li>
<li>Read your essay aloud mentally as you review — your ear will catch errors your eye misses</li>
<li>Practice writing at least one complete essay per week throughout your preparation</li>
</ul>

<blockquote>The examiner has read thousands of essays. What stands out is not the candidate who knows the most facts, but the one who constructs the most coherent, well-supported argument.</blockquote>`
  },
  {
    id: 'essay-02', cat: 'English Essay', slug: 'css-essay-topics-analysis',
    title: 'CSS Essay Topics: 15 Years of Trend Analysis',
    desc: 'What themes recur most frequently in CSS essay papers, which categories are most predictable, and how to cover high-probability topics.',
    readTime: 10, featured: false,
    related: ['essay-01','essay-03','analytics-01'],
    content: null
  },
  {
    id: 'essay-03', cat: 'English Essay', slug: 'css-essay-vocabulary',
    title: 'Essential Vocabulary for CSS Essay Writing',
    desc: 'The academic vocabulary, transition phrases, hedging language, and formal expressions that distinguish high-scoring CSS essays.',
    readTime: 9, featured: false,
    related: ['essay-01','precis-01'],
    content: null
  },
  {
    id: 'essay-04', cat: 'English Essay', slug: 'css-essay-common-mistakes',
    title: '12 Common CSS Essay Mistakes and How to Avoid Them',
    desc: 'The most frequent errors that cost candidates marks in CSS essay: from thesis problems to language register errors.',
    readTime: 8, featured: false,
    related: ['essay-01','mistakes-01'],
    content: null
  },
  {
    id: 'essay-05', cat: 'English Essay', slug: 'css-essay-on-pakistan',
    title: 'How to Write CSS Essays on Pakistan: Frameworks and Arguments',
    desc: 'Building argument frameworks for the most common Pakistan-related essay themes: governance, economy, society, and foreign policy.',
    readTime: 11, featured: false,
    related: ['essay-01','pa-01'],
    content: null
  },
  {
    id: 'essay-06', cat: 'English Essay', slug: 'css-essay-global-themes',
    title: 'CSS Essay Global Themes: AI, Climate, Democracy, and Geopolitics',
    desc: 'Key arguments, evidence, and framings for the most common global themes in CSS essays.',
    readTime: 10, featured: false,
    related: ['essay-01','ca-01'],
    content: null
  },
  {
    id: 'essay-07', cat: 'English Essay', slug: 'css-essay-introductions',
    title: 'How to Write Compelling CSS Essay Introductions',
    desc: 'Five types of opening hooks with examples, how to build context efficiently, and how to craft a strong thesis statement.',
    readTime: 7, featured: false,
    related: ['essay-01','essay-03'],
    content: null
  },
  {
    id: 'essay-08', cat: 'English Essay', slug: 'css-essay-examiner-expectations',
    title: 'What CSS Essay Examiners Actually Expect: Insider Analysis',
    desc: 'Based on FPSC guidelines and successful candidate reports: what examiners reward, what they penalize, and the marking scheme.',
    readTime: 9, featured: false,
    related: ['essay-01','examiner-01'],
    content: null
  },

  // ── PRÉCIS (5 articles) ───────────────────────────────────
  {
    id: 'precis-01', cat: 'English Précis', slug: 'how-to-write-css-precis',
    title: 'How to Write a CSS Précis: Rules, Technique, and Practice',
    desc: 'A complete guide to précis writing: the rules, common errors, step-by-step technique, and how marks are allocated.',
    readTime: 10, featured: true,
    related: ['precis-02','essay-01','strat-08'],
    content: null
  },
  {
    id: 'precis-02', cat: 'English Précis', slug: 'css-precis-common-errors',
    title: 'CSS Précis: 8 Most Common Errors That Cost Marks',
    desc: 'Direct quoting, wrong tense, no title, failing to reduce sufficiently, and other précis errors with correction examples.',
    readTime: 7, featured: false,
    related: ['precis-01'],
    content: null
  },
  {
    id: 'precis-03', cat: 'English Précis', slug: 'css-precis-grammar',
    title: 'Grammar Essentials for CSS Précis and Composition',
    desc: 'Active/passive voice, tenses, reported speech, punctuation, and the grammar rules most tested in CSS précis papers.',
    readTime: 9, featured: false,
    related: ['precis-01','essay-03'],
    content: null
  },
  {
    id: 'precis-04', cat: 'English Précis', slug: 'css-vocabulary-builder',
    title: 'CSS Vocabulary Builder: 500 Essential Words for Scoring High',
    desc: 'Categorized vocabulary list for CSS: governance, economy, international relations, social issues, with usage examples.',
    readTime: 12, featured: false,
    related: ['precis-01','essay-03'],
    content: null
  },
  {
    id: 'precis-05', cat: 'English Précis', slug: 'css-comprehension-strategy',
    title: 'CSS Reading Comprehension: A Systematic Approach',
    desc: 'How to read CSS comprehension passages efficiently, identify question types, and write precise answers.',
    readTime: 7, featured: false,
    related: ['precis-01'],
    content: null
  },

  // ── PAKISTAN AFFAIRS (8 articles) ─────────────────────────
  {
    id: 'pa-01', cat: 'Pakistan Affairs', slug: 'css-pakistan-affairs-preparation',
    title: 'How to Prepare for CSS Pakistan Affairs: Complete Guide',
    desc: 'A subject-by-subject preparation strategy for Pakistan Affairs: history, constitution, economy, society, and foreign policy.',
    readTime: 13, featured: true,
    related: ['pa-02','pa-03','books-03'],
    content: `
<h2>Understanding the Pakistan Affairs Paper</h2>
<p>Pakistan Affairs is a 100-mark compulsory paper that tests candidates' understanding of Pakistan's history, constitutional development, political system, economy, society, and foreign policy. It is one of the papers where well-prepared candidates can score significantly above average, because the subject rewards organized analytical thinking rather than mere factual recall.</p>
<p>The paper typically contains 6 questions of which candidates must answer 4, each carrying 20 marks. Questions are analytical in nature — they ask you to "critically examine," "discuss," "analyze," or "evaluate" — and reward structured, evidence-based arguments over encyclopedic lists of facts.</p>

<h2>The Four Pillars of Pakistan Affairs Preparation</h2>

<h3>1. History (1857–Present)</h3>
<p>Begin with the 1857 War of Independence and the emergence of Muslim political identity in the subcontinent. Cover the Aligarh Movement, the Congress-Muslim League dynamic, the emergence of the two-nation theory, and the events leading to partition in 1947. Then work through Pakistan's post-independence political history chronologically:</p>
<ul>
<li>Early years (1947–1958): political instability, constitutional crises, One Unit scheme</li>
<li>Ayub Khan (1958–1969): modernization, Basic Democracies, economic growth, 1965 war</li>
<li>Yahya Khan and 1971: causes of East Pakistan's separation, creation of Bangladesh</li>
<li>Bhutto era (1971–1977): socialist policies, 1973 Constitution, Simla Agreement</li>
<li>Zia ul-Haq (1977–1988): Islamization, Afghan jihad, nuclear program</li>
<li>Democratic transition (1988–1999): revolving door democracy, Bhutto-Sharif rivalry</li>
<li>Musharraf (1999–2008): post-9/11 alignment, LFO, devolution plan</li>
<li>Post-2008: democratic consolidation attempts, 18th Amendment, governance challenges</li>
</ul>
<p>The key is understanding cause and effect — why events happened, what their consequences were, and what they reveal about Pakistan's structural political dynamics.</p>

<h3>2. Constitution and Governance</h3>
<p>Know the 1956, 1962, and 1973 Constitutions and the key differences between them. Understand the 1973 Constitution's structure: fundamental rights, federation provisions, separation of powers, and role of judiciary. The 18th Amendment deserves particular attention — its provisions, the NFC Award, devolution of subjects, and the ongoing debates about implementation.</p>

<h3>3. Economy</h3>
<p>You do not need economist-level detail, but you do need to understand Pakistan's key economic challenges: chronically low tax-to-GDP ratio, agricultural dominance and reform resistance, energy crisis and circular debt, balance of payments vulnerability, IMF dependency cycle, and CPEC's economic dimensions. Be able to discuss these analytically with data points.</p>

<h3>4. Society, Culture, and Foreign Policy</h3>
<p>Cover Pakistan's demographic profile (rapid population growth, youth bulge, urbanization), social challenges (literacy, gender inequality, extremism), and cultural diversity (languages, ethnicities, Sufi tradition). For foreign policy, understand the core bilateral relationships (Pakistan-US, Pakistan-China, Pakistan-India, Pakistan-Afghanistan) and their historical evolution.</p>

<h2>Recommended Books</h2>
<ul>
<li><strong>History:</strong> Ayesha Jalal — <em>The State of Martial Rule</em>; Stanley Wolpert — <em>Jinnah of Pakistan</em>; Tariq Ali — <em>Can Pakistan Survive?</em></li>
<li><strong>Politics:</strong> Hassan Abbas — <em>Pakistan's Drift into Extremism</em>; Husain Haqqani — <em>Pakistan: Between Mosque and Military</em></li>
<li><strong>Economy:</strong> Ishrat Husain — <em>Governing the Ungovernable</em>; any recent Dawn Economy and Business supplement</li>
<li><strong>Foreign Policy:</strong> Maleeha Lodhi (ed.) — <em>Pakistan Beyond the Crisis State</em></li>
</ul>

<h2>Answer Writing for Pakistan Affairs</h2>
<p>Pakistan Affairs answers require a consistent structure: contextual introduction, analytical body with evidence, and a forward-looking conclusion. Avoid two common pitfalls:</p>
<ul>
<li><strong>Narration without analysis:</strong> Simply listing historical events without explaining their significance or demonstrating analytical understanding</li>
<li><strong>Opinions without evidence:</strong> Making strong claims without supporting data, examples, or academic citations</li>
</ul>

<h2>Practice Questions to Attempt</h2>
<ul>
<li>Critically evaluate the role of the military in Pakistan's political development</li>
<li>Analyze the causes and consequences of the 1971 separation of East Pakistan</li>
<li>Discuss the impact of the 18th Amendment on federalism in Pakistan</li>
<li>Evaluate Pakistan's water crisis and suggest policy responses</li>
<li>Critically assess Pakistan's foreign policy towards Afghanistan post-2021</li>
</ul>`
  },
  {
    id: 'pa-02', cat: 'Pakistan Affairs', slug: 'pakistan-constitutional-history',
    title: 'Pakistan\'s Constitutional History: From 1956 to the 18th Amendment',
    desc: 'A comprehensive analysis of Pakistan\'s constitutional development, key amendments, and their political significance.',
    readTime: 12, featured: false,
    related: ['pa-01','pa-03'],
    content: null
  },
  {
    id: 'pa-03', cat: 'Pakistan Affairs', slug: 'pakistan-economy-css',
    title: 'Pakistan\'s Economy for CSS: Key Issues, Data, and Arguments',
    desc: 'Everything a CSS candidate needs to know about Pakistan\'s economic challenges: tax, energy, debt, agriculture, and CPEC.',
    readTime: 11, featured: false,
    related: ['pa-01','ca-02'],
    content: null
  },
  {
    id: 'pa-04', cat: 'Pakistan Affairs', slug: 'pakistan-foreign-policy',
    title: 'Pakistan\'s Foreign Policy for CSS: Complete Analysis',
    desc: 'Pakistan\'s key bilateral relationships, foreign policy determinants, strategic choices, and contemporary challenges.',
    readTime: 12, featured: false,
    related: ['pa-01','ir-01'],
    content: null
  },
  {
    id: 'pa-05', cat: 'Pakistan Affairs', slug: 'pakistan-1971-analysis',
    title: 'The Separation of East Pakistan 1971: Causes, Course, and Consequences',
    desc: 'A comprehensive analytical treatment of the most consequential event in Pakistan\'s history — a perennial CSS topic.',
    readTime: 13, featured: false,
    related: ['pa-01','pa-02'],
    content: null
  },
  {
    id: 'pa-06', cat: 'Pakistan Affairs', slug: 'cpec-css-analysis',
    title: 'CPEC for CSS: A Balanced Analysis of Benefits and Challenges',
    desc: 'Arguments for and against CPEC, debt sustainability concerns, economic impacts, and strategic implications for Pakistan.',
    readTime: 10, featured: false,
    related: ['pa-01','ca-01'],
    content: null
  },
  {
    id: 'pa-07', cat: 'Pakistan Affairs', slug: 'pakistan-water-crisis',
    title: 'Pakistan\'s Water Crisis: An Analytical Guide for CSS',
    desc: 'The Indus Waters Treaty, water scarcity data, provincial disputes, climate change impact, and policy solutions.',
    readTime: 10, featured: false,
    related: ['pa-01','ca-03'],
    content: null
  },
  {
    id: 'pa-08', cat: 'Pakistan Affairs', slug: 'pakistan-civil-military-relations',
    title: 'Civil-Military Relations in Pakistan: Historical Analysis for CSS',
    desc: 'How the military\'s political role evolved, theoretical frameworks, key interventions, and implications for democracy.',
    readTime: 11, featured: false,
    related: ['pa-01','ps-01'],
    content: null
  },

  // ── CURRENT AFFAIRS (6 articles) ─────────────────────────
  {
    id: 'ca-01', cat: 'Current Affairs', slug: 'css-current-affairs-preparation',
    title: 'How to Prepare for CSS Current Affairs: Strategy and Sources',
    desc: 'Building a current affairs knowledge base: what sources to follow, how to organize notes, and what to expect in the exam.',
    readTime: 11, featured: true,
    related: ['ca-02','ca-03','books-02'],
    content: null
  },
  {
    id: 'ca-02', cat: 'Current Affairs', slug: 'global-economy-css',
    title: 'Global Economic Issues for CSS: IMF, Debt, and Development',
    desc: 'The international economic issues most frequently tested in CSS: IMF programs, global debt crisis, BRI, and development finance.',
    readTime: 10, featured: false,
    related: ['ca-01','ir-02'],
    content: null
  },
  {
    id: 'ca-03', cat: 'Current Affairs', slug: 'climate-change-css',
    title: 'Climate Change for CSS: From Science to Policy to Pakistan',
    desc: 'Climate science basics, international agreements, Pakistan\'s vulnerability, and answer frameworks for CSS questions.',
    readTime: 10, featured: false,
    related: ['ca-01','pa-07'],
    content: null
  },
  {
    id: 'ca-04', cat: 'Current Affairs', slug: 'us-china-competition-css',
    title: 'US-China Strategic Competition: Analysis for CSS',
    desc: 'The geopolitical competition reshaping global order and its implications for Pakistan\'s foreign policy choices.',
    readTime: 10, featured: false,
    related: ['ca-01','ir-01'],
    content: null
  },
  {
    id: 'ca-05', cat: 'Current Affairs', slug: 'south-asia-current-affairs',
    title: 'South Asia for CSS Current Affairs: Regional Dynamics',
    desc: 'India-Pakistan relations, Afghanistan, Bangladesh, and regional organizations: what CSS examiners ask about South Asia.',
    readTime: 9, featured: false,
    related: ['ca-01','pa-04'],
    content: null
  },
  {
    id: 'ca-06', cat: 'Current Affairs', slug: 'artificial-intelligence-css',
    title: 'Artificial Intelligence for CSS: Key Concepts and Policy Issues',
    desc: 'What CSS candidates need to know about AI: capabilities, risks, governance, geopolitics, and Pakistan\'s AI landscape.',
    readTime: 9, featured: false,
    related: ['ca-01','gsa-01'],
    content: null
  },

  // ── ISLAMIC STUDIES (6 articles) ─────────────────────────
  {
    id: 'is-01', cat: 'Islamic Studies', slug: 'css-islamic-studies-preparation',
    title: 'How to Prepare for CSS Islamic Studies: Complete Strategy',
    desc: 'Subject overview, key topics, recommended books, and answer frameworks for the CSS Islamic Studies paper.',
    readTime: 11, featured: true,
    related: ['is-02','is-03','books-04'],
    content: null
  },
  {
    id: 'is-02', cat: 'Islamic Studies', slug: 'islamic-jurisprudence-css',
    title: 'Islamic Jurisprudence (Fiqh) for CSS: Sources, Schools, and Issues',
    desc: 'Quran, Sunnah, Ijma, Qiyas, Ijtihad, Maqasid al-Shariah — the fiqh concepts you must know for CSS.',
    readTime: 10, featured: false,
    related: ['is-01'],
    content: null
  },
  {
    id: 'is-03', cat: 'Islamic Studies', slug: 'islamic-history-css',
    title: 'Islamic History for CSS: From Seerah to the Ottoman Decline',
    desc: 'A condensed but analytically rich account of Islamic history that covers the CSS syllabus effectively.',
    readTime: 12, featured: false,
    related: ['is-01'],
    content: null
  },
  {
    id: 'is-04', cat: 'Islamic Studies', slug: 'islam-and-democracy-css',
    title: 'Islam and Democracy: Arguments for CSS',
    desc: 'Scholarly perspectives on the compatibility of Islamic principles with democratic governance — a perennial CSS question.',
    readTime: 9, featured: false,
    related: ['is-01','ps-01'],
    content: null
  },
  {
    id: 'is-05', cat: 'Islamic Studies', slug: 'islamic-economics-css',
    title: 'Islamic Economics for CSS: Riba, Zakat, and the Islamic System',
    desc: 'Islamic finance concepts, prohibition of riba, zakat as redistribution, and comparison with capitalism and socialism.',
    readTime: 9, featured: false,
    related: ['is-01'],
    content: null
  },
  {
    id: 'is-06', cat: 'Islamic Studies', slug: 'iqbal-css',
    title: 'Allama Iqbal for CSS: Philosophy, Poetry, and Political Vision',
    desc: 'The key concepts from Iqbal\'s work — Khudi, Ijtihad, Islamic renaissance — that recur in CSS examinations.',
    readTime: 9, featured: false,
    related: ['is-01','pa-01'],
    content: null
  },

  // ── INTERNATIONAL RELATIONS (5 articles) ─────────────────
  {
    id: 'ir-01', cat: 'International Relations', slug: 'css-ir-preparation',
    title: 'How to Prepare for CSS International Relations',
    desc: 'IR theory, key concepts, Pakistan\'s foreign policy, and the analytical frameworks that score marks in CSS IR.',
    readTime: 11, featured: true,
    related: ['ir-02','pa-04'],
    content: null
  },
  {
    id: 'ir-02', cat: 'International Relations', slug: 'css-ir-theories',
    title: 'IR Theories for CSS: Realism, Liberalism, and Constructivism',
    desc: 'A clear explanation of the main IR theoretical frameworks with application to contemporary global issues.',
    readTime: 10, featured: false,
    related: ['ir-01'],
    content: null
  },
  {
    id: 'ir-03', cat: 'International Relations', slug: 'united-nations-css',
    title: 'The United Nations for CSS: Structure, Reform, and Effectiveness',
    desc: 'UN Security Council, General Assembly, specialized agencies, reform debates, and Pakistan\'s role in UN peacekeeping.',
    readTime: 9, featured: false,
    related: ['ir-01','ca-01'],
    content: null
  },
  {
    id: 'ir-04', cat: 'International Relations', slug: 'nuclear-deterrence-css',
    title: 'Nuclear Deterrence in South Asia: CSS Analysis Guide',
    desc: 'Nuclear weapons theory, India-Pakistan deterrence, full-spectrum deterrence, and strategic stability arguments.',
    readTime: 10, featured: false,
    related: ['ir-01','pa-04'],
    content: null
  },
  {
    id: 'ir-05', cat: 'International Relations', slug: 'bri-cpec-geopolitics',
    title: 'BRI, CPEC, and the New Geopolitics of Infrastructure',
    desc: 'China\'s Belt and Road Initiative, the debt trap debate, CPEC\'s strategic dimensions, and competing US-led initiatives.',
    readTime: 10, featured: false,
    related: ['ir-01','pa-06'],
    content: null
  },

  // ── POLITICAL SCIENCE (5 articles) ───────────────────────
  {
    id: 'ps-01', cat: 'Political Science', slug: 'css-political-science-preparation',
    title: 'How to Prepare for CSS Political Science',
    desc: 'Political theory, comparative politics, public administration — a complete preparation guide for CSS Political Science.',
    readTime: 11, featured: true,
    related: ['ps-02','pa-01'],
    content: null
  },
  {
    id: 'ps-02', cat: 'Political Science', slug: 'political-theory-css',
    title: 'Political Theory for CSS: Social Contract, Liberalism, and Beyond',
    desc: 'Hobbes, Locke, Rousseau, Marx, Mill — the political philosophers that CSS examiners test, explained clearly.',
    readTime: 10, featured: false,
    related: ['ps-01'],
    content: null
  },
  {
    id: 'ps-03', cat: 'Political Science', slug: 'democracy-authoritarianism-css',
    title: 'Democracy and Authoritarianism for CSS: Comparative Analysis',
    desc: 'Types of government, democratic theory, authoritarian persistence, and Pakistan as a case study.',
    readTime: 9, featured: false,
    related: ['ps-01','pa-08'],
    content: null
  },
  {
    id: 'ps-04', cat: 'Political Science', slug: 'federalism-css',
    title: 'Federalism for CSS: Theory, Types, and Pakistani Case',
    desc: 'Models of federalism, the 18th Amendment as a turning point, provincial capacity challenges, and comparative examples.',
    readTime: 9, featured: false,
    related: ['ps-01','pa-02'],
    content: null
  },
  {
    id: 'ps-05', cat: 'Political Science', slug: 'bureaucracy-css',
    title: 'Bureaucracy and Civil Service for CSS: Weber to Pakistan',
    desc: 'Weber\'s ideal bureaucracy, Pakistan\'s civil service, governance failures, and reform proposals.',
    readTime: 9, featured: false,
    related: ['ps-01','pa-01'],
    content: null
  },

  // ── GSA (4 articles) ──────────────────────────────────────
  {
    id: 'gsa-01', cat: 'GSA', slug: 'css-gsa-preparation',
    title: 'How to Prepare for CSS General Science and Ability (GSA)',
    desc: 'The complete GSA preparation guide: science topics, mental ability section, Pakistan geography, and past paper strategy.',
    readTime: 10, featured: true,
    related: ['gsa-02'],
    content: null
  },
  {
    id: 'gsa-02', cat: 'GSA', slug: 'css-mental-ability-tips',
    title: 'CSS Mental Ability: Types of Questions and How to Master Them',
    desc: 'Logical reasoning, mathematical ratios, data interpretation, and the systematic approach to scoring full marks in mental ability.',
    readTime: 8, featured: false,
    related: ['gsa-01'],
    content: null
  },
  {
    id: 'gsa-03', cat: 'GSA', slug: 'css-science-topics',
    title: 'CSS Science Topics: What You Must Know (and What to Skip)',
    desc: 'A prioritized guide to the science topics most frequently tested in CSS GSA, with clear explanations of key concepts.',
    readTime: 9, featured: false,
    related: ['gsa-01'],
    content: null
  },
  {
    id: 'gsa-04', cat: 'GSA', slug: 'pakistan-geography-css',
    title: 'Pakistan Geography for CSS: Rivers, Mountains, Climate, Resources',
    desc: 'Essential Pakistan geography for CSS: the Indus system, mountain ranges, climate zones, natural resources, and environmental issues.',
    readTime: 8, featured: false,
    related: ['gsa-01','pa-07'],
    content: null
  },

  // ── STUDY SKILLS (10 articles) ────────────────────────────
  {
    id: 'time-01', cat: 'Time Management', slug: 'css-time-management',
    title: 'Time Management for CSS Aspirants: Science-Backed Strategies',
    desc: 'How to structure study sessions, use spaced repetition, manage energy not just time, and avoid burnout during preparation.',
    readTime: 10, featured: true,
    related: ['strat-01','revision-01','bg-10'],
    content: null
  },
  {
    id: 'revision-01', cat: 'Revision Techniques', slug: 'css-revision-strategy',
    title: 'How to Revise for CSS: The System That Actually Works',
    desc: 'Spaced repetition, active recall, mind mapping, and the revision schedule that maximizes retention before the examination.',
    readTime: 10, featured: false,
    related: ['time-01','strat-01'],
    content: null
  },
  {
    id: 'notes-01', cat: 'Note Making', slug: 'css-note-making-techniques',
    title: 'Note-Making for CSS: How to Build Revision-Ready Notes',
    desc: 'Cornell notes, mind maps, concept cards, and the note-making system that makes revision efficient and examination answers structured.',
    readTime: 9, featured: false,
    related: ['revision-01','time-01'],
    content: null
  },
  {
    id: 'mistakes-01', cat: 'Common Mistakes', slug: 'css-mistakes-to-avoid',
    title: '20 CSS Preparation Mistakes That Guarantee Failure',
    desc: 'The most consistently observed preparation errors: from wrong books to ignoring writing practice to examination day errors.',
    readTime: 10, featured: false,
    related: ['strat-01','bg-09'],
    content: null
  },
  {
    id: 'examiner-01', cat: 'Examiner Expectations', slug: 'css-examiner-expectations',
    title: 'What CSS Examiners Actually Expect: A Subject-by-Subject Guide',
    desc: 'Based on analysis of marking schemes, successful papers, and CSS examiner feedback: what earns marks in each paper.',
    readTime: 11, featured: false,
    related: ['essay-08','strat-08'],
    content: null
  },
  {
    id: 'books-01', cat: 'Recommended Books', slug: 'css-books-compulsory',
    title: 'Best Books for CSS Compulsory Subjects: Curated List',
    desc: 'The definitive book list for all six CSS compulsory subjects, with honest notes on what each book offers and its limitations.',
    readTime: 12, featured: true,
    related: ['books-02','books-03','strat-01'],
    content: null
  },
  {
    id: 'books-02', cat: 'Recommended Books', slug: 'css-books-current-affairs',
    title: 'Best Sources for CSS Current Affairs: Books, Magazines, and Websites',
    desc: 'Beyond newspapers: the magazines, reports, and credible online sources that give CSS candidates a depth of current affairs knowledge.',
    readTime: 8, featured: false,
    related: ['ca-01','books-01'],
    content: null
  },
  {
    id: 'books-03', cat: 'Recommended Books', slug: 'css-books-pakistan-affairs',
    title: 'Best Books for CSS Pakistan Affairs',
    desc: 'The essential reading list for Pakistan Affairs: history, politics, economy, and foreign policy books with reading sequence advice.',
    readTime: 9, featured: false,
    related: ['pa-01','books-01'],
    content: null
  },
  {
    id: 'books-04', cat: 'Recommended Books', slug: 'css-books-islamic-studies',
    title: 'Best Books for CSS Islamic Studies',
    desc: 'Recommended texts for every component of the CSS Islamic Studies syllabus, from Seerah to contemporary issues.',
    readTime: 8, featured: false,
    related: ['is-01','books-01'],
    content: null
  },
  {
    id: 'books-05', cat: 'Recommended Books', slug: 'css-books-ir-polsci',
    title: 'Best Books for CSS International Relations and Political Science',
    desc: 'IR theory, Pakistan foreign policy, comparative politics, and public administration — the reading list that top scorers use.',
    readTime: 9, featured: false,
    related: ['ir-01','ps-01','books-01'],
    content: null
  },

  // ── FPSC & ANALYTICS (6 articles) ────────────────────────
  {
    id: 'analytics-01', cat: 'FPSC Analysis', slug: 'css-past-paper-trends',
    title: 'CSS Past Paper Trend Analysis: 2010–2024',
    desc: 'Which topics are asked most frequently in each subject, which years were hardest, and what the trends predict for upcoming exams.',
    readTime: 12, featured: true,
    related: ['analytics-02','strat-07'],
    content: null
  },
  {
    id: 'analytics-02', cat: 'FPSC Analysis', slug: 'css-frequently-repeated-questions',
    title: 'Most Frequently Repeated CSS Questions by Subject',
    desc: 'The questions that have appeared multiple times across CSS papers — essential preparation targets.',
    readTime: 10, featured: false,
    related: ['analytics-01'],
    content: null
  },
  {
    id: 'analytics-03', cat: 'FPSC Analysis', slug: 'css-essay-topic-trends',
    title: 'CSS Essay Topic Trends: Which Themes Recur Most Often',
    desc: 'Frequency analysis of CSS essay topics by category: Pakistan, international, social, science, philosophy.',
    readTime: 8, featured: false,
    related: ['analytics-01','essay-02'],
    content: null
  },
  {
    id: 'analytics-04', cat: 'FPSC Analysis', slug: 'css-scoring-patterns',
    title: 'CSS Scoring Patterns: What Scores Get You Which Group',
    desc: 'Historical data on the aggregate marks needed to qualify for PAS, FSP, PSP, and other top groups.',
    readTime: 7, featured: false,
    related: ['bg-07','analytics-01'],
    content: null
  },
  {
    id: 'analytics-05', cat: 'FPSC Analysis', slug: 'css-paper-difficulty-analysis',
    title: 'CSS Paper Difficulty Analysis: Which Years Were Hardest?',
    desc: 'Year-by-year difficulty assessment of CSS papers: what changed, what got harder, and what it means for preparation.',
    readTime: 8, featured: false,
    related: ['analytics-01'],
    content: null
  },
  {
    id: 'analytics-06', cat: 'FPSC Analysis', slug: 'css-mock-test-strategy',
    title: 'CSS Mock Test Strategy: How, When, and Why to Simulate Exam Conditions',
    desc: 'When to begin mock tests, how to analyze your performance, and how to use mock exam feedback to improve.',
    readTime: 8, featured: false,
    related: ['strat-01','revision-01'],
    content: null
  },
];

// Article categories list
const ARTICLE_CATEGORIES = [
  'Beginner Guide', 'CSS Strategy', 'English Essay', 'English Précis',
  'Pakistan Affairs', 'Current Affairs', 'Islamic Studies',
  'International Relations', 'Political Science', 'GSA',
  'Time Management', 'Revision Techniques', 'Note Making',
  'Common Mistakes', 'Examiner Expectations', 'Recommended Books', 'FPSC Analysis'
];

// Article lookup by id
const ARTICLE_MAP = Object.fromEntries(ARTICLES.map(a => [a.id, a]));
const ARTICLE_SLUG_MAP = Object.fromEntries(ARTICLES.map(a => [a.slug, a]));

window.ARTICLES           = ARTICLES;
window.ARTICLE_CATEGORIES = ARTICLE_CATEGORIES;
window.ARTICLE_MAP        = ARTICLE_MAP;
window.ARTICLE_SLUG_MAP   = ARTICLE_SLUG_MAP;
