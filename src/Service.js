import axios from 'axios';

export function chamaApi(queryParameter) {
  return axios
  .get(`https://hn.algolia.com/api/v1/search?query=${queryParameter}`)
  .then(response => response.data.hits)
  .catch(error => console.log('error', error))
};
