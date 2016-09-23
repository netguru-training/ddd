import { quoteConstants } from 'constants';

export default (state = [], action) => {
  switch (action.type) {
    case quoteConstants.CREATE:
      return [
        ...state,
        action.quote,
      ];
    default:
      return state;
  }
};
