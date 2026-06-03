
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

if (burger && navMenu) {
    burger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        burger.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
        }
    });
});

function downloadFile(filename, content, type = 'text/plain') {
    const blob = new Blob([content], { type: type });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Содержимое документов для скачивания
const documents = {
    'raspisanie_urokov.pdf': 'Расписание уроков на 2024-2025 учебный год\n\nПонедельник:\n1. 8:30-9:10 - Русский язык\n2. 9:20-10:00 - Математика\n3. 10:10-10:50 - Литература\n4. 11:00-11:40 - Английский язык\n5. 11:50-12:30 - История\n\nВторник:\n1. 8:30-9:10 - Алгебра\n2. 9:20-10:00 - Физика\n3. 10:10-10:50 - Биология\n4. 11:00-11:40 - География\n5. 11:50-12:30 - Физкультура',
    
    'pravila_povedenia.pdf': 'Правила поведения для учащихся\n\n1. Общие положения\nУчащийся обязан уважать учителей, персонал школы и других учеников.\n\n2. Внешний вид\nУчащиеся должны носить школьную форму установленного образца.\n\n3. Поведение на уроках\nЗапрещается пользоваться телефоном во время урока без разрешения учителя.\n\n4. Поведение на переменах\nЗапрещается бегать по коридорам и кричать.\n\n5. Опоздания\nУчащиеся не должны опаздывать на уроки без уважительной причины.',
    
    'zayavlenie_priem.docx': 'Директору МБОУ г.Астрахани «СОШ №35»\nТарковой С.Ю.\nот ___________________________\n(ФИО родителя)\nпроживающего по адресу: ________\nтелефон: ______________________\n\nЗАЯВЛЕНИЕ\n\nПрошу принять моего ребенка ______________________________________,\n(ФИО ребенка)\nдата рождения _________________,\nв 1 класс МБОУ г.Астрахани «СОШ №35» на 2025-2026 учебный год.\n\nДата: ___________\nПодпись: ___________',
    
    'pamyatka_roditelyam.pdf': 'Памятка для родителей\n\n1. Контролируйте выполнение домашних заданий.\n2. Следите за соблюдением режима дня.\n3. Обеспечьте ребенка школьными принадлежностями.\n4. Регулярно проверяйте электронный дневник.\n5. При возникновении вопросов обращайтесь к классному руководителю.\n6. Следите за питанием ребенка в школе.\n7. Участвуйте в родительских собраниях.',
    
    'raspisanie_zvonkov.pdf': 'Расписание звонков\n\n1 урок: 08:30 - 09:10\n2 урок: 09:20 - 10:00\n3 урок: 10:10 - 10:50\n4 урок: 11:00 - 11:40\n5 урок: 11:50 - 12:30\n6 урок: 12:40 - 13:20\n7 урок: 13:30 - 14:10'
};

function downloadDoc(docKey) {
    const content = documents[docKey];
    if (content) {
        let filename = docKey;
        let type = 'text/plain';
        if (docKey.endsWith('.pdf')) type = 'application/pdf';
        if (docKey.endsWith('.docx')) type = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        downloadFile(filename, content, type);
        alert(`Скачивание файла "${filename}" началось!`);
    } else {
        alert('Файл временно недоступен');
    }
}

const requestModal = document.getElementById('requestModal');
const openModalBtns = document.querySelectorAll('.open-modal');
let closeModal = document.querySelector('.modal-close');

function openRequestModal() {
    if (requestModal) requestModal.classList.add('active');
}
function closeRequestModal() {
    if (requestModal) requestModal.classList.remove('active');
}

openModalBtns.forEach(btn => btn.addEventListener('click', openRequestModal));
if (closeModal) closeModal.addEventListener('click', closeRequestModal);
window.addEventListener('click', (e) => {
    if (e.target === requestModal) closeRequestModal();
});

const requestForm = document.getElementById('requestForm');
if (requestForm) {
    requestForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо! Ваша заявка принята.');
        requestForm.reset();
        closeRequestModal();
    });
}


const newsModal = document.getElementById('newsModal');
const newsModalTitle = document.getElementById('newsModalTitle');
const newsModalDate = document.getElementById('newsModalDate');
const newsModalImg = document.getElementById('newsModalImg');
const newsModalText = document.getElementById('newsModalText');
const closeNewsModal = document.getElementById('closeNewsModal');

const newsData = {
    1: {
        title: "Последний звонок 2025",
        date: "15 июня 2025",
        img: "../images/news1.jpg",
        fullText: "Торжественная линейка, посвященная празднику последнего звонка, прошла в нашей школе. 45 выпускников попрощались со школой. Директор школы Светлана Юрьевна Таркова поздравила ребят с окончанием учебного года."
    },
    2: {
        title: "Лучшая столовая - 2024",
        date: "10 июня 2025",
        img: "../images/news2.jpg",
        fullText: "Наша школа заняла III место в региональном конкурсе 'Лучшая школьная столовая - 2024'. Выражаем благодарность организатору питания."
    },
    3: {
        title: "Победа в олимпиаде",
        date: "5 июня 2025",
        img: "../images/news3.jpg",
        fullText: "Ученик 11 класса Иванов Иван стал призером Всероссийской олимпиады по информатике. Поздравляем!"
    }
};

function openNewsModal(newsId) {
    const news = newsData[newsId];
    if (news && newsModal) {
        newsModalTitle.textContent = news.title;
        newsModalDate.textContent = news.date;
        newsModalImg.src = news.img;
        newsModalText.textContent = news.fullText;
        newsModal.classList.add('active');
    }
}

if (closeNewsModal) {
    closeNewsModal.addEventListener('click', () => newsModal.classList.remove('active'));
}
window.addEventListener('click', (e) => {
    if (e.target === newsModal) newsModal.classList.remove('active');
});

const feedbackModal = document.getElementById('feedbackModal');
const openFeedbackBtn = document.getElementById('openFeedbackBtn');
const closeFeedbackModal = document.getElementById('closeFeedbackModal');

function openFeedbackModalFunc() {
    if (feedbackModal) feedbackModal.classList.add('active');
}
function closeFeedbackModalFunc() {
    if (feedbackModal) feedbackModal.classList.remove('active');
}

if (openFeedbackBtn) openFeedbackBtn.addEventListener('click', openFeedbackModalFunc);
if (closeFeedbackModal) closeFeedbackModal.addEventListener('click', closeFeedbackModalFunc);
window.addEventListener('click', (e) => {
    if (e.target === feedbackModal) closeFeedbackModalFunc();
});

const feedbackForm = document.getElementById('feedbackFormElement');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо за обращение!');
        feedbackForm.reset();
        closeFeedbackModalFunc();
    });
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.news-card, .action-banner, .sidebar-menu, .main-content').forEach(el => {
    if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    }
});


const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.sidebar-list a, .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
    }
});