import React, { Component } from 'react';
 import Todos from './Component/Todos'
 import './App.css';

// class App extends Component() {
//   render(){
//   return (
//     <div className="App">
//       {/* <Todos/> */}
    
//     </div>
//   );
// }
// }
// export default App;
// const app = ()=><h1>enter</h1>
class Welcome extends React.Component {
  render() {
    return (
      <div className="App">
      <Todos/>
      <h1></h1>
      </div>
    )

  }
}
export default Welcome
