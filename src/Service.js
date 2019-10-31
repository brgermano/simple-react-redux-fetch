import { useState, useEffect } from 'react';
import axios from 'axios';

export const useDataApi = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(url, {
          headers: {
            Accept: 'PLAU'
          }
        });
        setData(result.data);
      } catch (error) {
        console.log('error', error)
      }
    };
    fetchData();
  }, [url]);
  return [{ data }, setUrl];
};