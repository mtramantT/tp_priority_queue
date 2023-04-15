import { RawAxiosRequestHeaders, AxiosHeaders } from 'axios';
import { useState, useEffect, useRef } from 'react';
import createApi from './Api';

export type ApiResult<T> = {
  data: T | undefined;
  error: Error | undefined;
  loading: boolean;
};

export type ApiHeaders = RawAxiosRequestHeaders | AxiosHeaders;

const useApiGet = (url: string, headers?: ApiHeaders) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(false);

  useEffect(() => {
    return () => {
       isMounted.current = false;
    };
  }, []);

 const fetchData = async () => {
  try {
     if (!isMounted.current) {
        const api = createApi()
        const result = await api.request({url, headers});
        setResponse(result.data);
        isMounted.current = true;
     }
  } catch (error: any) {
     setError(error);
     if(isMounted.current) {
        isMounted.current = true;
     }
  } finally {
     setLoading(false);
  }
};

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error, loading };
};

export default useApiGet;