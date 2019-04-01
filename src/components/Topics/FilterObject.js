import React, {Component} from 'react'

export default class FilterObject extends Component{
    constructor(){
        super()
        
        this.state = {
            unfilteredArray: [
                {
                    name: 'Brian',
                    hobby: 'video games',
                    food: 'pizza',
                    occupation: 'bad coding'
                },
                {
                    name: 'Big Bertha',
                    food: 'everything',
                    weight: 1000,
                    phrase: 'FEED ME'
                },
                {  
                    alias: 'Atomic Chicken',
                    occupation: 'superhero',
                    phrase: "Let's break some eggs!."
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }
    
    render(){
        return(
            <div className = 'puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className = 'puzzleText'>Original: {JSON.stringify(this.state.unfilteredArray)}</span>
                <input className = 'inputLine' onChange = {event => this.handleChange(event.target.value)}></input>
                <button className = 'confirmationButton' onClick = {() => this.handleClick(this.state.userInput)}>Filter</button>
                <span className = 'resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }

    handleChange(value){
        this.setState({userInput: value})
    }

    handleClick(input){
        var array = this.state.unfilteredArray
        var filtered = []
        
        for(var i = 0; i < array.length; i++){
            if(array[i].hasOwnProperty(input)){
                filtered.push(array[i])
            }
        }

        this.setState({filteredArray: filtered})
    }
}