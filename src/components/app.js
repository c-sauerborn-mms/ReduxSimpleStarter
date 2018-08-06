import React, { Component } from 'react';

import BookDetails from '../containers/book-details';
import BookList from '../containers/book-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetails />
      </div>
    );
  }
}
