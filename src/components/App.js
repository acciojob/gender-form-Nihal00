
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [gender, setGender] = useState("");

  return (
    <div>
        {/* Do not remove the main div */}
        <div>
          <h1>Select your gender:</h1>
          <input type="radio" onClick={(e) => setGender("male")}/><span>Male</span>
          <input type="radio" onClick={(e) => setGender("female")} /><span>Female</span>
        </div>

        
          {
            (gender === "male") ? <div>
              <h1>Select your shirt size:</h1>
              <select>
                <option>Select size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div> : <div>
            <h1>Select your dress size:</h1>
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
