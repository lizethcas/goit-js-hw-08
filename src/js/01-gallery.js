// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Descrito en la documentación
import SimpleLightbox from "simplelightbox";
// Importación adicional de estilos
import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = document.querySelector(".gallery");
const item = [];

createGalleryItems();
function createGalleryItems() {
  const markup = galleryItems
    .map((image) => {
      const originalUrl = image.original;
      const previewUrl = image.preview;
      const description = image.description;

      const hmtl = `<div class='gallery__item'><a href=${originalUrl} class='gallery__link'><img src=${previewUrl} alt=${description} class='gallery__image'></a></div>`;
      item.push(hmtl);
      return hmtl;
    })
    .join("");
  gallery.innerHTML = markup;
}
item.forEach(() => {
    gallery.onclick = (e) => {
      if (e.target.classList.contains("gallery__image")) {
        const originalUrl = e.target.parentElement;
  
        e.preventDefault();
        let gallery = new SimpleLightbox(".gallery__item a");
      }
    };
  });
  