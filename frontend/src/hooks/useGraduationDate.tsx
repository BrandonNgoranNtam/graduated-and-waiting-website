// hooks/useGraduationDate.js
import { useState, useEffect } from 'react';
import { graduationService } from '../api/services';

const useGraduationDate = () => {
  const [graduationDate, setGraduationDate] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGraduationData = async () => {
      try {
        const response = await graduationService.get('/graduation');
        setGraduationDate(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGraduationData();
  }, []);

  return { graduationDate, loading, error };
};

export default useGraduationDate;
