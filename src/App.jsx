// ? useContext() = React Hooks that allows you to share values
// ?                between multiple levels oof components
// ?                without passing props through each level

// ? PROVIDER COMPONENT
// ? 1. import {createContext} from 'react';
// ? 2. export const myContext = createContext();
// ? 3. <MyContext.Provider value ={value}>
// ?      <Child />
// ?    </MyContext.Provider>


// ? CONSUMER COMPONENTS
// ? 1. import React, {useContext} from 'react';
// ?    import {myContext} from './ComponentA';
// ? 2. const value = useContext(myContext);

import ComponentA from "./ComponentA";

function App() {

  return (
    <>
      <ComponentA />
    </>
  )
}

export default App
