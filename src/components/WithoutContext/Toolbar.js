import React from "react";
import ThemeButton from "./ThemeButton";

const Toolbar = (props) => {
    // The Toolbar component must take an extra "theme" prop
    // and pass it to the ThemedButton. This can become painful
    // if every single button in the app needs to know the theme
    // because it would have to be passed through all components.
    return (
        <div>
            <ThemeButton theme={props.theme} />
        </div>
    );
};

export default Toolbar;