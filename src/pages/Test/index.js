import React, {Component} from 'react';
import WithoutContext from "../../components/WithoutContext";
import Context from "../../components/Context";

class Test extends Component {
    render() {
        return (
            <main className="App-main">
                <WithoutContext/>
                <div className="divider"/>
                <Context/>
            </main>
        );
    }
}

export default Test;