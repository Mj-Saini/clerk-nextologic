/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from "react";
import { Container, Table, Button, Form, Dropdown } from "react-bootstrap";
import ChangeParentPopup from "./ChangeParentPopup";
import { NextPageIcon, PrevArrowIcon, PrevPageIcon } from "./common/Icons";
import dittoPlan from "../assets/images/png/ditto-plan-img.png";

const DittoSettings = () => {
  const [show, setShow] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  return (
    <div className="py-4">
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
      <div className="d-flex flex-col lg:flex-row justify-content-between !bg-white shadow-lg rounded-lg p-3 mb-2">
        <div className="d-flex flex-col lg:flex-row lg:align-items-center">
          <div className="d-flex flex-col">
            <span className="me-3 fw-bold text-base text-[#6e3b37] whitespace-nowrap">
              Parent Broker:
            </span>
            <span className="text-base text-[#6e3b37]">No Parent</span>
          </div>
          <div className="flex-col lg:flex-row justify-center align-items-center gap-2 w-full hidden lg:flex">
            <span
              onClick={() => setShow(true)}
              style={{
                font: "600",
              }}
              className="w-full rounded-md p-2 bg-white border text-[#6e3b3729] whitespace-nowrap"
            >
              Max Allowed Child
            </span>
            <span
              onClick={() => setShow(true)}
              style={{
                textTransform: "uppercase",
                font: "600",
              }}
              className="w-full rounded-md p-2 bg-white border text-[#6e3b3729] whitespace-nowrap"
            >
              Max Multiplier
            </span>
            <Button
              onClick={() => setShow(true)}
              style={{
                background: "#C42B1E29",
                color: "#C42B1E",
                border: "none",
                textTransform: "uppercase",
                font: "600",
              }}
              className="w-full whitespace-nowrap"
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
              className="w-full whitespace-nowrap"
            >
              Attach Child
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap items-end lg:items-center mt-2 w-full gap-3">
          <div className="w-full sm:w-1/2">
            <span
              onClick={() => setShow(true)}
              style={{
                font: "600",
              }}
              className=" rounded-md p-2 bg-white border text-[#6e3b3729] whitespace-nowrap"
            >
              Max Allowed Child
            </span>
            <span
              onClick={() => setShow(true)}
              style={{
                textTransform: "uppercase",
                font: "600",
              }}
              className=" rounded-md p-2 bg-white border text-[#6e3b3729] whitespace-nowrap"
            >
              Max Multiplier
            </span>
            <button className="btn_light">Refresh</button>
          </div>
          <div className="w-full sm:w-1/2">
            <button className="btn_dark">Refresh</button>
            <button className="btn_dark">Refresh</button>
          </div>
        </div>
      </div>
      {/* Table Section */}
      <div className="!bg-white shadow-lg rounded-lg p-3">
        <div className="overflow-auto">
          <div className="w-[1100px]">
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
          </div>
        </div>
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
                <span
                  className="v-btn__content opacity-30"
                  data-no-activator=""
                >
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
                <span className="opacity-30">
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
                <span className="opacity-30" data-no-activator="">
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
                <span className="opacity-30" data-no-activator="">
                  <NextPageIcon />
                </span>
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
