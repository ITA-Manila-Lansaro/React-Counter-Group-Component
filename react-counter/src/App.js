import React from 'react';
import './App.css';
import Counter from './Counter';
import CounterGroup from './CounterGroup';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      value2: 0,
      value3: 0,
      total: 0
    };
  }

  render() {
    return(
      <div className="App">
      <header className="App-header">

        <CounterGroup defaultCounts = {3}/>

      </header>
    </div>
    );
  }
}


export default App;
