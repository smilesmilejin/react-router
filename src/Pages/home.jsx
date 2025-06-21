import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is your main landing page.</p>
      {/* https://api.reactrouter.com/v7/functions/react_router.Link.html */}
      {/* <Link to="/">Home</Link>
      <Link to="/page1">Page 1</Link>
      <Link to="/page2">Page 2</Link>
      <Link to="/page3">Page 3</Link> */}
    </div>
  );
}

export default Home;

// export function Home(){
//     return (
//         <div>
//         <h1>Welcome to the Home Page</h1>
//         <p>This is your main landing page.</p>
//         </div>
//   );   
// };