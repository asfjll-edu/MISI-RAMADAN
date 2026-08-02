// ==========================================
// 🔊 SISTEM AUDIO SYNTHESIZER (WEB AUDIO API)
// ==========================================
let audioCtx = null;
let bgmInterval = null;
let isMuted = false;

// Wajib dipanggil melalui klik pengguna untuk unblock AudioContext pelayar
function initAudio() {
    if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
            audioCtx = new AudioContextClass();
        }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

// Bunyi Bip Klik
function playSoundClick() {
    initAudio();
    if (isMuted || !audioCtx) return;
    try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.05);
    } catch(e) {}
}

// Bunyi Betul
function playSoundCorrect() {
    initAudio();
    if (isMuted || !audioCtx) return;
    try {
        const now = audioCtx.currentTime;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.1);
        osc.frequency.setValueAtTime(783.99, now + 0.2);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(now + 0.35);
    } catch(e) {}
}

// Bunyi Salah
function playSoundWrong() {
    initAudio();
    if (isMuted || !audioCtx) return;
    try {
        const now = audioCtx.currentTime;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(160, now);
        osc.frequency.setValueAtTime(110, now + 0.12);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(now + 0.25);
    } catch(e) {}
}

// BGM Chiptune
function startBGM() {
    if (bgmInterval || isMuted) return;
    initAudio();
    const notes = [261.63, 329.63, 392.00, 329.63, 261.63, 329.63, 392.00, 440.00];
    let noteIdx = 0;

    bgmInterval = setInterval(() => {
        if (isMuted || !audioCtx || audioCtx.state !== 'running') return;
        try {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'square';
            osc.frequency.setValueAtTime(notes[noteIdx], audioCtx.currentTime);
            gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.18);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.2);

            noteIdx = (noteIdx + 1) % notes.length;
        } catch(e) {}
    }, 380);
}

function stopBGM() {
    if (bgmInterval) {
        clearInterval(bgmInterval);
        bgmInterval = null;
    }
}

function toggleAudio() {
    playSoundClick();
    isMuted = !isMuted;
    document.getElementById('sound-btn').innerText = isMuted ? '🔇' : '🔊';
    if (isMuted) {
        stopBGM();
    } else {
        startBGM();
    }
}

// ==========================================
// 📖 DATA SOALAN & ALUR CERITA
// ==========================================
const storyData = [
    {
        phase: "SAHUR",
        bgClass: "bg-sahur",
        speaker: "MAK",
        dialogue: "Adam, bangun sahur nak... Nanti lapar siang hari.",
        adamSprite: "🛌",
        npcSprite: "👵",
        options: [
            {
                text: "A. Sambung tidur...",
                feedback: "❌ SALAH! Tidak bersahur membuatkan Adam cepat letih. Amalan sunat bersahur ditinggalkan.",
                adamAction: "shake",
                nextSprite: "😴",
                hpChange: -20, scoreChange: 0, isCorrect: false
            },
            {
                text: "B. Bangun bersahur & berniat",
                feedback: "✅ BETUL! Bersahur ialah amalan sunat yang berkat dan memberi tenaga.",
                adamAction: "jump",
                nextSprite: "👦",
                hpChange: 10, scoreChange: 15, isCorrect: true
            }
        ]
    },
    {
        phase: "SAHUR",
        bgClass: "bg-sahur",
        speaker: "MAK",
        dialogue: "Bilakah waktu kita wajib berniat puasa Ramadan, Adam?",
        adamSprite: "👦",
        npcSprite: "👵",
        options: [
            { text: "A. Selepas berbuka", feedback: "❌ SALAH! Jawapan betul: Niat puasa Ramadan mesti dibuat pada waktu malam sebelum terbit fajar.", adamAction: "shake", hpChange: -10, scoreChange: 0, isCorrect: false },
            { text: "B. Waktu malam sebelum fajar", feedback: "✅ BETUL! Niat puasa wajib dilakukan pada waktu malam sebelum terbit fajar.", adamAction: "jump", hpChange: 0, scoreChange: 15, isCorrect: true },
            { text: "C. Selepas solat Zuhur", feedback: "❌ SALAH! Jawapan betul: Waktu Zuhur sudah terlewat untuk berniat puasa wajib.", adamAction: "shake", hpChange: -10, scoreChange: 0, isCorrect: false }
        ]
    },
    {
        phase: "SEKOLAH",
        bgClass: "bg-sekolah",
        speaker: "KAWAN",
        dialogue: "Adam! Jom makan ayam goreng kat kantin ni, sedapnya!",
        adamSprite: "😰",
        npcSprite: "👦",
        options: [
            { text: "A. Makan sikit sahaja...", feedback: "❌ SALAH! Makan dengan sengaja membatalkan puasa Ramadan!", adamAction: "shake", nextSprite: "🍗", hpChange: -25, scoreChange: 0, isCorrect: false },
            { text: "B. Pergi berehat di perpustakaan", feedback: "✅ BETUL! Adam menjaga puasa dan menahan nafsu makan.", adamAction: "jump", nextSprite: "👦", hpChange: -5, scoreChange: 15, isCorrect: true }
        ]
    },
    {
        phase: "SEKOLAH",
        bgClass: "bg-sekolah",
        speaker: "CIKGU",
        dialogue: "Adam, hidung kamu berdarah! Adakah puasa kamu batal?",
        adamSprite: "🩸",
        npcSprite: "👩‍🏫",
        options: [
            { text: "A. Ya, puasa telah batal!", feedback: "❌ SALAH! Jawapan betul: Darah yang keluar tanpa disengajakan TIDAK membatalkan puasa.", adamAction: "shake", hpChange: -10, scoreChange: 0, isCorrect: false },
            { text: "B. Tidak batal!", feedback: "✅ BETUL! Perkara tidak disengajakan seperti darah hidung tidak membatalkan puasa.", adamAction: "jump", nextSprite: "😊", hpChange: 0, scoreChange: 15, isCorrect: true }
        ]
    },
    {
        phase: "SEKOLAH",
        bgClass: "bg-sekolah",
        speaker: "KAWAN NAKAL",
        dialogue: "Haha! Adam lemah, muka pucat macam hantu!",
        adamSprite: "😔",
        npcSprite: "😜",
        options: [
            { text: "A. Membalas dengan marah", feedback: "❌ SALAH! Jawapan betul: Orang berpuasa wajib menahan marah dan menjaga akhlak.", adamAction: "shake", hpChange: -10, scoreChange: 0, isCorrect: false },
            { text: "B. Bersabar & kata 'Aku berpuasa'", feedback: "✅ BETUL! Bersabar dan menahan marah menambah pahala puasa.", adamAction: "jump", nextSprite: "😇", hpChange: 0, scoreChange: 15, isCorrect: true }
        ]
    },
    {
        phase: "PETANG",
        bgClass: "bg-petang",
        speaker: "USTAZ",
        dialogue: "Adam dahaga dan nak berkumur air. Apa hukum berkumur secara berlebihan?",
        adamSprite: "🚴",
        npcSprite: "👳",
        options: [
            { text: "A. Sunat dan dapat pahala", feedback: "❌ SALAH! Jawapan betul: Berkumur secara berlebihan ketika berpuasa hukumnya MAKRUH.", adamAction: "shake", hpChange: -10, scoreChange: 0, isCorrect: false },
            { text: "B. Makruh & boleh batal jika tertelan", feedback: "✅ BETUL! Berkumur berlebihan adalah makruh dan berisiko membatalkan puasa jika tertelan.", adamAction: "jump", nextSprite: "🚰", hpChange: 0, scoreChange: 15, isCorrect: true }
        ]
    },
    {
        phase: "PETANG",
        bgClass: "bg-petang",
        speaker: "IBU",
        dialogue: "Adam, boleh tolong ibu sediakan makanan di meja?",
        adamSprite: "👦",
        npcSprite: "🧕",
        options: [
            { text: "A. Main game di telefon", feedback: "❌ SALAH! Adam terlepas amalan mulia membantu ibu bapa di bulan puasa.", adamAction: "shake", nextSprite: "📱", hpChange: -5, scoreChange: 0, isCorrect: false },
            { text: "B. Tolong ibu di dapur", feedback: "✅ BETUL! Membantu ibu bapa mendapat pahala yang sangat besar.", adamAction: "jump", nextSprite: "🍲", hpChange: -5, scoreChange: 20, isCorrect: true }
        ]
    },
    {
        phase: "BERBUKA",
        bgClass: "bg-berbuka",
        speaker: "AYAH",
        dialogue: "Azan Maghrib dah berkumandang! Mari berbuka Adam.",
        adamSprite: "🍽️",
        npcSprite: "🧔",
        options: [
            { text: "A. Terus makan gelojoh", feedback: "❌ SALAH! Jawapan betul: Sunnah berbuka didahului dengan membaca doa & makan kurma/air.", adamAction: "shake", hpChange: 0, scoreChange: 5, isCorrect: false },
            { text: "B. Baca doa & makan kurma dulu", feedback: "✅ BETUL! Adam mengamalkan adab dan sunnah Nabi SAW ketika berbuka.", adamAction: "jump", nextSprite: "🌴", hpChange: 20, scoreChange: 25, isCorrect: true }
        ]
    },
    {
        phase: "BERBUKA",
        bgClass: "bg-berbuka",
        speaker: "AYAH",
        dialogue: "Jom Adam, kita ke masjid untuk Solat Tarawih!",
        adamSprite: "👦",
        npcSprite: "🕌",
        options: [
            { text: "A. Nak sambung tengok TV", feedback: "❌ SALAH! Rugi Adam tidak menghidupkan malam Ramadan dengan Solat Tarawih.", adamAction: "shake", nextSprite: "📺", hpChange: 0, scoreChange: 0, isCorrect: false },
            { text: "B. Ikut ayah ke masjid", feedback: "✅ BETUL! Solat Tarawih berjemaah ialah amalan sunat muakkad yang gempak!", adamAction: "jump", nextSprite: "🕌", hpChange: 0, scoreChange: 20, isCorrect: true }
        ]
    }
];

// ==========================================
// 🎮 LOGIK PERMAINAN (ANGKA DIKUNCI MATEMATIK)
// ==========================================
let hp = 100;
let score = 0;
let currentStep = 0;
let isProcessing = false; // Elak spam klik

function startGame() {
    initAudio();
    startBGM();
    playSoundClick();

    hp = 100;
    score = 0;
    currentStep = 0;
    isProcessing = false;

    document.getElementById('screen-start').classList.add('hidden');
    document.getElementById('status-bar').classList.remove('hidden');
    document.getElementById('screen-game').classList.remove('hidden');

    loadStage();
}

function updateHUD() {
    // Kunci nilai sebagai Nombor (Number)
    hp = Math.min(Math.max(Number(hp), 0), 100);
    score = Math.max(Number(score), 0);

    document.getElementById('hp-bar-fill').style.width = hp + '%';
    document.getElementById('score-display').innerText = String(score).padStart(4, '0');

    if (storyData[currentStep]) {
        document.getElementById('phase-badge').innerText = storyData[currentStep].phase;
    }
}

function loadStage() {
    isProcessing = false;
    const current = storyData[currentStep];
    updateHUD();

    // Latar belakang
    const stage = document.getElementById('game-stage');
    stage.className = `stage-world ${current.bgClass}`;

    // Teks
    document.getElementById('speaker-name').innerText = current.speaker;
    document.getElementById('story-text').innerText = current.dialogue;

    // Sprite
    const adamElem = document.getElementById('sprite-adam');
    const npcElem = document.getElementById('sprite-npc');

    adamElem.innerText = current.adamSprite;
    adamElem.className = "sprite adam-sprite bounce";

    if (current.npcSprite) {
        npcElem.innerText = current.npcSprite;
        npcElem.classList.remove('hidden');
    } else {
        npcElem.classList.add('hidden');
    }

    // Reset Box Maklum Balas
    document.getElementById('feedback-box').classList.add('hidden');
    const optionsGrid = document.getElementById('options-container');
    optionsGrid.innerHTML = '';

    // Bina Butang
    current.options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'command-btn';
        btn.innerText = opt.text;
        btn.onclick = () => handleChoice(opt);
        optionsGrid.appendChild(btn);
    });
}

function handleChoice(option) {
    // Sekat jika sedang proses jawapan (elak klik berkali-kali)
    if (isProcessing) return;
    isProcessing = true;

    // Kunci SEMUA butang serta-merta
    const buttons = document.querySelectorAll('.command-btn');
    buttons.forEach(btn => btn.disabled = true);

    const adamElem = document.getElementById('sprite-adam');
    const feedbackBox = document.getElementById('feedback-box');

    // Tambah / Tolak Nilai Matematik Secara Bersih
    const hpDiff = Number(option.hpChange) || 0;
    const scoreDiff = Number(option.scoreChange) || 0;

    hp = hp + hpDiff;
    score = score + scoreDiff;

    // Animasi & Audio
    if (option.isCorrect) {
        playSoundCorrect();
        adamElem.className = "sprite adam-sprite jump";
    } else {
        playSoundWrong();
        adamElem.className = "sprite adam-sprite shake";
    }

    if (option.nextSprite) {
        adamElem.innerText = option.nextSprite;
    }

    // Tunjuk Maklum Balas
    feedbackBox.innerText = option.feedback;
    feedbackBox.className = `dialog-feedback ${option.isCorrect ? 'correct' : 'wrong'}`;
    feedbackBox.classList.remove('hidden');

    // Terapung Score Animation
    if (scoreDiff !== 0) {
        showFloatingScore(scoreDiff);
    }

    updateHUD();

    // Bergerak ke soalan seterusnya selepas 2.2 saat
    setTimeout(() => {
        currentStep++;
        if (currentStep >= storyData.length) {
            endGame();
        } else {
            loadStage();
        }
    }, 2200);
}

function showFloatingScore(amount) {
    const container = document.getElementById('floating-container');
    if (!container) return;
    
    const floatEl = document.createElement('div');
    floatEl.className = 'float-score';
    floatEl.innerText = amount > 0 ? `+${amount}` : `${amount}`;
    floatEl.style.color = amount > 0 ? '#86efac' : '#fca5a5';

    container.appendChild(floatEl);
    setTimeout(() => floatEl.remove(), 1000);
}

function endGame() {
    document.getElementById('screen-game').classList.add('hidden');
    document.getElementById('status-bar').classList.add('hidden');
    document.getElementById('screen-result').classList.remove('hidden');

    document.getElementById('final-hp').innerText = hp + '%';
    document.getElementById('final-score').innerText = score;

    const badge = document.getElementById('evaluation-badge');
    if (score >= 90) {
        badge.innerHTML = "🌟 CEMERLANG<br><small>Sangat memahami amalan Ramadan!</small>";
        badge.style.color = "#86efac";
    } else if (score >= 50) {
        badge.innerHTML = "👍 BAIK<br><small>Memahami kebanyakan amalan puasa.</small>";
        badge.style.color = "#38bdf8";
    } else {
        badge.innerHTML = "📚 PERLU BIMBINGAN<br><small>Cuba baca nota ringkas dan main semula.</small>";
        badge.style.color = "#fca5a5";
    }
}

function resetGame() {
    playSoundClick();
    document.getElementById('screen-result').classList.add('hidden');
    document.getElementById('screen-start').classList.remove('hidden');
}

function showInfo(type) {
    playSoundClick();
    const modal = document.getElementById('info-modal');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');

    if (type === 'how-to-play') {
        title.innerText = "📖 CARA MAIN";
        body.innerHTML = "<p>1. Bantu Adam jalani ibadah puasa sehari penuh.</p><p>2. Pilih jawapan terbaik untuk menjaga HP & Score!</p><p>3. Jika salah, penerangan jawapan sebenar akan disiarkan.</p>";
    } else {
        title.innerText = "🎯 OBJEKTIF";
        body.innerHTML = "<p>Memahami maksud puasa, niat, perkara membatalkan puasa, dan amalan sunat Ramadan.</p>";
    }
    modal.classList.remove('hidden');
}

function closeInfo() {
    playSoundClick();
    document.getElementById('info-modal').classList.add('hidden');
}

function toggleNotes() {
    playSoundClick();
    document.getElementById('notes-modal').classList.toggle('hidden');
}
