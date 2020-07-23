import axios from 'axios';

/*
 * Creating client side aios instance with '/api' as a base url
 * Request from this axios instance will be refirected to api server from web server via proxy
 */
export const axiosInstance = axios.create({
  baseURL: '/api', // when we use axiosInstance it'll automatically prepend '/api' into our request url
});

/* Scroll to top of window */
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
