import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions';

class BookList extends React.Component {

    renderBookListElements(){
        return this.props.bookList.map((book) => {
            const bookTitle = book.title;

            return (
                <li 
                    key={bookTitle} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group.item">
                    {bookTitle}
                </li>
            );
        });
    }


    render(){
        return (
            <ul className="col-md-4 list-group">
                {this.renderBookListElements()}
            </ul>
        )
    }

}

function mapStateToProps(state){
    // Whatever is returned will show up as props inside of BookList
    return {
        bookList: state.bookList
    };
}

// Anything returend from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch){
    // Whenever selectBook is called, the result should be  passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook} , dispatch);
}

/* Promote BookList form a component to a container - it needs to know about this new dispatch method (selectBook)
 * Make it avalible as a prop  */
export default connect(mapStateToProps, mapDispatchToProps)(BookList);