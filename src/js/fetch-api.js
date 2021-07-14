import getRefs from './getRefs';
import imagesCardTpl from '../templates/images_card.hbs';
import API from './apiService';

const refs = getRefs();
// console.log('x', API.fetchImage);
const onSearch = e => {
  e.preventDefault();
  //сообщает User agent, что если событие не обрабатывается явно,
  //его действие по умолчанию не должно выполняться так, как обычно

  const form = e.currentTarget;
  //Определяет элемент, в котором в данный момент обрабатывается событие
  const searchQuery = form.elements.query.value;
  //???

  API.fetchImage(searchQuery)
    .then(response => {
      renderImageCard(response);
      renderLoadMoreBtn(response);
    })
    .catch(error => console.log(error))
    .finally(() => form.reset());
};

refs.searchForm.addEventListener('submit', onSearch);

function renderImageCard(response) {
  //   console.log(response.total);
  const markup = imagesCardTpl(response);
  refs.cardContainer.innerHTML = markup;
}

function renderLoadMoreBtn(response) {
  const imageCount = refs.cardContainer.querySelectorAll('.gallery-item').length;
  const shouldDisplayLoadMoreBtn = imageCount < response.total;
  if (shouldDisplayLoadMoreBtn) {
    refs.loadMoreBtn.classList.remove('is-hidden');
  } else {
    refs.loadMoreBtn.classList.add('is-hidden');
  }
}
