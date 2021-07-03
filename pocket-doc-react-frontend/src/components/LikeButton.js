import React, { Component } from 'react'

class LikeButton extends Component {

    state = {
        counter: 0
    }

    handleClick = (event) => {
        event.preventDefault()
        this.setState((state) => {
            return {counter: state.counter + 1}
        })
        debugger
    }

    render() {
        return (
            <button onClick={this.handleClick}>Like</button>
        )
    }
}


export default LikeButton;

/*
Aim: To create a like button next to the names of each patient with a numerical representation of how many times the button was pressed.
What I would need:
- Create a new component[X]
    -within local state, I would need to have a counter attribute[X]
- Create click handler[X]
    - Within this click handler, I need counter to track (amount of times the button is clicked)[]
- Call onChange next to the button within the return.[]
*/


