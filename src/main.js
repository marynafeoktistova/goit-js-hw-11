import fetchImg from './js/pixabay-api';
import { imagesTemplate, showMessage } from './js/render-functions';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const searchRequest = input.value.trim();
  if (!searchRequest) return;

  input.value = '';

  const loader = document.querySelector('.loader');
  loader.style.display = 'block';

  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';

  fetchImg(searchRequest)
    .then(data => searchResults(data.data.hits))
    .catch(err => {
      console.error(err);
      showMessage();
    })
    .finally(() => {
      loader.style.display = 'none';
    });
}

function searchResults(images) {
  if (!images.length) {
    showMessage();
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; 
    return;
  }

  imagesTemplate(images);
}