/**
 * storage.js — Persistent user data layer
 * All progress, settings, and activity is stored in localStorage.
 * Keys are namespaced under "cspp_" to avoid conflicts.
 *
 * Data schema:
 *  cspp_roadmap      — { subjectId: { topicId: true/false, ... }, ... }
 *  cspp_mcq_stats    — { solved: N, correct: N, bySubject: {...}, lastDate: "" }
 *  cspp_essay_count  — N (number of essay topics generated)
 *  cspp_precis_count — N (number of précis attempts)
 *  cspp_planner      — { config: {...}, tasks: [...] }
 *  cspp_streak       — { lastDate: "YYYY-MM-DD", count: N }
 *  cspp_notes        — { key: { title, content, date } }
 *  cspp_theme        — "light" | "dark"
 */

const Storage = (() => {
  'use strict';

  const NS = 'cspp_';

  function key(k)         { return NS + k; }
  function get(k)         { try { return JSON.parse(localStorage.getItem(key(k))); } catch(e) { return null; } }
  function set(k, v)      { try { localStorage.setItem(key(k), JSON.stringify(v)); } catch(e) {} }
  function remove(k)      { localStorage.removeItem(key(k)); }
  function clearAll()     { Object.keys(localStorage).filter(k => k.startsWith(NS)).forEach(k => localStorage.removeItem(k)); }

  /* ── Roadmap / Syllabus ─────────────────────────────────── */
  function getRoadmap()       { return get('roadmap') || {}; }
  function setRoadmap(data)   { set('roadmap', data); }
  function isTopicDone(subjectId, topicId) {
    const rm = getRoadmap();
    return !!(rm[subjectId] && rm[subjectId][topicId]);
  }
  function toggleTopic(subjectId, topicId) {
    const rm = getRoadmap();
    if (!rm[subjectId]) rm[subjectId] = {};
    rm[subjectId][topicId] = !rm[subjectId][topicId];
    setRoadmap(rm);
    updateStreak();
    return rm[subjectId][topicId];
  }
  function getSubjectProgress(subjectId, totalTopics) {
    const rm = getRoadmap();
    if (!rm[subjectId]) return 0;
    const done = Object.values(rm[subjectId]).filter(Boolean).length;
    return totalTopics > 0 ? Math.round((done / totalTopics) * 100) : 0;
  }
  function getOverallProgress(allSubjectsTopics) {
    let total = 0, done = 0;
    const rm = getRoadmap();
    allSubjectsTopics.forEach(({ id, count }) => {
      total += count;
      if (rm[id]) done += Object.values(rm[id]).filter(Boolean).length;
    });
    return total > 0 ? Math.round((done / total) * 100) : 0;
  }

  /* ── MCQ Stats ──────────────────────────────────────────── */
  function getMCQStats() {
    return get('mcq_stats') || { solved: 0, correct: 0, bySubject: {}, sessions: 0 };
  }
  function recordMCQSession(subject, correct, total) {
    const s = getMCQStats();
    s.solved   += total;
    s.correct  += correct;
    s.sessions += 1;
    if (!s.bySubject[subject]) s.bySubject[subject] = { solved: 0, correct: 0 };
    s.bySubject[subject].solved  += total;
    s.bySubject[subject].correct += correct;
    set('mcq_stats', s);
    updateStreak();
  }

  /* ── Essay & Précis counts ──────────────────────────────── */
  function getEssayCount()    { return get('essay_count') || 0; }
  function incEssayCount()    { set('essay_count', getEssayCount() + 1); updateStreak(); }
  function getPrecisCount()   { return get('precis_count') || 0; }
  function incPrecisCount()   { set('precis_count', getPrecisCount() + 1); updateStreak(); }

  /* ── Study Streak ───────────────────────────────────────── */
  function getStreak()        { return get('streak') || { lastDate: null, count: 0, totalDays: 0 }; }
  function updateStreak() {
    const today = new Date().toISOString().split('T')[0];
    const s     = getStreak();
    if (s.lastDate === today) return; // Already counted today
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    s.count      = (s.lastDate === yesterday) ? s.count + 1 : 1;
    s.totalDays  = (s.totalDays || 0) + 1;
    s.lastDate   = today;
    set('streak', s);
  }

  /* ── Study Planner ──────────────────────────────────────── */
  function getPlanner()       { return get('planner') || null; }
  function setPlanner(data)   { set('planner', data); }

  /* ── Quick Notes ────────────────────────────────────────── */
  function getNotes()         { return get('notes') || {}; }
  function saveNote(id, title, content) {
    const notes = getNotes();
    notes[id] = { title, content, date: new Date().toISOString() };
    set('notes', notes);
  }
  function deleteNote(id) { const n = getNotes(); delete n[id]; set('notes', n); }

  /* ── Dashboard summary ──────────────────────────────────── */
  function getDashboard(allSubjectsTopics) {
    const mcq    = getMCQStats();
    const streak = getStreak();
    return {
      overallProgress:  getOverallProgress(allSubjectsTopics),
      mcqSolved:        mcq.solved,
      mcqCorrect:       mcq.correct,
      mcqSessions:      mcq.sessions,
      essayCount:       getEssayCount(),
      precisCount:      getPrecisCount(),
      streakCount:      streak.count,
      totalStudyDays:   streak.totalDays || 0,
      lastActive:       streak.lastDate,
    };
  }

  /* ── Reset ──────────────────────────────────────────────── */
  function resetProgress() { clearAll(); }

  return {
    get, set, remove, clearAll,
    getRoadmap, setRoadmap, isTopicDone, toggleTopic,
    getSubjectProgress, getOverallProgress,
    getMCQStats, recordMCQSession,
    getEssayCount, incEssayCount,
    getPrecisCount, incPrecisCount,
    getStreak, updateStreak,
    getPlanner, setPlanner,
    getNotes, saveNote, deleteNote,
    getDashboard, resetProgress,
  };
})();

// Expose globally
window.Storage = Storage;
