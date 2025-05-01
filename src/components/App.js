import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      {/* Do not remove the main div */}
  <label htmlFor="nameInput">Enter your name:</label>
      <input
        id="nameInput"
        type="text"
        value={name}
        onChange={handleChange}
      />
{name !== "" && <p>Hello, {name}!</p>}
    </div>
  );
};

export default App;
