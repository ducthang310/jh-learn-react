import React from "react";
import Button from "./Button";

class ThemeButton extends React.Component {
    render() {
        return <Button theme={this.props.theme || 'No theme'} />;
    }
}

export default ThemeButton;