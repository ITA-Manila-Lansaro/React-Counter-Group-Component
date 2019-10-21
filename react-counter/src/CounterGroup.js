import React, { Component } from 'react';
import Counter from './Counter';


class CounterGroup extends Component{
constructor (props){
    super (props)
    this.state = {counterCounts : this.props.defaultCounts,
                 inputValue : this.props.defaultCounts,
                 sum : 0
    }
}
    render(){
        let counters = [];
        for (let count = 0; count < this.state.counterCounts; count++){
            counters.push(
                <Counter
                    key = {count}
                    onCounterValueChange ={this.counterUpdateCallback}
                />
            )
        }
        return (
        <div>
            <h1><input type= "text" className="regenerateText" ref= "countInput" value ={this.state.inputValue} onChange = {this.handleInput}/></h1>
            <button className = "regenerateBtn" onClick = {this.regenerateStuff}> <h3>Regenerate indicated Counters </h3></button>
            <h3 className = "sum">Sum : {this.state.sum} </h3>
            {counters}
        </div>
        );
    }

    handleInput = (event) =>{
        this.setState({inputValue: event.target.value});
   }

   regenerateStuff = () => {
       this.setState({counterCounts : this.state.inputValue})
   }

   counterUpdateCallback = changeNum => {
       this.setState({sum: this.state.sum + changeNum})
   }


}

export default CounterGroup;
