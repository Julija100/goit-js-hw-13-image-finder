const BASE_URL = 'https://pixabay.com/api';
const KEY = '22385863-ab509129ff5717a9471438652';

function fetchImage(searchQuery) {
  return fetch(
    `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=&per_page=12&key=${KEY}`,
  ).then(response => {
    // this.increasePage();
    return response.json();
  });
}

export default {
  fetchImage,
};
