
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
              <select name="shirt">
                <option value="#">Select size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div> : <div>
            <h2>Select your dress size:</h2>
              <select name="dress">
                <option value="#">Select size</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
              </select>
            </div>
          }
        
    </div>
  )
}

export default App
