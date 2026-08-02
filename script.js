// DATA SITUASI, ANIMASI & DIALOG VISUAL NOVEL
const storyData = [
    // FASA 1: SAHUR
    {
        phase: "Sahur",
        bgClass: "bg-bilik",
        speaker: "Mak",
        dialogue: "Adam, bangun sahur nak... Nanti lapar siang hari.",
        adamState: "🛌", // Emoji Adam Tido
        npcState: "👵",  // Emoji Mak
        options: [
            {
                text: "A. Sambung tidur...",
                feedback: "Adam tidak bersahur. Adam rasa mengantuk dan cepat letih.",
                adamAction: "sleeping-again",
                nextState: "😴",
                hpChange: -20, scoreChange: 0, nextStep: 1, isCorrect: false
            },
            {
                text: "B. Bangun bersahur & berniat",
                feedback: "Bagus! Adam bangun bersahur. Bersahur itu amalan sunat yang berkat!",
                adamAction: "wake-up",
                nextState: "👦",
                hpChange: 10, scoreChange: 15, nextStep: 1, isCorrect: true
            }
        ]
    },
    {
        phase: "Sahur",
        bgClass: "bg-bilik",
        speaker: "Mak",
        dialogue: "Bilakah waktu kita perlu berniat puasa Ramadan, Adam?",
        adamState: "👦",
        npcState: "👵",
        options: [
            { text: "A. Selepas berbuka", feedback: "Salah. Niat puasa hendaklah dilakukan sebelum terbit fajar.", adamAction: "shake", retry: true },
            { text: "B. Pada waktu malam sebelum terbit fajar", feedback: "Betul! Niat dilakukan pada waktu malam sebelum fajar.", adamAction: "jump", hpChange: 0, scoreChange: 10, nextStep: 2, isCorrect: true },
            { text: "C. Selepas solat Zuhur", feedback: "Salah. Waktu ini sudah terlewat untuk berniat puasa.", adamAction: "shake", retry: true }
        ]
    },

    // FASA 2: SEKOLAH
    {
        phase: "Sekolah",
        bgClass: "bg-sekolah",
        speaker: "Kawan",
        dialogue: "Adam! Jom makan ayam goreng kat kantin ni, sedapnya!",
        adamState: "😰",
        npcState: "👦",
        options: [
            { text: "A. Makan sikit sahaja...", feedback: "Makan dengan sengaja membatalkan puasa! Cuba elakkan.", adamAction: "shake", scoreChange: -5, retry: true },
            { text: "B. Pergi berehat di perpustakaan", feedback: "Bagus! Adam menjaga puasanya dan membaca buku.", adamAction: "walk-right", nextState: "👦", hpChange: -10, scoreChange: 15, nextStep: 3, isCorrect: true }
        ]
    },
    {
        phase: "Sekolah",
        bgClass: "bg-sekolah",
        speaker: "Cikgu",
        dialogue: "Adam, hidung kamu berdarah sedikit! Adakah puasa kamu batal?",
        adamState: "🩸",
        npcState: "👩‍🏫",
        options: [
            { text: "A. Ya, batal!", feedback: "Salah. Darah yang keluar tanpa disengajakan tidak membatalkan puasa.", adamAction: "shake", retry: true },
            { text: "B. Tidak batal!", feedback: "Betul! Perkara tidak disengajakan tidak membatalkan puasa.", adamAction: "jump", nextState: "😊", hpChange: 0, scoreChange: 10, nextStep: 4, isCorrect: true }
        ]
    },
    {
        phase: "Sekolah",
        bgClass: "bg-sekolah",
        speaker: "Kawan Nakal",
        dialogue: "Haha! Adam lemah, muka pucat macam hantu!",
        adamState: "😔",
        npcState: "😜",
        options: [
            { text: "A. Membalas dengan marah", feedback: "Orang berpuasa hendaklah menahan marah dan menjaga akhlak.", adamAction: "shake", scoreChange: -5, retry: true },
            { text: "B. Bersabar & kata 'Aku sedang berpuasa'", feedback: "Cemerlang! Menahan marah mendapat pahala yang besar.", adamAction: "jump", nextState: "😇", hpChange: 0, scoreChange: 15, nextStep: 5, isCorrect: true }
        ]
    },

    // FASA 3: PETANG
    {
        phase: "Petang",
        bgClass: "bg-petang",
        speaker: "Ustaz",
        dialogue: "Adam nak berkumur air paip sebab dahaga. Apa hukum berkumur berlebihan?",
        adamState: "🚴",
        npcState: "👳",
        options: [
            { text: "A. Sunat dan dapat pahala", feedback: "Salah. Berkumur secara berlebihan adalah makruh.", adamAction: "shake", retry: true },
            { text: "B. Makruh & jika tertelan air boleh membatalkan puasa", feedback: "Tepat! Kita perlu berhati-hati bila berkumur semasa berpuasa.", adamAction: "jump", nextState: "🚰", hpChange: 0, scoreChange: 15, nextStep: 6, isCorrect: true }
        ]
    },
    {
        phase: "Petang",
        bgClass: "bg-petang",
        speaker: "Ibu",
        dialogue: "Adam, boleh tolong ibu sediakan makanan di meja?",
        adamState: "👦",
        npcState: "🧕",
        options: [
            { text: "A. Main game di telefon sahaja", feedback: "Adam terlepas peluang membantu ibu di bulan Ramadan.", adamAction: "shake", nextState: "📱", hpChange: 0, scoreChange: 0, nextStep: 7, isCorrect: false },
            { text: "B. Tolong ibu di dapur", feedback: "Terbaik! Membantu ibu bapa mendapat pahala yang sangat banyak.", adamAction: "walk-left", nextState: "🍲", hpChange: -5, scoreChange: 20, nextStep: 7, isCorrect: true }
        ]
    },

    // FASA 4: BERBUKA
    {
        phase: "Berbuka",
        bgClass: "bg-berbuka",
        speaker: "Ayah",
        dialogue: "Azan Maghrib dah berkumandang! Mari berbuka Adam.",
        adamState: "🍽️",
        npcState: "🧔",
        options: [
            { text: "A. Terus makan gelojoh", feedback: "Adam berbuka, tapi terlupa adab dan sunnah berbuka.", adamAction: "shake", hpChange: 0, scoreChange: 5, nextStep: 8, isCorrect: false },
            { text: "B. Baca doa & makan kurma dulu", feedback: "Syabas! Adam mengamalkan sunnah Nabi SAW bila berbuka.", adamAction: "jump", nextState: "🌴", hpChange: 20, scoreChange: 25, nextStep: 8, isCorrect: true }
        ]
    },
    {
        phase: "Berbuka",
        bgClass: "bg-berbuka",
        speaker: "Ayah",
        dialogue: "Jom Adam, kita ke masjid untuk Solat Tarawih!",
        adamState: "👦",
        npcState: "🕌",
        options: [
            { text: "A. Nak sambung tengok TV", feedback: "Rugi Adam tak dapat pahala Solat Tarawih berjemaah.", adamAction: "shake", nextState: "📺", hpChange: 0, scoreChange: 0, nextStep: 'END', isCorrect: false },
            { text: "B. Ikut ayah ke masjid", feedback: "Alhamdulillah! Solat Tarawih menghidupkan malam Ramadan.", adamAction: "jump", nextState: "🕌", hpChange: 0, scoreChange: 20, nextStep: 'END', isCorrect: true }
        ]
    }
];

// VARIABEL KAWALAN
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

function updateStatus() {
    document.getElementById('hp').innerText = Math.min(Math.max(hp, 0), 100);
    document.getElementById('score').innerText = score;
    document.getElementById('phase').innerText = storyData[currentStep].phase;
}

// PAPARKAN VISUAL STAGE & DIALOG
function loadStage() {
    const current = storyData[currentStep];

    // Update Status Bar
    updateStatus();

    // Update Stage Background
    const stage = document.getElementById('game-stage');
    stage.className = `stage ${current.bgClass}`;

    // Update Dialog Speech Bubble
    document.getElementById('speaker-name').innerText = current.speaker;
    document.getElementById('dialogue-text').innerText = current.dialogue;

    // Update Watak Emoji
    const adamElem = document.getElementById('char-adam');
    const npcElem = document.getElementById('char-npc');

    adamElem.innerText = current.adamState;
    adamElem.className = "character adam bounce"; // reset animasi

    if (current.npcState) {
        npcElem.innerText = current.npcState;
        npcElem.classList.remove('hidden');
    } else {
        npcElem.classList.add('hidden');
    }

    // Hide feedback & Reset Butang Pilihan
    document.getElementById('feedback-box').classList.add('hidden');
    const optionsGrid = document.getElementById('options-container');
    optionsGrid.innerHTML = '';

    current.options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt.text;
        btn.onclick = () => handleChoice(opt);
        optionsGrid.appendChild(btn);
    });
}

// BILA PILIHAN DITEKAN
function handleChoice(option) {
    const adamElem = document.getElementById('char-adam');
    const feedbackBox = document.getElementById('feedback-box');

    // Animasi Watak Berdasarkan Pilihan
    if (option.adamAction === 'shake') {
        adamElem.className = "character adam shake";
    } else if (option.adamAction === 'jump') {
        adamElem.className = "character adam jump";
    } else if (option.adamAction === 'walk-right') {
        adamElem.className = "character adam walk-right";
    } else if (option.adamAction === 'walk-left') {
        adamElem.className = "character adam walk-left";
    }

    // Tukar Emoji Watak jika ada
    if (option.nextState) {
        adamElem.innerText = option.nextState;
    }

    // Papar Teks Maklum Balas
    feedbackBox.innerText = option.feedback;
    feedbackBox.className = `feedback ${option.isCorrect ? 'correct' : 'wrong'}`;
    feedbackBox.classList.remove('hidden');

    // Kemas kini markah
    if (!option.applied) {
        hp += option.hpChange;
        score += option.scoreChange;
        if(score < 0) score = 0;
    }

    updateStatus();

    // Jika jawapan perlu dicuba lagi
    if (option.retry) {
        option.applied = true;
        return;
    }

    // Pindah ke babak seterusnya selepas 1.8 saat
    setTimeout(() => {
        if (option.nextStep === 'END') {
            endGame();
        } else {
            currentStep = option.nextStep;
            loadStage();
        }
    }, 1800);
}

function endGame() {
    document.getElementById('screen-game').classList.add('hidden');
    document.getElementById('status-bar').classList.add('hidden');
    document.getElementById('screen-result').classList.remove('hidden');

    document.getElementById('final-hp').innerText = hp;
    document.getElementById('final-score').innerText = score;

    const badge = document.getElementById('evaluation-badge');
    if (score >= 90) {
        badge.innerHTML = "🌟 CEMERLANG<br><small>Sangat memahami amalan Ramadan!</small>";
        badge.style.backgroundColor = "#c8e6c9";
    } else if (score >= 70) {
        badge.innerHTML = "👍 BAIK<br><small>Memahami kebanyakan amalan puasa.</small>";
        badge.style.backgroundColor = "#bbdefb";
    } else if (score >= 50) {
        badge.innerHTML = "🙂 MEMUASKAN<br><small>Ulang semula beberapa topik puasa.</small>";
        badge.style.backgroundColor = "#fff9c4";
    } else {
        badge.innerHTML = "📚 PERLU BIMBINGAN<br><small>Mari belajar semula topik puasa.</small>";
        badge.style.backgroundColor = "#ffcdd2";
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
        title.innerText = "📖 Cara Bermain";
        body.innerHTML = "<p>1. Bantu Adam jalani ibadah puasa sehari penuh.</p><p>2. Perhatikan dialog watak & pilih tindakan yang betul.</p><p>3. Kumpul Mata Ramadan seramai yang mungkin!</p>";
    } else {
        title.innerText = "🎯 Objektif Pembelajaran";
        body.innerHTML = "<ul><li>Menyatakan maksud & niat puasa.</li><li>Mengenal pasti perkara membatalkan puasa.</li><li>Mengamalkan adab & amalan sunat puasa.</li></ul>";
    }
    modal.classList.remove('hidden');
}

function closeInfo() {
    document.getElementById('info-modal').classList.add('hidden');
}

function toggleNotes() {
    document.getElementById('notes-modal').classList.toggle('hidden');
}
