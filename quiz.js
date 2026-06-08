// ==============================
// SEDA College — World Cup English Quiz
// Progressive Stage System Engine
// Requires: questions-data.js (stageQuestions)
// ==============================

const STAGE_THEMES = {
  1: 'Mixed Trivia — Part 1',
  2: 'Mixed Trivia — Part 2',
  3: 'Mixed Trivia — Part 3',
  4: 'Mixed Trivia — Part 4',
  5: 'Mixed Trivia — Part 5'
};

class WorldCupQuiz {
  constructor() {
    this.currentStage = 1;
    this.questions = [];
    this.currentQuestion = 0;
    this.score = 0;
    this.timeLeft = 20;
    this.timer = null;
    this.isAnswered = false;
    this.userData = null;
    this.countdownTimer = null;

    // Time tracking
    this.questionStartTime = 0;
    this.stageTime = 0;

    // DOM Elements
    this.weekSelectorEl = document.getElementById('stageSelectorPublic');
    this.weekInfoEl = document.getElementById('stageInfoPublic');
    this.startScreen = document.getElementById('quizStart');
    this.registerScreen = document.getElementById('quizRegister');
    this.activeScreen = document.getElementById('quizActive');
    this.resultsScreen = document.getElementById('quizResults');
    this.startBtn = document.getElementById('startQuizBtn');
    this.registerForm = document.getElementById('registerForm');
    this.registerBackBtn = document.getElementById('registerBackBtn');
    this.progressFill = document.getElementById('progressFill');
    this.progressText = document.getElementById('progressText');
    this.timerCircle = document.getElementById('timerCircle');
    this.timerText = document.getElementById('timerText');
    this.currentScoreEl = document.getElementById('currentScore');
    this.questionBadge = document.getElementById('questionBadge');
    this.questionEl = document.getElementById('quizQuestion');
    this.optionsEl = document.getElementById('quizOptions');
    this.feedbackEl = document.getElementById('quizFeedback');
    this.feedbackIcon = document.getElementById('feedbackIcon');
    this.feedbackText = document.getElementById('feedbackText');

    // Results elements
    this.resultEmoji = document.getElementById('resultEmoji');
    this.resultsTitle = document.getElementById('resultsTitle');
    this.finalScore = document.getElementById('finalScore');
    this.scoreFillCircle = document.getElementById('scoreFillCircle');
    this.resultsMessage = document.getElementById('resultsMessage');
    this.levelBadge = document.getElementById('levelBadge');
    this.levelDesc = document.getElementById('levelDesc');

    this.renderWeekSelector();
    this.renderLeaderboard();
    this.bindEvents();
  }

  bindEvents() {
    this.startBtn.addEventListener('click', () => this.handleStart());
    this.registerForm.addEventListener('submit', (e) => this.submitRegister(e));
    this.registerBackBtn.addEventListener('click', () => this.backToStart());

    const nextStageBtn = document.getElementById('nextStageBtn');
    if (nextStageBtn) nextStageBtn.addEventListener('click', () => this.goToNextStage());

    // Clear error on input focus
    this.registerForm.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('input-error');
        const errorEl = document.getElementById('error' + input.id.replace('reg', ''));
        if (errorEl) errorEl.textContent = '';
      });
    });
  }

  // ── localStorage ──
  getPlayerData(email) {
    const key = 'sedaQuiz_' + email.toLowerCase();
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  }

  savePlayerData(email, data) {
    const key = 'sedaQuiz_' + email.toLowerCase();
    localStorage.setItem(key, JSON.stringify(data));
  }

  getRegisteredEmail() {
    return localStorage.getItem('sedaQuiz_currentEmail') || null;
  }

  saveRegisteredEmail(email) {
    localStorage.setItem('sedaQuiz_currentEmail', email.toLowerCase());
  }

  getCompletedStages(email) {
    const data = this.getPlayerData(email);
    if (!data || !data.stages) return [];
    return Object.keys(data.stages).map(k => parseInt(k)).sort((a, b) => a - b);
  }

  getNextAvailableStage(email) {
    const completed = this.getCompletedStages(email);
    if (completed.length === 0) return 1;
    const max = Math.max(...completed);
    return max >= 5 ? null : max + 1;
  }

  isStageAvailable(stageNum, email) {
    if (stageNum === 1) return true;
    if (!email) return false;
    const completed = this.getCompletedStages(email);
    return completed.includes(stageNum) || completed.includes(stageNum - 1);
  }

  isStageCompleted(stageNum, email) {
    const completed = this.getCompletedStages(email);
    return completed.includes(stageNum);
  }

  getTotalScore(email) {
    const data = this.getPlayerData(email);
    if (!data || !data.stages) return { total: 0, stageCount: 0 };
    const stages = Object.values(data.stages);
    return {
      total: stages.reduce((sum, w) => sum + w.score, 0),
      stageCount: stages.length
    };
  }

  saveStageScore(email, stageNum, score) {
    let data = this.getPlayerData(email) || { stages: {} };
    data.stages[stageNum] = { score, date: new Date().toISOString() };
    this.savePlayerData(email, data);
  }

  // ── Stage Selector ──
  renderWeekSelector() {
    if (!this.weekSelectorEl) return;
    const email = this.getRegisteredEmail();

    this.weekSelectorEl.innerHTML = '';
    for (let w = 1; w <= 5; w++) {
      const btn = document.createElement('button');
      const completed = email && this.isStageCompleted(w, email);
      const available = this.isStageAvailable(w, email);
      const isNext = email && this.getNextAvailableStage(email) === w;

      let cls = 'stage-btn-pub';
      if (completed) cls += ' completed';
      else if (available && !completed) cls += ' available';
      else cls += ' locked';

      if (w === this.currentStage && available) cls += ' active';

      btn.className = cls;
      btn.dataset.stage = w;

      const stageLabels = {
        1: window.i18n ? window.i18n.t('stage1') : 'Stage 1',
        2: window.i18n ? window.i18n.t('stage2') : 'Stage 2',
        3: window.i18n ? window.i18n.t('stage3') : 'Stage 3',
        4: window.i18n ? window.i18n.t('stage4') : 'Stage 4',
        5: window.i18n ? window.i18n.t('stage5') : 'Final Stage',
      };
      
      const stageIcons = {
        1: "⚽",
        2: "🏟️",
        3: "🔥",
        4: "🚀",
        5: "🏆"
      };

      const icon = completed ? "✅" : (available ? stageIcons[w] : "🔒");
      btn.innerHTML = `<span class="stage-num">${icon}</span><span class="stage-label">${stageLabels[w]}</span>`;

      btn.addEventListener('click', () => {
        if (available) this.selectStage(w);
      });

      this.weekSelectorEl.appendChild(btn);
    }

    this.updateStageInfo();

    // Auto-select next available week
    if (email) {
      const next = this.getNextAvailableStage(email);
      if (next) this.selectStage(next);
    }
  }

  selectStage(week) {
    const email = this.getRegisteredEmail();
    if (!this.isStageAvailable(week, email) && week !== 1) return;

    this.currentStage = week;
    this.weekSelectorEl.querySelectorAll('.stage-btn-pub').forEach(b => b.classList.remove('active'));
    const btn = this.weekSelectorEl.querySelector(`[data-stage="${week}"]`);
    if (btn) btn.classList.add('active');
    this.updateStageInfo();
  }

  updateStageInfo() {
    if (!this.weekInfoEl) return;
    const theme = STAGE_THEMES[this.currentStage] || '';
    this.weekInfoEl.innerHTML = `<strong>Stage ${this.currentStage}</strong> — ${theme} (10 questions)`;
  }

  // ── Flow ──
  handleStart() {
    const savedEmail = this.getRegisteredEmail();
    if (savedEmail) {
      const savedData = this.getPlayerData(savedEmail);
      if (savedData && savedData.questionSequence) {
        // Usuário já registrado: pula formulário e vai direto ao quiz
        this.userData = savedData;
        // currentStage já foi definido pelo seletor de estágios (auto-select)
        this.startQuiz();
        return;
      }
    }
    // Primeiro acesso: exige cadastro
    this.showRegister();
  }

  showRegister() {
    this.hideAllScreens();
    this.registerScreen.classList.remove('hidden');
  }

  hideAllScreens() {
    this.startScreen.classList.add('hidden');
    this.registerScreen.classList.add('hidden');
    this.activeScreen.classList.add('hidden');
    this.resultsScreen.classList.add('hidden');
  }

  backToStart() {
    clearInterval(this.countdownTimer);
    clearInterval(this.timer);
    this.hideAllScreens();
    this.startScreen.classList.remove('hidden');
  }

  validateForm() {
    let valid = true;

    const setError = (inputId, errorId, msg) => {
      const input = document.getElementById(inputId);
      const errorEl = document.getElementById(errorId);
      input.classList.add('input-error');
      errorEl.textContent = msg;
      valid = false;
    };

    const clearError = (inputId, errorId) => {
      document.getElementById(inputId).classList.remove('input-error');
      document.getElementById(errorId).textContent = '';
    };

    // Name validation
    const name = document.getElementById('regName').value.trim();
    clearError('regName', 'errorName');
    if (!name) {
      setError('regName', 'errorName', '⚠️ Name is required');
    } else if (name.length < 3) {
      setError('regName', 'errorName', '⚠️ Please enter your full name (at least 3 characters)');
    } else if (/\d/.test(name)) {
      setError('regName', 'errorName', '⚠️ Name should not contain numbers');
    }

    // City validation
    const city = document.getElementById('regCity').value.trim();
    clearError('regCity', 'errorCity');
    if (!city) {
      setError('regCity', 'errorCity', '⚠️ City is required');
    } else if (city.length < 2) {
      setError('regCity', 'errorCity', '⚠️ Please enter a valid city name');
    }

    // Email validation
    const email = document.getElementById('regEmail').value.trim();
    clearError('regEmail', 'errorEmail');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const fakeEmailPatterns = /^(test|fake|abc|xxx|aaa|asdf|qwer|none|na|no)@/i;
    if (!email) {
      setError('regEmail', 'errorEmail', '⚠️ Email is required');
    } else if (!emailRegex.test(email)) {
      setError('regEmail', 'errorEmail', '⚠️ Please enter a valid email address (e.g. name@email.com)');
    } else if (fakeEmailPatterns.test(email)) {
      setError('regEmail', 'errorEmail', '⚠️ Please enter your real email address');
    }

    // Phone validation
    const phone = document.getElementById('regPhone').value.trim();
    clearError('regPhone', 'errorPhone');
    const digitsOnly = phone.replace(/[\s\-\(\)\+]/g, '');
    if (!phone) {
      setError('regPhone', 'errorPhone', '⚠️ Phone number is required');
    } else if (!/^\d+$/.test(digitsOnly)) {
      setError('regPhone', 'errorPhone', '⚠️ Phone should contain only numbers');
    } else if (digitsOnly.length < 7) {
      setError('regPhone', 'errorPhone', '⚠️ Please enter a valid phone number (at least 7 digits)');
    } else if (/^(\d)\1+$/.test(digitsOnly)) {
      setError('regPhone', 'errorPhone', '⚠️ Please enter your real phone number');
    }

    // Country validation
    const country = document.getElementById('regCountry').value.trim();
    const countryErrorEl = document.getElementById('errorCountry');
    const countryInput = document.getElementById('regCountry');
    countryInput.classList.remove('input-error');
    if (countryErrorEl) countryErrorEl.textContent = '';
    if (!country) {
      countryInput.classList.add('input-error');
      if (countryErrorEl) countryErrorEl.textContent = window.i18n ? window.i18n.t('err_country_req') : '⚠️ Please select your country';
      valid = false;
    }

    // Terms validation
    const terms = document.getElementById('regTerms').checked;
    const termsErrorEl = document.getElementById('errorTerms');
    if (termsErrorEl) termsErrorEl.textContent = '';
    if (!terms) {
      if (termsErrorEl) termsErrorEl.textContent = window.i18n ? window.i18n.t('err_terms') : '⚠️ You must accept the Terms & Conditions';
      valid = false;
    }

    return valid;
  }

  submitRegister(e) {
    e.preventDefault();
    if (!this.validateForm()) return;

    this.userData = {
      name: document.getElementById('regName').value.trim(),
      city: document.getElementById('regCity').value.trim(),
      country: document.getElementById('regCountry').value.trim(),
      email: document.getElementById('regEmail').value.trim(),
      phone: document.getElementById('regPhone').value.trim(),
      timestamp: new Date().toISOString()
    };

    let savedData = this.getPlayerData(this.userData.email) || { stages: {} };
    if (!savedData.questionSequence) {
      let pool = Array.from({length: allQuestionsPool.length}, (_, i) => i);
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      savedData.questionSequence = pool.slice(0, 50);
    }
    savedData.name = this.userData.name;
    savedData.city = this.userData.city;
    savedData.country = this.userData.country;
    savedData.email = this.userData.email;
    savedData.phone = this.userData.phone;
    
    this.savePlayerData(this.userData.email, savedData);
    this.userData = savedData;

    // Save email for future sessions
    this.saveRegisteredEmail(this.userData.email);

    console.log('📋 Quiz Registration:', this.userData);
    this.sendToGoogleForms(this.userData);

    // Re-render week selector now that we have an email
    this.renderWeekSelector();

    // Check if selected week is already completed
    if (this.isStageCompleted(this.currentStage, this.userData.email)) {
      const next = this.getNextAvailableStage(this.userData.email);
      if (next) {
        this.selectStage(next);
      } else {
        alert('🏆 Congratulations! You completed all 5 stages!');
        this.backToStart();
        return;
      }
    }

    this.startQuiz();
  }

  sendToGoogleForms(data) {
    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/11-SEi5Lj76V7vgoWEbtFQafuFcEsdRAv7LbKq94PxhA/formResponse';

    const formData = new URLSearchParams();
    formData.append('entry.446981245', data.name);
    formData.append('entry.1090817718', data.city);
    formData.append('entry.1390857829', data.email);
    formData.append('entry.144347826', data.phone);

    fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString()
    })
      .then(() => console.log('✅ Data sent to Google Forms'))
      .catch(err => console.warn('⚠️ Google Forms sync error:', err));
  }

  // ── Quiz ──
  startQuiz() {
    const seq = this.userData.questionSequence;
    const startIndex = (this.currentStage - 1) * 10;
    const stageIndices = seq.slice(startIndex, startIndex + 10);
    
    // Load questions and randomly shuffle their options
    this.questions = stageIndices.map(idx => {
      const originalQ = allQuestionsPool[idx];
      const correctText = originalQ.options[originalQ.correct];
      const shuffledOptions = [...originalQ.options].sort(() => Math.random() - 0.5);
      const newCorrect = shuffledOptions.indexOf(correctText);
      return { ...originalQ, options: shuffledOptions, correct: newCorrect };
    });
    
    this.currentQuestion = 0;
    this.score = 0;
    this.stageTime = 0;

    this.hideAllScreens();
    this.activeScreen.classList.remove('hidden');
    this.loadQuestion();
  }

  loadQuestion() {
    const q = this.questions[this.currentQuestion];
    this.isAnswered = false;
    this.questionStartTime = Date.now();

    const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
    this.progressFill.style.width = `${progress}%`;
    this.progressText.textContent = `${this.currentQuestion + 1} / ${this.questions.length}`;
    this.currentScoreEl.textContent = this.score;

    this.questionBadge.style.display = 'none';
    this.questionEl.textContent = q.question;
    this.feedbackEl.classList.add('hidden');

    const letters = ['A', 'B', 'C', 'D'];
    this.optionsEl.innerHTML = q.options.map((opt, i) => `
      <button class="quiz-option" data-index="${i}">
        <span class="option-letter">${letters[i]}</span>
        <span>${opt}</span>
      </button>
    `).join('');

    this.optionsEl.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectAnswer(parseInt(btn.dataset.index));
      });
    });

    this.startTimer();
    this.questionEl.style.animation = 'fadeIn 0.4s ease';
    this.optionsEl.style.animation = 'fadeInUp 0.4s ease';
  }

  startTimer() {
    this.timeLeft = 20;
    this.timerText.textContent = this.timeLeft;
    this.timerCircle.style.strokeDashoffset = 0;
    this.timerCircle.classList.remove('warning', 'danger');

    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.timeLeft--;
      this.timerText.textContent = this.timeLeft;
      const offset = ((20 - this.timeLeft) / 20) * 113;
      this.timerCircle.style.strokeDashoffset = offset;

      if (this.timeLeft <= 5) {
        this.timerCircle.classList.add('danger');
        this.timerCircle.classList.remove('warning');
      } else if (this.timeLeft <= 10) {
        this.timerCircle.classList.add('warning');
      }

      if (this.timeLeft <= 0) {
        clearInterval(this.timer);
        this.timeOut();
      }
    }, 1000);
  }

  timeOut() {
    if (this.isAnswered) return;
    this.isAnswered = true;
    this.stageTime += 20; // full 20s penalty
    const q = this.questions[this.currentQuestion];
    const options = this.optionsEl.querySelectorAll('.quiz-option');
    options.forEach((opt, i) => {
      opt.classList.add('disabled');
      if (i === q.correct) opt.classList.add('correct');
    });
    this.showFeedback(false, "⏰ Time's up! " + q.explanation);
    setTimeout(() => this.nextQuestion(), 2500);
  }

  selectAnswer(index) {
    if (this.isAnswered) return;
    this.isAnswered = true;
    clearInterval(this.timer);
    const elapsed = (Date.now() - this.questionStartTime) / 1000;
    this.stageTime += Math.round(elapsed * 10) / 10;

    const q = this.questions[this.currentQuestion];
    const isCorrect = index === q.correct;
    const options = this.optionsEl.querySelectorAll('.quiz-option');

    options.forEach((opt, i) => {
      opt.classList.add('disabled');
      if (i === q.correct) opt.classList.add('correct');
      if (i === index && !isCorrect) opt.classList.add('incorrect');
    });

    if (isCorrect) {
      this.score++;
      this.currentScoreEl.textContent = this.score;
      this.showFeedback(true, "⚽ Goal! " + q.explanation);
    } else {
      this.showFeedback(false, "❌ Missed! " + q.explanation);
    }

    setTimeout(() => this.nextQuestion(), 2500);
  }

  showFeedback(correct, text) {
    this.feedbackEl.classList.remove('hidden');
    this.feedbackIcon.textContent = correct ? '✅' : '😔';
    this.feedbackText.textContent = text;
  }

  nextQuestion() {
    this.currentQuestion++;
    if (this.currentQuestion < this.questions.length) {
      this.loadQuestion();
    } else {
      this.showResults();
    }
  }

  showResults() {
    this.hideAllScreens();
    this.resultsScreen.classList.remove('hidden');

    this.finalScore.textContent = this.score;

    // Animate score circle
    const circumference = 339.292;
    const offset = circumference - (this.score / this.questions.length) * circumference;
    const svg = this.resultsScreen.querySelector('.score-circle svg');
    if (!svg.querySelector('defs')) {
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      defs.innerHTML = `
        <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1B5E8C"/>
          <stop offset="100%" stop-color="#0D9B5C"/>
        </linearGradient>
      `;
      svg.prepend(defs);
    }
    setTimeout(() => { this.scoreFillCircle.style.strokeDashoffset = offset; }, 200);

    // Set level
    let emoji, title, message, level, levelClass, levelDescription;
    if (this.score <= 3) {
      emoji = '😅'; title = 'Keep Practising!';
      message = "You're just getting started! English can open incredible doors for your World Cup experience. SEDA College can help you get there!";
      level = 'Beginner'; levelClass = 'beginner';
      levelDescription = 'Your English journey is just beginning — perfect time to start!';
    } else if (this.score <= 5) {
      emoji = '👀'; title = 'Getting There!';
      message = "You've got some solid foundations! A bit more practice and you'll be navigating the World Cup like a pro.";
      level = 'Intermediate'; levelClass = 'intermediate';
      levelDescription = 'You know the basics — time to level up!';
    } else if (this.score <= 8) {
      emoji = '🔥'; title = 'Well Done!';
      message = "Impressive! You've got strong English skills and great football knowledge. You'd feel right at home at the World Cup!";
      level = 'Advanced'; levelClass = 'advanced';
      levelDescription = 'You are well-prepared for the World Cup experience!';
    } else {
      emoji = '🏆'; title = 'World Cup Champion!';
      message = "Perfect or near-perfect! Your English and football knowledge are world-class. You're ready to conquer the 2026 World Cup!";
      level = 'Master'; levelClass = 'master';
      levelDescription = 'You are a true World Cup linguist!';
    }

    this.resultEmoji.textContent = emoji;
    this.resultsTitle.textContent = title;
    this.resultsMessage.textContent = message;
    this.levelBadge.textContent = level;
    this.levelBadge.className = 'level-badge ' + levelClass;
    this.levelDesc.textContent = levelDescription;

    // Save score
    const email = this.userData?.email || this.getRegisteredEmail();
    if (email) {
      this.saveStageScore(email, this.currentStage, this.score);
      this.saveToLeaderboard(this.currentStage, this.score, this.stageTime);
      const { total, stageCount } = this.getTotalScore(email);
      document.getElementById('accumulatedScore').textContent = total;
      document.getElementById('accumulatedWeeks').textContent =
        `across ${stageCount} stage${stageCount > 1 ? 's' : ''}`;

      // Show next stage info
      const nextStage = this.getNextAvailableStage(email);
      const nextInfo = document.getElementById('nextQuizInfo');
      const nextBtn = document.getElementById('nextStageBtn');

      if (nextStage && nextStage <= 5) {
        nextInfo.textContent = `🔓 Stage ${nextStage} is now unlocked: ${STAGE_THEMES[nextStage]}`;
        if (nextBtn) {
          nextBtn.classList.remove('hidden');
          nextBtn.querySelector('span').textContent = `Play Stage ${nextStage} ➡️`;
        }
      } else {
        nextInfo.textContent = '🏆 Congratulations! You completed all 5 stages!';
        if (nextBtn) nextBtn.classList.add('hidden');
      }

      this.renderWeekSelector();
      this.renderLeaderboard();
    }

    if (this.score >= 7) this.launchConfetti();
  }

  goToNextStage() {
    const email = this.userData?.email || this.getRegisteredEmail();
    if (!email) return;
    const next = this.getNextAvailableStage(email);
    if (!next) return;

    this.currentStage = next;
    this.renderWeekSelector();
    this.startQuiz();
  }

  launchConfetti() {
    const container = document.getElementById('resultConfetti');
    const colors = ['#2B4F60', '#D4892A', '#F4C542', '#C0392B', '#FFFFFF'];

    for (let i = 0; i < 40; i++) {
      const confetti = document.createElement('div');
      confetti.style.cssText = `
        position: absolute;
        width: ${Math.random() * 8 + 4}px;
        height: ${Math.random() * 8 + 4}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}%;
        top: -10px;
        border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
        animation: confettiFall ${Math.random() * 2 + 1.5}s ease-in forwards;
        animation-delay: ${Math.random() * 0.5}s;
      `;
      container.appendChild(confetti);
    }
    setTimeout(() => { container.innerHTML = ''; }, 4000);
  }
  // ── Leaderboard ──
  getLeaderboard() {
    const raw = localStorage.getItem('sedaQuiz_leaderboard');
    return raw ? JSON.parse(raw) : [];
  }

  saveToLeaderboard(stageNum, score, time) {
    // ── Local (fallback) ──
    const leaderboard = this.getLeaderboard();
    const email = (this.userData?.email || this.getRegisteredEmail() || '').toLowerCase();
    const name = this.userData?.name || '';
    const city = this.userData?.city || '';
    const country = this.userData?.country || '';

    let entry = leaderboard.find(e => e.email === email);
    if (!entry) {
      entry = { name, city, country, email, stages: {} };
      leaderboard.push(entry);
    }
    if (name) entry.name = name;
    if (city) entry.city = city;
    if (country) entry.country = country;
    entry.stages[stageNum] = { score, time: Math.round(time * 10) / 10 };
    const stageValues = Object.values(entry.stages);
    entry.totalScore = stageValues.reduce((s, w) => s + w.score, 0);
    entry.totalTime = Math.round(stageValues.reduce((s, w) => s + w.time, 0) * 10) / 10;
    entry.stagesPlayed = stageValues.length;
    entry.lastPlayed = new Date().toISOString();
    localStorage.setItem('sedaQuiz_leaderboard', JSON.stringify(leaderboard));

    // ── Firestore (global ranking) ──
    this._saveToFirestore(entry);
  }

  async _saveToFirestore(entry) {
    const sb = window._supabase;
    if (!sb || !entry.email) return;
    try {
      const { error } = await sb.from('leaderboard').upsert({
        email: entry.email,
        name: entry.name || '',
        city: entry.city || '',
        country: entry.country || '',
        total_score: entry.totalScore || 0,
        total_time: entry.totalTime || 0,
        stages_played: entry.stagesPlayed || 0,
        last_played: entry.lastPlayed || new Date().toISOString()
      }, { onConflict: 'email' });
      if (error) throw error;
      console.log('✅ Supabase: ranking atualizado');
      this.renderLeaderboard();
    } catch (err) {
      console.warn('⚠️ Supabase sync error:', err);
    }
  }

  renderLeaderboard() {
    const container = document.getElementById('leaderboardTable');
    if (!container) return;

    const sb = window._supabase;
    if (sb) {
      this._renderLeaderboardFromFirestore(container);
    } else {
      let attempts = 0;
      const wait = setInterval(() => {
        attempts++;
        if (window._supabase) {
          clearInterval(wait);
          this._renderLeaderboardFromFirestore(container);
        } else if (attempts >= 6) {
          clearInterval(wait);
          this._renderLeaderboardLocal(container);
        }
      }, 500);
    }
  }

  async _renderLeaderboardFromFirestore(container) {
    const sb = window._supabase;
    try {
      const { data, error } = await sb
        .from('leaderboard')
        .select('name, city, country, email, total_score, total_time, stages_played')
        .order('total_score', { ascending: false })
        .order('total_time', { ascending: true })
        .limit(10);
      if (error) throw error;
      const entries = (data || []).map(e => ({
        name: e.name,
        city: e.city,
        country: e.country,
        email: e.email,
        totalScore: e.total_score,
        totalTime: e.total_time,
        stagesPlayed: e.stages_played
      }));
      this._buildLeaderboardTable(container, entries);
    } catch (err) {
      console.warn('⚠️ Supabase read error, usando local:', err);
      this._renderLeaderboardLocal(container);
    }
  }

  _renderLeaderboardLocal(container) {
    const entries = this.getLeaderboard()
      .sort((a, b) => b.totalScore - a.totalScore || a.totalTime - b.totalTime)
      .slice(0, 10);
    this._buildLeaderboardTable(container, entries);
  }

  _buildLeaderboardTable(container, leaderboard) {
    if (!leaderboard || leaderboard.length === 0) {
      container.innerHTML = `
        <div class="lb-empty">
          <span>⚽</span>
          <p>No players yet. Be the first to take the quiz and enter the rankings!</p>
        </div>`;
      return;
    }

    const medals = ['🥇', '🥈', '🥉'];
    const rows = leaderboard.map((entry, i) => {
      const pos = i + 1;
      const medal = pos <= 3 ? medals[i] : pos;
      const posClass = pos <= 3 ? `lb-top${pos}` : '';
      const avgTime = (entry.stagesPlayed || 0) > 0
        ? ((entry.totalTime || 0) / entry.stagesPlayed).toFixed(1) + 's'
        : '—';

      return `
        <tr class="${posClass}">
          <td class="lb-pos">${medal}</td>
          <td class="lb-name">${this.escapeHtml(entry.name || 'Player')}</td>
          <td class="lb-city">${this.escapeHtml(entry.city || '—')}</td>
          <td class="lb-city">${this.escapeHtml(entry.country || '—')}</td>
          <td class="lb-score">${entry.totalScore || 0}</td>
          <td class="lb-time">${avgTime}</td>
        </tr>`;
    }).join('');

    const t = window.i18n ? (k) => window.i18n.t(k) : (k) => k;
    container.innerHTML = `
      <table class="lb-table">
        <thead>
          <tr>
            <th>${t('lb_pos')}</th>
            <th>${t('lb_player')}</th>
            <th>${t('lb_city')}</th>
            <th>${t('lb_country')}</th>
            <th>${t('lb_score')}</th>
            <th>${t('lb_time')}</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>`;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  window.quiz = new WorldCupQuiz();
});
