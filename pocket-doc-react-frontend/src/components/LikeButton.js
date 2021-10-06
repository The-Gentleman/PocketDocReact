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
    }

    render() {
        return (
            <div>
                <br></br>
                <button onClick={this.handleClick}>Like</button>  {this.state.counter}
            </div>
        )
    }
}


export default LikeButton;

