import React, { useState } from "react";
import { IconFilterList } from "../utils/icons";
import "./styles/TableHeader.scss";

interface TableHeaderProps {
  onFilter: (filters: any) => void;
  data: any;
  // onResetFilter: () => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({ onFilter, data }) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [filters, setFilters] = useState({
    organization: "",
    user: "",
    email: "",
    date: "",
    phone: "",
    status: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFilters({ ...filters, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFilter(filters);
    setOpenFilter(false); // Close filter popup after applying filters
  };

  const handleReset = () => {
    setFilters({
      organization: "",
      user: "",
      email: "",
      date: "",
      phone: "",
      status: "",
    });
    onFilter({}); // Reset filters
  };

  console.log(filters);

  return (
    <>
      <thead className="TableHeaderContainer">
        <tr>
          <th>
            <button className="btn" onClick={() => setOpenFilter(!openFilter)}>
              organization <IconFilterList />
            </button>
            {openFilter && (
              <form className="FilterPop" onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="organization">Organization</label>
                  <select
                    id="organization"
                    value={filters.organization}
                    onChange={handleChange}
                  >
                    <option value="">Select Option</option>
                    {data?.map((x: any) => (
                      <>
                        <option value={x?.organization}>
                          {x?.organization}
                        </option>
                      </>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="user">Username</label>
                  <input
                    type="text"
                    id="user"
                    value={filters.user}
                    onChange={handleChange}
                    placeholder="User"
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    value={filters.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
                <div className="field">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    value={filters.date}
                    onChange={handleChange}
                    placeholder="Date"
                  />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={filters.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                  />
                </div>
                <div className="field">
                  <label htmlFor="status">Status</label>
                  <select
                    id="status"
                    value={filters.status}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Pending">Pending</option>
                    <option value="Blacklisted">Blacklisted</option>
                  </select>
                </div>
                <div className="btns">
                  <button type="button" onClick={handleReset}>
                    Reset
                  </button>
                  <button type="submit">Filter</button>
                </div>
              </form>
            )}
          </th>
          <th>
            <button className="btn" onClick={() => setOpenFilter(!openFilter)}>
              Username <IconFilterList />
            </button>
          </th>
          <th>
            <button className="btn" onClick={() => setOpenFilter(!openFilter)}>
              Email <IconFilterList />
            </button>
          </th>
          <th>
            <button className="btn" onClick={() => setOpenFilter(!openFilter)}>
              Phone number <IconFilterList />
            </button>
          </th>
          <th>
            <button className="btn" onClick={() => setOpenFilter(!openFilter)}>
              Date joined <IconFilterList />
            </button>
          </th>
          <th>
            <button className="btn" onClick={() => setOpenFilter(!openFilter)}>
              Status <IconFilterList />
            </button>
          </th>
          <th></th>
        </tr>
      </thead>
    </>
  );
};

export default TableHeader;
