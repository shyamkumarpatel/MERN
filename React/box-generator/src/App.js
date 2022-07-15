import './App.css';
import React, {useState} from 'react';
import BoxGenerator from './components/BoxGenerator';
import Box from './components/Box';

function App() {
  
  const [colors, setColors] = useState([]);
  const color = (color) => {
    setColors([...colors, color]);
    console.log(colors);
  }


  return (
    <div className="App">
      <BoxGenerator color = {color}/>
      <fieldset>
        <legend>Display Boxes</legend>
          <div style={{display: "flex", flexWrap: "wrap"}}>
            {colors.map( (color) => 
                              <Box color = {color}/>
                        )}
          </div>
        </fieldset>
    </div>
  );
}

export default App;
