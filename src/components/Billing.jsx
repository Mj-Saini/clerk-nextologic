import { Link } from "react-router-dom";
import { GoBackIcon } from "./common/Icons";
import { Dropdown, Pagination } from "react-bootstrap";
import { useState } from "react";

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
    <div className="py-4">
      <div className="mb-5">
        <h2 className="h4 mb-3 d-flex align-items-center gap-2">
          <Link to={"/dashboard"}>
            <GoBackIcon />
          </Link>
          1Cliq Subscription
        </h2>
        <div className="table-responsive bg-white rounded shadow-sm">
          <table className="table table-bordered table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th style={{fontSize:"14px"}}>Plan Name</th>
                <th style={{fontSize:"14px"}}>Receipt Id</th>
                <th style={{fontSize:"14px"}}>Start Date</th>
                <th style={{fontSize:"14px"}}>End Date</th>
                <th style={{fontSize:"14px"}}>Validity</th>
                <th style={{fontSize:"14px"}}>Allowed Brokers</th>
                <th style={{fontSize:"14px"}}>Amount</th>
                <th style={{fontSize:"14px"}}>Plan Validity</th>
                <th style={{fontSize:"14px"}}>Payment</th>
                <th style={{fontSize:"14px"}}>Purchased At</th>
              </tr>
            </thead>
            <tbody>
              {data.map((subscription, index) => (
                <tr key={index}>
                  <td style={{fontSize:"14px"}}>{subscription.planName}</td>
                  <td style={{fontSize:"14px"}}>{subscription.receiptId}</td>
                  <td style={{fontSize:"14px"}}>{subscription.startDate}</td>
                  <td style={{fontSize:"14px"}}>{subscription.endDate}</td>
                  <td style={{fontSize:"14px"}}>{subscription.validity}</td>
                  <td style={{fontSize:"14px"}}>{subscription.allowedBrokers}</td>
                  <td style={{fontSize:"14px"}}>{subscription.amount}</td>
                  <td style={{fontSize:"14px"}}>
                    <span
                      className={`badge ${
                        subscription.planValidity === "EXPIRED"
                          ? "bg-danger"
                          : "bg-success"
                      }`}
                    >
                      {subscription.planValidity}
                    </span>
                  </td>
                  <td style={{fontSize:"14px"}}>
                    <span
                      className={`badge ${
                        subscription.paymentStatus === "PURCHASED"
                          ? "bg-success"
                          : "bg-secondary"
                      }`}
                    >
                      {subscription.paymentStatus}
                    </span>
                  </td>
                  <td style={{fontSize:"14px"}}>{subscription.purchasedAt}</td>
                </tr>
              ))}
              
            </tbody>
          </table>
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

      {/* Ditto Subscription Section */}
      <div>
        <h2 className="h4 mb-3">Ditto Subscription</h2>
        <div className="table-responsive bg-white rounded shadow-sm">
          <table className="table table-bordered table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>Plan Name</th>
                <th>Receipt Id</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Validity</th>
                <th>Allowed Brokers</th>
                <th>Amount</th>
                <th>Plan Type</th>
                <th>Plan Validity</th>
                <th>Payment</th>
                <th>Purchased At</th>
              </tr>
            </thead>
            <tbody>
              {[].length > 0 ? (
                [].map((subscription, index) => (
                  <tr key={index}>
                    <td>{subscription.planName}</td>
                    <td>{subscription.receiptId}</td>
                    <td>{subscription.startDate}</td>
                    <td>{subscription.endDate}</td>
                    <td>{subscription.validity}</td>
                    <td>{subscription.allowedBrokers}</td>
                    <td>{subscription.amount}</td>
                    <td>{subscription.planType}</td>
                    <td>{subscription.planValidity}</td>
                    <td>{subscription.paymentStatus}</td>
                    <td>{subscription.purchasedAt}</td>
                  </tr>
                  
                ))
              ) : (
                <tr>
                  <td colSpan="11" className="text-center text-muted">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>

        
        </div>
      </div>
    </div>
  );
};

export default Billing;
