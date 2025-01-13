/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from "react";
import { Container, Table, Button, Form, Dropdown } from "react-bootstrap";
import ChangeParentPopup from "./ChangeParentPopup";
import { NextPageIcon, PrevArrowIcon, PrevPageIcon } from "./common/Icons";
import dittoPlan from "../assets/images/png/ditto-plan-img.png";

const data = [
  {
    planName: "Go Cliq",
    receiptId: "Cw8L5_1732189588601",
    startDate: "28-11-2024",
    endDate: "25-12-2024",
    validity: 30,
    allowedBrokers: 7,
    amount: 1886,
    planValidity: "EXPIRED",
    paymentStatus: "PURCHASED",
    purchasedAt: "28-11-24, 09:15",
  },
  {
    planName: "Go Cliq",
    receiptId: "pfw2Eq_173218874820",
    startDate: "17-10-2024",
    endDate: "15-11-2024",
    validity: 30,
    allowedBrokers: 7,
    amount: 1886,
    planValidity: "EXPIRED",
    paymentStatus: "PURCHASED",
    purchasedAt: "17-10-24, 09:49",
  },
];
const DittoSettings = () => {
  const [show, setShow] = useState(false);
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
    <div className="py-2">
      {show && (
        <div className="fixed top-0 left-0 h-screen w-full flex justify-center items-center ">
          <div
            onClick={() => setShow(false)}
            className="fixed top-0 left-0 h-screen w-full flex justify-center items-center bg-black/50"
          ></div>

          <ChangeParentPopup setShow={setShow} show={show} />
        </div>
      )}
      {/* Parent Broker Section */}

      <div className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-3 mb-2 ">
        {/* Parent Broker Section */}
        <div className="flex flex-col lg:items-center lg:flex-row gap-2 w-full lg:w-4/5">
          <div className="flex flex-col mb-4 sm:mb-0 text-base text-[#6e3b37]">
            <span className="font-medium mr-2 whitespace-nowrap">
              Parent Broker:
            </span>
            <span className="font-normal">No Parent</span>
          </div>{" "}
          <div className="flex flex-wrap lg:flex-nowrap w-full">
            <div className="w-full sm:w-1/2 lg:w-1/4 p-1">
              <button
                className="bg-gray-100 text-gray-400 border whitespace-nowrap border-gray-300 px-4 py-2 rounded cursor-not-allowed w-full"
                disabled
              >
                Max Allowed...
              </button>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-1">
              <button
                className="bg-gray-100 text-gray-400 border whitespace-nowrap border-gray-300 px-4 py-2 rounded cursor-not-allowed w-full"
                disabled
              >
                Max multiple...
              </button>
            </div>
            {/* Functional Buttons */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-1">
              <button className="bg-red-100 text-red-600 border whitespace-nowrap border-red-400 px-4 py-2 rounded hover:bg-red-200 w-full">
                Change Parent
              </button>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-1">
              <button className="bg-red-100 text-red-600 border whitespace-nowrap border-red-400 px-4 py-2 rounded hover:bg-red-200 w-full">
                Attach Child
              </button>
            </div>
            <div className="w-full sm:w-1/2 p-1 block lg:hidden">
              <button className="bg-white text-red-600 border border-red-400 px-4 py-2 rounded hover:bg-red-50 w-full">
                Refresh
              </button>
            </div>
          </div>
        </div>

        <div className="space-x-2 hidden lg:flex">
          <button className="bg-white text-red-600 border border-red-400 px-4 py-2 rounded hover:bg-red-50">
            Refresh
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="!bg-white shadow-lg rounded-lg p-3">
        <div className="overflow-auto">
          <div className="w-[1100px] xl:w-full">
            <Table responsive="sm" className="mb-4">
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "start",
                      color: "#6e3b37",
                      fontSize: "12px",
                      fontWeight: "normal",
                    }}
                  >
                    Broker
                  </th>
                  <th
                    style={{
                      textAlign: "start",
                      color: "#6e3b37",
                      fontSize: "12px",
                      fontWeight: "normal",
                    }}
                  >
                    Child ID
                  </th>
                  <th
                    style={{
                      textAlign: "start",
                      color: "#6e3b37",
                      fontSize: "12px",
                      fontWeight: "normal",
                    }}
                  >
                    Multiplier
                  </th>
                  <th
                    style={{
                      textAlign: "start",
                      color: "#6e3b37",
                      fontSize: "12px",
                      fontWeight: "normal",
                    }}
                  >
                    Status
                  </th>
                  <th
                    style={{
                      textAlign: "start",
                      color: "#6e3b37",
                      fontSize: "12px",
                      fontWeight: "normal",
                    }}
                  >
                    Action
                  </th>
                  <th
                    style={{
                      textAlign: "start",
                      color: "#6e3b37",
                      fontSize: "12px",
                      fontWeight: "normal",
                    }}
                  >
                    Added At
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(currentData) && currentData.length > 0 ? (
                  currentData.map((subscription, index) => (
                    <tr key={index}>
                      <td
                        className={` ${
                          index === subscription.length - 1 ? "!border-0" : ""
                        }`}
                        style={{
                          textAlign: "start",
                          color: "#6e3b37",
                          fontSize: "14px",
                        }}
                      >
                        {subscription.planName}
                      </td>
                      <td
                        className={` ${
                          index === subscription.length - 1 ? "!border-0" : ""
                        }`}
                        style={{
                          textAlign: "start",
                          color: "#6e3b37",
                          fontSize: "14px",
                        }}
                      >
                        {subscription.receiptId}
                      </td>
                      <td
                        className={` ${
                          index === subscription.length - 1 ? "!border-0" : ""
                        }`}
                        style={{
                          textAlign: "start",
                          color: "#6e3b37",
                          fontSize: "14px",
                        }}
                      >
                        {subscription.startDate}
                      </td>
                      <td
                        className={` ${
                          index === subscription.length - 1 ? "!border-0" : ""
                        }`}
                        style={{
                          textAlign: "start",
                          color: "#6e3b37",
                          fontSize: "14px",
                        }}
                      >
                        {subscription.endDate}
                      </td>
                      <td
                        className={` ${
                          index === subscription.length - 1 ? "!border-0" : ""
                        }`}
                        style={{
                          textAlign: "start",
                          color: "#6e3b37",
                          fontSize: "14px",
                        }}
                      >
                        {subscription.validity}
                      </td>
                      <td
                        className={` ${
                          index === subscription.length - 1 ? "!border-0" : ""
                        }`}
                        style={{
                          textAlign: "start",
                          color: "#6e3b37",
                          fontSize: "14px",
                        }}
                      >
                        {subscription.allowedBrokers}
                      </td>
                      <td
                        className={` ${
                          index === subscription.length - 1 ? "!border-0" : ""
                        }`}
                        style={{
                          textAlign: "start",
                          color: "#6e3b37",
                          fontSize: "14px",
                        }}
                      >
                        {subscription.amount}
                      </td>
                      <td
                        className={` ${
                          index === subscription.length - 1 ? "!border-0" : ""
                        }`}
                        style={{
                          textAlign: "start",
                          color: "#6e3b37",
                          fontSize: "14px",
                        }}
                      >
                        <span
                          className={`badge !rounded-2xl !text-[13px]  ${
                            subscription.planValidity === "EXPIRED"
                              ? "bg-[#C42B1E29] !text-[#C42B1E]"
                              : "bg-success"
                          }`}
                        >
                          {subscription.planValidity}
                        </span>
                      </td>
                      <td
                        className={` ${
                          index === subscription.length - 1 ? "!border-0" : ""
                        }`}
                        style={{
                          textAlign: "start",
                          color: "#6e3b37",
                          fontSize: "14px",
                        }}
                      >
                        <span
                          className={`badge !rounded-2xl !text-[13px] ${
                            subscription.paymentStatus === "PURCHASED"
                              ? "bg-[#4caf5029] !text-[#4caf50]"
                              : "bg-secondary"
                          }`}
                        >
                          {subscription.paymentStatus}
                        </span>
                      </td>
                      <td
                        className={` ${
                          index === subscription.length - 1 ? "!border-0" : ""
                        }`}
                        style={{
                          textAlign: "start",
                          color: "#6e3b37",
                          fontSize: "14px",
                        }}
                      >
                        {subscription.purchasedAt}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      style={{
                        textAlign: "start",
                        color: "#6e3b37",
                        fontSize: "14px",
                      }}
                      className="text-center border-0"
                    >
                      No data available
                    </td>
                  </tr>
                )}
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

      {/* Bottom Section */}
      <div className="border p-4 d-flex flex-col-reverse sm:flex-row gap-3 justify-center sm:!justify-start align-items-center justify-content-between bg-white shadow-lg mt-2 relative  rounded-lg">
        <div className="max-sm:text-center sm:text-start">
          <h5 className="mb-2 text-[#c42b1e] text-lg md:text-xl">
            1Cliq Ditto 🎉
          </h5>
          <p className="mb-3 text-base text-[#6e3b37]">
            Trade. Replicate. Succeed. <br />
            Trading is never gonna be the same again.
          </p>
          <Button variant="danger" className="!text-xs !uppercase !font-bold">
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
  );
};

export default DittoSettings;
