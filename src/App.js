import React, { useState, useMemo } from 'react';
import './App.css';
import Child from './Child/child'

const App = () => {

  const [i, setI] = useState(0);

  const onClickHandler = () => {
    setI(i + 1);
  }

  const memoChild = useMemo(() => {
    return <Child />
  }, []);
  //   }, [i]); if pass the i it will work as the Normal Render


  return (
    <div className="App" >
      <h2>i: {i}</h2>
      <button onClick={onClickHandler}>Increment I</button>

      <h3>Normal Render</h3>
      <Child></Child>

      <h3>Memo Render</h3>
      {memoChild}
    </div >
  );
}

export default App;
