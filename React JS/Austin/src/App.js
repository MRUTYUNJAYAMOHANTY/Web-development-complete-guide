import React, {Component} from 'react';
import './App.css';
import HomePage from './container/Home/Home';
import Aux from './container/Auxx/Auxx';
import './MediaQuery.css';
import './MediaQueryIpad.css';
import './MediaQuery500w.css';
import './MediaQuery1024.css';
import './Media200.css';
import './reset.css';

class App extends Component {
  render (){  
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}
}
export default App;