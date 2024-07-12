import React, { useState, useEffect } from "react";

const useRequest = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, toggleLoading] = useState<boolean>(false);

  const fetchUsers = async () => {
    toggleLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}?access_token=${process.env.REACT_APP_API_KEY}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      toggleLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { data, loading, error };
};

export default useRequest;
