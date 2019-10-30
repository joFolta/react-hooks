import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  function decrement() {
    setCount(prevCount => prevCount - 1);
  }

  useEffect(() => {
    setColor(randomcolor());
    // (first param is callback function) and second parameter of useEffect is array, which ties function to a change in "count" and/or any other state properties in the array
  }, [count]);

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={increment}>Increment!</button>
      <br />
      <button onClick={decrement}>Decrement!</button>
    </div>
  );
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange() {
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       };
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleChange}>Change!</button>
//       </div>
//     );
//   }
// }

export default App;
