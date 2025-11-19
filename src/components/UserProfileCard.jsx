import React from 'react';
import { useLocation } from 'react-router-dom';
import './UserProfileCard.css';

function UserProfileCard()
{
  const location = useLocation();
  const { name, email } = location.state || {};

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="User"
          className="profile-img"
        />

        <h3 className="profile-name">{name || "No Name"}</h3>
        <p className="profile-email">{email || "No Email"}</p>
      </div>
    </div>
  );
}

export default UserProfileCard;
