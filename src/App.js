import logo from './logo.svg';
import './App.css';


import React, { useState } from 'react'
// Make sure to import the component we just built:
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'

function App() {
  //define state with initial colors
  let [colors, setColors] = useState([
    'violet', 'blue',
    'lightblue', 'green',
    'greenyellow', 'yellow',
    'orange', 'red'
  ])

  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock key={i} color={color} />

    )
  })
  const addColor = (newColor) => {
    //use ... spread to referece all the colors without itterating
    setColors([...colors, newColor])
  }
  return (

    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor}>
      </ColorForm>
    </div>
  )
}


export default App;
