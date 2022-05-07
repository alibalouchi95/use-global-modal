import React from 'react';
import './App.css';
import { useModal } from './hooks/useModal';

function App() {
  const {show, close, visible} = useModal(<div>MODAL</div>)

  return (
    <div className="App">
      <button onClick={() => {visible ? close() : show()}}>Turn the Modal {visible ? "OFF" : "ON"}</button>
    </div>
  );
}

export default App;
