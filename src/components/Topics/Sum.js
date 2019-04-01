import React, {Component} from 'react'

export default class Sum extends Component{
    constructor(){
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    render(){
        return(
            <div className = 'puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className = 'inputLine' onChange = {event => this.handleChange1(event.target.value)}></input>
                <input className = 'inputLine' onChange = {event => this.handleChange2(event.target.value)}></input>
                <button className = 'confirmationBox' onClick = {() => this.handleClick(this.state.number1, this.state.number2)}>Add</button>
                <span className = 'resultsBox'>Sum: {JSON.stringify(this.state.sum)}</span>
            </div>
        )
    }

    handleChange1(value){
        this.setState({number1: value})
    }

    handleChange2(value){
        this.setState({number2: value})
    }

    handleClick(num1, num2){
        var one = Number(num1)
        var two = Number(num2)
        var added = one + two
        
        this.setState({sum: added})
    }
}