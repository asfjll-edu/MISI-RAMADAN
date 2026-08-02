// DATA GAMEPLAY & WARNA FASA
const gameData = [
    // FASA 1: SAHUR
    {
        phase: "Sahur",
        phaseIcon: "🌅",
        themeClass: "theme-sahur",
        title: "Sahur (4:30 Pagi)",
        text: "Jam loceng berbunyi! Mak mengejutkan Adam untuk bersahur. Apa tindakan Adam?",
        options: [
            {
                text: "😴 Sambung tidur...",
                feedback: "Adam tidak bersahur. Dia mungkin cepat letih pada waktu siang.",
                hpChange: -20, scoreChange: 0, nextStep: 1, isCorrect: false
            },
            {
                text: "🍞 Bangun bersahur & berniat",
                feedback: "Bagus! Bersahur ialah amalan sunat yang digalakkan.",
                hpChange: 10, scoreChange: 15, nextStep: 1, isCorrect: true
            }
        ]
    },
    {
        phase: "Sahur",
        phaseIcon: "🌅",
        themeClass: "theme-sahur",
        title: "Mini Kuiz Niat",
        text: "Bilakah niat puasa Ramadan perlu dilakukan?",
        options: [
            { text: "A. Selepas berbuka", feedback: "Salah. Niat puasa hendaklah dilakukan sebelum terbit fajar.", hpChange: 0, scoreChange: 0, retry: true },
            { text: "B. Waktu malam sebelum terbit fajar", feedback: "Betul! Niat puasa Ramadan dilakukan pada waktu malam sebelum terbit fajar.", hpChange: 0, scoreChange: 10, nextStep: 2, isCorrect: true },
            { text: "C. Selepas solat Zuhur", feedback: "Salah. Waktu ini sudah terlewat untuk berniat.", hpChange: 0, scoreChange: 0, retry: true }
        ]
    },

    // FASA 2: SEKOLAH
    {
        phase: "Sekolah",
        phaseIcon: "🏫",
        themeClass: "theme-sekolah",
        title: "Waktu Rehat (12:00 T/Hari)",
        text: "Kawan-kawan sedang makan di kantin. Adam berasa sangat lapar.",
        options: [
            { text: "🍟 Makan sedikit makanan", feedback: "Makan dengan sengaja membatalkan puasa!", hpChange: 0, scoreChange: -5, retry: true },
            { text: "📚 Pergi perpustakaan & berehat", feedback: "Bagus! Adam menjaga puasanya dengan aktiviti bermanfaat.", hpChange: -10, scoreChange: 15, nextStep: 3, isCorrect: true }
        ]
    },
    {
        phase: "Sekolah",
        phaseIcon: "🏫",
        themeClass: "theme-sekolah",
        title: "Ujian Tidak Sengaja",
        text: "Tiba-tiba hidung Adam berdarah sedikit. Adakah puasa Adam batal?",
        options: [
            { text: "❌ Ya, batal", feedback: "Salah. Darah yang keluar tanpa disengajakan tidak membatalkan puasa.", hpChange: 0, scoreChange: 0, retry: true },
            { text: "✅ Tidak batal", feedback: "Betul! Perkara tidak disengajakan tidak membatalkan puasa.", hpChange: 0, scoreChange: 10, nextStep: 4, isCorrect: true }
        ]
    },
    {
        phase: "Sekolah",
        phaseIcon: "🏫",
        themeClass: "theme-sekolah",
        title: "Kawan Mengajak Bergaduh",
        text: "Kawan mengejek Adam kerana kelihatan letih. Apa tindakan Adam?",
        options: [
            { text: "😡 Membalas dengan marah", feedback: "Orang berpuasa digalakkan menahan marah.", hpChange: 0, scoreChange: -5, retry: true },
            { text: "😇 Bersabar & bercakap baik", feedback: "Bagus! Menahan marah ialah akhlak terpuji.", hpChange: 0, scoreChange: 15, nextStep: 5, isCorrect: true }
        ]
    },

    // FASA 3: PETANG
    {
        phase: "Petang",
        phaseIcon: "🏡",
        themeClass: "theme-petang",
        title: "Bermain Basikal (4:00 Petang)",
        text: "Adam berasa dahaga dan ingin berkumur. Apakah hukum berkumur secara berlebihan?",
        options: [
            { text: "A. Sunat & dapat pahala", feedback: "Salah. Berkumur berlebihan adalah makruh.", hpChange: 0, scoreChange: 0, retry: true },
            { text: "B. Makruh & boleh membatalkan jika tertelan", feedback: "Betul! Perlu berhati-hati agar tidak berlebihan.", hpChange: 0, scoreChange: 15, nextStep: 6, isCorrect: true }
        ]
    },
    {
        phase: "Petang",
        phaseIcon: "🏡",
        themeClass: "theme-petang",
        title: "Membantu Ibu",
        text: "Ibu sedang menyediakan juadah berbuka puasa di dapur.",
        options: [
            { text: "📱 Menonton telefon sahaja", feedback: "Adam terlepas amalan membantu ibu bapa.", hpChange: 0, scoreChange: 0, nextStep: 7, isCorrect: false },
            { text: "🍲 Membantu ibu di dapur", feedback: "Membantu ibu bapa amalan yang sangat mulia!", hpChange: -5, scoreChange: 20, nextStep: 7, isCorrect: true }
        ]
    },

    // FASA 4: BERBUKA
    {
        phase: "Berbuka",
        phaseIcon: "🌇",
        themeClass: "theme-berbuka",
        title: "Azan Maghrib (7:20 Malam)",
        text: "Azan Maghrib berkumandang! Adam duduk di meja makan.",
        options: [
            { text: "🍗 Terus makan gelojoh", feedback: "Adam berbuka tetapi terlupa adab berbuka puasa.", hpChange: 0, scoreChange: 5, nextStep: 8, isCorrect: false },
            { text: "🌴 Baca doa & makan kurma dulu", feedback: "Cemerlang! Adam mengamalkan adab dan sunnah berbuka.", hpChange: 20, scoreChange: 25, nextStep: 8, isCorrect: true }
        ]
    },
    {
        phase: "Berbuka",
        phaseIcon: "🌇",
        themeClass: "theme-berbuka",
        title: "Selepas Berbuka",
        text: "Ayah mengajak Adam menunaikan Solat Isyak dan Tarawih.",
        options: [
            { text: "🎮 Terus main video game", feedback: "Adam rugi tidak mengambil peluang solat Tarawih.", hpChange: 0, scoreChange: 0, nextStep: 'END', isCorrect: false },
            { text: "🕌 Ikut ayah ke masjid", feedback: "Bagus! Solat Tarawih amalan sunat yang sangat digalakkan.", hpChange: 0, scoreChange: 20, nextStep: 'END', isCorrect: true }
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

    loadQuestion();
}

function updateStatus() {
    // KELAPANGAN HP (0 - 100%)
    hp = Math.min(Math.max(hp, 0), 100);
    document.getElementById('hp-bar-fill').style.width = hp + '%';
    document.getElementById('score-display').innerText = score;

    const current = gameData[currentStep];
    document.getElementById('phase-badge').innerText = `${current.phaseIcon} ${current.phase}`;

    // TUKAR WARNA BACKGROUND MENGIKUT FASA
    document.getElementById('game-body').className = current.themeClass;
}

function loadQuestion() {
    const q = gameData[currentStep];

    updateStatus();

    document.getElementById('story-phase-icon').innerText = q.phaseIcon;
    document.getElementById('story-title').innerText = q.title;
    document.getElementById('story-text').innerText = q.text;

    document.getElementById('feedback-box').classList.add('hidden');

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    q.options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'option-card';
        btn.innerText = opt.text;
        btn.onclick = () => handleChoice(opt);
        optionsContainer.appendChild(btn);
    });
}

function handleChoice(option) {
    const feedbackBox = document.getElementById('feedback-box');
    feedbackBox.innerText = option.feedback;
    feedbackBox.className = `feedback-card ${option.isCorrect ? 'correct' : 'wrong'}`;
    feedbackBox.classList.remove('hidden');

    if (!option.applied) {
        hp += option.hpChange;
        score += option.scoreChange;
        if (score < 0) score = 0;

        // POP-UP MARKAH TERAPUNG
        if (option.scoreChange !== 0) {
            showFloatingScore(option.scoreChange);
        }
    }

    updateStatus();

    if (option.retry) {
        option.applied = true;
        return;
    }

    setTimeout(() => {
        if (option.nextStep === 'END') {
            endGame();
        } else {
            currentStep = option.nextStep;
            loadQuestion();
        }
    }, 1600);
}

// FUNGSI POPUP MARKAH TERAPUNG (+15 Mata!)
function showFloatingScore(amount) {
    const container = document.getElementById('floating-container');
    const floatEl = document.createElement('div');

    floatEl.className = 'float-text';
    floatEl.innerText = amount > 0 ? `+${amount}` : `${amount}`;
    floatEl.style.color = amount > 0 ? '#22c55e' : '#ef4444';

    container.appendChild(floatEl);

    setTimeout(() => {
        floatEl.remove();
    }, 1200);
}

function endGame() {
    document.getElementById('screen-game').classList.add('hidden');
    document.getElementById('status-bar').classList.add('hidden');
    document.getElementById('screen-result').classList.remove('hidden');

    document.getElementById('final-hp').innerText = hp + '%';
    document.getElementById('final-score').innerText = score;

    const badge = document.getElementById('evaluation-badge');
    if (score >= 90) {
        badge.innerHTML = "🌟 CEMERLANG<br><small>Anda memahami amalan puasa Ramadan dengan sangat baik!</small>";
        badge.style.backgroundColor = "#dcfce7";
        badge.style.color = "#166534";
    } else if (score >= 70) {
        badge.innerHTML = "👍 BAIK<br><small>Anda memahami kebanyakan amalan puasa.</small>";
        badge.style.backgroundColor = "#e0f2fe";
        badge.style.color = "#075985";
    } else if (score >= 50) {
        badge.innerHTML = "🙂 MEMUASKAN<br><small>Cuba ulang semula beberapa topik puasa.</small>";
        badge.style.backgroundColor = "#fef3c7";
        badge.style.color = "#92400e";
    } else {
        badge.innerHTML = "📚 PERLU BIMBINGAN<br><small>Mari belajar semula tentang niat & perkara batal puasa.</small>";
        badge.style.backgroundColor = "#fee2e2";
        badge.style.color = "#991b1b";
    }
}

function resetGame() {
    document.getElementById('screen-result').classList.add('hidden');
    document.getElementById('screen-start').classList.remove('hidden');
    document.getElementById('game-body').className = 'theme-sahur';
}

function showInfo(type) {
    const modal = document.getElementById('info-modal');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');

    if (type === 'how-to-play') {
        title.innerText = "📖 Cara Bermain";
        body.innerHTML = "<p>1. Bantu Adam jalani ibadah puasa sehari penuh.</p><p>2. Buat pilihan yang tepat untuk menjaga Tenaga & menambah Mata Ramadan.</p><p>3. Dapatkan keputusan Cemerlang di akhir hari!</p>";
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
