import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import NewQuote from '../components/NewQuote';
import QuoteRow from '../components/QuoteRow';
import { quoteActions } from 'actions';

const Bash = ({ quotes, createQuote }) => (
  <div className="quotes-wrapper">
    <NewQuote
      onCreateQuoteClick={(body) => createQuote(body)}
    />

    <table className="table table-striped">
      <thead>
        <tr>
          <th>Body</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
      </thead>
      <tbody>
        {quotes.map(quote => (
          <QuoteRow
            key={quote.id}
            quote={quote}
          />
        ))}
      </tbody>
    </table>
  </div>
)

Bash.propTypes = {
  quotes: PropTypes.array.isRequired,
  createQuote: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  quotes: state.quotes,
});

const mapDispatchToProps = dispatch => ({
  createQuote(body) {
    dispatch(quoteActions.createQuote(body));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bash);
