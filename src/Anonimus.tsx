import React, { useEffect, useState } from 'react';
import './CustomForm.css';
import { apiRoot } from './ApiRoot';

export const Anonimus = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    let ignore = false;
    setToken(null);

    const fetchToken = async () => {
      const resp1 = await apiRoot.get();
      console.log(resp1);
      const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const json = await resp.json();
      return json.title;
    }

    fetchToken().then(result => {
      if (!ignore) {
        setToken(result);
      }
    })

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <div>Hi from Anonimus</div>
      <div>Token is {token}</div>
    </>
  )
}
