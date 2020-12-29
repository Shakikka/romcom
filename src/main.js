// Variables targeting DOM elements 👇
var image = document.querySelector('img');

var title = document.querySelector('h2');

var tagline1 = document.querySelector('.tagline-1');

var tagline2 = document.querySelector('.tagline-2');

var randomCoverButton = document.querySelector('.random-cover-button');

var makeCoverButton = document.querySelector('.make-new-button');

var homeButton = document.querySelector('.home-button');

var homeView = document.querySelector('.home-view');

var savedCoversView = document.querySelector('.saved-view');

var viewSavedButton = document.querySelector('.view-saved-button');

var saveCoverButton = document.querySelector('.save-cover-button');

var makeNewBookButton = document.querySelector('.create-new-book-button');

var savedCoversSection = document.querySelector('.saved-covers-section');

var formView = document.querySelector('.form-view');

var savedCovers = [];

var currentCover = new Cover(image, title, tagline1, tagline2);



// Event listeners 👇
homeButton.addEventListener('click', viewHome);

randomCoverButton.addEventListener('click', createCover);

saveCoverButton.addEventListener('click', saveCover);

makeCoverButton.addEventListener('click', viewForm);

makeNewBookButton.addEventListener('click', makeNewBook);


viewSavedButton.addEventListener('click', viewSavedCovers);

savedCoversSection.addEventListener('dblclick', deleteCover);


// Event handlers functions 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function hide(element) {
  element.classList.add('hidden');
};

function show(element) {
  element.classList.remove('hidden');
};

function deleteCover() {
  for (var i = 0; i < savedCovers.length; i++) {
    var coverCheck = savedCovers[i].id;

    if (parseInt(event.target.closest('.mini-cover').id) === coverCheck) {
      savedCovers.splice(i, 1);
    };
  };
  showMiniBooks();
};


function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.unshift(currentCover);
    covers.unshift(currentCover.cover);
    titles.unshift(currentCover.title);
    descriptors.unshift(currentCover.tagline1);
    descriptors.unshift(currentCover.tagline2);
  }
};



function viewForm() {
  show(formView);
  hide(randomCoverButton);
  hide(saveCoverButton);
  show(homeButton);
  hide(homeView);
  hide(savedCoversView);
  hide(savedCoversSection);
};

function makeNewBook() {
  event.preventDefault()
  makeBook()
};

function makeBook() {
  var userCover = document.querySelector('.user-cover').value;
  var userTitle = document.querySelector('.user-title').value;
  var userDesc1 = document.querySelector('.user-desc1').value;
  var userDesc2 = document.querySelector('.user-desc2').value;
  currentCover = new Cover(userCover, userTitle, userDesc1, userDesc2);
  if (userCover === "" || userTitle === "" || userDesc1 === "" || userDesc2 === "") {
  } else {
    showBook();
  };
  // userCover = null;
  // userTitle = null;
  // userDesc1 = null;
  // userDesc2 = null;
};

function showBook() {
  image.src = currentCover.cover;
  title.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
  show(homeView);
  hide(formView);
  show(saveCoverButton);
}

function createCover() {
  var descriptor1 = descriptors[getRandomIndex(descriptors)];
  var descriptor2 = descriptors[getRandomIndex(descriptors)];
  var randomImage = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  currentCover = new Cover(randomImage, randomTitle, descriptor1, descriptor2);
  image.src = currentCover.cover;
  title.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
  hide(formView);
};

function showMiniBooks() {
  savedCoversSection.innerHTML = '';
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML += `
      <section class="mini-cover" id=${savedCovers[i].id}>
          <img class="cover-image" src="${savedCovers[i].cover}">
          <h2 class="cover-title">${savedCovers[i].title}</h2>
          <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
          <img class="price-tag" src="./assets/price.png">
          <img class="overlay" src="./assets/overlay.png">
      </section>
  `
  };
};

function viewSavedCovers() {
  show(savedCoversSection);
  hide(homeView);
  show(savedCoversView);
  hide(saveCoverButton);
  hide(randomCoverButton);
  show(homeButton);
  hide(formView);
  showMiniBooks();
};

function viewHome() {
  show(homeView);
  hide(homeButton);
  show(saveCoverButton);
  show(randomCoverButton);
  hide(savedCoversSection);
  hide(savedCoversView);
  hide(formView);
};


createCover();
