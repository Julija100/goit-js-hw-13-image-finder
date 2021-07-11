import imagesCardTpl from '../templates/images_card.hbs';
import API from './apiService';

const refs = {
  cardContainer: document.querySelector('.js-card-container'),
  searchForm: document.querySelector('.search-form'),
};
const onSubmit = e => {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  API.fetchImage(searchQuery)
    .then(renderImageCard)
    .catch(error => console.log(error))
    .finally(() => form.reset());
};
refs.searchForm.addEventListener('submit', onSubmit);

function renderImageCard(image) {
  const markup = imagesCardTpl(image);
  refs.cardContainer.innerHTML = markup;
}
