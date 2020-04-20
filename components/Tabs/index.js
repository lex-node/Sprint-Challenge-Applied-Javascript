// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(topicData => {
        let topics = topicData.data.topics;
        tabCreator(topics);
    })
    .catch(err => {
        console.log(err);
    })


const tabCreator = (topicsArr) => {
    topicsArr.map(topic => {
        topicDiv = document.createElement('div');
        topicDiv.classList.add('tab');
        topicDiv.textContent = topic;
        return document.querySelector('.title').appendChild(topicDiv);
    })
}

