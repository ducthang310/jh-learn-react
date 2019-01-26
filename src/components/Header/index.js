import { Link } from 'react-router-dom';
import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Link to="/" className="App-link">Home</Link>
                <Link to="/test" className="App-link">Test</Link>
            </header>
        );
    }
}

export default Header;
