import { useState, useEffect } from "react";

// function useFetch(url, config) {
const useFetch = (url, config) => {

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, config);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { data, loading, error };
}

export default useFetch;

// L3をL$に書き換えた。
// .jsを.jsxに書き換えた。

// TS化したい。
// ApiFetch.jsxそのものと置き換えたい。
// 
// 



// 参考：https://yoheiko.com/blog/%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E3%83%95%E3%83%83%E3%82%AF%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9-usefetch%E3%82%92%E4%BE%8B%E3%81%AB%E8%A7%A3%E8%AA%AC/#outline_1__2