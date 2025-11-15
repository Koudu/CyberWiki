// Функция для создания блока
function SampleMainPage(item) {
    return {
        render: () => {
            const lessonsHTML = item.lessons.map(lesson => `
                <a class="block miniBlock" id="${lesson.id}" href="javascript:void(0)" onclick="openLesson('${lesson.a}')">
                    <h3 class="numMiniBlock">${lesson.id}</h3>
                    <p class="textMiniBlock">${lesson.title}</p>
                </a>
            `).join('');

            return `
                <div class="section">
                    <a class="block toggle-block" id="b-${item.id}" href="javascript:void(0)">
                        <div class="block-content">
                            <h3 class="numBlock">${item.id}</h3>
                            <p class="textBlock">${item.text}</p>
                        </div>
                        <img class="arrow" src="./projectPage/img/arrowDown.png"> </img>
                    </a>
                    <div class="lessons-container" id="lessons-${item.id}">
                        ${lessonsHTML}
                    </div>
                </div>
            `;
        },
    };
}

// Данные
const items = [
    {
      id: 1,
      text: "Введение",
      lessons: [
        { id: "1.1", a: "./MarkdownHtml/lesson1.1.html", title: "Что такое кибербезопасность" },
        { id: "1.2", title: "Кто такие хакеры: белые, чёрные, серые" },
        { id: "1.3", title: "Основы: CIA и Zero Trust" },
        { id: "1.4", title: "Как оценивать уязвимости и атаки" }
      ]
    },
    {
      id: 2,
      text: "Криптография",
      lessons: [
        { id: "2.1", title: "Симметричное шифрование" },
        { id: "2.2", title: "Асимметричное шифрование" },
        { id: "2.3", title: "Как хранить пароли и проверять целостность" },
        { id: "2.4", title: "Как работает HTTPS под капотом" },
        { id: "2.5", title: "Шифрование будущего — защита от квантовых компьютеров" },
        { id: "2.6", title: "Как управлять ключами в реальной жизни" }
      ]
    },
    {
      id: 3,
      text: "Сетевая безопасность",
      lessons: [
        { id: "3.1", title: "Как устроен интернет и протоколы" },
        { id: "3.2", title: "Фаервол" },
        { id: "3.3", title: "Как ловить подозрительный трафик в реальном времени" },
        { id: "3.4", title: "Как безопасно соединять офисы и удалёнщиков" },
        { id: "3.5", title: "Как разделить сеть на зоны доверия" },
        { id: "3.6", title: "Современные сети" }
      ]
    },
    {
      id: 4,
      text: "Безопасность операционных систем",
      lessons: [
        { id: "4.1", title: "Как закалить Linux от взлома" },
        { id: "4.2", title: "Как защитить Windows в корпоративной среде" },
        { id: "4.3", title: "Как обновлять системы без простоев" },
        { id: "4.4", title: "Безопасные контейнеры" },
        { id: "4.5", title: "VPN: как работает туннель" },
        { id: "4.6", title: "Фишинг" }
      ]
    },
    {
      id: 5,
      text: "Веб-безопасность",
      lessons: [
        { id: "5.1", title: "Защита от подделки действий пользователя" },
        { id: "5.2", title: "Как блокировать веб-атаки автоматически" },
        { id: "5.3", title: "Безопасность API и авторизации" },
        { id: "5.4", title: "Как оценивать уязвимости и атаки" }
      ]
    },
    {
      id: 6,
      text: "Active Directory и корпоративная безопасность",
      lessons: [
        { id: "6.1", title: "Как устроена корпоративная сеть на Windows" },
        { id: "6.2", title: "Как работает вход в домен" },
        { id: "6.3", title: "Как хакеры крадут пароли в AD" },
        { id: "6.4", title: "Облачный AD" },
        { id: "6.5", title: "Как защитить домен от атак" }
      ]
    },
    {
      id: 7,
      text: "Анализ вредоносного ПО",
      lessons: [
        { id: "7.1", title: "Как разбирать вирус без запуска" },
        { id: "7.2", title: "Как запускать малварь в песочнице" },
        { id: "7.3", title: "Как писать правила для поиска угроз" },
        { id: "7.4", title: "Как работают упаковщики вирусов" }
      ]
    },
    {
      id: 8,
      text: "SIEM и центр мониторинга",
      lessons: [
        { id: "8.1", title: "Как собрать и анализировать логи" },
        { id: "8.2", title: "Готовые SIEM" },
        { id: "8.3", title: "Как автоматизировать реагирование" },
        { id: "8.4", title: "Где брать данные об угрозах" },
        { id: "8.5", title: "Готовые сценарии на инциденты" }
      ]
    },
    {
      id: 9,
      text: "Реагирование на инциденты",
      lessons: [
        { id: "9.1", title: "Как хакеры атакуют" },
        { id: "9.2", title: "Как расследовать взлом" },
        { id: "9.3", title: "Что делать после инцидента" }
      ]
    },
    {
      id: 10,
      text: "DevSecOps",
      lessons: [
        { id: "10.1", title: "  Как проверять код на уязвимости" },
        { id: "10.2", title: "  Как тестировать сайт в бою" },
        { id: "10.3", title: "  Как следить за библиотеками" },
        { id: "10.4", title: "  Безопасность инфраструктуры как кода" }
      ]
    },
    {
      id: 11,
      text: "Физическая безопасность",
      lessons: [
        { id: "11.1", title: "  Как защитить серверную комнату" },
        { id: "11.2", title: "  Как уничтожать данные без восстановления" },
        { id: "11.3", title: "  Защита от прослушки и излучения" }
      ]
    }
]


// Рендеринг
function renderPage() {
    const mainPage = document.getElementById("main-page");
    if (!mainPage) return;

    const blocks = items.map(item => SampleMainPage(item));
    const html = blocks.map(block => block.render()).join("");
    mainPage.innerHTML = html;
}

// Запуск
document.addEventListener('DOMContentLoaded', renderPage);
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderPage);
} else {
    renderPage();
}

document.addEventListener('DOMContentLoaded', function() {
    renderPage();

    // Делегирование кликов
    document.addEventListener('click', function(e) {
        const toggle = e.target.closest('.toggle-block');
        if (!toggle) return;

        const sectionId = toggle.id.replace('b-', '');
        const container = document.getElementById(`lessons-${sectionId}`);
        const arrow = toggle.querySelector('.arrow');

        // Переключение
        container.classList.toggle('open');
        arrow.classList.toggle('open');

        // Анимация: если закрыто — max-height = 0, если открыто — подстраиваем
        if (container.classList.contains('open')) {
            container.style.maxHeight = container.scrollHeight + "px";
        } else {
            container.style.maxHeight = "0";
        }
    });
});

// Функция открытия урока
function openLesson(path) {
    // Добавляем .html, если его нет
    if (!path.endsWith('.html')) {
        path += '.html';
    }

    // Открываем в текущей вкладке
    window.location.href = path;
}