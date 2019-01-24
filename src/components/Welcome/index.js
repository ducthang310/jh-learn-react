import React from "react";

const Welcome = (props) => (
    <div>
        Hello, {props.name}
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
);

export default Welcome