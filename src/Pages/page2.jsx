import React from 'react';
import { ThemeContext } from '../App'; 
import { useContext } from 'react';


function Page2() {
  // const theme = useContext(ThemeContext);
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(`Page 2 Theme is ${theme}`)

  return (
    <div>
      <h1>Page 2</h1>
      <p>This is the content of Page 2.</p>
    </div>
  );
}

export default Page2;