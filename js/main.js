const setDataFromSearch = async(name) => {
  const result = await fetch(`${states.config.baseUrl}search?q=${name}`);
  const data = await result.json();

  states.dataSearch = data;

  states.dataSearch.objectIDs.splice(0, 5).forEach(el => {
    setDataFromID(el);
  });

}

const setDataFromID = async(id) => {
  const result = await fetch(`${states.config.baseUrl}objects/${id}`);
  const data = await result.json();

  states.data = data;

  createImageFrom(data.primaryImageSmall);
}

// Extractors


// DOM card
const createImageFrom = (url) => {
    const parent = document.querySelector('.wrapper');
    const image = document.createElement('img');
  
    image.src = url;
    parent.appendChild(image);
}

// Init
const states = {
  config: {
    baseUrl: 'https://collectionapi.metmuseum.org/public/collection/v1/',
  },
  dataSearch: [],
  data: '',
}

const inputSearch = document.querySelector('.inputSearch');
const wrapper = document.querySelector('.wrapper');

inputSearch.addEventListener('change', () => {
  setDataFromSearch(inputSearch.value);
  wrapper.innerHTML = '';
})

// Promise.all([
//   setDataFromID(4435),    // Una volta che questa promise è completata...
//   setDataFromSearch('Van Gogh') // passa a questa e se anche questa è completata...
// ])
// .then(y => { // ritorna i valori assegnati allo states
//   console.log('search:', states.dataSearch)
//   console.log('data:', states.data)

//   // states.dataSearch.objectIDs.splice(0, 5).forEach(el => {
//   //   console.log(setDataFromID(el.primaryImageSmall))  // e ne popola per quanti presenti con createImageFrom()
//   // });

// })