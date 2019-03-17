import firebase from 'firebase'
import dotenv from 'dotenv'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const config = {
    apiKey: process.env.API_KEY,
    authDomain: "chicken-dinner-lge.firebaseapp.com",
    databaseURL: "https://chicken-dinner-lge.firebaseio.com",
    projectId: "chicken-dinner-lge",
    storageBucket: "chicken-dinner-lge.appspot.com",
    messagingSenderId: "879167184720"
  };
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
