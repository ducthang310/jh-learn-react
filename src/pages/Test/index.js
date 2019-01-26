import React, {Component} from 'react';
import WithoutContext from "../../components/WithoutContext";
import Context from "../../components/Context";
import ErrorBoundary from "../../components/ErrorBoundary";
import Error from "../../components/ErrorBoundary/Error";

class Test extends Component {
    render() {
        return (
            <main className="App-main">
                <WithoutContext/>

                <div className="divider"/>
                <Context/>

                <div className="divider"/>
                <ErrorBoundary>
                    <Error/>
                </ErrorBoundary>
            </main>
        );
    }
}

export default Test;