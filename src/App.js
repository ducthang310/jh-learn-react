import React, {Component} from 'react';
import './App.css';
import Welcome from "./components/Welcome";
import WelcomeClass from "./components/WelcomeClass";
import RegisterForm from "./components/RegisterForm";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <main className="App-main">
                    <Welcome name="Odin"/>

                    <div className="divider"/>
                    <WelcomeClass name="Thor"/>

                    <div className="divider"/>
                    <RegisterForm/>
                </main>
            </div>
        );
    }
}

export default App;
