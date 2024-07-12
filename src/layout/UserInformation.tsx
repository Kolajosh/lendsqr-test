import React from "react";
import './styles/UserInformation.scss'

interface Guarantor {
  fullname: string;
  phone: string;
  email: string;
  relationship: string;
}

interface UserData {
  fullName: string;
  phone: string;
  email: string;
  bvn: string;
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

interface UserInformationProps {
  userData: UserData;
}

const UserInformation: React.FC<UserInformationProps> = ({ userData }) => {
  return (
    <>
      <div className="UserInfoContainer">
        <div className="field">
          <h2>Personal Information</h2>
          <div className="row">
            <div className="col">
              <h3>Full Name</h3>
              <p>{userData.fullName}</p>
            </div>
            <div className="col">
              <h3>Phone Number</h3>
              <p>{userData.phone}</p>
            </div>
            <div className="col">
              <h3>Email Address</h3>
              <p>{userData.email}</p>
            </div>
            <div className="col">
              <h3>BVN</h3>
              <p>{userData.bvn}</p>
            </div>
            <div className="col">
              <h3>Gender</h3>
              <p>{userData.gender}</p>
            </div>
            <div className="col">
              <h3>Marital Status</h3>
              <p>{userData.married}</p>
            </div>
            <div className="col">
              <h3>Children</h3>
              <p>{userData.children}</p>
            </div>
            <div className="col">
              <h3>Type of Residence</h3>
              <p>{userData.apartment}</p>
            </div>
          </div>
        </div>
        <div className="field">
          <h2>Education and Employment</h2>
          <div className="row-2">
            <div className="col">
              <h3>Level of Education</h3>
              <p>{userData.education}</p>
            </div>
            <div className="col">
              <h3>Employment Status</h3>
              <p>{userData.employed}</p>
            </div>
            <div className="col">
              <h3>Sector of Employment</h3>
              <p>{userData.sector}</p>
            </div>
            <div className="col">
              <h3>Duration of Employment</h3>
              <p>{userData.duration}</p>
            </div>
            <div className="col">
              <h3>Office Email</h3>
              <p>{userData.officeEmail}</p>
            </div>
            <div className="col">
              <h3>Monthly Income</h3>
              <p>{userData.income}</p>
            </div>
            <div className="col">
              <h3>Loan Repayment</h3>
              <p>{userData.loan}</p>
            </div>
          </div>
        </div>

        <div className="field">
          <h2>Socials</h2>
          <div className="row">
            <div className="col">
              <h3>Twitter</h3>
              <p>{userData.twitter}</p>
            </div>
            <div className="col">
              <h3>Facebook</h3>
              <p>{userData.facebook}</p>
            </div>
            <div className="col">
              <h3>Instagram</h3>
              <p>{userData.instagram}</p>
            </div>
          </div>
        </div>

        <div className="field">
          <h2>Guarantor</h2>
          {userData.guarantors.map((guarantor) => (
            <div className="row" key={guarantor.email}>
              <div className="col">
                <h3>Full Name</h3>
                <p>{guarantor.fullname}</p>
              </div>
              <div className="col">
                <h3>Phone Number</h3>
                <p>{guarantor.phone}</p>
              </div>
              <div className="col">
                <h3>Email Address</h3>
                <p>{guarantor.email}</p>
              </div>
              <div className="col">
                <h3>Relationship</h3>
                <p>{guarantor.relationship}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserInformation;
