import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {Component, Suspense, lazy} from 'react';
import './App.css';
import Header from "./components/Header";

const Home = lazy(() => import('./pages/Home'));
const Test = lazy(() => import('./pages/Test'));

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/" component={() => <Home/>}/>
                            <Route path="/test" component={() => <Test/>}/>
                        </Switch>
                    </Suspense>
                </div>
            </Router>
        );
    }
}

export default App;
