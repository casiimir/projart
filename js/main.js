import {searchBy, getDataFrom} from './searchBy.js';
import createCard from './card.js';

const limitRange = (text) => {
  return (text.length <= 32) ? text : text.slice(0, 32)+'...';
}

// Init
const states = {
  config: {
    baseUrl: 'https://collectionapi.metmuseum.org/public/collection/v1/',
  },
  dataSearch: [],
  data: '',
}

const albrechtDurerIDs = searchBy('Albrecht Dürer');

albrechtDurerIDs.then(IDs => {
  IDs.splice(0,25).forEach(ID => {
    const artworks = getDataFrom(ID);
    
    artworks.then((artwork) => {
      createCard(artwork.primaryImageSmall, limitRange(artwork.title));
    })
  })
})