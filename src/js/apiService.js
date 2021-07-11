function fetchImage(imageId) {
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=flowers&page=1&per_page=12&key=22385863-ab509129ff5717a9471438652`;

  return fetch(url).then(response => response.json());
}
export default { fetchImage };
