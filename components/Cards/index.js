// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(articlesData => {
        cardCreator(articlesData.data.articles);
    })
    .catch(err => {
        console.log(err);
    })

const cardCreator = (articlesObj) => {
    //iterate over articlesObj to get each array
    for (let articleType in articlesObj) {
        let articleTypeArr = articlesObj[articleType];

        //iterate over each array to get each article
        articleTypeArr.map(article => {

            //generate a card for each article
            const cardDiv = document.createElement('div');

            const headlineDiv = document.createElement('div');
            headlineDiv.classList.add('headline');
            headlineDiv.textContent = article.headline;
            cardDiv.appendChild(headlineDiv);

            const authorDiv = document.createElement('div');
            authorDiv.classList.add('author');
            cardDiv.appendChild(authorDiv);

            const imgDiv = document.createElement('div');
            imgDiv.classList.add('img-container');
            authorDiv.appendChild(imgDiv);

            const imgSrc = document.createElement('img');
            imgSrc.src = article.authorPhoto;

            imgDiv.appendChild(imgSrc);

            const authorSpan = document.createElement('span');
            authorSpan.textContent = article.authorName;
            authorDiv.appendChild(authorSpan);

            cardDiv.appendChild(document.createElement('br'));

            return document.querySelector('.cards-container').appendChild(cardDiv);
        });
    }
};
