import { useState, useEffect } from "react";

export const useFetch = (callAPi) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const useApiData = async () => {
      try {
        setLoading(true);
        setData(await callAPi);
      } catch (erro) {
        setError("um erro ocorreu");
      } finally {
        setLoading(false);
      }
    };
    useApiData();
  }, []);
  return { data, loading, error };
};
