import React from 'react';
import Child from './Child';

function Parent(props) {
    return (
      <div>
        <Child num={props.num}></Child>
      </div>
    );
  }
  
  export default Parent;