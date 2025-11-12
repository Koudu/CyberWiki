import "./style.css";
import SampleMainPage from "./projectPage/InfoPage/SampleMainPage"

window.loadPage = function(page) {
    console.log("Загрузка: " + page);
    window.location.href = "file:///android_asset/" + page;
};

const mainPage = document.getElementById("main-page")
const item = [
    {
        id: 0,
        num: 0,
        text: "Введение",
    },
    {
        id: 1,
        num: 1,
        text: "База",
    },
    {
        id: 2,
        num: 2,
        text: "Как работает компьютер на уровне железа",
    },
    {
        id: 3,
        num: 3,
        text: "Сети",
    },
    {
        id: 4,
        num: 4,
        text: "Веб-хакинг",
    },
    {
        id: 5,
        num: 5,
        text: "Криптография",
    },
    {
        id: 6,
        num: 6,
        text: "Активный каталог",
    },
    {
        id: 7,
        num: 7,
        text: "Эксплойты и бинарные уязвимости",
    },
    {
        id: 8,
        num: 8,
        text: "Реверс-инжиниринг",
    },
    {
        id: 9,
        num: 9,
        text: "Малварь и пост-эксплуатация",
    },
    {
        id: 10,
        num: 10,
        text: "Облака, контейнеры, DevSecOps",
    },
    {
        id: 11,
        num: 11,
        text: "Мобильный хакинг",
    },
];

const AllBlock = item.map((i) => SampleMainPage(i));

function renderProducts(block) {
  if (mainPage) {
    mainPage.innerHTML = block.map((c) => c.render()).join("");
  }
}