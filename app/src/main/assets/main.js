window.loadPage = function(page) {
    console.log("Загрузка: " + page);
    window.location.href = "file:///android_asset/" + page;
};