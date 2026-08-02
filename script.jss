// DATA SITUASI & SOALAN GAME
const gameData = [
    // FASA 1: SAHUR
    {
        phase: "Sahur",
        title: "🌅 Fasa 1: Sahur (4:30 Pagi)",
        text: "Jam loceng berbunyi. Mak mengejutkan Adam untuk bersahur.",
        options: [
            {
                text: "A. Sambung tidur",
                feedback: "Adam tidak bersahur. Dia mungkin cepat letih pada waktu siang.",
                hpChange: -20, scoreChange: 0, nextStep: 1, isCorrect: false
            },
            {
                text: "B. Bangun bersahur dan berniat puasa",
                feedback: "Bagus! Bersahur ialah amalan sunat yang digalakkan. Adam juga perlu berniat puasa Ramadan.",
                hpChange: 10, scoreChange: 15, nextStep: 1, isCorrect: true
            }
        ]
    },
    {
        phase: "Sahur",
        title: "🌅 Mini Kuiz Niat",
        text: "Bilakah niat puasa Ramadan perlu dilakukan?",
        options: [
            { text: "A. Selepas berbuka", feedback: "Salah. Niat puasa hendaklah dilakukan sebelum terbit fajar.", hpChange: 0, scoreChange: 0, retry: true },
            { text: "B. Pada waktu malam sebelum berpuasa", feedback: "Betul! Niat puasa Ramadan dilakukan pada waktu malam sebelum terbit fajar.", hpChange: 0, scoreChange: 10, nextStep: 2, isCorrect: true },
            { text: "C. Selepas solat Zuhur", feedback: "Salah. Waktu ini sudah terlewat untuk berniat puasa wajib.", hpChange: 0, scoreChange: 0, retry: true }
        ]
    },

    // FASA 2: SEKOLAH
    {
        phase: "Sekolah",
        title: "🏫 Fasa 2: Waktu Rehat (12:00 Tengah Hari)",
        text: "Kawan-kawan sedang makan di kantin. Adam berasa sangat lapar.",
        options: [
            { text: "A. Makan sedikit makanan", feedback: "Makan dengan sengaja pada siang Ramadan membatalkan puasa. Mari cuba pilihan lain.", hpChange: 0, scoreChange: -5, retry: true },
            { text: "B. Pergi ke perpustakaan dan berehat", feedback: "Bagus! Adam menjaga puasanya dan melakukan aktiviti yang bermanfaat.", hpChange: -10, scoreChange: 15, nextStep: 3, isCorrect: true }
        ]
    },
    {
        phase: "Sekolah",
        title: "🏫 Ujian Tidak Sengaja",
        text: "Tiba-tiba hidung Adam berdarah sedikit semasa di sekolah. Adakah puasa Adam batal?",
        options: [
            { text: "A. Ya", feedback: "Salah. Darah yang keluar tanpa disengajakan tidak membatalkan puasa.", hpChange: 0, scoreChange: 0, retry: true },
            { text: "B. Tidak", feedback: "Betul! Darah yang keluar tanpa disengajakan tidak membatalkan puasa.", hpChange: 0, scoreChange: 10, nextStep: 4, isCorrect: true }
        ]
    },
    {
        phase: "Sekolah",
        title: "🏫 Kawan Mengajak Bergaduh",
        text: "Seorang kawan mengejek Adam kerana kelihatan letih. Apa tindakan Adam?",
        options: [
            { text: "A. Membalas dengan marah", feedback: "Orang berpuasa digalakkan menjaga akhlak dan menahan marah. Cuba lagi.", hpChange: 0, scoreChange: -5, retry: true },
            { text: "B. Bersabar dan bercakap dengan baik", feedback: "Bagus! Menahan marah ialah akhlak yang baik ketika berpuasa.", hpChange: 0, scoreChange: 15, nextStep: 5, isCorrect: true }
        ]
    },

    // FASA 3: PETANG
    {
        phase: "Petang",
        title: "🏡 Fasa 3: Bermain Basikal (4:00 Petang)",
        text: "Adam bermain basikal dan berasa sangat dahaga. Dia ingin berkumur menggunakan air paip. Apakah hukum berkumur secara berlebihan sehingga tertelan air?",
        options: [
            { text: "A. Sunat dan mendapat pahala", feedback: "Salah. Berkumur secara berlebihan adalah makruh.", hpChange: 0, scoreChange: 0, retry: true },
            { text: "B. Makruh, dan jika tertelan air kerana berlebihan boleh membatalkan puasa", feedback: "Betul! Orang berpuasa perlu berhati-hati ketika berkumur agar tidak berlebihan.", hpChange: 0, scoreChange: 15, nextStep: 6, isCorrect: true },
            { text: "C. Tidak memberi kesan langsung", feedback: "Salah. Boleh membatalkan puasa jika tertelan air secara berlebihan.", hpChange: 0, scoreChange: 0, retry: true }
        ]
    },
    {
        phase: "Petang",
        title: "🏡 Membantu Ibu",
        text: "Ibu sedang menyediakan juadah berbuka puasa di dapur.",
        options: [
            { text: "A. Menonton telefon sahaja", feedback: "Adam terlepas peluang mendapat pahala membantu ibu bapa.", hpChange: 0, scoreChange: 0, nextStep: 7, isCorrect: false },
            { text: "B. Membantu ibu menyediakan makanan", feedback: "Membantu ibu bapa ialah amalan yang baik dan mulia.", hpChange: -5, scoreChange: 20, nextStep: 7, isCorrect: true }
        ]
    },

    // FASA 4: BERBUKA & TARAWIH
    {
        phase: "Berbuka",
        title: "🌇 Fasa 4: Azan Maghrib (7:20 Malam)",
        text: "Azan Maghrib berkumandang. Adam duduk di meja makan bersama keluarganya.",
        options: [
            { text: "A. Terus makan dengan gelojoh", feedback: "Adam boleh berbuka, tetapi dia terlupa adab berbuka puasa.", hpChange: 0, scoreChange: 5, nextStep: 8, isCorrect: false },
            { text: "B. Membaca doa berbuka dan mendahulukan kurma", feedback: "Cemerlang! Adam mengamalkan adab dan sunnah ketika berbuka puasa.", hpChange: 20, scoreChange: 25, nextStep: 8, isCorrect: true }
        ]
    },
    {
        phase: "Berbuka",
        title: "🌇 Selepas Berbuka",
        text: "Ayah mengajak Adam menunaikan solat Isyak dan Tarawih.",
        options: [
            { text: "A. Terus bermain permainan video", feedback: "Adam rugi tidak mengambil peluang solat Tarawih di bulan Ramadan.", hpChange: 0, scoreChange: 0, nextStep: 'END', isCorrect: false },
            { text: "B. Mengikut ayah ke masjid / solat bersama keluarga", feedback: "Bagus! Solat Tarawih ialah amalan sunat yang sangat digalakkan pada bulan Ramadan.", hpChange: 0, scoreChange: 20, nextStep: 'END', isCorrect: true }
        ]
    }
];

// VARIABEL STATUS
let hp = 100;
let score = 0;
let currentStep = 0;

// FUNGSI MULA GAME
function startGame() {
    hp = 100;
    score = 0;
    currentStep = 0;
    
    document.getElementById('screen-start').classList.add('hidden');
    document.getElementById('status-bar').classList.remove('hidden');
    document.getElementById('screen-game').classList.remove('hidden');
    
    updateStatus();
    loadQuestion();
}

// KEMAS KINI PAPARAN STATUS
function updateStatus() {
    document.getElementById('hp').innerText = Math.min(Math.max(hp, 0), 100);
    document.getElementById('score').innerText = score;
    document.getElementById('phase').innerText = gameData[currentStep].phase;
}

// PAPAR SOALAN / SITUASI
function loadQuestion() {
    const q = gameData[currentStep];
    document.getElementById('story-title').innerText = q.title;
    document.getElementById('story-text').innerText = q.text;
    
    const feedbackBox = document.getElementById('feedback-box');
    feedbackBox.classList.add('hidden');

    const optionsGrid = document.getElementById('options-container');
    optionsGrid.innerHTML = '';

    updateStatus();

    q.options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt.text;
        btn.onclick = () => handleChoice(opt);
        optionsGrid.appendChild(btn);
    });
}

// LOGIK PILIHAN DIBUAT
function handleChoice(option) {
    const feedbackBox = document.getElementById('feedback-box');
    feedbackBox.innerText = option.feedback;
    feedbackBox.className = `feedback ${option.isCorrect ? 'correct' : 'wrong'}`;
    feedbackBox.classList.remove('hidden');

    // Kemas kini markah & tenaga (elak penambahan berulang jika retry)
    if (!option.applied) {
        hp += option.hpChange;
        score += option.scoreChange;
        if(score < 0) score = 0;
    }

    updateStatus();

    // Jika jawapan salah & perlu retry, jangan kunci butang
    if (option.retry) {
        option.applied = true; // Tandakan supaya tak tolak/tambah markah lagi
        return;
    }

    // Jika jawapan teruskan perjalanan
    setTimeout(() => {
        if (option.nextStep === 'END') {
            endGame();
        } else {
            currentStep = option.nextStep;
            loadQuestion();
        }
    }, 1800);
}

// PENAMATAN GAME & PENILAIAN AUTOMATIK
function endGame() {
    document.getElementById('screen-game').classList.add('hidden');
    document.getElementById('status-bar').classList.add('hidden');
    document.getElementById('screen-result').classList.remove('hidden');

    document.getElementById('final-hp').innerText = hp;
    document.getElementById('final-score').innerText = score;

    const badge = document.getElementById('evaluation-badge');
    
    if (score >= 90) {
        badge.innerHTML = "🌟 CEMERLANG<br><small>Anda memahami amalan puasa Ramadan dengan sangat baik!</small>";
        badge.style.backgroundColor = "#c8e6c9";
    } else if (score >= 70) {
        badge.innerHTML = "👍 BAIK<br><small>Anda sudah memahami kebanyakan amalan puasa. Cuba lagi untuk markah penuh!</small>";
        badge.style.backgroundColor = "#bbdefb";
    } else if (score >= 50) {
        badge.innerHTML = "🙂 MEMUASKAN<br><small>Anda perlu mengulang beberapa topik tentang puasa Ramadan.</small>";
        badge.style.backgroundColor = "#fff9c4";
    } else {
        badge.innerHTML = "📚 PERLU BIMBINGAN<br><small>Mari belajar semula tentang niat, adab dan perkara yang membatalkan puasa.</small>";
        badge.style.backgroundColor = "#ffcdd2";
    }
}

// RESET & MODAL FUNCTIONS
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
        body.innerHTML = "<p>1. Bantu Adam menjalani satu hari di bulan Ramadan.</p><p>2. Buat pilihan yang betul untuk menambah Mata Ramadan.</p><p>3. Jika tersalah, anda akan diberi penerangan dan peluang mencuba semula.</p>";
    } else {
        title.innerText = "🎯 Objektif Pembelajaran";
        body.innerHTML = "<ul><li>Menyatakan maksud puasa.</li><li>Menjelaskan niat puasa Ramadan.</li><li>Mengenal pasti perkara yang membatalkan puasa.</li><li>Mengamalkan adab dan amalan sunat ketika berpuasa.</li></ul>";
    }
    modal.classList.remove('hidden');
}

function closeInfo() {
    document.getElementById('info-modal').classList.add('hidden');
}

function toggleNotes() {
    document.getElementById('notes-modal').classList.toggle('hidden');
}
