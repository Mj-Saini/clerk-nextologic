/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from "react";
import { Container, Table, Button, Form, Dropdown } from "react-bootstrap";
import ChangeParentPopup from "./ChangeParentPopup";
import { NextPageIcon, PrevArrowIcon, PrevPageIcon } from "./common/Icons";

const DittoSettings = () => {
  const [show, setShow] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(10);
  
  return (
    <Container fluid className="p-4">
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
      <div className="d-flex justify-content-between !bg-white shadow-lg rounded-lg p-3 mb-4">
        <div className="d-flex align-items-center">
          <div className="d-flex flex-col">
            <span className="me-3 fw-bold text-base text-[#6e3b37]">
              Parent Broker:
            </span>
            <span className="text-base text-[#6e3b37]">No Parent</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <Form.Control
              type="text"
              placeholder="Max Allowed"
              style={{ width: "150px" }}
            />
            <Form.Control
              type="text"
              placeholder="Max Multiplier"
              style={{ width: "150px" }}
            />
            <Button
              onClick={() => setShow(true)}
              style={{
                background: "#C42B1E29",
                color: "#C42B1E",
                border: "none",
                textTransform: "uppercase",
                font: "600",
              }}
            >
              Change Parent
            </Button>
            <Button
              style={{
                background: "#C42B1E29",
                color: "#C42B1E",
                border: "none",
                textTransform: "uppercase",
                font: "600",
              }}
            >
              Attach Child
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="btn_light">Refresh</button>
        </div>
      </div>

      {/* Table Section */}
      <Table responsive="sm" className="mb-4">
        <thead>
          <tr>
            <th
              style={{
                textAlign: "start",
                color: "#6e3b37",
                fontSize: "12px",
              }}
            >
              Broker
            </th>
            <th
              style={{
                textAlign: "start",
                color: "#6e3b37",
                fontSize: "12px",
              }}
            >
              Child ID
            </th>
            <th
              style={{
                textAlign: "start",
                color: "#6e3b37",
                fontSize: "12px",
              }}
            >
              Multiplier
            </th>
            <th
              style={{
                textAlign: "start",
                color: "#6e3b37",
                fontSize: "12px",
              }}
            >
              Status
            </th>
            <th
              style={{
                textAlign: "start",
                color: "#6e3b37",
                fontSize: "12px",
              }}
            >
              Action
            </th>
            <th
              style={{
                textAlign: "start",
                color: "#6e3b37",
                fontSize: "12px",
              }}
            >
              Added At
            </th>
          </tr>
        </thead>
        <tbody>
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
          <li className="v-pagination__first" data-test="v-pagination-first">
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
          <li className="v-pagination__prev" data-test="v-pagination-prev">
            <button
              type="button"
              disabled=""
              aria-label="Previous page"
              aria-disabled="true"
            >
              <span className="">
                <PrevArrowIcon />
              </span>
            </button>
          </li>
          <li className="v-pagination__next" data-test="v-pagination-next">
            <button
              type="button"
              disabled=""
              aria-label="Next page"
              aria-disabled="true"
              className="!-scale-110"
            >
              <span className="v-btn__content" data-no-activator="">
                <PrevArrowIcon />
              </span>
            </button>
          </li>
          <li className="v-pagination__last" data-test="v-pagination-last">
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
                <NextPageIcon />
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

      {/* Bottom Section */}
      <div className="border p-4 d-flex align-items-center justify-content-between bg-light">
        <div>
          <h5 className="mb-2">1Cliq Ditto 🎉</h5>
          <p className="mb-3">
            Trade. Replicate. Succeed. <br />
            Trading is never gonna be the same again.
          </p>
          <Button variant="danger">Show Ditto Plans</Button>
        </div>
        <img
          src="https://via.placeholder.com/150"
          alt="Illustration"
          style={{ maxWidth: "150px" }}
        />
      </div>
    </Container>
  );
};

export default DittoSettings;
