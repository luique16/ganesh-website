var language = "pt-BR";

const response = await fetch("../data/data.json");
const data = await response.json();

let languageButton = document.querySelector("#language-button p");

const names = {
    "pt-BR": {
        "language-button": "pt-BR",
        "language-flag": "BR.svg",
        "news-button": "Notícias",
        "about-title": "Sobre o <span style='color: #5EDA4A'>Ganesh</span>",
        "about-button": "Saiba mais",
    },
    "en-US": {
        "language-button": "en-US",
        "language-flag": "US.svg",
        "news-button": "News",
        "about-title": "About <span style='color: #5EDA4A'>Ganesh</span>",
        "about-button": "Learn more",
    }
}

function updateLanguage() {
    languageButton.innerText = names[language]["language-button"];
    document.querySelector("#language-button img").src = `assets/${names[language]["language-flag"]}`;
    document.getElementById("news-button").innerText = names[language]["news-button"];
    document.getElementById("presentation-text").innerText = data.informacoes[language.toLowerCase()].subtitulo;
    document.getElementById("about-title").innerHTML = names[language]["about-title"];
    document.getElementById("about-text").innerHTML = data.informacoes[language.toLowerCase()].sobre;
    document.querySelector("#about-button span").innerHTML = names[language]["about-button"];
}

function swapLanguage() {
    if(language === "pt-BR") {
        language = "en-US";
    } else {
        language = "pt-BR";
    }

    updateLanguage();
}

document.getElementById("language-button").addEventListener("click", swapLanguage);