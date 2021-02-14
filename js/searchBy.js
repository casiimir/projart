const getIDsFromSearch = async(name) => {
  const result = await fetch(`${states.config.baseUrl}search?q=${name}`);
  const data = await result.json();

  return data.objectIDs;
}

const searchBy = async (name) => {
  const listOfIDs = await getIDsFromSearch(name);

  return listOfIDs;
}

const states = {
  config: {
    baseUrl: 'https://collectionapi.metmuseum.org/public/collection/v1/',
  },
  dataSearch: [],
  data: '',
}

export default searchBy;