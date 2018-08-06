import React from 'react';

class SearchBar extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            searchTerm : ''
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render(){
        return (
            <div className="search-bar">
                <input 
                    value={this.state.searchTerm}
                    onChange={event => this.handleInputChange(event.target.value)} />
            </div>
        )
    }

    handleInputChange(searchTerm){
        this.setState({ searchTerm });
        this.props.onSearchTermChange(searchTerm);
    }
}

export default SearchBar;