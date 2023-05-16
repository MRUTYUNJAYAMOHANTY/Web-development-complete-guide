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

import ExpenseItem  from "./components/ExpenseItem";

function App() {
  const expenses = [{id:'e1',title:'movie',amount: 245.38,date:new Date(2021,2,2)},
  {id:'e2',title:'car insurance',amount: 1234.44,date:new Date(2022,4,1)},
  {id:'e3',title:'travel',amount: 2459.14,date:new Date(2022,3,6)},
  {id:'e4',title:'temple',amount: 325.51,date:new Date(2023,1,5)}]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
      name={expenses[0].title}
      amount={expenses[0].amount}
      time={expenses[0].date}></ExpenseItem>
      <ExpenseItem
      name={expenses[1].title}
      amount={expenses[1].amount}
      time={expenses[1].date}></ExpenseItem>
      <ExpenseItem
      name={expenses[2].title}
      amount={expenses[2].amount}
      time={expenses[2].date}></ExpenseItem>
      <ExpenseItem
      name={expenses[3].title}
      amount={expenses[3].amount}
      time={expenses[3].date}></ExpenseItem>
    </div>
  );
}
export default App;
