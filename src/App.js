import React, { useState, useEffect } from 'react';
import { chamaApi } from './Service';

export default function App() {
  const [query, setQuery] = useState('redux');
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setResults(await chamaApi('redux'));
    }
    fetchData();
  }, []);

  async function search(event) {
    event.persist()
    event.preventDefault();
    setResults(await chamaApi(query)); 
  }

  return (
    <>
      <form onSubmit={async event => {setResults([]); search(event)}}>
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      
      <ul>
        {results.length > 1 ? 
          results.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>  
          ))
        : 'Loading...'
        }
      </ul>
    </>
  );
}