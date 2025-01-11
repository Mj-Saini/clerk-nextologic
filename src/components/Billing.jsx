/* eslint-disable no-unused-vars */
import { Dropdown, Pagination } from "react-bootstrap";
import { useState } from "react";
import { NextPageIcon, PrevArrowIcon, PrevPageIcon } from "./common/Icons";

const Billing = () => {
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
    {
      planName: "Go Cliq",
      receiptId: "xWbLb_1732888883879",
      startDate: "09-09-2024",
      endDate: "08-10-2024",
      validity: 30,
      allowedBrokers: 3,
      amount: 1886,
      planValidity: "EXPIRED",
      paymentStatus: "PURCHASED",
      purchasedAt: "09-09-24, 13:28",
    },
  ];

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
    <div className="py-4">
      <div className="mb-5 bg-white rounded-lg shadow-lg p-3">
        <h2 className="h4 mb-3 d-flex align-items-center gap-2 text-lg md:text-xl !text-[#6e3b37]">
          1Cliq Subscription
        </h2>
        <div className="table-responsive ">
          <div className="w-[1100px] xl:w-full">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "start",
                      color: "#6e3b37",
                      fontSize: "12px",
                    }}
                  >
                    Plan Name
                  </th>
                  <th
                    style={{
                      textAlign: "start",
                      color: "#6e3b37",
                      fontSize: "12px",
                    }}
                  >
                    Receipt Id
                  </th>
                  <th
                    style={{
                      textAlign: "start",
                      color: "#6e3b37",
                      fontSize: "12px",
                    }}
                  >
                    Start Date
                  </th>
                  <th
                    style={{
                      textAlign: "start",
                      color: "#6e3b37",
                      fontSize: "12px",
                    }}
                  >
                    End Date
                  </th>
                  <th
                    style={{
                      textAlign: "start",
                      color: "#6e3b37",
                      fontSize: "12px",
                    }}
                  >
                    Validity
                  </th>
                  <th
                    style={{
                      textAlign: "start",
                      color: "#6e3b37",
                      fontSize: "12px",
                    }}
                  >
                    Allowed Brokers
                  </th>
                  <th
                    style={{
                      textAlign: "start",
                      color: "#6e3b37",
                      fontSize: "12px",
                    }}
                  >
                    Amount
                  </th>
                  <th
                    style={{
                      textAlign: "start",
                      color: "#6e3b37",
                      fontSize: "12px",
                    }}
                  >
                    Plan Validity
                  </th>
                  <th
                    style={{
                      textAlign: "start",
                      color: "#6e3b37",
                      fontSize: "12px",
                    }}
                  >
                    Payment
                  </th>
                  <th
                    style={{
                      textAlign: "start",
                      color: "#6e3b37",
                      fontSize: "12px",
                    }}
                  >
                    Purchased At
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((subscription, index) => (
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
                ))}
              </tbody>
            </table>
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

      {/* Ditto Subscription Section */}
      <div className="mb-5 bg-white rounded-lg shadow-lg p-3">
        <h2 className="h4 mb-3 text-lg md:text-xl !text-[#6e3b37]">
          Ditto Subscription
        </h2>
        <div className="table-responsive">
          <table className="table mb-0">
            <thead className="">
              <tr>
                <th
                  style={{
                    textAlign: "start",
                    color: "#6e3b37",
                    fontSize: "12px",
                  }}
                >
                  Plan Name
                </th>
                <th
                  style={{
                    textAlign: "start",
                    color: "#6e3b37",
                    fontSize: "12px",
                  }}
                >
                  Receipt Id
                </th>
                <th
                  style={{
                    textAlign: "start",
                    color: "#6e3b37",
                    fontSize: "12px",
                  }}
                >
                  Start Date
                </th>
                <th
                  style={{
                    textAlign: "start",
                    color: "#6e3b37",
                    fontSize: "12px",
                  }}
                >
                  End Date
                </th>
                <th
                  style={{
                    textAlign: "start",
                    color: "#6e3b37",
                    fontSize: "12px",
                  }}
                >
                  Validity
                </th>
                <th
                  style={{
                    textAlign: "start",
                    color: "#6e3b37",
                    fontSize: "12px",
                  }}
                >
                  Allowed Brokers
                </th>
                <th
                  style={{
                    textAlign: "start",
                    color: "#6e3b37",
                    fontSize: "12px",
                  }}
                >
                  Amount
                </th>
                <th
                  style={{
                    textAlign: "start",
                    color: "#6e3b37",
                    fontSize: "12px",
                  }}
                >
                  Plan Type
                </th>
                <th
                  style={{
                    textAlign: "start",
                    color: "#6e3b37",
                    fontSize: "12px",
                  }}
                >
                  Plan Validity
                </th>
                <th
                  style={{
                    textAlign: "start",
                    color: "#6e3b37",
                    fontSize: "12px",
                  }}
                >
                  Payment
                </th>
                <th
                  style={{
                    textAlign: "start",
                    color: "#6e3b37",
                    fontSize: "12px",
                  }}
                >
                  Purchased At
                </th>
              </tr>
            </thead>
            <tbody>
              {[].length > 0 ? (
                [].map((subscription, index) => (
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
                        index === subscription.length - 1 ? "bottom-0" : ""
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
                        index === subscription.length - 1 ? "bottom-0" : ""
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
                        index === subscription.length - 1 ? "bottom-0" : ""
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
                        index === subscription.length - 1 ? "bottom-0" : ""
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
                        index === subscription.length - 1 ? "bottom-0" : ""
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
                        index === subscription.length - 1 ? "bottom-0" : ""
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
                        index === subscription.length - 1 ? "bottom-0" : ""
                      }`}
                      style={{
                        textAlign: "start",
                        color: "#6e3b37",
                        fontSize: "14px",
                      }}
                    >
                      {subscription.planType}
                    </td>
                    <td
                      className={` ${
                        index === subscription.length - 1 ? "bottom-0" : ""
                      }`}
                      style={{
                        textAlign: "start",
                        color: "#6e3b37",
                        fontSize: "14px",
                      }}
                    >
                      {subscription.planValidity}
                    </td>
                    <td
                      className={` ${
                        index === subscription.length - 1 ? "bottom-0" : ""
                      }`}
                      style={{
                        textAlign: "start",
                        color: "#6e3b37",
                        fontSize: "14px",
                      }}
                    >
                      {subscription.paymentStatus}
                    </td>
                    <td
                      className={` ${
                        index === subscription.length - 1 ? "bottom-0" : ""
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
                    style={{
                      textAlign: "start",
                      color: "#6e3b37",
                      fontSize: "14px",
                    }}
                    colSpan="11"
                    className="text-center border-0"
                  >
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
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
    </div>
  );
};

export default Billing;
