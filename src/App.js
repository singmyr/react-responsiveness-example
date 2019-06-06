import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test.js';
import { ResponsivenessProvider } from 'react-responsiveness';

function App() {
    return (
        <ResponsivenessProvider breakpoints={['32em', '64em', '128em']}>
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
                    <Test />
                </header>
            </div>
        </ResponsivenessProvider>
        );
    }
    
    export default App;
    