import React, { useContext } from 'react';
import './App.css';
import { ModalContext } from './contexts/ModalContext';

function App() {
  const {open, close, setModalContent, visible} = useContext(ModalContext)
  return (
    <div className="App">
      <button onClick={() => {visible ? close() : open()}}>Turn the Modal {visible ? "OFF" : "ON"}</button>
    </div>
  );
}

export default App;
