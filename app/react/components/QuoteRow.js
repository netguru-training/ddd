import React, { PropTypes } from 'react';

const QuoteRow = ({ quote }) => (
  <tr className="quote-row">
    <td className="quote-row__id">{quote.id}</td>
    <td className="quote-row__body">{quote.body}</td>
    <td className="quote-row__created_at">{quote.created_at}</td>
    <td className="quote-row__updated_at">{quote.updated_at}</td>
  </tr>
);

QuoteRow.propTypes = {
  quote: PropTypes.shape({
    id: PropTypes.number,
    body: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
  }).isRequired
}

export default QuoteRow;
