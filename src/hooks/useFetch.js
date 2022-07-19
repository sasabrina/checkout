import { useState, useCallback, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const fetchedData = await fetch(url);
      const response = await fetchedData.json();
      setData(response);
      setIsloading(false);
    } catch (err) {
      setIsloading(false);
      setIsError(true);
      console.log(err);
    }
  }, [url]);

  useEffect(() => {
    setIsloading(true);
    fetchData();
  }, [fetchData]);

  return [data, isLoading, isError];
};
