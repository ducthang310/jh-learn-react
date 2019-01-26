import React from 'react';

class Error extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false}
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    };

    render() {
        if (this.state.clicked) {
            throw new Error('I crashed!');
        }

        return <button onClick={this.handleClick}>Click me to see error</button>;
    }
}

export default Error