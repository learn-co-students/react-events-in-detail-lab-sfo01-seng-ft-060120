// Code CoordinatesButton Component Here
import React from 'react';

function CoordinatesButton(props){

    const handleClick = (e) => {
        props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    return (
        <button onClick={(e) => handleClick(e)}>BUTTON</button>
    )
}

export default CoordinatesButton