import React from 'react';
import './App.css';
import Home from "./components/Home"

export var GoldContext = React.createContext()

function App() {
  function stop(){
    alert("Ae Chor")
  }

  function handleText(event){
    console.log("Typing.....",event.target.value)
  }
  return (
    <div onCopy={stop}>
      <GoldContext.Provider value="1Kg Gold">
      <Home />
      </GoldContext.Provider>
    </div>
  );
}

export default App;
