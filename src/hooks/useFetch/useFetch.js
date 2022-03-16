import {useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    try {
      const {data} = await axios.get(url);
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return {error, loading, data};
};

export default useFetch;
