
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [gender, setGender] = useState("male");

  return (
    <div>
        {/* Do not remove the main div */}
        <div>
          <h1>Select your gender:</h1>
          <label><input type="radio" onClick={() => setGender("male")}/> Male</label>
          <label><input type="radio" onClick={() => setGender("female")} />Female</label> 
        </div>
        
          {
            (gender === "male") ? <div>
              <h2>Select your shirt size:</h2>
              <select>
                <option>Select size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div> : <div>
            <h2>Select your dress size:</h2>
              <select>
                <option>Select size</option>
                <option>2</option>
                <option>4</option>
                <option>6</option>
              </select>
            </div>
          }
        
    </div>
  )
}

export default App
