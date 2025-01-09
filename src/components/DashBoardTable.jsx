import { Dropdown, Pagination, Table } from "react-bootstrap";
import { useNavigate, useLocation, Outlet } from "react-router-dom"; // Import useLocation
import NewForm from "./NewForm";
import { useState } from "react";

const data = [
  {
    id: 1,
    broker: "Female",
    brokerId: "F123456",
    nameTag: "Thomas Miranda",
    AppId: "29",
    AppKey: "New York",
    status: "Active",
    lastToken: "2025-01-06 13:45",
    genratetoken: " Click to Generate Token",
    action: "2025-01-06 13:45",
    lastUpdate: "2025-01-06 13:45",
  },
];

const DashboardTable = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [addBroker, setAddBroker] = useState(false);
  

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // const currentData = data.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <div className="">
      {addBroker && (
        <div className="fixed top-0 left-0 h-screen w-full flex justify-center items-center ">
          <div
            onClick={() => setAddBroker(false)}
            className="fixed top-0 left-0 h-screen w-full flex justify-center items-center bg-black/50"
          ></div>

          <NewForm setAddBroker={setAddBroker}/>
        </div>
      )}
      {location.pathname.endsWith("/dashboard/user-profile") && (
        <div className="flex justify-center items-center h-screen w-full top-0 left-0 fixed z-20">
          <div
            onClick={() => navigate("/dashboard")}
            className="fixed top-0 left-0 h-full w-full bg-black/50 flex justify-center items-center"
          ></div>
          <div className="z-10">
            <Outlet />
          </div>
        </div>
      )}

      <div className="h-full">
        {/* Action Buttons */}
        <div className="flex justify-between items-center mb-4">
          <div className="container-fluid py-3">
            {/* Action Buttons */}
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              className="mb-3"
            >
              <div className="d-flex gap-2">
                <button
                  onClick={() => setAddBroker(true)}
                  className="btn_dark shadow-sm"
                >
                  Add Profile
                </button>
                <button className="btn_secondary shadow-sm">Refresh</button>
              </div>
              <div>
                <button className="btn_dark shadow-sm">Open Solo Window</button>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white p-3 rounded shadow-sm overflow-auto">
              <Table
                style={{ width: "100%" }}
                className="table table-bordered "
              >
                <thead className="table-light">
                  <tr style={{ background: "#e5e7eb" }} className="p-2">
                    <th style={{ textAlign: "start" }} scope="col">
                      Broker
                    </th>
                    <th style={{ textAlign: "start" }} scope="col">
                      Broker ID
                    </th>
                    <th style={{ textAlign: "start" }} scope="col">
                      Name/Tag
                    </th>
                    <th style={{ textAlign: "start" }} scope="col">
                      App ID
                    </th>
                    <th style={{ textAlign: "start" }} scope="col">
                      App Secret Key
                    </th>
                    <th style={{ textAlign: "start" }} scope="col">
                      Status
                    </th>
                    <th style={{ textAlign: "start" }} scope="col">
                      Last Token Generated At
                    </th>
                    <th style={{ textAlign: "start" }} scope="col">
                      Generate Token
                    </th>
                    <th style={{ textAlign: "start" }} scope="col">
                      Action
                    </th>
                    <th style={{ textAlign: "start" }} scope="col">
                      Added At
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.broker}</td>
                      <td>{item.brokerId}</td>
                      <td>{item.nameTag}</td>
                      <td>{item.AppId}</td>
                      <td>{item.AppKey}</td>
                      <td>
                        <span
                          className={`badge ${
                            item.status === "Active"
                              ? "bg-success text-light"
                              : "bg-secondary text-light"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td>{item.lastToken}</td>
                      <td>
                        <a href="#" className="text-danger">
                          {item.genratetoken}
                        </a>
                      </td>
                      <td>
                        <button className="btn btn-success btn-sm me-2">
                          <i className="bi bi-play-fill"></i>
                        </button>
                        <button className="btn btn-danger btn-sm">
                          <i className="bi bi-x-circle"></i>
                        </button>
                      </td>

                      <td>{item.lastUpdate}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>

                {/* Pagination Controls */}
            <div className="d-flex justify-content-end gap-3 mt-3">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Items per page: {itemsPerPage}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {[5, 10, 15, 20].map((num) => (
                  <Dropdown.Item
                    key={num}
                    onClick={() => {
                      setItemsPerPage(num);
                      setCurrentPage(1);
                    }}
                  >
                    {num}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Pagination>
              <Pagination.First
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              />
              <Pagination.Prev
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              />
              {Array.from({ length: totalPages }, (_, index) => (
                <Pagination.Item
                  key={index}
                  active={currentPage === index + 1}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
              <Pagination.Last
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
              />
            </Pagination>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
