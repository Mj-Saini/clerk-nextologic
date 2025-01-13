/* eslint-disable no-unused-vars */
import { Button, Dropdown, Pagination, Table } from "react-bootstrap";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import NewForm from "./NewForm";
import { useState } from "react";
import { NextPageIcon, PrevArrowIcon, PrevPageIcon } from "./common/Icons";
import dittoPlan from "../assets/images/png/ditto-plan-img.png";

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
  {
    id: 2,
    broker: "male",
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

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (num) => {
    setItemsPerPage(num);
    setCurrentPage(1); // Reset to the first page when items per page changes
  };

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="">
      {addBroker && (
        <div className="fixed top-0 left-0 h-screen w-full flex justify-center items-center z-[1] ">
          <div
            onClick={() => setAddBroker(false)}
            className="fixed top-0 left-0 h-screen w-full flex justify-center items-center bg-black/50"
          ></div>

          <NewForm setAddBroker={setAddBroker} />
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
          <div className=" py-3 w-full">
            {/* Action Buttons */}
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              className="mb-3 bg-white shadow-lg p-3 rounded-lg flex flex-col sm:!flex-row gap-3"
            >
              <div className="d-flex gap-2">
                <button
                  onClick={() => setAddBroker(true)}
                  className="btn_dark shadow-sm max-sm:w-full text-xs px-2"
                >
                  Add broker
                </button>
                <button className="btn_light max-sm:w-full text-xs px-2">
                  Refresh
                </button>
              </div>
              <div>
                <button className="btn_dark shadow-sm w-full text-xs px-2">
                  Open Solo Window
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="  shadow-lg pe-3 bg-white rounded-lg">
              <div className="overflow-auto">
              <div className=" py-3 w-[1100px] xl:w-full ">
                <Table style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <th
                        style={{
                          textAlign: "start",
                          color: "#6e3b37",
                          fontSize: "12px",
                             fontWeight:"normal"
                        }}
                        scope="col"
                        className="ps-3"
                      >
                        Broker
                      </th>
                      <th
                        style={{
                          textAlign: "start",
                          color: "#6e3b37",
                          fontSize: "12px",
                             fontWeight:"normal"
                        }}
                        scope="col"
                      >
                        Broker ID
                      </th>
                      <th
                        style={{
                          textAlign: "start",
                          color: "#6e3b37",
                          fontSize: "12px",
                             fontWeight:"normal"
                        }}
                        scope="col"
                      >
                        Name/Tag
                      </th>
                      <th
                        style={{
                          textAlign: "start",
                          color: "#6e3b37",
                          fontSize: "12px",
                             fontWeight:"normal"
                        }}
                        scope="col"
                      >
                        App ID
                      </th>
                      <th
                        style={{
                          textAlign: "start",
                          color: "#6e3b37",
                          fontSize: "12px",
                             fontWeight:"normal"
                        }}
                        scope="col"
                      >
                        App Secret Key
                      </th>
                      <th
                        style={{
                          textAlign: "start",
                          color: "#6e3b37",
                          fontSize: "12px",
                             fontWeight:"normal"
                        }}
                        scope="col"
                      >
                        Status
                      </th>
                      <th
                        style={{
                          textAlign: "start",
                          color: "#6e3b37",
                          fontSize: "12px",
                             fontWeight:"normal"
                        }}
                        scope="col"
                      >
                        Last Token Generated At
                      </th>
                      <th
                        style={{
                          textAlign: "start",
                          color: "#6e3b37",
                          fontSize: "12px",
                             fontWeight:"normal"
                        }}
                        scope="col"
                      >
                        Generate Token
                      </th>
                      <th
                        style={{
                          textAlign: "start",
                          color: "#6e3b37",
                          fontSize: "12px",
                             fontWeight:"normal"
                        }}
                        scope="col"
                      >
                        Action
                      </th>
                      <th
                        style={{
                          textAlign: "start",
                          color: "#6e3b37",
                          fontSize: "12px",
                             fontWeight:"normal"
                        }}
                        scope="col"
                      >
                        Added At
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.map((item) => (
                      <tr key={item.id}>
                        <td
                          style={{
                            textAlign: "start",
                            color: "#6e3b37",
                            fontSize: "14px",
                          }}
                          className="ps-3 border-0"
                        >
                          {item.broker}
                        </td>
                        <td
                          style={{
                            textAlign: "start",
                            color: "#6e3b37",
                            fontSize: "14px",
                          }}
                          className="border-0"
                        >
                          {item.brokerId}
                        </td>
                        <td
                          style={{
                            textAlign: "start",
                            color: "#6e3b37",
                            fontSize: "14px",
                          }}
                          className="border-0"
                        >
                          {item.nameTag}
                        </td>
                        <td
                          style={{
                            textAlign: "start",
                            color: "#6e3b37",
                            fontSize: "14px",
                          }}
                          className="border-0"
                        >
                          {item.AppId}
                        </td>
                        <td
                          style={{
                            textAlign: "start",
                            color: "#6e3b37",
                            fontSize: "14px",
                          }}
                          className="border-0"
                        >
                          {item.AppKey}
                        </td>
                        <td
                          style={{
                            textAlign: "start",
                            color: "#6e3b37",
                            fontSize: "14px",
                          }}
                          className="border-0"
                        >
                          <span
                            className={`badge rounded-5 text-uppercase ${
                              item.status === "Active"
                                ? "bg-[#4caf4f1f] !text-[#4caf50]"
                                : "bg-secondary text-light"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td
                          style={{
                            textAlign: "start",
                            color: "#6e3b37",
                            fontSize: "14px",
                          }}
                          className="border-0"
                        >
                          {item.lastToken}
                        </td>
                        <td className="border-0">
                          <a
                            href="#"
                            style={{
                              textAlign: "start",
                              color: "#c42b1e",
                              fontSize: "14px",
                            }}
                          >
                            {item.genratetoken}
                          </a>
                        </td>
                        <td className="border-0">
                          <button className="btn btn-success btn-sm me-2">
                            <i className="bi bi-play-fill"></i>
                          </button>
                          <button className="btn btn-danger btn-sm">
                            <i className="bi bi-x-circle"></i>
                          </button>
                        </td>

                        <td
                          style={{
                            textAlign: "start",
                            color: "#6e3b37",
                            fontSize: "14px",
                          }}
                          className="border-0"
                        >
                          {item.lastUpdate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              </div>
              {/* Pagination Controls */}
              <div className="d-flex flex-col sm:flex-row justify-end items-end sm:items-center gap-3 mt-3 pb-3">
          <Dropdown>
            <span
              style={{
                textAlign: "start",
                color: "#6e3b37",
                fontSize: "14px",
              }}
              className="me-4"
            >
              Items per page:
            </span>{" "}
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {itemsPerPage}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {[1, 5, 10, 15, 20].map((num) => (
                <Dropdown.Item
                  key={num}
                  onClick={() => handleItemsPerPageChange(num)}
                >
                  {num}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <span
            style={{
              textAlign: "start",
              color: "#6e3b37",
              fontSize: "14px",
            }}
          >
            {`${(currentPage - 1) * itemsPerPage + 1}-${Math.min(
              currentPage * itemsPerPage,
              data.length
            )} of ${data.length}`}
          </span>

          <ul className="d-flex mb-0 gap-3 align-items-center">
            <li>
              <button
                type="button"
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              >
                <PrevPageIcon />
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <PrevArrowIcon />
              </button>
            </li>
            <li>
              <button
                type="button"
                   className="!-scale-110"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <PrevArrowIcon />
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
              >
                <NextPageIcon />
              </button>
            </li>
          </ul>
        </div>
            </div>
            <div className="border p-4 d-flex flex-col-reverse sm:flex-row gap-3 justify-center sm:!justify-start align-items-center justify-content-between bg-white shadow-lg mt-2 relative  rounded-lg">
              <div className="max-sm:text-center sm:text-start">
                <h5 className="mb-2 text-[#c42b1e] text-lg md:text-xl">
                  1Cliq Ditto 🎉
                </h5>
                <p className="mb-3 text-base text-[#6e3b37]">
                  Trade. Replicate. Succeed. <br />
                  Trading is never gonna be the same again.
                </p>
                <Button
                  variant="danger"
                  className="!text-xs !uppercase !font-bold"
                >
                  Show Ditto Plans
                </Button>
              </div>
              <img
                src={dittoPlan}
                alt="Illustration"
                className="sm:absolute bottom-0 right-10"
                style={{ maxWidth: "150px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
