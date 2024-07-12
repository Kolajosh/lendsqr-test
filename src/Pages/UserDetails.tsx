import React, { useEffect, useState } from "react";
import UserInformation from "../layout/UserInformation";
import UserProfile from "../layout/UserProfile";
import { IconLongLeft, IconSpinner } from "../utils/icons";
import { userList } from "../utils/UsersList";
import "./styles/UserDetails.scss";
import useRequest from "../utils/hooks/useRequest";

// Define the User type
interface Guarantor {
  fullname: string;
  phone: string;
  email: string;
  relationship: string;
}

interface User {
  id: string;
  dateJoin: string;
  fullName: string;
  userName: string;
  email: string;
  phone: string;
  avatar: string;
  organization: string;
  status: string;
  bvn: string;
  accountNumber: string;
  bank: string;
  tier: number;
  balance: string;
  gender: string;
  married: string;
  children: string;
  apartment: string;
  education: string;
  employed: string;
  sector: string;
  duration: string;
  officeEmail: string;
  income: string;
  loan: string;
  twitter: string;
  facebook: string;
  instagram: string;
  guarantors: Guarantor[];
}

function UserDetails() {
  const userId = document.location.pathname.split("/")[2];
  const [userData, setUserData] = useState<User | null>(null);

  const { data, error } = useRequest();

  useEffect(() => {
    const newUser = data?.find((item: any) => item.id === userId);
    setUserData(newUser || null);
  }, [userId, data]);

  return (
    <div className="UserDetailsContainer">
      <div className="nav">
        <a href="/users">
          <IconLongLeft /> Back to Users
        </a>
      </div>
      <div className="header">
        <h1>User Details</h1>
        <div className="btns">
          <button>BLACKLIST USER</button>
          <button>ACTIVATE USER</button>
        </div>
      </div>
      {userData ? (
        <>
          <UserProfile userData={userData} />
          <UserInformation userData={userData} />
        </>
      ) : (
        <div className="Loader">
          <IconSpinner />
        </div>
      )}
    </div>
  );
}

export default UserDetails;
