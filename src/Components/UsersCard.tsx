import React from "react";
import "./styles/UsersCard.scss";
import { usersCardsList } from "../utils/UsersCardLists";

interface UserCardItem {
  icon: React.ReactNode;
  title: string;
  count: number | string;
}

const UsersCard: React.FC = () => {
  return (
    <>
      <div className="Cards">
        {usersCardsList.map((item: UserCardItem) => (
          <div key={item.title} className="card">
            <span>{item.icon}</span>
            <p>{item.title}</p>
            <h2>{item.count}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default UsersCard;
