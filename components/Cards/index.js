// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector(".cards-container");

axios
  .get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(articles => {
    // if successful
    for (const key in articles.data.articles) {
      articles.data.articles[key].forEach(topic => {
        const newCard = createCard(topic, key);
        cardsContainer.appendChild(newCard);
      });
    }
  })
  .catch(error => {
    console.log(error);
  });

function createCard(topic, key) {
  // create elements
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const byline = document.createElement("span");

  // set classes
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  // set content
  headline.textContent = topic.headline;
  img.src = topic.authorPhoto;
  byline.textContent = `By ${topic.authorName}`;
  card.setAttribute("data-tab", key);

  // set structure
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(byline);
  imgContainer.appendChild(img);

  return card;
}
