import React, { useState, MouseEvent } from "react";
import "./styles/TableRows.scss";
import {
  IconEyeOutline,
  IconMenuKebab,
  IconUserCheck,
  IconUserX,
} from "../utils/icons";
import { User } from "../layout/Table";

interface TableRowsProps {
  user: User;
}

const TableRows: React.FC<TableRowsProps> = ({ user }) => {
  const { organization, userName, email, id, phone, dateJoin, status } = user;
  const [popOpen, setPopOpen] = useState(false);

  const statusColor: Record<string, string> = {
    Active: "#39CD62",
    Inactive: "#545F7D",
    Pending: "#E9B200",
    Blacklisted: "#E4033B",
  };

  const handleOpenPop = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPopOpen(!popOpen);
  };

  let closingTimer: ReturnType<typeof setTimeout>;
  const closingInterval = 1000;

  const handleClosePop = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    clearTimeout(closingTimer);
    closingTimer = setTimeout(() => {
      setPopOpen(false);
    }, closingInterval);
  };

  const handleOpening = () => {
    clearTimeout(closingTimer);
  };

  return (
    <>
      <tr className="TR">
        <td>{organization}</td>
        <td>{userName}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{dateJoin}</td>
        <td>
          <span
            style={{
              color: statusColor[status],
              background: statusColor[status] + "15",
            }}
          >
            {status}
          </span>
        </td>
        <td>
          <button onClick={handleOpenPop}>
            <IconMenuKebab />
          </button>
          {popOpen && (
            <div
              className="PopOver"
              onMouseLeave={handleClosePop}
              onMouseEnter={handleOpening}
            >
              <a href={`/users/${id}`}>
                <IconEyeOutline /> View Details
              </a>
              <a href="/">
                <IconUserX /> Blacklist User
              </a>
              <a href="/">
                <IconUserCheck /> Activate User
              </a>
            </div>
          )}
        </td>
      </tr>
    </>
  );
};

export default TableRows;
