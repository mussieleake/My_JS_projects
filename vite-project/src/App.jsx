import React, { useDebugValue, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styled from "styled-components"
import './App.css'
import { MainApp } from './styled'
import { Heading, Text, Button } from '@chakra-ui/react'


export const App = () => {

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
        <Heading>Vite Webapp</Heading>
        <Text>This is a vite project aimed to get started with 
          the components and features of vite and yarn.</Text>
        <Text>Count me</Text>
      <Button colorScheme="teal" variant="solid" onClick={() => addNumber(count)}>
        count is {count}
      </Button>
    </MainApp>
  )
}

export default App
