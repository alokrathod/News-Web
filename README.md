
# News Web 🌐

A responsive and dynamic **News Application** that fetches real-time news articles from the **NewsAPI**. Users can explore trending topics, search for specific news categories, and view detailed news cards with images, descriptions, and sources.

---

## 🚀 Features
- **Dynamic News Fetching**: Fetches and displays the latest news articles using the [NewsAPI](https://newsapi.org/).
- **Category Navigation**: Predefined categories like `IPL`, `Finance`, `Politics` and `Technology` for easy browsing.
- **Search Functionality**: Allows users to search for news by entering specific keywords.
- **Interactive Cards**: Visually appealing cards showing headlines, images, and descriptions.

---

## 🛠️ Technologies Used
- **HTML5**: Structure and layout of the application.
- **CSS3**: Styling and responsiveness.
- **JavaScript (ES6)**: Fetching news data and dynamic DOM manipulation.
- **NewsAPI**: Source of real-time news articles.

---

## 📦 Project Structure
```plaintext
News-Web/
├── assets/              # Static assets (e.g., logo)
├── index.html           # Main HTML file
├── style.css            # Stylesheet for the application
├── app.js               # JavaScript for functionality
└── README.md            # Project documentation
```

---



## 🔧 Setup and Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/alokrathod/News-Web.git
   cd News-Web
   ```
2. Open the `index.html` file in your browser to view the application.

---

## 🌐 How It Works
1. The `NewsAPI` is queried with a default keyword (e.g., "India") on page load.
2. Users can:
   - Browse predefined categories.
   - Search for specific topics using the search bar.
3. News articles are dynamically rendered as cards with:
   - Title
   - Description
   - Image
   - Source and published date.

---

## 🔑 API Key Setup
1. Obtain an API key from [NewsAPI](https://newsapi.org/).
2. Replace the placeholder `API_KEY` in the `app.js` file:
   ```javascript
   const API_KEY = "your_api_key_here";
   ```


---


## 🙌 Acknowledgments
- [NewsAPI](https://newsapi.org/) for the free API service.
- Open-source libraries for their invaluable tools.
