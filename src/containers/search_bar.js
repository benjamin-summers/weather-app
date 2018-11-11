import React, { Component } from 'react';

const API_KEY = '7ce37aee9aca33a8d205593e504e2513';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
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