import React, {Component} from 'react'

export default class Palindrome extends Component{
    constructor(){
        super()

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
    
    render(){
        return(
            <div className = 'puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className = 'inputLine' onChange = {event => this.handleChange(event.target.value)}></input>
                <button className = 'confirmationButton' onClick = {() => this.handleClick(this.state.userInput)}>Check</button>
                <span className = 'resultsBox'>Palindrome: {JSON.stringify(this.state.palindrome)}</span>
            </div>
        )
    }

    handleChange(value){
        this.setState({userInput: value.toLowerCase()})
    }

    handleClick(input){
        var arr = input.split('')
        arr.reverse()
        var str = arr.join('')

        if(input === str){
            this.setState({palindrome: 'True'})
        }else{
            this.setState({palindrome: 'False'})
        }
    }
}