import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import Footer from '../components/footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
        <Footer />
      </div>
    );
  }
}
