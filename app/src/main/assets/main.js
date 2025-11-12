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





// Функция для создания блока
function SampleMainPage(item) {
    return {
        render: () => {
            return `
                <div class="block" id="block-${item.id}">
                    <h3 class="numBlock">${item.num}</h3>
                    <p class="textBlock">${item.text}</p>
                </div>
            `;
        },
    };
}

// Данные
const items1 = [
    { id: 0.1, num: 0.1, text: "БАЗА" },
    { id: 2, num: 2, text: "КАК РАБОТАЕТ КОМПЬЮТЕР НА УРОВНЕ ЖЕЛЕЗА" },
    { id: 3, num: 3, text: "СЕТИ" },
    { id: 4, num: 4, text: "ВЕБ-ХАКИНГ" },
    { id: 5, num: 5, text: "КРИПТОГРАФИЯ" },
    { id: 6, num: 6, text: "АКТИВНЫЙ КАТАЛОГ" },
    { id: 7, num: 7, text: "ЭКСПЛОЙТЫ И БИНАРНЫЕ УЯЗВИМОСТИ" },
    { id: 8, num: 8, text: "РЕВЕРС-ИНЖИНИРИНГ" },
    { id: 9, num: 9, text: "МАЛВАРЬ И ПОСТ-ЭКСПЛУАТАЦИЯ" },
    { id: 10, num: 10, text: "ОБЛАКА, КОНТЕЙНЕР, DEVSECOPS" },
    { id: 11, num: 11, text: "МОБИЛЬНЫЙ ХАКИНГ" },
];

const items2 = [
    { id: 0.1, num: 0.1, text: "БАЗА" },
    { id: 2, num: 2, text: "КАК РАБОТАЕТ КОМПЬЮТЕР НА УРОВНЕ ЖЕЛЕЗА" },
    { id: 3, num: 3, text: "СЕТИ" },
    { id: 4, num: 4, text: "ВЕБ-ХАКИНГ" },
    { id: 5, num: 5, text: "КРИПТОГРАФИЯ" },
    { id: 6, num: 6, text: "АКТИВНЫЙ КАТАЛОГ" },
    { id: 7, num: 7, text: "ЭКСПЛОЙТЫ И БИНАРНЫЕ УЯЗВИМОСТИ" },
    { id: 8, num: 8, text: "РЕВЕРС-ИНЖИНИРИНГ" },
    { id: 9, num: 9, text: "МАЛВАРЬ И ПОСТ-ЭКСПЛУАТАЦИЯ" },
    { id: 10, num: 10, text: "ОБЛАКА, КОНТЕЙНЕР, DEVSECOPS" },
    { id: 11, num: 11, text: "МОБИЛЬНЫЙ ХАКИНГ" },
];

const items3 = [
    { id: 0.1, num: 0.1, text: "БАЗА" },
    { id: 2, num: 2, text: "КАК РАБОТАЕТ КОМПЬЮТЕР НА УРОВНЕ ЖЕЛЕЗА" },
    { id: 3, num: 3, text: "СЕТИ" },
    { id: 4, num: 4, text: "ВЕБ-ХАКИНГ" },
    { id: 5, num: 5, text: "КРИПТОГРАФИЯ" },
    { id: 6, num: 6, text: "АКТИВНЫЙ КАТАЛОГ" },
    { id: 7, num: 7, text: "ЭКСПЛОЙТЫ И БИНАРНЫЕ УЯЗВИМОСТИ" },
    { id: 8, num: 8, text: "РЕВЕРС-ИНЖИНИРИНГ" },
    { id: 9, num: 9, text: "МАЛВАРЬ И ПОСТ-ЭКСПЛУАТАЦИЯ" },
    { id: 10, num: 10, text: "ОБЛАКА, КОНТЕЙНЕР, DEVSECOPS" },
    { id: 11, num: 11, text: "МОБИЛЬНЫЙ ХАКИНГ" },
];

const items4 = [
    { id: 0.1, num: 0.1, text: "БАЗА" },
    { id: 2, num: 2, text: "КАК РАБОТАЕТ КОМПЬЮТЕР НА УРОВНЕ ЖЕЛЕЗА" },
    { id: 3, num: 3, text: "СЕТИ" },
    { id: 4, num: 4, text: "ВЕБ-ХАКИНГ" },
    { id: 5, num: 5, text: "КРИПТОГРАФИЯ" },
    { id: 6, num: 6, text: "АКТИВНЫЙ КАТАЛОГ" },
    { id: 7, num: 7, text: "ЭКСПЛОЙТЫ И БИНАРНЫЕ УЯЗВИМОСТИ" },
    { id: 8, num: 8, text: "РЕВЕРС-ИНЖИНИРИНГ" },
    { id: 9, num: 9, text: "МАЛВАРЬ И ПОСТ-ЭКСПЛУАТАЦИЯ" },
    { id: 10, num: 10, text: "ОБЛАКА, КОНТЕЙНЕР, DEVSECOPS" },
    { id: 11, num: 11, text: "МОБИЛЬНЫЙ ХАКИНГ" },
];

const items5 = [
    { id: 0.1, num: 0.1, text: "БАЗА" },
    { id: 2, num: 2, text: "КАК РАБОТАЕТ КОМПЬЮТЕР НА УРОВНЕ ЖЕЛЕЗА" },
    { id: 3, num: 3, text: "СЕТИ" },
    { id: 4, num: 4, text: "ВЕБ-ХАКИНГ" },
    { id: 5, num: 5, text: "КРИПТОГРАФИЯ" },
    { id: 6, num: 6, text: "АКТИВНЫЙ КАТАЛОГ" },
    { id: 7, num: 7, text: "ЭКСПЛОЙТЫ И БИНАРНЫЕ УЯЗВИМОСТИ" },
    { id: 8, num: 8, text: "РЕВЕРС-ИНЖИНИРИНГ" },
    { id: 9, num: 9, text: "МАЛВАРЬ И ПОСТ-ЭКСПЛУАТАЦИЯ" },
    { id: 10, num: 10, text: "ОБЛАКА, КОНТЕЙНЕР, DEVSECOPS" },
    { id: 11, num: 11, text: "МОБИЛЬНЫЙ ХАКИНГ" },
];

const items6 = [
    { id: 0.1, num: 0.1, text: "БАЗА" },
    { id: 2, num: 2, text: "КАК РАБОТАЕТ КОМПЬЮТЕР НА УРОВНЕ ЖЕЛЕЗА" },
    { id: 3, num: 3, text: "СЕТИ" },
    { id: 4, num: 4, text: "ВЕБ-ХАКИНГ" },
    { id: 5, num: 5, text: "КРИПТОГРАФИЯ" },
    { id: 6, num: 6, text: "АКТИВНЫЙ КАТАЛОГ" },
    { id: 7, num: 7, text: "ЭКСПЛОЙТЫ И БИНАРНЫЕ УЯЗВИМОСТИ" },
    { id: 8, num: 8, text: "РЕВЕРС-ИНЖИНИРИНГ" },
    { id: 9, num: 9, text: "МАЛВАРЬ И ПОСТ-ЭКСПЛУАТАЦИЯ" },
    { id: 10, num: 10, text: "ОБЛАКА, КОНТЕЙНЕР, DEVSECOPS" },
    { id: 11, num: 11, text: "МОБИЛЬНЫЙ ХАКИНГ" },
];

const items7 = [
    { id: 0.1, num: 0.1, text: "БАЗА" },
    { id: 2, num: 2, text: "КАК РАБОТАЕТ КОМПЬЮТЕР НА УРОВНЕ ЖЕЛЕЗА" },
    { id: 3, num: 3, text: "СЕТИ" },
    { id: 4, num: 4, text: "ВЕБ-ХАКИНГ" },
    { id: 5, num: 5, text: "КРИПТОГРАФИЯ" },
    { id: 6, num: 6, text: "АКТИВНЫЙ КАТАЛОГ" },
    { id: 7, num: 7, text: "ЭКСПЛОЙТЫ И БИНАРНЫЕ УЯЗВИМОСТИ" },
    { id: 8, num: 8, text: "РЕВЕРС-ИНЖИНИРИНГ" },
    { id: 9, num: 9, text: "МАЛВАРЬ И ПОСТ-ЭКСПЛУАТАЦИЯ" },
    { id: 10, num: 10, text: "ОБЛАКА, КОНТЕЙНЕР, DEVSECOPS" },
    { id: 11, num: 11, text: "МОБИЛЬНЫЙ ХАКИНГ" },
];

const items8 = [
    { id: 0.1, num: 0.1, text: "БАЗА" },
    { id: 2, num: 2, text: "КАК РАБОТАЕТ КОМПЬЮТЕР НА УРОВНЕ ЖЕЛЕЗА" },
    { id: 3, num: 3, text: "СЕТИ" },
    { id: 4, num: 4, text: "ВЕБ-ХАКИНГ" },
    { id: 5, num: 5, text: "КРИПТОГРАФИЯ" },
    { id: 6, num: 6, text: "АКТИВНЫЙ КАТАЛОГ" },
    { id: 7, num: 7, text: "ЭКСПЛОЙТЫ И БИНАРНЫЕ УЯЗВИМОСТИ" },
    { id: 8, num: 8, text: "РЕВЕРС-ИНЖИНИРИНГ" },
    { id: 9, num: 9, text: "МАЛВАРЬ И ПОСТ-ЭКСПЛУАТАЦИЯ" },
    { id: 10, num: 10, text: "ОБЛАКА, КОНТЕЙНЕР, DEVSECOPS" },
    { id: 11, num: 11, text: "МОБИЛЬНЫЙ ХАКИНГ" },
];

const items9 = [
    { id: 0.1, num: 0.1, text: "БАЗА" },
    { id: 2, num: 2, text: "КАК РАБОТАЕТ КОМПЬЮТЕР НА УРОВНЕ ЖЕЛЕЗА" },
    { id: 3, num: 3, text: "СЕТИ" },
    { id: 4, num: 4, text: "ВЕБ-ХАКИНГ" },
    { id: 5, num: 5, text: "КРИПТОГРАФИЯ" },
    { id: 6, num: 6, text: "АКТИВНЫЙ КАТАЛОГ" },
    { id: 7, num: 7, text: "ЭКСПЛОЙТЫ И БИНАРНЫЕ УЯЗВИМОСТИ" },
    { id: 8, num: 8, text: "РЕВЕРС-ИНЖИНИРИНГ" },
    { id: 9, num: 9, text: "МАЛВАРЬ И ПОСТ-ЭКСПЛУАТАЦИЯ" },
    { id: 10, num: 10, text: "ОБЛАКА, КОНТЕЙНЕР, DEVSECOPS" },
    { id: 11, num: 11, text: "МОБИЛЬНЫЙ ХАКИНГ" },
];

const items10 = [
    { id: 0.1, num: 0.1, text: "БАЗА" },
    { id: 2, num: 2, text: "КАК РАБОТАЕТ КОМПЬЮТЕР НА УРОВНЕ ЖЕЛЕЗА" },
    { id: 3, num: 3, text: "СЕТИ" },
    { id: 4, num: 4, text: "ВЕБ-ХАКИНГ" },
    { id: 5, num: 5, text: "КРИПТОГРАФИЯ" },
    { id: 6, num: 6, text: "АКТИВНЫЙ КАТАЛОГ" },
    { id: 7, num: 7, text: "ЭКСПЛОЙТЫ И БИНАРНЫЕ УЯЗВИМОСТИ" },
    { id: 8, num: 8, text: "РЕВЕРС-ИНЖИНИРИНГ" },
    { id: 9, num: 9, text: "МАЛВАРЬ И ПОСТ-ЭКСПЛУАТАЦИЯ" },
    { id: 10, num: 10, text: "ОБЛАКА, КОНТЕЙНЕР, DEVSECOPS" },
    { id: 11, num: 11, text: "МОБИЛЬНЫЙ ХАКИНГ" },
];

const items11 = [
    { id: 0.1, num: 0.1, text: "БАЗА" },
    { id: 2, num: 2, text: "КАК РАБОТАЕТ КОМПЬЮТЕР НА УРОВНЕ ЖЕЛЕЗА" },
    { id: 3, num: 3, text: "СЕТИ" },
    { id: 4, num: 4, text: "ВЕБ-ХАКИНГ" },
    { id: 5, num: 5, text: "КРИПТОГРАФИЯ" },
    { id: 6, num: 6, text: "АКТИВНЫЙ КАТАЛОГ" },
    { id: 7, num: 7, text: "ЭКСПЛОЙТЫ И БИНАРНЫЕ УЯЗВИМОСТИ" },
    { id: 8, num: 8, text: "РЕВЕРС-ИНЖИНИРИНГ" },
    { id: 9, num: 9, text: "МАЛВАРЬ И ПОСТ-ЭКСПЛУАТАЦИЯ" },
    { id: 10, num: 10, text: "ОБЛАКА, КОНТЕЙНЕР, DEVSECOPS" },
    { id: 11, num: 11, text: "МОБИЛЬНЫЙ ХАКИНГ" },
];

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