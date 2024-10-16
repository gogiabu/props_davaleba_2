import React from 'react';
import ReactDOM from 'react-dom/client';



const numArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0.];

function Numbers(props){
  return(
      <h2>{props.numbers.join('/')}</h2>
  );
}


var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Numbers numbers={numArray}/>);
