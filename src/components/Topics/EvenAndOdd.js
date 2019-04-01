import React, {Component} from 'react'

export default class EvenAndOdd extends Component{
    constructor(){
        super()
        
        this.state = {   
           evenArray: [],
           oddArray: [],
           userInput: ''
        }
    }
    
    render(){
        return(
            <div className = 'puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className = 'inputLine' onChange = {event => this.handleChange(event.target.value)}></input>
                <button className = 'confirmationButton' onClick = {() => this.handleClick(this.state.userInput)}>Split</button>
                <span className = 'resultsBox'>Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className = 'resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }

    handleChange(value){
        this.setState({userInput: value})
    }

    handleClick(input){
        var array = input.split(',')
        var evens = []
        var odds = []

        for(var i = 0; i < array.length; i++){
            if(array[i] % 2 === 0){
                evens.push(parseInt(array[i], 10))
            }else{
                odds.push(parseInt(array[i], 10))
            }
        }

        this.setState({evenArray: evens, oddArray: odds})
    }
}