import React from "react";
import Toolbar from "./Toolbar";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: ''
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
                <h3>Passing props through many level</h3>
                <input type="text" placeholder="Type a theme name" value={this.state.theme} name="theme"
                       onChange={this.handleInputChange}/>

                <Toolbar theme={this.state.theme} />
            </div>
        );
    }
}

export default Index;