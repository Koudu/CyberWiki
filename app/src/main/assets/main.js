//import "./style.css";
//import SampleMainPage from "./projectPage/InfoFiles/SampleMainPage"
//
//window.loadPage = function(page) {
//    console.log("Загрузка: " + page);
//    window.location.href = "file:///android_asset/" + page;
//};
//
//const mainPage = document.getElementById("main-page")
//const item = [
//    {
//        id: 0,
//        num: 0,
//        text: "Введение",
//    },
//    {
//        id: 1,
//        num: 1,
//        text: "База",
//    },
//    {
//        id: 2,
//        num: 2,
//        text: "Как работает компьютер на уровне железа",
//    },
//    {
//        id: 3,
//        num: 3,
//        text: "Сети",
//    },
//    {
//        id: 4,
//        num: 4,
//        text: "Веб-хакинг",
//    },
//    {
//        id: 5,
//        num: 5,
//        text: "Криптография",
//    },
//    {
//        id: 6,
//        num: 6,
//        text: "Активный каталог",
//    },
//    {
//        id: 7,
//        num: 7,
//        text: "Эксплойты и бинарные уязвимости",
//    },
//    {
//        id: 8,
//        num: 8,
//        text: "Реверс-инжиниринг",
//    },
//    {
//        id: 9,
//        num: 9,
//        text: "Малварь и пост-эксплуатация",
//    },
//    {
//        id: 10,
//        num: 10,
//        text: "Облака, контейнеры, DevSecOps",
//    },
//    {
//        id: 11,
//        num: 11,
//        text: "Мобильный хакинг",
//    },
//];
//
//const AllBlock = item.map((i) => SampleMainPage(i));
//
//function renderProducts(block) {
//  if (mainPage) {
//    mainPage.innerHTML = block.map((c) => c.render()).join("");
//  }
//}
//
//renderProducts(AllBlock);





//// Функция для создания блока
//function SampleMainPage(item) {
//    return {
//        render: () => {
//            return `
//                <div class="block" id="block-${item.id}">
//                    <h3 class="numBlock">${item.num}</h3>
//                    <p class="textBlock">${item.text}</p>
//                </div>
//            `;
//        },
//    };
//}
//
//// Данные
//const items1 = [
//    { id: 0.1, num: 0.1, text: "БАЗА" },
//    { id: 2, num: 2, text: "КАК РАБОТАЕТ КОМПЬЮТЕР НА УРОВНЕ ЖЕЛЕЗА" },
//    { id: 3, num: 3, text: "СЕТИ" },
//    { id: 4, num: 4, text: "ВЕБ-ХАКИНГ" },
//    { id: 5, num: 5, text: "КРИПТОГРАФИЯ" },
//    { id: 6, num: 6, text: "АКТИВНЫЙ КАТАЛОГ" },
//    { id: 7, num: 7, text: "ЭКСПЛОЙТЫ И БИНАРНЫЕ УЯЗВИМОСТИ" },
//    { id: 8, num: 8, text: "РЕВЕРС-ИНЖИНИРИНГ" },
//    { id: 9, num: 9, text: "МАЛВАРЬ И ПОСТ-ЭКСПЛУАТАЦИЯ" },
//    { id: 10, num: 10, text: "ОБЛАКА, КОНТЕЙНЕР, DEVSECOPS" },
//    { id: 11, num: 11, text: "МОБИЛЬНЫЙ ХАКИНГ" },
//];
//
//const items2 = [
//    { id: 0.1, num: 0.1, text: "БАЗА" },
//    { id: 2, num: 2, text: "КАК РАБОТАЕТ КОМПЬЮТЕР НА УРОВНЕ ЖЕЛЕЗА" },
//    { id: 3, num: 3, text: "СЕТИ" },
//    { id: 4, num: 4, text: "ВЕБ-ХАКИНГ" },
//    { id: 5, num: 5, text: "КРИПТОГРАФИЯ" },
//    { id: 6, num: 6, text: "АКТИВНЫЙ КАТАЛОГ" },
//    { id: 7, num: 7, text: "ЭКСПЛОЙТЫ И БИНАРНЫЕ УЯЗВИМОСТИ" },
//    { id: 8, num: 8, text: "РЕВЕРС-ИНЖИНИРИНГ" },
//    { id: 9, num: 9, text: "МАЛВАРЬ И ПОСТ-ЭКСПЛУАТАЦИЯ" },
//    { id: 10, num: 10, text: "ОБЛАКА, КОНТЕЙНЕР, DEVSECOPS" },
//    { id: 11, num: 11, text: "МОБИЛЬНЫЙ ХАКИНГ" },
//];
//
//const items3 = [
//    { id: 0.1, num: 0.1, text: "БАЗА" },
//    { id: 2, num: 2, text: "КАК РАБОТАЕТ КОМПЬЮТЕР НА УРОВНЕ ЖЕЛЕЗА" },
//    { id: 3, num: 3, text: "СЕТИ" },
//    { id: 4, num: 4, text: "ВЕБ-ХАКИНГ" },
//    { id: 5, num: 5, text: "КРИПТОГРАФИЯ" },
//    { id: 6, num: 6, text: "АКТИВНЫЙ КАТАЛОГ" },
//    { id: 7, num: 7, text: "ЭКСПЛОЙТЫ И БИНАРНЫЕ УЯЗВИМОСТИ" },
//    { id: 8, num: 8, text: "РЕВЕРС-ИНЖИНИРИНГ" },
//    { id: 9, num: 9, text: "МАЛВАРЬ И ПОСТ-ЭКСПЛУАТАЦИЯ" },
//    { id: 10, num: 10, text: "ОБЛАКА, КОНТЕЙНЕР, DEVSECOPS" },
//    { id: 11, num: 11, text: "МОБИЛЬНЫЙ ХАКИНГ" },
//];
//
//const items4 = [
//    { id: 0.1, num: 0.1, text: "БАЗА" },
//    { id: 2, num: 2, text: "КАК РАБОТАЕТ КОМПЬЮТЕР НА УРОВНЕ ЖЕЛЕЗА" },
//    { id: 3, num: 3, text: "СЕТИ" },
//    { id: 4, num: 4, text: "ВЕБ-ХАКИНГ" },
//    { id: 5, num: 5, text: "КРИПТОГРАФИЯ" },
//    { id: 6, num: 6, text: "АКТИВНЫЙ КАТАЛОГ" },
//    { id: 7, num: 7, text: "ЭКСПЛОЙТЫ И БИНАРНЫЕ УЯЗВИМОСТИ" },
//    { id: 8, num: 8, text: "РЕВЕРС-ИНЖИНИРИНГ" },
//    { id: 9, num: 9, text: "МАЛВАРЬ И ПОСТ-ЭКСПЛУАТАЦИЯ" },
//    { id: 10, num: 10, text: "ОБЛАКА, КОНТЕЙНЕР, DEVSECOPS" },
//    { id: 11, num: 11, text: "МОБИЛЬНЫЙ ХАКИНГ" },
//];
//
//const items5 = [
//    { id: 0.1, num: 0.1, text: "БАЗА" },
//    { id: 2, num: 2, text: "КАК РАБОТАЕТ КОМПЬЮТЕР НА УРОВНЕ ЖЕЛЕЗА" },
//    { id: 3, num: 3, text: "СЕТИ" },
//    { id: 4, num: 4, text: "ВЕБ-ХАКИНГ" },
//    { id: 5, num: 5, text: "КРИПТОГРАФИЯ" },
//    { id: 6, num: 6, text: "АКТИВНЫЙ КАТАЛОГ" },
//    { id: 7, num: 7, text: "ЭКСПЛОЙТЫ И БИНАРНЫЕ УЯЗВИМОСТИ" },
//    { id: 8, num: 8, text: "РЕВЕРС-ИНЖИНИРИНГ" },
//    { id: 9, num: 9, text: "МАЛВАРЬ И ПОСТ-ЭКСПЛУАТАЦИЯ" },
//    { id: 10, num: 10, text: "ОБЛАКА, КОНТЕЙНЕР, DEVSECOPS" },
//    { id: 11, num: 11, text: "МОБИЛЬНЫЙ ХАКИНГ" },
//];
//
//const items6 = [
//    { id: 0.1, num: 0.1, text: "БАЗА" },
//    { id: 2, num: 2, text: "КАК РАБОТАЕТ КОМПЬЮТЕР НА УРОВНЕ ЖЕЛЕЗА" },
//    { id: 3, num: 3, text: "СЕТИ" },
//    { id: 4, num: 4, text: "ВЕБ-ХАКИНГ" },
//    { id: 5, num: 5, text: "КРИПТОГРАФИЯ" },
//    { id: 6, num: 6, text: "АКТИВНЫЙ КАТАЛОГ" },
//    { id: 7, num: 7, text: "ЭКСПЛОЙТЫ И БИНАРНЫЕ УЯЗВИМОСТИ" },
//    { id: 8, num: 8, text: "РЕВЕРС-ИНЖИНИРИНГ" },
//    { id: 9, num: 9, text: "МАЛВАРЬ И ПОСТ-ЭКСПЛУАТАЦИЯ" },
//    { id: 10, num: 10, text: "ОБЛАКА, КОНТЕЙНЕР, DEVSECOPS" },
//    { id: 11, num: 11, text: "МОБИЛЬНЫЙ ХАКИНГ" },
//];
//
//const items7 = [
//    { id: 0.1, num: 0.1, text: "БАЗА" },
//    { id: 2, num: 2, text: "КАК РАБОТАЕТ КОМПЬЮТЕР НА УРОВНЕ ЖЕЛЕЗА" },
//    { id: 3, num: 3, text: "СЕТИ" },
//    { id: 4, num: 4, text: "ВЕБ-ХАКИНГ" },
//    { id: 5, num: 5, text: "КРИПТОГРАФИЯ" },
//    { id: 6, num: 6, text: "АКТИВНЫЙ КАТАЛОГ" },
//    { id: 7, num: 7, text: "ЭКСПЛОЙТЫ И БИНАРНЫЕ УЯЗВИМОСТИ" },
//    { id: 8, num: 8, text: "РЕВЕРС-ИНЖИНИРИНГ" },
//    { id: 9, num: 9, text: "МАЛВАРЬ И ПОСТ-ЭКСПЛУАТАЦИЯ" },
//    { id: 10, num: 10, text: "ОБЛАКА, КОНТЕЙНЕР, DEVSECOPS" },
//    { id: 11, num: 11, text: "МОБИЛЬНЫЙ ХАКИНГ" },
//];
//
//const items8 = [
//    { id: 0.1, num: 0.1, text: "БАЗА" },
//    { id: 2, num: 2, text: "КАК РАБОТАЕТ КОМПЬЮТЕР НА УРОВНЕ ЖЕЛЕЗА" },
//    { id: 3, num: 3, text: "СЕТИ" },
//    { id: 4, num: 4, text: "ВЕБ-ХАКИНГ" },
//    { id: 5, num: 5, text: "КРИПТОГРАФИЯ" },
//    { id: 6, num: 6, text: "АКТИВНЫЙ КАТАЛОГ" },
//    { id: 7, num: 7, text: "ЭКСПЛОЙТЫ И БИНАРНЫЕ УЯЗВИМОСТИ" },
//    { id: 8, num: 8, text: "РЕВЕРС-ИНЖИНИРИНГ" },
//    { id: 9, num: 9, text: "МАЛВАРЬ И ПОСТ-ЭКСПЛУАТАЦИЯ" },
//    { id: 10, num: 10, text: "ОБЛАКА, КОНТЕЙНЕР, DEVSECOPS" },
//    { id: 11, num: 11, text: "МОБИЛЬНЫЙ ХАКИНГ" },
//];
//
//const items9 = [
//    { id: 0.1, num: 0.1, text: "БАЗА" },
//    { id: 2, num: 2, text: "КАК РАБОТАЕТ КОМПЬЮТЕР НА УРОВНЕ ЖЕЛЕЗА" },
//    { id: 3, num: 3, text: "СЕТИ" },
//    { id: 4, num: 4, text: "ВЕБ-ХАКИНГ" },
//    { id: 5, num: 5, text: "КРИПТОГРАФИЯ" },
//    { id: 6, num: 6, text: "АКТИВНЫЙ КАТАЛОГ" },
//    { id: 7, num: 7, text: "ЭКСПЛОЙТЫ И БИНАРНЫЕ УЯЗВИМОСТИ" },
//    { id: 8, num: 8, text: "РЕВЕРС-ИНЖИНИРИНГ" },
//    { id: 9, num: 9, text: "МАЛВАРЬ И ПОСТ-ЭКСПЛУАТАЦИЯ" },
//    { id: 10, num: 10, text: "ОБЛАКА, КОНТЕЙНЕР, DEVSECOPS" },
//    { id: 11, num: 11, text: "МОБИЛЬНЫЙ ХАКИНГ" },
//];
//
//const items10 = [
//    { id: 0.1, num: 0.1, text: "БАЗА" },
//    { id: 2, num: 2, text: "КАК РАБОТАЕТ КОМПЬЮТЕР НА УРОВНЕ ЖЕЛЕЗА" },
//    { id: 3, num: 3, text: "СЕТИ" },
//    { id: 4, num: 4, text: "ВЕБ-ХАКИНГ" },
//    { id: 5, num: 5, text: "КРИПТОГРАФИЯ" },
//    { id: 6, num: 6, text: "АКТИВНЫЙ КАТАЛОГ" },
//    { id: 7, num: 7, text: "ЭКСПЛОЙТЫ И БИНАРНЫЕ УЯЗВИМОСТИ" },
//    { id: 8, num: 8, text: "РЕВЕРС-ИНЖИНИРИНГ" },
//    { id: 9, num: 9, text: "МАЛВАРЬ И ПОСТ-ЭКСПЛУАТАЦИЯ" },
//    { id: 10, num: 10, text: "ОБЛАКА, КОНТЕЙНЕР, DEVSECOPS" },
//    { id: 11, num: 11, text: "МОБИЛЬНЫЙ ХАКИНГ" },
//];
//
//const items11 = [
//    { id: 0.1, num: 0.1, text: "БАЗА" },
//    { id: 2, num: 2, text: "КАК РАБОТАЕТ КОМПЬЮТЕР НА УРОВНЕ ЖЕЛЕЗА" },
//    { id: 3, num: 3, text: "СЕТИ" },
//    { id: 4, num: 4, text: "ВЕБ-ХАКИНГ" },
//    { id: 5, num: 5, text: "КРИПТОГРАФИЯ" },
//    { id: 6, num: 6, text: "АКТИВНЫЙ КАТАЛОГ" },
//    { id: 7, num: 7, text: "ЭКСПЛОЙТЫ И БИНАРНЫЕ УЯЗВИМОСТИ" },
//    { id: 8, num: 8, text: "РЕВЕРС-ИНЖИНИРИНГ" },
//    { id: 9, num: 9, text: "МАЛВАРЬ И ПОСТ-ЭКСПЛУАТАЦИЯ" },
//    { id: 10, num: 10, text: "ОБЛАКА, КОНТЕЙНЕР, DEVSECOPS" },
//    { id: 11, num: 11, text: "МОБИЛЬНЫЙ ХАКИНГ" },
//];
//
//// Рендеринг
//function renderPage() {
//    const mainPage = document.getElementById("main-page");
//
//    if (!mainPage) {
//        return;
//    }
//
//    const blocks = items.map(item => SampleMainPage(item));
//    const html = blocks.map(block => block.render()).join("");
//
//    mainPage.innerHTML = html;
//}
//
//// Вызываем при загрузке
//document.addEventListener('DOMContentLoaded', renderPage);
//
//// На случай если DOMContentLoaded уже сработал
//if (document.readyState === 'loading') {
//    document.addEventListener('DOMContentLoaded', renderPage);
//} else {
//    renderPage();
//}








// Функция для создания блока
function SampleMainPage(item) {
    return {
        render: () => {
            return `
                <a class="block" id="${item.id}">
                    <h3 class="numBlock">${item.id}</h3>
                    <p class="textBlock">${item.text}</p>
                </a>
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
        { id: "1.1", title: "Что такое кибербезопасность" },
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
        { id: "10.1", title: "Как проверять код на уязвимости" },
        { id: "10.2", title: "Как тестировать сайт в бою" },
        { id: "10.3", title: "Как следить за библиотеками" },
        { id: "10.4", title: "Безопасность инфраструктуры как кода" }
      ]
    },
    {
      id: 11,
      text: "Физическая безопасность",
      lessons: [
        { id: "11.1", title: "Как защитить серверную комнату" },
        { id: "11.2", title: "Как уничтожать данные без восстановления" },
        { id: "11.3", title: "Защита от прослушки и излучения" }
      ]
    }
]


// Рендеринг
function renderPage() {
    const mainPage = document.getElementById("main-page");

    if (!mainPage) {
        return;
    }

    const blocks = items.map(item => SampleMainPage(item));
    const html = blocks.map(block => block.render()).join("");

    mainPage.innerHTML = html;
}

// Вызываем при загрузке
document.addEventListener('DOMContentLoaded', renderPage);

// На случай если DOMContentLoaded уже сработал
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderPage);
} else {
    renderPage();
}








//async function loadBlocks() {
//  try {
//    const res = await fetch('data/blocks.json');
//    const data = await res.json();
//    renderBlocks(data.blocks);
//  } catch (e) {
//    document.getElementById('app').innerHTML = '<h2>Ошибка загрузки</h2>';
//  }
//}
//
//function renderBlocks(blocks) {
//  const app = document.getElementById('app');
//  app.innerHTML = `
//    <header>
//      <h1>CyberWiki</h1>
//      <p>Полный доступ ко всем урокам</p>
//    </header>
//    ${blockss.map(blocks => `
//      <div class="blocks-card">
//        <div class="blocks-header" onclick="toggleBlocks(${blocks.id})">
//          <div class="blocks-number">${blocks.id}</div>
//          <div class="blocks-title">
//            <h2>${blocks.title}</h2>
//          </div>
//          <div class="arrow">Down Arrow</div>
//        </div>
//
//        <div class="lessons-list" id="lessons-${blocks.id}" style="display: ${blocks.expanded ? 'block' : 'none'}">
//          ${blocks.lessons.map(lesson => `
//            <div class="lesson-item" onclick="goToLesson('${lesson.id}')">
//              <span>${lesson.title}</span>
//            </div>
//          `).join('')}
//        </div>
//      </div>
//    `).join('')}
//    <nav class="bottom-nav">
//      <button class="active">Уроки</button>
//      <button>Практика</button>
//      <button>Студия</button>
//      <button>Настройки</button>
//    </nav>
//  `;
//}
//
//function toggleBlocks(id) {
//  const list = document.getElementById(`lessons-${id}`);
//  const arrow = list.parentElement.querySelector('.arrow');
//  const display = list.style.display === 'none' || !list.style.display ? 'block' : 'none';
//  list.style.display = display;
//  arrow.textContent = display === 'block' ? 'Up Arrow' : 'Down Arrow';
//}
//
//function goToLesson(id) {
//  if (window.Android) {
//    window.Android.openLesson(id);
//  } else {
//    alert(`Открыт урок: ${id}`);
//  }
//}