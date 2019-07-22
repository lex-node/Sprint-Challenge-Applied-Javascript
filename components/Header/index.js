// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    let headerDiv = document.createElement("div");
    headerDiv.classList.add("header");

    let headerDateSpan = document.createElement("span");
    headerDateSpan.classList.add("date");
    headerDateSpan.textContent = "March 28, 2019";
    headerDiv.appendChild(headerDateSpan);

    let headerTitle = document.createElement("h1");
    headerTitle.textContent = "Lambda Times";
    headerDiv.appendChild(headerTitle);

    let headerTempSpan = document.createElement("span");
    headerTempSpan.classList.add("temp");
    headerTempSpan.textContent = "98°";
    headerDiv.appendChild(headerTempSpan);

    let headerContainer = document.querySelector(".header-container");
    headerContainer.appendChild(headerDiv);

    return headerDiv;
}

Header();

