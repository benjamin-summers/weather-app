import React, { Component } from 'react';

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
        console.log(event.target.value);
    }

    render() {
        return (
            <form className="input-group">
                <input 
                placeholder="enter city name and get forecast for city"
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