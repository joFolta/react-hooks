import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    // cleanup function (runs after componentWillUnmount)
    return () => clearInterval(intervalId);
    // empty array ~ componentDidMount (runs only first time)
  }, []);

  useEffect(() => {
    setColor(randomcolor());
    // ~ componentDidUpdate, watching for variables in this array to run function
  }, [count]);

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
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
