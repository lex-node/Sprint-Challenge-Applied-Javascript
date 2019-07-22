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

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(successData => {

        let articlesObj = successData.data.articles;

        for (let articleType in articlesObj) {
           let articleTypeArray = articlesObj[articleType];
           console.log(articleTypeArray);
            articleTypeArray.forEach(articleObj => cardMaker(articleObj));
        }

    })

    .catch(failData => {
        console.log(failData);
    })

const cardMaker = (cardDataObj) => {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    let cardHeadlineDiv = document.createElement("div");
    cardHeadlineDiv.classList.add("headline");
    cardHeadlineDiv.textContent = cardDataObj.headline;
    cardDiv.appendChild(cardHeadlineDiv);

    let cardAuthorDiv = document.createElement("div");
    cardAuthorDiv.classList.add("author");
    cardDiv.appendChild(cardAuthorDiv);

    let cardImgContainerDiv = document.createElement("div");
    cardImgContainerDiv.classList.add("img-container");
    cardAuthorDiv.appendChild(cardImgContainerDiv);

    let cardImg = document.createElement("img");
    cardImg.src = cardDataObj.authorPhoto;
    cardImgContainerDiv.appendChild(cardImg);

    let authorNameSpan = document.createElement("span");
    authorNameSpan.textContent = cardDataObj.authorName;
    cardAuthorDiv.appendChild(authorNameSpan);

    const cardsContainerDiv = document.querySelector(".cards-container");

    cardsContainerDiv.appendChild(cardDiv);

    return cardDiv;

}