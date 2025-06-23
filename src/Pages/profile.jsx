import React, { useContext } from 'react';
import { UserLoginStatusContext } from '../App'; // Adjust if needed
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import UserLogo from '../assets/UserLogo.png';

function Profile() {
  const { setUserLoginStatus } = useContext(UserLoginStatusContext);
  const navigate = useNavigate();

  // Mock user data – replace with real user state or context
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: UserLogo
  };

  const handleLogout = () => {
    setUserLoginStatus(false);
    // navigate('/login'); // Redirect after logout
    navigate('/'); 
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-card">
        <img src={user.avatar} alt="User Avatar" className="profile-avatar" />
        <div className="profile-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button className="edit-button">Edit Profile</button>
          <button className="logout-button" onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
