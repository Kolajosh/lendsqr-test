import React, { useState, useEffect } from "react";
import { IconSpinner } from "../utils/icons";
import Pagination from "../Components/Pagination";
import TableHeader from "../Components/TableHeader";
import TableRows from "../Components/TableRows";
import useRequest from "../utils/hooks/useRequest";
import "./styles/Table.scss";

// Define the type for a user
interface Guarantor {
  fullname: string;
  phone: string;
  email: string;
  relationship: string;
}

export interface User {
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

const Table: React.FC = () => {
  const [countPerPage, setCountPerPage] = useState<number>(50);
  const [totalRecord, setTotalRecord] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [dataList, setDataList] = useState<User[]>([]);
  const [filteredDataList, setFilteredDataList] = useState<User[]>([]);

  const { data, loading } = useRequest();

  useEffect(() => {
    if (data) {
      setDataList(data);
      setFilteredDataList(data);
      setTotalRecord(data.length);
    }
  }, [data]);

  const handleResetFilter = () => {
    setFilteredDataList(data);
    setTotalRecord(data.length);
  };

  const handleFilter = (filters: any) => {
    if (!data) return;

    const filtered = data.filter((item: any) => {
      return (
        (filters.organization
          ? item.organization === filters.organization
          : true) &&
        (filters.user
          ? item.userName.toLowerCase().includes(filters.user.toLowerCase())
          : true) &&
        (filters.email
          ? item.email.toLowerCase().includes(filters.email.toLowerCase())
          : true) &&
        (filters.date ? item.dateJoin.startsWith(filters.date) : true) &&
        (filters.phone ? item.phone.includes(filters.phone) : true) &&
        (filters.status ? item.status === filters.status : true)
      );
    });

    setFilteredDataList(filtered);
    setTotalRecord(filtered.length);
  };

  console.log(filteredDataList);

  return (
    <div className="TableContainer">
      {loading ? (
        <div className="Loader">
          <IconSpinner />
        </div>
      ) : (
        <>
          {totalRecord > 0 ? (
            <>
              <div className="table_responsive">
                <table>
                  <TableHeader onFilter={handleFilter} data={data} />
                  <tbody>
                    {filteredDataList
                      .slice(
                        page * countPerPage,
                        page * countPerPage + countPerPage
                      )
                      .map((user) => (
                        <TableRows user={user} key={user.id} />
                      ))}
                  </tbody>
                </table>
              </div>
              <Pagination
                countPerPage={countPerPage}
                setCountPerPage={setCountPerPage}
                totalRecord={totalRecord}
                page={page}
                setPage={setPage}
              />
            </>
          ) : (
            <div className="NoDataFound">
              <p>Oops! No data found, Reset yout filters</p>
              <br />
              <button onClick={handleResetFilter}>Reset Filter</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Table;
