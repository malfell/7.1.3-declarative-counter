
//import react
import React from 'react';
//import useState
import { useState } from 'react';

// APP
function App(){
  // invoke useState. Returns two variables.
  // Counter variable equal to 1 because that was passed into useState
  let [ counter, changeCounter ] = useState(1);
  //type "changeCounter(2)" into browser console to update counter
  //never make global variables this way in finished app though!
  window.changeCounter = changeCounter
  return (
    <div>
      <h1>{counter}</h1>
      <h4>{counter}</h4>
    </div>
    
  );
}

//export app
export default App;














//////////////////////////////////////////////////////////////////////////////
// KEEPING FOR REFERENCE
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit test <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
