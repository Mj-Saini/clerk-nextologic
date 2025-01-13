/* eslint-disable react/prop-types */
import { Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import { NextPageIcon, PrevArrowIcon, PrevPageIcon } from "./common/Icons";

const DropdownData = [{ id: 1, options: [1, 10, 25,50, 100,] }];

const BillingPagination = ({ CurrentDataa }) => {
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
  const [selectedItemsPerPage, setSelectedItemsPerPage] = useState({
    1: 10,
    2: 10,
  });

  const [openDropdownId, setOpenDropdownId] = useState(null);
  const totalPages = Math.ceil(
    data.length / selectedItemsPerPage[openDropdownId || 1]
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (num, id) => {
    setSelectedItemsPerPage((prevState) => ({
      ...prevState,    
      [id]: num,
    }));
    setCurrentPage(1);
    setOpenDropdownId(null);
    CurrentDataa(
        data.slice(0 , num && num)
      );     
  };
useEffect(() => {
if(CurrentDataa){
    CurrentDataa(data.slice(10));
}
  }, []);
;

  return (
    <div className="d-flex flex-col sm:flex-row justify-end items-end sm:items-center gap-3 mt-3 pb-3">
      {DropdownData.map((num) => (
        <Dropdown
          key={num.id}
          show={openDropdownId === num.id}
          onToggle={(isOpen) => {
            setOpenDropdownId(isOpen ? num.id : null);
          }}
        >
          <span
            style={{
              textAlign: "start",
              color: "#6e3b37",
              fontSize: "14px",
            }}
            className="me-4"
          >
            Items per page:
          </span>
          <Dropdown.Toggle variant="secondary" id={`dropdown-basic-${num.id}`}>
            {selectedItemsPerPage[num.id]}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {num.options.map((option) => (
              <Dropdown.Item
                key={option}
                onClick={() => handleItemsPerPageChange(option, num.id)}
              >
                {option}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      ))}

      <span
        style={{
          textAlign: "start",
          color: "#6e3b37",
          fontSize: "14px",
        }}
      >
        {`${
          (currentPage - 1) * selectedItemsPerPage[openDropdownId || 1] + 1
        }-${Math.min(
          currentPage * selectedItemsPerPage[openDropdownId || 1],
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
  );
};

export default BillingPagination;
