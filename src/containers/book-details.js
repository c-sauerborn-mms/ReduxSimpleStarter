import React from 'react';
import { connect } from 'react-redux';

class BookDetails extends React.Component{

    render(){
        const book = this.props.book;
        if(!book) {
            return <div>Please select a book</div>;
        }

        return (
            <div>
                <h3>Details for:</h3> 
                <div>Title: {book.title}</div>
                <div>Pages: {book.pages}</div>
            </div>
        );
    }
}

function mapeStateToProps(state){
    return {
        book: state.activeBook
    }; 
}

export default connect(mapeStateToProps)(BookDetails);