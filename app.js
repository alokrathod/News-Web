const API_KEY = "90558a8b19e3430b96335708567d499b";
const URL = "https://newsapi.org/v2/everything?q=";

// callback function upon loading the window
window.addEventListener('load', () => fetchNews("India"));


// reload function
function reload() {
    window.location.reload();
}


// function to fetch news
async function fetchNews(query) {
    const res = await fetch(`${URL}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles) {
    const cardsContainer = document.getElementById('cards-container');
    const newsCardTemplate = document.getElementById('template-news-card');

    // remove the existing displayed cards to show new cards
    cardsContainer.innerHTML = "";

    articles.forEach(article => {
        // news without images are not shown
        if(!article.urlToImage) return;

        // clone the card which is in the template to show on the display and clone all the properties of the card
        const cardClone = newsCardTemplate.content.cloneNode(true);

        fillDataInCard(cardClone, article);

        // append the cloned card to the display from the template
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector('#news-img');
    const newsTitle = cardClone.querySelector('#news-title');
    const newsSource = cardClone.querySelector('#news-source');
    const newsDescription = cardClone.querySelector('#news-desc');
    
    // fill the content recieved from the api to display them accordingly
    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDescription.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-us", {timeZone: "Asia/Jakarta"});

    newsSource.innerHTML = `${article.source.name} | ${date}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}


// for applying a color on a selected nav link

let currentSelectedNav = null;

function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    currentSelectedNav?.classList.remove('active');
    currentSelectedNav = navItem;
    currentSelectedNav.classList.add('active');
}


// search box results

const searchButton = document.getElementById('search-button');
const searchText = document.getElementById('news-input');

searchButton.addEventListener("click", () => {
    const query = searchText.value;
    if(!query) return;
    fetchNews(query);

    // remove the selected color fromn the nav links
    currentSelectedNav.classList.remove('active');
    currentSelectedNav = null;
});
