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
        { id: "1.2", a: "./MarkdownHtml/lesson1.2.html", title: "Кто такие хакеры" },
        { id: "1.3", a: "./MarkdownHtml/lesson1.3.html", title: "Основы: CIA и Zero Trust" },
        { id: "1.4", a: "./MarkdownHtml/lesson1.4.html", title: "Как оценивать уязвимости и атаки" }
      ]
    },
    {
      id: 2,
      text: "Криптография",
      lessons: [
        { id: "2.1", a: "./MarkdownHtml/lesson2.1.html", title: "Симметричное шифрование" },
        { id: "2.2", a: "./MarkdownHtml/lesson2.2.html", title: "Асимметричное шифрование" },
        { id: "2.3", a: "./MarkdownHtml/lesson2.3.html", title: "Как хранить пароли и проверять целостность" },
        { id: "2.4", a: "./MarkdownHtml/lesson2.4.html", title: "Как работает HTTPS" },
        { id: "2.5", a: "./MarkdownHtml/lesson2.5.html", title: "Цифровые подписи" },
        { id: "2.6", a: "./MarkdownHtml/lesson2.6.html", title: "Защита от квантовых компьютеров" }
      ]
    },
    {
      id: 3,
      text: "Сетевая безопасность",
      lessons: [
        { id: "3.1", a: "./MarkdownHtml/lesson3.1.html", title: "Основы Защиты Периметра" },
        { id: "3.2", a: "./MarkdownHtml/lesson3.2.html", title: "Активное Обнаружение и Предотвращение Угроз" },
        { id: "3.3", a: "./MarkdownHtml/lesson3.3.html", title: "Безопасное Соединение" },
        { id: "3.4", a: "./MarkdownHtml/lesson3.4.html", title: "Сетевая Реализация Zero Trust" },
        { id: "3.5", a: "./MarkdownHtml/lesson3.5.html", title: "Безопасность Беспроводных Сетей" }
      ]
    },
    {
      id: 4,
      text: "Безопасность операционных систем",
      lessons: [
        { id: "4.1", a: "./MarkdownHtml/lesson4.1.html", title: "Базовое Закаливание ОС" },
        { id: "4.2", a: "./MarkdownHtml/lesson4.2.html", title: "Защита Windows и Linux" },
        { id: "4.3", a: "./MarkdownHtml/lesson4.3.html", title: "Управление Обновлениями" },
        { id: "4.4", a: "./MarkdownHtml/lesson4.4.html", title: "Безопасность Хоста и Контейнеризация" }
      ]
    },
    {
      id: 5,
      text: "Веб-безопасность",
      lessons: [
        { id: "5.1", a: "./MarkdownHtml/lesson5.1.html", title: "Уязвимости Веб-Приложений" },
        { id: "5.2", a: "./MarkdownHtml/lesson5.2.html", title: "Безопасность API и Авторизации" },
        { id: "5.3", a: "./MarkdownHtml/lesson5.3.html", title: "Защита Веб-Периметра" },
        { id: "5.4", a: "./MarkdownHtml/lesson5.4.html", title: "Тестирование Приложений" }
      ]
    },
    {
      id: 6,
      text: "Active Directory и корпоративная безопасность",
      lessons: [
        { id: "6.1", a: "./MarkdownHtml/lesson6.1.html", title: "Архитектура AD" },
        { id: "6.2", a: "./MarkdownHtml/lesson6.2.html", title: "Векторы Атак в AD" },
        { id: "6.3", a: "./MarkdownHtml/lesson6.3.html", title: "Защита Домена" },
        { id: "6.4", a: "./MarkdownHtml/lesson6.4.html", title: "Облачный и Гибридный AD" }
      ]
    },
    {
      id: 7,
      text: "Анализ вредоносного ПО",
      lessons: [
        { id: "7.1", a: "./MarkdownHtml/lesson7.1.html", title: "Статический Анализ" },
        { id: "7.2", a: "./MarkdownHtml/lesson7.2.html", title: "Обфускация и Упаковщики" },
        { id: "7.3", a: "./MarkdownHtml/lesson7.3.html", title: "Динамический Анализ" },
        { id: "7.4", a: "./MarkdownHtml/lesson7.4.html", title: "Сигнатуры и YARA-Правила" }
      ]
    },
    {
      id: 8,
      text: "SIEM и центр мониторинга",
      lessons: [
        { id: "8.1",  a: "./MarkdownHtml/lesson8.1.html", title: "Как собрать логи со всей сети" },
        { id: "8.2",  a: "./MarkdownHtml/lesson8.2.html", title: "Как SIEM находит угрозы" },
        { id: "8.3",  a: "./MarkdownHtml/lesson8.3.html", title: "Где брать данные об угрозах и как их искать" },
        { id: "8.4",  a: "./MarkdownHtml/lesson8.4.html", title: "Что делать, когда случился инцидент" },
        { id: "8.5",  a: "./MarkdownHtml/lesson8.5.html", title: "Как блокировать угрозы автоматически" }
      ]
    },
    {
      id: 9,
      text: "Реагирование на инциденты",
      lessons: [
        { id: "9.1", a: "./MarkdownHtml/lesson9.1.html", title: "Юридические Основы" },
        { id: "9.2", a: "./MarkdownHtml/lesson9.2.html", title: "Сбор энергозависимых данных" },
        { id: "9.3", a: "./MarkdownHtml/lesson9.3.html", title: "Цифровая Криминалистика" },
        { id: "9.4", a: "./MarkdownHtml/lesson9.2.html", title: "Анализ Первопричины" },
        { id: "9.5", a: "./MarkdownHtml/lesson9.2.html", title: "Полное Восстановление" }
      ]
    },
    {
      id: 10,
      text: "DevSecOps",
      lessons: [
        { id: "10.1", a: "./MarkdownHtml/lesson10.1.html", title: "  Как проверять код на ошибки до запуска" },
        { id: "10.2", a: "./MarkdownHtml/lesson10.2.html", title: "  Как следить за безопасностью чужих библиотек" },
        { id: "10.3", a: "./MarkdownHtml/lesson10.3.html", title: "  Как тестировать сайт/приложение во время сборки" },
        { id: "10.4", a: "./MarkdownHtml/lesson10.4.html", title: "  Безопасность настроек облака и Docker" },
        { id: "10.5", a: "./MarkdownHtml/lesson10.5.html", title: "  Как безопасно хранить пароли и ключи" },
      ]
    },
    {
      id: 11,
      text: "Физическая безопасность",
      lessons: [
        { id: "11.1", a: "./MarkdownHtml/lesson11.1.html", title: "  Физическая защита периметра и здания" },
        { id: "11.2", a: "./MarkdownHtml/lesson11.2.html", title: "  Защита критических зон: ЦОД и серверная комната" },
        { id: "11.3", a: "./MarkdownHtml/lesson11.3.html", title: "  Защита от прослушки, излучения и ЭМП" },
        { id: "11.4", a: "./MarkdownHtml/lesson11.4.html", title: "  Уничтожение данных и носителей" }
      ]
    }
]


function renderPage() {
    const mainPage = document.getElementById("main-page");
    if (!mainPage) return;

    const blocks = items.map(item => SampleMainPage(item));
    const html = blocks.map(block => block.render()).join("");
    mainPage.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderPage);
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderPage);
} else {
    renderPage();
}

document.addEventListener('DOMContentLoaded', function() {
    renderPage();

    document.addEventListener('click', function(e) {
        const toggle = e.target.closest('.toggle-block');
        if (!toggle) return;

        const sectionId = toggle.id.replace('b-', '');
        const container = document.getElementById(`lessons-${sectionId}`);
        const arrow = toggle.querySelector('.arrow');

        container.classList.toggle('open');
        arrow.classList.toggle('open');

        if (container.classList.contains('open')) {
            container.style.maxHeight = container.scrollHeight + "px";
        } else {
            container.style.maxHeight = "0";
        }
    });
});

function openLesson(path) {
    if (!path.endsWith('.html')) {
        path += '.html';
    }

    window.location.href = path;
}