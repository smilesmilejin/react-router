import React from 'react';
// import { ThemeContext } from '.../App.jsx';
import { ThemeContext } from '../App'; 
import { useContext } from 'react';


const pageList = {value: '111111'};

function Page1() {
  const theme = useContext(ThemeContext);

  console.log(`Page 1 Theme is ${theme}`)
  return (
    <div>
      <h1>Page 1</h1>
      <p>This is the content of Page 1.</p>
      <p>{pageList.value}</p>
    </div>
  );
}

export default Page1;