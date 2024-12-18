import { useDebugValue, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styled from "styled-components"
import './App.css'
import { MainApp } from './styled'

function App() {

  const storageKeyName = "myotherkey";

  const retrieveCountValue = () => {
    const storedValue = localStorage.getItem(storageKeyName);
    return storedValue ? Number(storedValue) : 0;
  };
  
  const [count, setCount] = useState(retrieveCountValue());
  const addNumber = () => setCount((prevCount) => prevCount + 1);

  useEffect(() => {
    localStorage.setItem(storageKeyName, String(count));
  }, [count]);

  return (
    <MainApp>
      Count me
      <button onClick={() => addNumber(count)}>
        count is {count}
      </button>
    </MainApp>
  )
}

export default App
