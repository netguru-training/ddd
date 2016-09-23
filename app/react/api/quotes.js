import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';

const createApi = (url) => axios.create({
  baseURL: url,
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  responseType: 'json',
});

export function createQuote(body) {
  return createApi(BASE_URL).post(`/quotes`, {
    body,
  });
}
