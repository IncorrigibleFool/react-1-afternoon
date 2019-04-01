import React, {Component} from 'react'

export default class FilterString extends Component{
    constructor(){
        super()

        this.state = {
            unfilteredSayings: ['cool', 'dude', 'bro', 'sweet', 'gnarly', 'rad', 'wicked', 'awesome'],
            userInput: '',
            filteredSayings: []
        }
    }

    handleChange(value){
        this.setState({userInput: value})
    }

    handleClick(input){
        var arr = this.state.unfilteredSayings
        var filtered = []

        for(var i = 0; i < arr.length; i++){
            if(arr[i].includes(input)){
                filtered.push(arr[i])
            }
        }

        this.setState({filteredSayings: filtered})
    }
    
    render(){
        return(
            <div className = 'puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className = 'puzzleText'>Sayings: {JSON.stringify(this.state.unfilteredSayings)}</span>
                <input className = 'inputLine' onChange = {event => this.handleChange(event.target.value)}></input>
                <button className = 'confirmationButton' onClick = {() => this.handleClick(this.state.userInput)}>Filter</button>
                <span className = 'resultsBox filterStringRB'>Filtered Sayings: {JSON.stringify(this.state.filteredSayings)}</span>
            </div>
        )
    }
}