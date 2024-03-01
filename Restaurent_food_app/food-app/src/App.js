
import { Component } from 'react';
import Sidebar from './component/Sidebar';
import Main from './component/Main';
import './App.css';

class App extends Component {
  render(){

  return (
    <div >
      <Sidebar />
      <Main />
    </div>
  );
}
}

export default App;
