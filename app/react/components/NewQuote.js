import React, { Component } from 'react';
import Button from './Button';
import { quoteActions } from 'actions';

class NewQuote extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit() {
    this.props.onCreateQuoteClick(this.refs.body.value)
  }

  render() {
    return (
      <div className="form-group">
        <textarea rows="3" className="form-control new-quote-body" ref="body"></textarea>
        <Button onClick={this.submit}>
          Add Quota
        </Button>
      </div>
    );
  }
}

export default NewQuote;
