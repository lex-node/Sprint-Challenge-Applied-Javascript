// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(successData => {
        // console.log(successData.data.topics[0]);
        let topicArray = successData.data.topics;
        topicArray.forEach(topic => tabMaker(topic));
    })

    .catch(failData => {
        console.log(failData);
    })

const tabMaker = (topic) => {
    let tabElement = document.createElement("div");
    tabElement.textContent = topic;

    const topicsElement = document.querySelector(".topics");
    topicsElement.appendChild(tabElement);

    return tabElement;
}