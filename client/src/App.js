import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Greeting = props => {
  return <h1>{props.message}</h1>;
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      greetings: 'Greeting the state',
      message: '',
      movies: [
        { title: 'I am legend' },
        { title: 'Avengers' },
        { title: 'Star Trek' }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Greeting message="Another greeting" />
        <h2>{this.state.greetings}</h2>

        <ul>
          {this.state.movies.map(movie => {
            return <li>{movie.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
