// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container


function Header() {

    const headerElement = document.createElement('div');
    headerElement.classList.add('header');

    const dateSpan = document.createElement('span');
    dateSpan.classList.add('date');
    dateSpan.textContent = 'March 28, 2019';
    headerElement.appendChild(dateSpan);

    const headerH1 = document.createElement('h1');
    headerH1.textContent = 'Lambda Times';
    headerElement.appendChild(headerH1);

    const tempSpan = document.createElement('span');
    tempSpan.classList.add('temp');
    tempSpan.textContent = '98°';
    headerElement.appendChild(tempSpan);

    console.log(headerElement);


    return headerElement;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());

