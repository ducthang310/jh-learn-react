import React from "react";

export const ThemeContext = React.createContext('light');

class Context extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light'
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
                <h3>Using context, we can avoid passing props through intermediate elements</h3>
                <input type="text" placeholder="Type a theme name" value={this.state.theme} name="theme"
                       onChange={this.handleInputChange}/>

                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar />
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default Context;

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

class ThemedButton extends React.Component {
    // Assign a contextType to read the current theme context.
    // React will find the closest theme Provider above and use its value.
    // In this example, the current theme is "dark".
    static contextType = ThemeContext;
    render() {
        return <button>{this.context} </button>;
    }
}