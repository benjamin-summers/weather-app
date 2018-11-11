import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    inputStyle = {
        backgroundColor: 'skyblue',
        border: '1px solid gray'
    };

    onInputChange(event) {
        this.setState({
            term: event.target.value
        })
    }

    onFormSubmit(event) {
        event.preventDefault();

        //we need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({
            term: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                placeholder="enter city name and get forecast for city"
                className="form-control"
                style={this.inputStyle}
                value={this.state.term}
                onChange={this.onInputChange}
                 />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">submit</button>
                </span>
            </form>
        );
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);