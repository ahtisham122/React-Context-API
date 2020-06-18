import React, { useState } from 'react';
import Parent from './Parent';

function App() {
  let [Num, setNum] = useState(50);
  return (
    <div>
      Hello World
      <Parent num={Num}></Parent>
      <button onClick={()=>{setNum(++Num)}}>+</button>
      <button onClick={()=>{setNum(--Num)}}>-</button>
    </div>
  );
}

export default App;
