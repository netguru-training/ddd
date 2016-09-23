import { quoteConstants } from '../constants';
import { quoteApi } from '../api';

const quoteCreated = (quote) => ({
  type: quoteConstants.CREATE,
  quote,
});

export const createQuote = (body) => dispatch => {
  quoteApi.createQuote(body)
    .then(result => dispatch(quoteCreated(result.data)));
}
