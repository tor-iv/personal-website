import logo from './logo.svg';
import './App.css';
import Button from './components/button/button.component'
import Thing from './components/header/header.component'



import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">  
      <Header />
        <Button />
    </div>
  );
}

export default App;
