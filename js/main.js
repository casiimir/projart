const getIDsFromSearch = async(name) => {
  clearWrapper();
  
  const result = await fetch(`${states.config.baseUrl}search?q=${name}`);
  const data = await result.json();
  data.objectIDs.splice(0, 5).map((el) => {
    getDataFromID(el);
  })
}

const getDataFromID = async(id) => {
  const result = await fetch(`${states.config.baseUrl}objects/${id}`);
  const data = await result.json();

  createImageFrom(data.primaryImageSmall);
}

// DOM card
const createImageFrom = (url) => {
    const parent = document.querySelector('.wrapper');
    const image = document.createElement('img');
  
    image.src = url;
    parent.appendChild(image);
}

// Clear the wrapper
const clearWrapper = () => {
  const wrapper = document.querySelector('.wrapper');
  wrapper.innerHTML = '';
}


// Init
const states = {
  config: {
    baseUrl: 'https://collectionapi.metmuseum.org/public/collection/v1/',
  }
}

const inputSearch = document.querySelector('.inputSearch');
const wrapper = document.querySelector('.wrapper');

inputSearch.addEventListener('change', () => {
  getIDsFromSearch(inputSearch.value);
  wrapper.innerHTML = '';
})

// getDataFromID(245)
