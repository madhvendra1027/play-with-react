import { useState } from 'react'
import './App.css'

function App() {
  const[backgroundColor, setBackgroundColor]=useState('#ffffff');
  
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5', '#F5FF33'];

  const handleColorChange = (color) => {
        setBackgroundColor(color);
  };

  return(
    <div style={{backgroundColor}}>
      <h1>
        Color Picker
      </h1>
      <div className='color-palette'>
         {
             colors.map((color,index) => (
                <div
                    key={index}
                    className='color-box'
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorChange(color)}
                ></div>
                  ))
         }
      </div>

      <div className='custom-color-picker'>
        <input type='color'
               value={backgroundColor}
               onChange={(e) => handleColorChange(e.target.value)}
        />
      </div>
    </div>
  )
  
}

export default App;
