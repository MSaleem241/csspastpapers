/**
 * script.js — csspastpapers.com
 * Shared interactive logic for all pages.
 * Depends on: data.js (must be loaded first)
 */

'use strict';

/* ================================================================
   DARK MODE
   ================================================================ */
function initDarkMode() {
  const btn = document.getElementById('darkToggle');
  if (!btn) return;

  const icon = btn.querySelector('.toggle-icon') || btn;
  const saved = localStorage.getItem('cspp-theme');

  const apply = (dark) => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    if (icon) icon.textContent = dark ? '☀️' : '🌙';
  };

  if (saved === 'dark') apply(true);

  btn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    apply(!isDark);
    localStorage.setItem('cspp-theme', !isDark ? 'dark' : 'light');
  });
}

/* ================================================================
   NAVBAR (hamburger + active link)
   ================================================================ */
function initNavbar() {
  // Scroll shadow
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.boxShadow = window.scrollY > 8
        ? '0 4px 20px rgba(0,0,0,.25)'
        : '0 2px 12px rgba(0,0,0,.18)';
    }, { passive: true });
  }

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('open');
      if (isOpen) {
        mobileMenu.style.display = 'block';
        mobileMenu.classList.add('open');
      } else {
        mobileMenu.classList.remove('open');
        mobileMenu.style.display = 'none';
      }
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
        mobileMenu.style.display = 'none';
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
      }
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileMenu.style.display = 'none';
        hamburger.classList.remove('open');
      });
    });
  }

  // Mark active page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPage || (currentPage === '' && href === 'index.html'))) {
      link.classList.add('active');
    }
    // Handle practice sub-pages
    const practicePages = ['essay-practice.html','precis-practice.html','mcqs-practice.html'];
    if (practicePages.includes(currentPage) && href === '#practice-dropdown') {
      link.classList.add('active');
    }
  });
}

/* ================================================================
   TABS (generic tab system)
   ================================================================ */
function initTabs() {
  document.querySelectorAll('.tab-bar').forEach(bar => {
    const buttons = bar.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.tab;
        const parent = btn.closest('[data-tabs-scope]') || document;

        // Deactivate all
        buttons.forEach(b => b.classList.remove('active'));
        parent.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

        // Activate selected
        btn.classList.add('active');
        const panel = parent.querySelector('#' + targetId);
        if (panel) panel.classList.add('active');
      });
    });

    // Activate first tab by default
    if (buttons.length > 0) buttons[0].click();
  });
}

/* ================================================================
   ESSAY ANALYZER (tools.html)
   ================================================================ */
function initEssayAnalyzer() {
  const btn = document.getElementById('analyzeEssayBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const text = (document.getElementById('essayInput')?.value || '').trim();
    if (!text) { showAlert('Please paste your essay text first.', 'warning'); return; }

    const words      = countWords(text);
    const sentences  = countSentences(text);
    const paragraphs = countParagraphs(text);
    const avgWPS     = sentences > 0 ? Math.round(words / sentences) : 0;
    const repeated   = findRepeatedWords(text);

    // Fill stat boxes
    setText('statWords',    words);
    setText('statSentences', sentences);
    setText('statParagraphs', paragraphs);
    setText('statAvgWPS',   avgWPS);

    // Suggestions
    const feedback = buildEssayFeedback(text, words, sentences, paragraphs, avgWPS, repeated);
    renderFeedback('essayFeedbackList', feedback);

    show('essayResult');
    document.getElementById('essayResult').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

function countWords(text) {
  return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
}

function countSentences(text) {
  const m = text.match(/[^.!?]*[.!?]+/g);
  return m ? m.length : (text.trim() ? 1 : 0);
}

function countParagraphs(text) {
  if (!text.trim()) return 0;
  return text.trim().split(/\n\s*\n+/).filter(p => p.trim()).length || 1;
}

function findRepeatedWords(text) {
  const stopWords = new Set(['the','a','an','is','are','was','were','be','been','being',
    'have','has','had','do','does','did','will','would','could','should','may','might',
    'shall','can','need','dare','ought','used','it','its','this','that','these','those',
    'i','we','you','he','she','they','me','us','him','her','them','my','our','your',
    'his','her','their','what','which','who','whom','when','where','why','how',
    'and','but','or','nor','for','so','yet','of','in','on','at','to','from','with',
    'by','as','if','not','also','than','then','about','into','over','after','before',
    'between','through','during','pakistan','country']);
  const freq = {};
  text.toLowerCase().replace(/[^a-z\s]/g,'').split(/\s+/).forEach(w => {
    if (w.length > 4 && !stopWords.has(w)) freq[w] = (freq[w]||0)+1;
  });
  return Object.entries(freq).filter(([,c])=>c>=4).sort((a,b)=>b[1]-a[1]).slice(0,5);
}

function buildEssayFeedback(text, words, sentences, paragraphs, avgWPS, repeated) {
  const fb = [];

  // Word count
  if (words < 800)       fb.push({ icon:'⚠️', text:`Your essay is ${words} words. CSS essays typically need 1,000–1,500 words. Consider developing your arguments further.` });
  else if (words <= 1500) fb.push({ icon:'✅', text:`Good length! ${words} words falls within the ideal CSS essay range (1,000–1,500 words).` });
  else                    fb.push({ icon:'⚠️', text:`At ${words} words, your essay may exceed exam time limits. Consider trimming less essential content.` });

  // Intro detection
  const lowerText = text.toLowerCase();
  const introSignals = ['introduction','to begin','in this essay','this essay','the purpose','this paper','essay aims','first and foremost'];
  const hasIntro = introSignals.some(s => lowerText.slice(0, 300).includes(s)) || paragraphs >= 2;
  if (!hasIntro && words > 100) fb.push({ icon:'⚠️', text:'No clear introduction detected. Start with a hook, context, and a thesis statement that previews your main argument.' });
  else if (words > 100)         fb.push({ icon:'✅', text:'An introduction appears to be present. Ensure it ends with a clear thesis statement.' });

  // Sentence length
  if (avgWPS > 32)    fb.push({ icon:'⚠️', text:`Average sentence length is ${avgWPS} words — quite long. Break complex sentences into shorter, clearer ones for better readability.` });
  else if (avgWPS < 8 && sentences > 5) fb.push({ icon:'💡', text:`Very short sentences (avg. ${avgWPS} words). Combine related ideas for more sophisticated expression.` });
  else                fb.push({ icon:'✅', text:`Sentence length (avg. ${avgWPS} words/sentence) is within the readable range for formal essays.` });

  // Paragraphs
  if (paragraphs < 4) fb.push({ icon:'⚠️', text:`Only ${paragraphs} paragraph(s) detected. A well-structured CSS essay should have: Introduction, 4–6 body paragraphs, and a Conclusion.` });
  else                fb.push({ icon:'✅', text:`${paragraphs} paragraphs detected. Ensure each paragraph develops one central argument with a topic sentence, evidence, and analysis.` });

  // Very short paragraphs check
  const paras = text.split(/\n\s*\n+/).filter(p => p.trim());
  const shortParas = paras.filter(p => countWords(p) < 40).length;
  if (shortParas >= 2) fb.push({ icon:'⚠️', text:`${shortParas} very short paragraph(s) detected (under 40 words). Develop each point with sufficient argument, evidence, and analysis.` });

  // Repeated words
  if (repeated.length > 0) {
    const list = repeated.map(([w,c]) => `"${w}" (${c}x)`).join(', ');
    fb.push({ icon:'💡', text:`Overused words detected: ${list}. Use synonyms or rephrase to demonstrate a broader vocabulary.` });
  }

  // Generic CSS tips
  fb.push({ icon:'💡', text:'Use transition phrases (Furthermore, However, In contrast, Consequently) to link paragraphs cohesively.' });
  fb.push({ icon:'💡', text:'Conclude by restating your thesis in fresh language and offering a forward-looking or reflective statement.' });
  if (words > 0) fb.push({ icon:'💡', text:'Avoid passive voice overuse. Active constructions make your writing more direct and compelling.' });

  return fb;
}

function renderFeedback(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items.map(({icon,text}) =>
    `<div class="feedback-item"><span class="feedback-icon">${icon}</span><span>${text}</span></div>`
  ).join('');
}

/* ================================================================
   QUESTION ANALYZER (tools.html)
   ================================================================ */
const Q_STRUCTURES = {
  'critically evaluate': { cls:'q-type-evaluate', label:'🔴 Critical Evaluation', steps:['Define key concepts and scope of the question','Present the dominant/mainstream position with evidence','Identify weaknesses, contradictions, or limitations','Present counter-arguments and alternative perspectives','Apply your own evaluative framework to weigh evidence','Reach a nuanced, evidence-based judgment in your conclusion'] },
  'critically examine':  { cls:'q-type-evaluate', label:'🔴 Critical Examination', steps:['Define the subject and establish evaluative criteria','Describe what is being examined (structure, history, function)','Identify strengths and supporting evidence','Identify weaknesses, limitations, or criticisms','Compare with alternatives where relevant','Draw a reasoned, balanced conclusion'] },
  'critically analyze':  { cls:'q-type-evaluate', label:'🔴 Critical Analysis', steps:['Define key terms and frame the analytical lens','Break the topic into its constituent components','Examine each component with supporting evidence','Identify cause-effect relationships and patterns','Critically assess implications and limitations','Synthesize findings into a coherent analytical conclusion'] },
  'discuss':    { cls:'q-type-discuss',  label:'🟢 Discussion Question', steps:['Define key terms and establish the scope','Present arguments in favor (For)','Present arguments against (Against/Limitations)','Support each side with specific examples and data','Weigh both sides objectively','Offer a reasoned, balanced conclusion'] },
  'analyze':    { cls:'q-type-analyze',  label:'🟠 Analysis Required',  steps:['Introduce the issue with relevant historical/political context','Break the topic into its key components or dimensions','Examine each component in depth with evidence','Identify relationships, causes, and effects','Evaluate significance and policy/real-world implications','Conclude with a coherent synthesis of findings'] },
  'analyse':    { cls:'q-type-analyze',  label:'🟠 Analysis Required',  steps:['Introduce the issue with relevant historical/political context','Break the topic into its key components or dimensions','Examine each component in depth with evidence','Identify relationships, causes, and effects','Evaluate significance and policy/real-world implications','Conclude with a coherent synthesis of findings'] },
  'evaluate':   { cls:'q-type-evaluate', label:'🔴 Evaluation Required', steps:['State what is being evaluated and the criteria for judgment','Present evidence supporting a positive assessment','Present evidence of limitations or failures','Apply a clear evaluative framework (criteria-based)','Weigh the evidence systematically','Reach a reasoned, defensible verdict'] },
  'examine':    { cls:'q-type-analyze',  label:'🟠 Examination Required', steps:['Identify the central subject and its context','Describe its structure, history, or key components','Consider different dimensions (economic, political, social)','Identify strengths and evidence in favor','Identify weaknesses or problems','Draw evidence-based conclusions'] },
  'explain':    { cls:'q-type-explain',  label:'🔵 Explanation Required', steps:['Define the concept or phenomenon clearly','Provide historical, theoretical, or contextual background','Break the explanation into logical, sequential steps','Use examples, analogies, or case studies to illustrate','Address common misconceptions if relevant','Conclude with a clear restatement of the core explanation'] },
  'compare':    { cls:'q-type-analyze',  label:'🟠 Comparison Question',  steps:['Introduce both subjects/concepts and their significance','Establish clear criteria for comparison','Compare the first criterion: similarities','Compare the first criterion: differences','Continue point-by-point for each criterion','Synthesize with an overall comparative judgment'] },
  'assess':     { cls:'q-type-evaluate', label:'🔴 Assessment Required', steps:['Define scope and set out assessment criteria','Present what works or has been effective (positive)','Present what does not work or has failed (negative)','Consider context-specific factors','Apply your assessment criteria systematically','Render a balanced, criteria-based verdict'] }
};

function initQuestionAnalyzer() {
  const btn = document.getElementById('analyzeQBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const input = (document.getElementById('questionInput')?.value || '').toLowerCase().trim();
    if (!input) { showAlert('Please enter a CSS question first.', 'warning'); return; }

    // Find longest keyword match
    const sortedKeys = Object.keys(Q_STRUCTURES).sort((a,b) => b.length - a.length);
    let matched = null;
    for (const kw of sortedKeys) {
      if (input.includes(kw)) { matched = Q_STRUCTURES[kw]; break; }
    }

    if (!matched) {
      matched = { cls:'q-type-default', label:'🔵 General Question', steps:['Define key terms and set the context','Provide relevant background information','Present main arguments or points in a logical sequence','Support with specific examples, data, or case studies','Address any counter-arguments or alternative views','Conclude with a summary synthesizing key insights'] };
    }

    const resultEl = document.getElementById('questionResult');
    if (!resultEl) return;

    resultEl.innerHTML = `
      <div class="q-type-box ${matched.cls}">
        <strong>${matched.label}</strong>
      </div>
      <div class="card mt-2">
        <h4 style="margin-bottom:12px;font-family:var(--font-body);font-size:.82rem;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--gray-500)">Suggested Answer Structure</h4>
        ${matched.steps.map((step, i) =>
          `<div class="q-step"><span class="q-step-num">${i+1}</span><span>${step}</span></div>`
        ).join('')}
      </div>
    `;

    show('questionResult');
    resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

/* ================================================================
   ESSAY TOPIC GENERATOR (essay-practice.html)
   ================================================================ */
/** Map filter keys → keywords to search in topic text */
const TOPIC_FILTER_KEYWORDS = {
  pakistan:      ['pakistan','cpec','karachi','lahore','punjab','sindh','balochistan','fpsc','css','pti','nawaz','imran','jinnah','iqbal','indus','gwadar','kp','federalism','constitution','18th amendment'],
  international: ['global','world','international','geopolit','china','india','russia','ukraine','usa','un','nato','brics','aukus','quad','sco','war','diplomacy','foreign policy','sovereignty','nuclear','sanctions','refugee'],
  social:        ['society','social','education','literacy','women','child','poverty','health','mental','drug','addiction','religion','culture','tolerance','honour','marriage','population','youth','unemployment','caste','class'],
  science:       ['technology','artificial intelligence','ai','climate','environment','renewable','energy','digital','internet','cyber','space','science','biotechnology','genome','mobile','social media','data','blockchain'],
  economy:       ['economy','economic','gdp','inflation','debt','imf','tax','revenue','agriculture','industry','trade','export','remittance','microfinance','banking','finance','fiscal','budget','investment','cpec','gig']
};

function topicMatchesFilter(topic, filter) {
  if (filter === 'all') return true;
  const keywords = TOPIC_FILTER_KEYWORDS[filter] || [];
  const text = (topic.topic + ' ' + topic.hint).toLowerCase();
  return keywords.some(kw => text.includes(kw));
}

function initEssayGenerator() {
  const btn = document.getElementById('genTopicBtn');
  if (!btn || typeof ESSAY_TOPICS === 'undefined') return;

  // Category filter buttons
  const filterBtns = document.querySelectorAll('.topic-filter-btn');
  let activeFilter = 'all';

  filterBtns.forEach(fb => {
    fb.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      fb.classList.add('active');
      activeFilter = fb.dataset.filter || 'all';
    });
  });

  const generate = () => {
    let pool = ESSAY_TOPICS.filter(t => topicMatchesFilter(t, activeFilter));
    if (!pool.length) pool = ESSAY_TOPICS;
    const topic = pool[Math.floor(Math.random() * pool.length)];
    show('topicOutput');
    setText('topicText', `"${topic.topic}"`);
    setText('topicHint', `📌 ${topic.hint}`);
    const out = document.getElementById('topicOutput');
    if (out) { out.style.animation = 'none'; requestAnimationFrame(() => { out.style.animation = ''; }); }
  };

  btn.addEventListener('click', generate);
  // Show a topic immediately on page load
  generate();
}

/* ================================================================
   PRECIS PRACTICE (precis-practice.html)
   ================================================================ */
let currentPrecis = null;

function initPrecisPage() {
  if (typeof PRECIS_PASSAGES === 'undefined') return;

  const levelFilter = document.getElementById('precisLevelFilter');

  function loadPassage() {
    let pool = PRECIS_PASSAGES;
    if (levelFilter && levelFilter.value !== 'all') {
      pool = PRECIS_PASSAGES.filter(p => p.level === levelFilter.value);
      if (!pool.length) pool = PRECIS_PASSAGES;
    }
    currentPrecis = pool[Math.floor(Math.random() * pool.length)];
    const target = Math.round(currentPrecis.wordCount / 3);

    setText('precisPassageText', currentPrecis.text);
    setText('precisOriginalWords', currentPrecis.wordCount);
    setText('precisTargetWords', `~${target}`);
    setText('precisLevel', currentPrecis.level || 'Medium');

    const inp = document.getElementById('precisWritingInput');
    if (inp) inp.value = '';
    const liveCount = document.getElementById('precisLiveCount');
    if (liveCount) liveCount.textContent = '0 words';
    hide('precisFeedback');
  }

  // Load on init
  loadPassage();

  // New passage button
  document.getElementById('newPassageBtn')?.addEventListener('click', loadPassage);
  if (levelFilter) levelFilter.addEventListener('change', loadPassage);

  // Live word count
  const inp = document.getElementById('precisWritingInput');
  inp?.addEventListener('input', () => {
    const wc = countWords(inp.value);
    const lc = document.getElementById('precisLiveCount');
    if (lc) lc.textContent = `${wc} word${wc !== 1 ? 's' : ''}`;
  });

  // Check button
  document.getElementById('checkPrecisBtn')?.addEventListener('click', () => {
    if (!currentPrecis) return;
    const text = document.getElementById('precisWritingInput')?.value?.trim();
    if (!text) { showAlert('Please write your précis before checking.', 'warning'); return; }

    const yourWords = countWords(text);
    const original  = currentPrecis.wordCount;
    const target    = Math.round(original / 3);
    const ratio     = (yourWords / original) * 100;
    const diff      = Math.abs(yourWords - target);

    let cls, msg;
    if (ratio >= 26 && ratio <= 38) {
      cls = 'precis-good';
      msg = `✅ Excellent! Your précis is ${yourWords} words (${ratio.toFixed(1)}% of the original). That's right in the ideal one-third range! Review it for coherence and completeness.`;
    } else if (ratio < 26) {
      cls = 'precis-warn';
      msg = `⚠️ Your précis is too short (${yourWords} words — ${ratio.toFixed(1)}% of original). Try expanding to ~${target} words (+${diff} needed). Make sure all key ideas from the original are included.`;
    } else {
      cls = 'precis-bad';
      msg = `❌ Your précis is too long (${yourWords} words — ${ratio.toFixed(1)}% of original). Target is ~${target} words. Cut ${diff} words by removing examples, repetitions, and non-essential detail.`;
    }

    const fb = document.getElementById('precisFeedback');
    if (fb) {
      fb.className = `precis-feedback-box ${cls}`;
      fb.innerHTML = `${msg}<br><small style="opacity:.7;margin-top:6px;display:block">Original: ${original} words | Your précis: ${yourWords} words | Target: ~${target} words</small>`;
      show('precisFeedback');
      fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

/* ================================================================
   MCQ QUIZ (mcqs-practice.html)
   ================================================================ */
let mcqState = { questions:[], current:0, score:0, answered:false };

function initMCQPage() {
  if (typeof MCQ_BANK === 'undefined') return;

  const startBtn  = document.getElementById('startMcqBtn');
  if (!startBtn) return;

  startBtn.addEventListener('click', startMCQ);
}

function startMCQ() {
  // mcqSubjectSelect may be a <select> or a hidden <input> (driven by button grid)
  const subjectEl = document.getElementById('mcqSubjectSelect');
  const countEl   = document.getElementById('mcqCount');
  const subject   = (subjectEl?.value || 'all').trim();
  const count     = parseInt(countEl?.value || '10');

  let pool = [];
  if (subject === 'all') {
    pool = Object.values(MCQ_BANK).flat();
  } else {
    pool = MCQ_BANK[subject] || [];
  }

  if (!pool.length) {
    showAlert('No questions found for this selection.', 'warning');
    return;
  }

  // Shuffle and slice
  const questions = shuffle([...pool]).slice(0, Math.min(count, pool.length));
  mcqState = { questions, current: 0, score: 0, answered: false };

  hide('mcqSetup');
  show('mcqSession');
  renderMCQQuestion();
}

function renderMCQQuestion() {
  const area = document.getElementById('mcqSession');
  if (!area || mcqState.current >= mcqState.questions.length) {
    renderMCQScore();
    return;
  }

  const q        = mcqState.questions[mcqState.current];
  const total    = mcqState.questions.length;
  const progress = ((mcqState.current / total) * 100).toFixed(0);

  area.innerHTML = `
    <div class="mcq-progress-wrap">
      <div class="mcq-progress-info">
        <span>Question <strong>${mcqState.current + 1}</strong> of ${total}</span>
        <span>Score: <strong>${mcqState.score}</strong></span>
      </div>
      <div class="mcq-progress-bar">
        <div class="mcq-progress-fill" style="width:${progress}%"></div>
      </div>
    </div>
    <div class="card">
      <p class="mcq-q-text" style="font-family:var(--font-heading);font-size:1.1rem;color:var(--gray-800);margin-bottom:20px;line-height:1.5">${mcqState.current + 1}. ${q.q}</p>
      <div class="mcq-options-list" style="display:flex;flex-direction:column;gap:10px">
        ${q.opts.map((opt, i) =>
          `<button class="mcq-option-btn" data-index="${i}">
            <span class="opt-letter">${String.fromCharCode(65+i)}</span>
            <span>${opt}</span>
          </button>`
        ).join('')}
      </div>
    </div>
  `;

  mcqState.answered = false;

  area.querySelectorAll('.mcq-option-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      if (mcqState.answered) return;
      mcqState.answered = true;

      const chosen  = parseInt(this.dataset.index);
      const correct = mcqState.questions[mcqState.current].ans;

      area.querySelectorAll('.mcq-option-btn').forEach(b => b.disabled = true);

      if (chosen === correct) {
        this.classList.add('correct');
        mcqState.score++;
      } else {
        this.classList.add('wrong');
        area.querySelectorAll('.mcq-option-btn')[correct].classList.add('reveal');
      }

      setTimeout(() => {
        mcqState.current++;
        renderMCQQuestion();
      }, 1500);
    });
  });
}

function renderMCQScore() {
  const area   = document.getElementById('mcqSession');
  const total  = mcqState.questions.length;
  const pct    = total > 0 ? ((mcqState.score / total) * 100).toFixed(0) : 0;
  let grade, color;
  if (pct >= 80)      { grade = '🏆 Excellent!'; color = 'var(--green)'; }
  else if (pct >= 60) { grade = '👍 Good Work!'; color = 'var(--sky)'; }
  else if (pct >= 40) { grade = '📚 Keep Studying'; color = 'var(--gold)'; }
  else                { grade = '💪 More Practice Needed'; color = 'var(--red)'; }

  area.innerHTML = `
    <div class="card text-center" style="padding:44px 32px">
      <div style="font-family:var(--font-heading);font-size:4rem;color:${color};line-height:1;margin-bottom:8px">${mcqState.score}/${total}</div>
      <div style="font-size:1.2rem;font-weight:600;color:var(--gray-700);margin-bottom:4px">${grade}</div>
      <div style="color:var(--gray-500);margin-bottom:28px">You scored <strong>${pct}%</strong> in this session</div>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-primary" onclick="location.reload()">Try Again</button>
        <button class="btn btn-outline" onclick="showSetup()">Change Subject</button>
      </div>
    </div>
  `;
}

function showSetup() {
  show('mcqSetup');
  hide('mcqSession');
}
// expose globally for inline onclick="showSetup()"
window.showSetup = showSetup;

/* ================================================================
   PRACTICE QUESTION GENERATOR (essay-practice.html / subject pages)
   ================================================================ */
function initPracticeQGenerator() {
  const btn = document.getElementById('genPracticeQBtn');
  if (!btn || typeof PRACTICE_QUESTIONS === 'undefined') return;

  btn.addEventListener('click', () => {
    const subEl = document.getElementById('practiceQSubject');
    const subject = subEl?.value || 'pakistan-affairs';
    const pool = PRACTICE_QUESTIONS[subject] || [];
    if (!pool.length) return;

    const q = pool[Math.floor(Math.random() * pool.length)];
    show('practiceQOutput');
    setText('practiceQText', q.q);
    setText('practiceQHint', `📌 Suggested Approach: ${q.hint}`);

    const out = document.getElementById('practiceQOutput');
    if (out) { out.style.animation='none'; requestAnimationFrame(()=>{ out.style.animation=''; }); }
  });

  // First render
  btn.click();
}

/* ================================================================
   CONTACT FORM (static demo — no backend)
   ================================================================ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById('contactMessage')?.value?.trim();
    if (!msg) { showAlert('Please enter your message.', 'warning'); return; }

    show('contactSuccess');
    form.reset();
    document.getElementById('contactSuccess')?.scrollIntoView({ behavior:'smooth', block:'nearest' });
    setTimeout(() => hide('contactSuccess'), 6000);
  });
}

/* ================================================================
   UTILITY FUNCTIONS
   ================================================================ */
function show(id) { document.getElementById(id)?.classList.remove('hidden'); }
function hide(id) { document.getElementById(id)?.classList.add('hidden'); }
function setText(id, val) { const el = document.getElementById(id); if (el) el.textContent = val; }
function shuffle(arr) { return arr.sort(() => Math.random() - 0.5); }

function showAlert(msg, type = 'info') {
  // Creates a temporary toast
  const existing = document.getElementById('js-alert-toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.id = 'js-alert-toast';
  toast.className = `alert alert-${type}`;
  toast.style.cssText = 'position:fixed;top:80px;right:20px;z-index:9999;max-width:360px;box-shadow:0 8px 30px rgba(0,0,0,.15);animation:fadeUp .3s ease';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

/* ================================================================
   SMOOTH SCROLL for anchor links
   ================================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ================================================================
   SCROLL ANIMATIONS — adds .visible class when element enters view
   ================================================================ */
function initScrollAnimations() {
  const els = document.querySelectorAll('.animate-on-scroll');
  if (!els.length) return;

  if (!('IntersectionObserver' in window)) {
    // Fallback: just show everything immediately
    els.forEach(el => el.classList.add('visible'));
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay based on sibling index
        const siblings = Array.from(entry.target.parentElement?.children || []);
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${idx * 0.07}s`;
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  els.forEach(el => obs.observe(el));
}

/* ================================================================
   INIT (runs on every page)
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initNavbar();
  initTabs();
  initSmoothScroll();
  initScrollAnimations();

  // Page-specific init based on body id or presence of elements
  initEssayAnalyzer();
  initQuestionAnalyzer();
  initEssayGenerator();
  initPrecisPage();
  initMCQPage();
  initPracticeQGenerator();
  initContactForm();
});
