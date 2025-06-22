import React from 'react';
// import { ThemeContext } from '.../App.jsx';
import { ThemeContext } from '../App'; 
import { useContext } from 'react';


const pageList = {value: '111111'};

function Page1() {
  // const theme = useContext(ThemeContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  console.log(`Page 1 Theme is ${theme}`)
  
  return (
    <div>
      <h1>Page 1</h1>
      <p>This is the content of Page 1.</p>
      <p>{pageList.value}</p>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Page1;