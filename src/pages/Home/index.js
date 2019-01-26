import React, {Component} from 'react';
import Welcome from "../../components/Welcome";
import WelcomeClass from "../../components/WelcomeClass";
import RegisterForm from "../../components/RegisterForm";

class Home extends Component {
    render() {
        return (
            <main className="App-main">
                <Welcome name="Odin"/>

                <div className="divider"/>
                <WelcomeClass name="Thor"/>

                <div className="divider"/>
                <RegisterForm/>
            </main>
        );
    }
}

export default Home;
