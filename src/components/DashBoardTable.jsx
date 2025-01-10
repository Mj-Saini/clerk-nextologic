/* eslint-disable no-unused-vars */
import { Dropdown, Pagination, Table } from "react-bootstrap";
import { useNavigate, useLocation, Outlet } from "react-router-dom"; // Import useLocation
import NewForm from "./NewForm";
import { useState } from "react";
import { NextPageIcon, PrevArrowIcon, PrevPageIcon } from "./common/Icons";

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
              className="mb-3 bg-white shadow-lg p-3 rounded-lg"
            >
              <div className="d-flex gap-2">
                <button
                  onClick={() => setAddBroker(true)}
                  className="btn_dark shadow-sm"
                >
                  Add broker
                </button>
                <button className="btn_light ">Refresh</button>
              </div>
              <div>
                <button className="btn_dark shadow-sm">Open Solo Window</button>
              </div>
            </div>

            {/* Table */}
            <div className=" overflow-auto shadow-lg pe-3 bg-white rounded-lg" >
              <div className=" py-3 ">
                <Table style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <th
                        style={{
                          textAlign: "start",
                          color: "#6e3b37",
                          fontSize: "12px",
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
                        }}
                        scope="col"
                      >
                        Added At
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
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

                {/* Pagination Controls */}
                <div className="d-flex justify-content-end align-items-center gap-3 mt-3">
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

                  <span
                    style={{
                      textAlign: "start",
                      color: "#6e3b37",
                      fontSize: "14px",
                    }}
                  >
                    1-1 of 1
                  </span>

                  <ul className="d-flex mb-0 gap-3 align-items-center">
                    <li
                      className="v-pagination__first"
                      data-test="v-pagination-first"
                    >
                      <button
                        type="button"
                        className="v-btn v-btn--disabled v-btn--icon v-theme--light v-btn--density-comfortable v-btn--rounded v-btn--size-default v-btn--variant-plain"
                        disabled=""
                        aria-label="First page"
                        aria-disabled="true"
                      >
                        <span className="v-btn__overlay"></span>
                        <span className="v-btn__underlay"></span>
                        <span className="v-btn__content" data-no-activator="">
                          <PrevPageIcon />
                        </span>
                      </button>
                    </li>
                    <li
                      className="v-pagination__prev"
                      data-test="v-pagination-prev"
                    >
                      <button
                        type="button"
                        disabled=""
                        aria-label="Previous page"
                        aria-disabled="true"
                      >
                        
                        <span className="">
                         <PrevArrowIcon/>
                        </span>
                      </button>
                    </li>
                    <li
                      className="v-pagination__next"
                      data-test="v-pagination-next"
                    >
                      <button
                        type="button"
                       
                        disabled=""
                        aria-label="Next page"
                        aria-disabled="true"
                        className="!-scale-110"
                      >
                      
                        <span className="v-btn__content" data-no-activator="">
                         <PrevArrowIcon/>
                          
                        </span>
                      </button>
                    </li>
                    <li
                      className="v-pagination__last"
                      data-test="v-pagination-last"
                    >
                      <button
                        type="button"
                        className="v-btn v-btn--disabled v-btn--icon v-theme--light v-btn--density-comfortable v-btn--rounded v-btn--size-default v-btn--variant-plain"
                        disabled=""
                        aria-label="Last page"
                        aria-disabled="true"
                      >
                        <span className="v-btn__overlay"></span>
                        <span className="v-btn__underlay"></span>
                        <span className="v-btn__content" data-no-activator="">
                        <NextPageIcon/>
                        </span>
                      </button>
                    </li>
                  </ul>
                  {/* <Pagination>
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
                  </Pagination> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
