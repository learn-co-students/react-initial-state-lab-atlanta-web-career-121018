import React, { Component } from 'react'


export default class Bomb extends Component {

    constructor(props) {
        super(props);
        this.state = {
            secondsLeft: this.props.initialCount
        };
    }

    booom () {
        if(this.state.secondsLeft !== 0) {
            return (<p>{this.state.secondsLeft} seconds left before I go boom!</p>)
        }
        return <p>Boom!</p>
    }

    render() {
        return (
            this.booom()
        )
    }
}
