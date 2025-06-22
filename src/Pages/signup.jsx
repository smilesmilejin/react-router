import Logo from '../assets/Logo.png'; 
import './signup.css'; 

function Signup() {
  return (

    <div>
        <header className="logo">
        {/* <header className="signup-header"> */}
            <img src={Logo} alt="My Logo" />
            <h1>TradeSphere</h1>
        </header>
      <h2>Sign Up</h2>
      <form>
        {/* <input type="text" placeholder="Username" required /> */}
        <input type="email" placeholder="Email" required />
        {/* <input type="password" placeholder="Password" required /> */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;