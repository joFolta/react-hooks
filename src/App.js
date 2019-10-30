import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  function decrement() {
    setCount(prevCount => prevCount - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
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
