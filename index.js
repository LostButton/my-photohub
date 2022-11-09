import "./node_modules/@fontsource/poppins";
import "./node_modules/photoswipe/dist/photoswipe.css"
import PhotoSwipe from './node_modules/photoswipe/dist/photoswipe.esm';
import "./gallery.css"


import Lightbox from './node_modules/photoswipe/dist/photoswipe-lightbox.esm';
const lightbox = new Lightbox({
  gallery: '#gallery',
  children: 'a',
  pswpModule: PhotoSwipe
});
lightbox.init();

