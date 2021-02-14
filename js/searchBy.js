const searchBy = async(name) => {
  const result = await fetch(`${states.config.baseUrl}search?q=${name}`);
  const data = await result.json();
  
  return data.objectIDs;
}

const getDataFrom = async (ID) => {
  const result = await fetch(`${states.config.baseUrl}objects/${ID}`);
  const data = await result.json();

  return (data.artistDisplayName === 'Albrecht Dürer') ? data : null;
}

const states = {
  config: {
    baseUrl: 'https://collectionapi.metmuseum.org/public/collection/v1/',
  }
}

export {searchBy, getDataFrom};