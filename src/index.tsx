import React,{useState, useEffect} from "react";
import { render } from "react-dom";

import "./styles.css";


const App = () => {
  const [value,setValue] = useState(0);
  const [isOn,setLight] = useState(false);
  const [mousePosition,setMousePosition] = useState({x:null, y:null});
  
  useEffect( () => {
    document.title = `oh lord ${value}`;
    document.addEventListener('mousemove', handleMousemove);

    return () => {
      document.removeEventListener('mousemove', handleMousemove);
    }
  }, [value])

  const handleMousemove = ev => {
    setMousePosition({x: ev.pageX, y: ev.pageY})
  }

  const increment = () => {
    setValue(prev => prev + 1)
  }

  const toggleLight = () => {
    setLight(prev => !prev)
  }

  const block = {
      height:'50px',
      width:'50px',
  }
  const bigBlock = {
      height:'200px',
      width:'200px',
  }

  const styleLight = {
    background: isOn ? 'yellow':'grey'
  }

  return (
    <>
      <h2>
        Counter
      </h2>
      <div className="App">
      <button onClick={increment}>Increment</button>
        <h1>cliked: {value}</h1>
      </div>

      <h2>
        Light on off
      </h2>
      <div  onClick = {toggleLight} style ={{...styleLight,...block}}>
      </div>

      <h2>
        Mouse Position
      </h2>
      <div  style ={{...bigBlock,border: '2px solid grey'}}>
        {JSON.stringify(mousePosition, null, 2)}
      </div>
    </>
    
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
