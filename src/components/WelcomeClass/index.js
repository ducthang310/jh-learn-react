import React from "react";

class WelcomeClass extends React.Component {

    render() {
        return (
            <div>
                <h3>Hello, {this.props.name}.</h3>
                <p>This is component is defined by class</p>
            </div>
        );
    }
}

export default WelcomeClass