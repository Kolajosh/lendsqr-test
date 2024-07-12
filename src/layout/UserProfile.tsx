import React, { useState } from "react";
import { IconDropDown, IconStarPurple500 } from "../utils/icons";
import "./styles/UserProfile.scss";

interface UserProfileProps {
  userData: {
    id: string;
    fullName: string;
    avatar: string;
    tier: number;
    balance: string;
    accountNumber: string;
    bank: string;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ userData }) => {
  const [openNav, setOpenNav] = useState(false);
  const maxWidth = window.matchMedia("(max-width: 1100px)");
  const stars = [1, 2, 3];

  return (
    <>
      <div className="UserHeader">
        <div className="profile">
          <div className="column">
            <img
              src={`${
                userData.avatar || "https://i.postimg.cc/Kzv5mC22/image.png"
              }`}
              alt="profile"
            />
            <div className="col">
              <h1>{userData.fullName}</h1>
              <p>{userData.id}</p>
            </div>
          </div>
          <div className="column">
            <div className="col center">
              <p>User’s Tier</p>
              <p>
                {stars.map((star) => {
                  if (star < userData.tier + 1) {
                    return (
                      <span className="active" key={star}>
                        <IconStarPurple500 />
                      </span>
                    );
                  } else {
                    return <IconStarPurple500 key={star} />;
                  }
                })}
              </p>
            </div>
            <div className="col">
              <h1>{userData.balance}</h1>
              <p>
                {userData.accountNumber}/{userData.bank}
              </p>
            </div>
          </div>
        </div>
        <button className="nav_prev" onClick={() => setOpenNav(!openNav)}>
          <IconDropDown />
        </button>
        {maxWidth.matches ? (
          openNav && (
            <div className="nav">
              <button className="active">General Details</button>
              <button>Documents</button>
              <button>Bank Details</button>
              <button>Loans</button>
              <button>Savings</button>
              <button>App and System</button>
            </div>
          )
        ) : (
          <div className="nav">
            <button className="active">General Details</button>
            <button>Documents</button>
            <button>Bank Details</button>
            <button>Loans</button>
            <button>Savings</button>
            <button>App and System</button>
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfile;
