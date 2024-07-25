import React, { useState, useEffect } from 'react';

function App() {
  const [informacao, setInformacao] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffct(() => { 
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        setInformacao(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Data List</h1>
      <ul>
        {informacao.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
