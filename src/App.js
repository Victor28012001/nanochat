import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Signup from './routes/Signup';
import Apps from './Apps'


function App() {
  return (
    <>
    <Apps />
    {/* <div className="App bg-[url('Background.svg')] bg-cover bg-center h-[100%] w-[100%]">
      <Signup/>
    </div> */}
    </>
  );
}

export default App;
