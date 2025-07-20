import { useEffect, useState } from 'react';
import dataFile from '../../public/sample.json';

const useMediaData = (type, yearFilter, page, limit) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      try {
        const all = dataFile.entries.filter(item =>
          item.programType === type &&
          item.releaseYear >= 2010 &&
          (!yearFilter || item.releaseYear === parseInt(yearFilter))
        );
        const start = (page - 1) * limit;
        const paged = all.slice(start, start + limit);
        setData(paged);
        setLoading(false);
      } catch  {
        setError('Failed to load data.');
        setLoading(false);
      }
    }, 500);
  }, [type, yearFilter, page, limit]);

  return { data, loading, error };
};

export default useMediaData;