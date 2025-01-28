import { useState, useEffect } from "react";

type UseDataFetchResult<T> = {
  data: T | undefined;
  error: Error | undefined;
  loading: boolean;
};

function useDataFetch<T>(url: string): UseDataFetchResult<T> {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(undefined);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result: T = await response.json();
        setData(result);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("An unknown error occurred")
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
}

export default useDataFetch;
