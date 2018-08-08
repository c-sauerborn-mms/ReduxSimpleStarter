import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeatherData } from '../actions/action_fetch_weatherdata';

class SearchBar extends React.Component{

    constructor(props){
        super(props);

        this.state = { searchTerm: '',
                       searchTermCountry: 'DE' }

        this.onCityInputChange = this.onCityInputChange.bind(this);
        this.onCountryInputChange = this.onCountryInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    /* Sets the city to search for */
    onCityInputChange(event){
        this.setState({searchTerm: event.target.value})
    }

    /* Sets the country to search for */
    onCountryInputChange(event){
        this.setState({searchTermCountry: event.target.value})
    }

    onFormSubmit(event){
        event.preventDefault();

        if(!this.state.searchTerm || !this.state.searchTermCountry){
            alert("Search terms are incomplete. Please input a city and a countrycode.")
            return;
        }

        // We need to go and fetch the weather data from an API
        this.props.fetchWeatherData(this.state.searchTerm, this.state.searchTermCountry);
        this.setState({ searchTerm: '' });
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <label>
                    City:
                    <input 
                        placeholder="Get a five-day forecast in your favorite cities."
                        className="form-control"
                        value={this.state.searchTerm}
                        onChange={this.onCityInputChange} />
                </label>
                <label>
                    Countrycode:
                    <input 
                        placeholder="Country"
                        className="form-control"
                        value={this.state.searchTermCountry}
                        onChange={this.onCountryInputChange} />
                </label>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeatherData }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)