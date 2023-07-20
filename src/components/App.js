
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [gender, setGender] = useState("shirt");

  return (
    <div>
        {/* Do not remove the main div */}
        
        <h1>Select your gender:</h1>
        <label><input type="radio" onClick={() => setGender("shirt")}/> Male</label>
        <label><input type="radio" onClick={() => setGender("dress")} />Female</label> 
        
        <h2>Select your {gender} size:</h2>

        {
          (gender === "shirt") ? 

          (<select name="shirt">
            <option value="">Select size</option>
            <option value="small">Small</option>
            <option value="meduim">Meduim</option>
            <option value="large">Large</option>
          </select>)
          :
         (<select name="dress">
            <option value="">Select size</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
          </select>)
        }

    </div>
  )
}

export default App
