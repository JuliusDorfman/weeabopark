import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import SearchPage from "./components/SearchPage";
import ResultsPage from "./components/ResultsPage";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
        <SearchPage />
        <ResultsPage />
      </div>
    );
  }
}

export default App;
