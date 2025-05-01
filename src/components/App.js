import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');

  return (
    <div>
      {/* Do not remove the main div */}
   <label htmlFor="name">Enter your name:</label>
  <input
  id="name"
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  />
      {name && <p>Hello, {name}!</p>}
    </div>
  );
};

export default App;
