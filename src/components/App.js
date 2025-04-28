
import React from "react";
import './../styles/App.css';
const [name, setName] = useState("");

const handleChange = (event) => {
  setName(event.target.value);
  };
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />
    <p>Hello, {name}!</p>
    </div>
    
  )
}

export default App
