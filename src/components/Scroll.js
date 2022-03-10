import React from "react";

const Scroll = (props) => {
    const divStyle = {
        overflowY: 'scroll',
        border: '1px solid black',
        // width: '500px',
        // float: 'left',
        height: '500px',
        // position: 'relative'
    };
    return (
        <div style={divStyle}>
            {props.children}
        </div>
    );
};

export default Scroll;
