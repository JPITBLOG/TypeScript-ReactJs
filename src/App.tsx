import React from 'react';

import './App.css';

//import MyComponent from './myComponent';
import Students from "./container/student";
//import Login from './container/login';


function App() {
    // let name = 'jigar';
    // let age=23;
  return (
    <div className="App">
        {/*<Login/>*/}
        <Students/>
      {/*<MyComponent info = {{name, age}}/>*/}
    </div>
  );
}

export default App;
