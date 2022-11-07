// Described in documentation;

import SimpleLightbox from 'simplelightbox';
// Additional styles import

import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleyDiv = document.querySelector('.gallery');

galleryItems.map(({ preview, original, description }) => {
  galleyDiv.insertAdjacentHTML(
    'beforeend',
    `<div><a class="gallery__link" href="${original}"><img loading="lazy" class="gallery__image" data-src="${original}" alt="${description}" src="${preview}""/></a></div>`
  );
});

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionType: 'alt',
});

galleyDiv.addEventListener('click', onPictureClick);
