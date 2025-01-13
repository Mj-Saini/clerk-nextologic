/* eslint-disable no-unused-vars */
import { Dropdown, Pagination } from "react-bootstrap";
import { useState } from "react";
import { NextPageIcon, PrevArrowIcon, PrevPageIcon } from "./common/Icons";
import BillingPagination from "./Pagination";

const DropdownData = [
  { id: 1, options: [1, 5, 10, 15, 20] },
  { id: 2, options: [1, 5, 10, 15, 20] },
];

const Billing = () => {
 
const [currentData, setCurrentData] = useState([])
  
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
     
        <BillingPagination CurrentDataa={setCurrentData}/>
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
      
        <BillingPagination />
      </div>
    </div>
  );
};

export default Billing;
