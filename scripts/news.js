var language = "pt-BR";
var page = 0;
const page_num = 5;

const response = await fetch("../data/data.json");
const data = await response.json();

let languageButton = document.querySelector("#language-button p");

const names = {
    "pt-BR": {
        "language-button": "pt-BR",
        "language-flag": "BR.svg",
        "news-title": "Notícias",
    },
    "en-US": {
        "language-button": "en-US",
        "language-flag": "US.svg",
        "news-title": "News",
    }
}

function updateLanguage() {
    languageButton.innerText = names[language]["language-button"];
    document.querySelector("#language-button img").src = `../assets/${names[language]["language-flag"]}`;
    document.getElementById("news-button").innerText = names[language]["news-title"];
    document.querySelector("main h1").innerText = names[language]["news-title"];
}

function swapLanguage() {
    if(language === "pt-BR") {
        language = "en-US";
    } else {
        language = "pt-BR";
    }

    updateLanguage();
    loadNews();
}

function loadNews() {
    const newsContainer = document.getElementById("news");
    newsContainer.innerHTML = "";

    for (let i = page * page_num; i < Math.min((page + 1) * page_num, data.noticias[language.toLowerCase()].length); i += 1) {
        const newsItem = document.createElement("div");
        newsItem.className = "news-item";
        newsItem.innerHTML = `
            <h2>${data.noticias[language.toLowerCase()][i].titulo}</h2>
            <p>${data.noticias[language.toLowerCase()][i].descricao}</p>
        `;
        newsContainer.appendChild(newsItem);
    }
}

function nextPage() {
    if ((page + 1) * page_num < data.noticias[language.toLowerCase()].length) {
        page += 1;
        loadNews();
        document.getElementById("page-number").innerText = page + 1;
    }
}

function prevPage() {
    if (page > 0) {
        page -= 1;
        loadNews();
        document.getElementById("page-number").innerText = page + 1;
    }
}

document.getElementById("language-button").addEventListener("click", swapLanguage);
loadNews();

document.getElementById("plus-page").addEventListener("click", nextPage);
document.getElementById("minus-page").addEventListener("click", prevPage);