import React, { useState } from 'react';
import { useDataApi } from './Service';

function App() {
  const [query, setQuery] = useState('redux');
  const [{ data }, doFetch] = useDataApi('https://hn.algolia.com/api/v1/search?query=redux', { hits: [] });

  return (
    <>
      <form
        onSubmit={event => {
          doFetch(
            `http://hn.algolia.com/api/v1/search?query=${query}`,
          );
          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;