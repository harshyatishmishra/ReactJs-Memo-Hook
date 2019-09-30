import React, { Component, useMemo } from 'react';
import './App.css';
import Child from './Child/child'

class App extends Component {

  state = {
    i: 0
  }

  onClickHandler = () => {
    this.setState({
      i: this.state.i + 1
    })
  }

  memoChild = useMemo(() => {
    return <Child />
  }, []);

  render() {

    return (
      <div className="App" >
        <h2>i: {this.state.i}</h2>
        <button onClick={this.onClickHandler}>Increment I</button>

        <h3>Normal Render</h3>
        <Child></Child>

        <h3>Memo Render</h3>
        {this.memoChild}
      </div >
    );
  }
}

export default App;
