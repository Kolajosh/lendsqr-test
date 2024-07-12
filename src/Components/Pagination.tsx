import React, { useState, useEffect, ChangeEvent } from "react";
import { IconAngleLeftB, IconAngleRightB } from "../utils/icons";
import "./styles/Pagination.scss";

interface PaginationProps {
  countPerPage: number;
  totalRecord: number;
  setCountPerPage: (count: number) => void;
  page: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const { countPerPage, totalRecord, setCountPerPage, page, setPage } = props;
  const [navItems, setNavItems] = useState<number[]>([]);

  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < Math.ceil(totalRecord / countPerPage) - 1) {
      setPage(page + 1);
    }
  };

  const handleSetCount = (e: ChangeEvent<HTMLSelectElement>) => {
    setPage(0);
    setCountPerPage(parseInt(e.target.value));
  };

  useEffect(() => {
    let tempNavItems = [];
    for (let i = 1; i <= Math.ceil(totalRecord / countPerPage); i++) {
      tempNavItems.push(i);
    }
    setNavItems(tempNavItems);
  }, [countPerPage, totalRecord]);

  return (
    <>
      <div className="PaginationSection">
        <div className="details">
          <p>Showing</p>
          <select defaultValue={countPerPage} onChange={handleSetCount}>
            <option value={100}>100</option>
            <option value={200}>200</option>
            <option value={300}>300</option>
            <option value={400}>400</option>
            <option value={500}>500</option>
          </select>
          <p>Out of {totalRecord}</p>
        </div>

        <div className="nav">
          <button onClick={handlePrev}>
            <IconAngleLeftB />
          </button>
          {navItems.slice(0, 3).map((item) => (
            <button
              key={item}
              onClick={() => setPage(item)}
              className={item === page ? "active" : ""}
            >
              {item}
            </button>
          ))}
          {Math.ceil(totalRecord / countPerPage) > 7 && <span>...</span>}
          {navItems.length > 7
            ? navItems
                .slice(navItems.length - 3, navItems.length)
                .map((item) => (
                  <button
                    key={item}
                    onClick={() => setPage(item)}
                    className={item === page ? "active" : ""}
                  >
                    {item}
                  </button>
                ))
            : ""}
          <button onClick={handleNext}>
            <IconAngleRightB />
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
