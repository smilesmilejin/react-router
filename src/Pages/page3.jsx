import { ThemeContext } from '../App'; 
import { useContext } from 'react';

function Page3() {
  // const theme = useContext(ThemeContext);
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(`Page 3 Theme is ${theme}`);


  return (
    <div>
      <h1>Page 3</h1>
      <p>This is the content of Page 3.</p>
    </div>
  );
}

export default Page3;