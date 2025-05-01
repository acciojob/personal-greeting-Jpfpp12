import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');

  return (
    <div style={styles.container}>
      {/* Do not remove the main div */}
   <label htmlFor="name">Enter your name:</label>
  <input
  id="name"
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  style={styles.input}
  />
      {name && <p style={styles.greeting}>Hello, {name}!</p>}
    </div>
  );
};
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    textAlign: 'center',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginTop: '10px',
  },
  greeting: {
    marginTop: '20px',
    color: '#333',
  },
};

export default App;
