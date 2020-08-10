import React, { Component } from 'react';


export default class DelayedButton extends React.Component{

    handleClick = (e) => {
        e.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(e)
        },
         this.props.delay)   
    }

    render(){
        console.log()
        return(
            <button onClick={this.handleClick}>Delayed</button>
        )
    }

}
