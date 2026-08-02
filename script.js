// DATA JRPG STORYLINE & SPRITE STATES
const storyData = [
    // FASA 1: SAHUR
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
                feedback: "Adam tidak bersahur. Adam rasa cepat letih pada waktu siang.",
                adamAction: "shake",
                nextSprite: "😴",
                hpChange: -20, scoreChange: 0, nextStep: 1, isCorrect: false
            },
            {
                text: "B. Bangun bersahur & berniat",
                feedback: "Bagus! Bersahur ialah amalan sunat yang digalakkan.",
                adamAction: "jump",
                nextSprite: "👦",
                hpChange: 10, scoreChange: 15, nextStep: 1, isCorrect: true
            }
        ]
    },
    {
        phase: "SAHUR",
        bgClass: "bg-sahur",
        speaker: "MAK",
        dialogue: "Bilakah waktu kita perlu berniat puasa Ramadan, Adam?",
        adamSprite: "👦",
        npcSprite: "👵",
        options: [
            { text: "A. Selepas berbuka", feedback: "Salah. Niat puasa hendaklah dibuat sebelum terbit fajar.", adamAction: "shake", retry: true },
            { text: "B. Waktu malam sebelum terbit fajar", feedback: "Betul! Niat puasa Ramadan dilakukan pada waktu malam.", adamAction: "jump", hpChange: 0, scoreChange: 10, nextStep: 2, isCorrect: true },
            { text: "C. Selepas solat Zuhur", feedback: "Salah. Waktu ini sudah terlewat untuk berniat.", adamAction: "shake", retry: true }
        ]
    },

    // FASA 2: SEKOLAH
    {
        phase: "SEKOLAH",
        bgClass: "bg-sekolah",
        speaker: "KAWAN",
        dialogue: "Adam! Jom makan ayam goreng kat kantin ni, sedapnya!",
        adamSprite: "😰",
        npcSprite: "👦",
        options: [
            { text: "A. Makan sikit sahaja...", feedback: "Makan dengan sengaja membatalkan puasa!", adamAction: "shake", scoreChange: -5, retry: true },
            { text: "B. Pergi berehat di perpustakaan", feedback: "Bagus! Adam menjaga puasanya dan membaca buku.", adamAction: "jump", nextSprite: "👦", hpChange: -10, scoreChange: 15, nextStep: 3, isCorrect: true }
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
            { text: "A. Ya, batal!", feedback: "Salah. Darah yang keluar tanpa disengaja tidak membatalkan puasa.", adamAction: "shake", retry: true },
            { text: "B. Tidak batal!", feedback: "Betul! Perkara tidak disengajakan tidak membatalkan puasa.", adamAction: "jump", nextSprite: "😊", hpChange: 0, scoreChange: 10, nextStep: 4, isCorrect: true }
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
            { text: "A. Membalas dengan marah", feedback: "Orang berpuasa hendaklah menahan marah.", adamAction: "shake", scoreChange: -5, retry: true },
            { text: "B. Bersabar & katakan 'Aku berpuasa'", feedback: "Cemerlang! Menahan marah mendapat pahala yang besar.", adamAction: "jump", nextSprite: "😇", hpChange: 0, scoreChange: 15, nextStep: 5, isCorrect: true }
        ]
    },

    // FASA 3: PETANG
    {
        phase: "PETANG",
        bgClass: "bg-petang",
        speaker: "USTAZ",
        dialogue: "Adam dahaga dan nak berkumur. Apa hukum berkumur berlebihan?",
        adamSprite: "🚴",
        npcSprite: "👳",
        options: [
            { text: "A. Sunat dan dapat pahala", feedback: "Salah. Berkumur secara berlebihan adalah makruh.", adamAction: "shake", retry: true },
            { text: "B. Makruh & boleh batal jika tertelan", feedback: "Tepat! Kita perlu berhati-hati bila berkumur.", adamAction: "jump", nextSprite: "🚰", hpChange: 0, scoreChange: 15, nextStep: 6, isCorrect: true }
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
            { text: "A. Main game di telefon", feedback: "Adam terlepas peluang membantu ibu.", adamAction: "shake", nextSprite: "📱", hpChange: 0, scoreChange: 0, nextStep: 7, isCorrect: false },
            { text: "B. Tolong ibu di dapur", feedback: "Terbaik! Membantu ibu bapa mendapat pahala banyak.", adamAction: "jump", nextSprite: "🍲", hpChange: -5, scoreChange: 20, nextStep: 7, isCorrect: true }
        ]
    },

    // FASA 4: BERBUKA
    {
        phase: "BERBUKA",
        bgClass: "bg-berbuka",
        speaker: "AYAH",
        dialogue: "Azan Maghrib dah berkumandang! Mari berbuka Adam.",
        adamSprite: "🍽️",
        npcSprite: "🧔",
        options: [
            { text: "A. Terus makan gelojoh", feedback: "Adam berbuka, tapi terlupa adab dan sunnah.", adamAction: "shake", hpChange: 0, scoreChange: 5, nextStep: 8, isCorrect: false },
            { text: "B. Baca doa & makan kurma dulu", feedback: "Syabas! Adam mengamalkan sunnah berbuka.", adamAction: "jump", nextSprite: "🌴", hpChange: 20, scoreChange: 25, nextStep: 8, isCorrect: true }
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
            { text: "A. Nak sambung tengok TV", feedback: "Rugi Adam tak dapat pahala Solat Tarawih.", adamAction: "shake", nextSprite: "📺", hpChange: 0, scoreChange: 0, nextStep: 'END', isCorrect: false },
            { text: "B. Ikut ayah ke masjid", feedback: "Alhamdulillah! Solat Tarawih menghidupkan malam Ramadan.", adamAction: "jump", nextSprite: "🕌", hpChange: 0, scoreChange: 20, nextStep: 'END', isCorrect: true }
        ]
    }
];

let hp = 100;
let score = 0;
let currentStep = 0;

function startGame() {
    hp = 100;
    score = 0;
    currentStep = 0;

    document.getElementById('screen-start').classList.add('hidden');
    document.getElementById('status-bar').classList.remove('hidden');
    document.getElementById('screen-game').classList.remove('hidden');

    loadStage();
}

function updateHUD() {
    hp = Math.min(Math.max(hp, 0), 100);
    document.getElementById('hp-bar-fill').style.width = hp + '%';
    
    // Format nombor 4 digit (cth: 0015)
    document.getElementById('score-display').innerText = String(score).padStart(4, '0');

    const current = storyData[currentStep];
    document.getElementById('phase-badge').innerText = current.phase;
}

function loadStage() {
    const current = storyData[currentStep];
    updateHUD();

    // Tukar Background World
    const stage = document.getElementById('game-stage');
    stage.className = `stage-world ${current.bgClass}`;

    // Update Dialog Teks
    document.getElementById('speaker-name').innerText = current.speaker;
    document.getElementById('story-text').innerText = current.dialogue;

    // Update Sprite Watak
    const adamElem = document.getElementById('char-adam') || document.getElementById('sprite-adam');
    const npcElem = document.getElementById('char-npc') || document.getElementById('sprite-npc');

    adamElem.innerText = current.adamSprite;
    adamElem.className = "sprite adam-sprite bounce";

    if (current.npcSprite) {
        npcElem.innerText = current.npcSprite;
        npcElem.classList.remove('hidden');
    } else {
        npcElem.classList.add('hidden');
    }

    // Hide Feedback & Load Command Buttons
    document.getElementById('feedback-box').classList.add('hidden');
    const optionsGrid = document.getElementById('options-container');
    optionsGrid.innerHTML = '';

    current.options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'command-btn';
        btn.innerText = opt.text;
        btn.onclick = () => handleChoice(opt);
        optionsGrid.appendChild(btn);
    });
}

function handleChoice(option) {
    const adamElem = document.getElementById('sprite-adam');
    const feedbackBox = document.getElementById('feedback-box');

    // Trigger Animasi Sprite
    if (option.adamAction === 'shake') {
        adamElem.className = "sprite adam-sprite shake";
    } else if (option.adamAction === 'jump') {
        adamElem.className = "sprite adam-sprite jump";
    }

    if (option.nextSprite) {
        adamElem.innerText = option.nextSprite;
    }

    // Feedback
    feedbackBox.innerText = option.feedback;
    feedbackBox.className = `dialog-feedback ${option.isCorrect ? 'correct' : 'wrong'}`;
    feedbackBox.classList.remove('hidden');

    if (!option.applied) {
        hp += option.hpChange;
        score += option.scoreChange;
        if (score < 0) score = 0;

        if (option.scoreChange !== 0) {
            showFloatingScore(option.scoreChange);
        }
    }

    updateHUD();

    if (option.retry) {
        option.applied = true;
        return;
    }

    setTimeout(() => {
        if (option.nextStep === 'END') {
            endGame();
        } else {
            currentStep = option.nextStep;
            loadStage();
        }
    }, 1600);
}

function showFloatingScore(amount) {
    const container = document.getElementById('floating-container');
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
    } else if (score >= 70) {
        badge.innerHTML = "👍 BAIK<br><small>Memahami kebanyakan amalan puasa.</small>";
    } else {
        badge.innerHTML = "📚 PERLU BIMBINGAN<br><small>Belajar semula topik puasa.</small>";
    }
}

function resetGame() {
    document.getElementById('screen-result').classList.add('hidden');
    document.getElementById('screen-start').classList.remove('hidden');
}

function showInfo(type) {
    const modal = document.getElementById('info-modal');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');

    if (type === 'how-to-play') {
        title.innerText = "📖 CARA MAIN";
        body.innerHTML = "<p>1. Bantu Adam jalani ibadah puasa sehari penuh.</p><p>2. Buat pilihan tepat untuk jaga HP & tambah Score!</p>";
    } else {
        title.innerText = "🎯 OBJEKTIF";
        body.innerHTML = "<p>Menyatakan maksud, niat, perkara membatalkan puasa dan amalan sunat Ramadan.</p>";
    }
    modal.classList.remove('hidden');
}

function closeInfo() {
    document.getElementById('info-modal').classList.add('hidden');
}

function toggleNotes() {
    document.getElementById('notes-modal').classList.toggle('hidden');
}
