import {AxiosAdapter} from './axios.adapter';

export const moviewDBFetcher = new AxiosAdapter({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '8a0635c6e88ca1cbe0728a32e7b19170',
    language: 'es',
  },
});
