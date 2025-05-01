import React, { useState } from 'react';

const Greeting = () => {
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
      {name && <h3 style={styles.greeting}>Hello, {name}!</h3>}
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

export default Greeting;
