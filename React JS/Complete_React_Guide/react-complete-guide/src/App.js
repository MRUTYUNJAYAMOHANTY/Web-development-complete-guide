// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

import Expenses  from "./components/Expenses/Expenses";

function App() {
  const expenses = [{id:'e1',title:'Movie',amount: 245.38,date:new Date(2021,2,2)},
  {id:'e2',title:'Car Insurance',amount: 1234.44,date:new Date(2022,4,1)},
  {id:'e3',title:'Travel',amount: 2459.14,date:new Date(2022,3,6)},
  {id:'e4',title:'Temple',amount: 325.51,date:new Date(2023,1,5)}];

  return (
    <div>
      <h2>Let's get started!</h2>
       <Expenses items={expenses}/>
    </div>
  );

}
export default App;
