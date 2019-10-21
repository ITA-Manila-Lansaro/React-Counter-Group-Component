import React from 'react';

class Counter extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  render(){
      return(
        <p>
          <button onClick = {this.addNumber}> <h2 className ="plusSign">+</h2> </button> 
            <span className = "val"> {this.state.value} </span> 
          <button onClick = {this.minusNumber}> <h2 h2 className ="minusSign">-</h2> </button> 
        </p>
      );
  }
  addNumber =  () => {
    this.setState({value : this.state.value + 1});
    this.props.onCounterValueChange(1);
  }
  minusNumber =  () => {
    this.setState({value : this.state.value - 1});
    this.props.onCounterValueChange(-1);
  }

}

export default Counter;