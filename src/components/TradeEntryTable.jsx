/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { realtimeDb } from "./firebase";
import { onValue, ref, remove } from "firebase/database";
import { Dropdown, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomToast from "./CustomToast";
import { NextPageIcon, PrevArrowIcon, PrevPageIcon } from "./common/Icons";

const TradeEntryTable = () => {
  const [data, setData] = useState([]);
  const [activePopupIndex, setActivePopupIndex] = useState(null);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [previousData, setPreviousData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (page) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    };

  const showToast = () => {
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false); // Hide the toast after 2 seconds
    }, 2000);
  };
  const togglePopup = (index) => {
    setActivePopupIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const fetchData = () => {
      const tradesRef = ref(realtimeDb, "trades");

      onValue(
        tradesRef,
        (snapshot) => {
          if (snapshot.exists()) {
            const tradeData = Object.entries(snapshot.val()).map(
              ([id, value]) => ({
                id,
                ...value,
              })
            );
            if (tradeData.length > previousData.length) {

            showToast();}
            setData(tradeData);

          } else {
            console.log("No data available");
            setData([]);
          }
        },
        (error) => {
          console.error("Error fetching data from Realtime Database: ", error);
        }
      );
    };

    fetchData();
  }, []);

  const formatDate = (dateTime) => {
    const date = new Date(dateTime);
    return isNaN(date.getTime()) ? "Invalid Date" : date.toLocaleDateString();
  };

  // Function to delete data from Firebase
  const deleteData = async (id) => {
    const entryRef = ref(realtimeDb, `trades/${id}`);
    try {
      await remove(entryRef);
      console.log(`Entry with ID: ${id} deleted successfully.`);
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  };
  const isAdminDashboard = location.pathname.startsWith("/admin-dashboard");

  return (
    <div className="mt-5 bg-white shadow-lg rounded-lg p-2" style={{ paddingBottom: "150px" }}>
      <CustomToast
        message={"Table is Updated."}
        show={isToastVisible}
      />
     <div className="table-responsive">
     <div className="w-[1100px] xl:w-full">
        <Table>
          <thead className="">
            <tr>
              <th
                style={{
                  textAlign: "start",
                  color: "#6e3b37",
                  fontSize: "12px",
                }}
                scope="col"
              >
                No
              </th>
              <th
                style={{
                  textAlign: "start",
                  color: "#6e3b37",
                  fontSize: "12px",
                }}
                scope="col"
              >
                Date
              </th>
              <th
                style={{
                  textAlign: "start",
                  color: "#6e3b37",
                  fontSize: "12px",
                }}
                scope="col"
              >
                Time
              </th>
              <th
                style={{
                  textAlign: "start",
                  color: "#6e3b37",
                  fontSize: "12px",
                }}
                scope="col"
              >
                Symbol
              </th>
              <th
                style={{
                  textAlign: "start",
                  color: "#6e3b37",
                  fontSize: "12px",
                }}
                scope="col"
              >
                Entry Price From
              </th>
              <th
                style={{
                  textAlign: "start",
                  color: "#6e3b37",
                  fontSize: "12px",
                }}
                scope="col"
              >
                Entry Price To
              </th>
              <th
                style={{
                  textAlign: "start",
                  color: "#6e3b37",
                  fontSize: "12px",
                }}
                scope="col"
              >
                Stop Loss
              </th>
              <th
                style={{
                  textAlign: "start",
                  color: "#6e3b37",
                  fontSize: "12px",
                }}
                scope="col"
              >
                Target 1
              </th>
              <th
                style={{
                  textAlign: "start",
                  color: "#6e3b37",
                  fontSize: "12px",
                }}
                scope="col"
              >
                Target 2
              </th>
              <th
                style={{
                  textAlign: "start",
                  color: "#6e3b37",
                  fontSize: "12px",
                }}
                scope="col"
              >
                Target 3
              </th>
              <th
                style={{
                  textAlign: "start",
                  color: "#6e3b37",
                  fontSize: "12px",
                }}
                scope="col"
              >
                Target 4
              </th>
              <th
                style={{
                  textAlign: "start",
                  color: "#6e3b37",
                  fontSize: "12px",
                }}
                scope="col"
              >
                Comment
              </th>
              {isAdminDashboard && <th scope="col">Action</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="position-relative">
                <td
                  style={{
                    textAlign: "start",
                    color: "#6e3b37",
                    fontSize: "14px",
                  }}
                  className="ps-3 border-0"
                >
                  {index + 1}
                </td>
                <td
                  style={{
                    textAlign: "start",
                    color: "#6e3b37",
                    fontSize: "14px",
                  }}
                  className="ps-3 border-0"
                >
                  {formatDate(row.dateTime)}
                </td>
                <td
                  style={{
                    textAlign: "start",
                    color: "#6e3b37",
                    fontSize: "14px",
                  }}
                  className="ps-3 border-0"
                >
                  {new Date(row.dateTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td
                  style={{
                    textAlign: "start",
                    color: "#6e3b37",
                    fontSize: "14px",
                  }}
                  className="ps-3 border-0"
                >
                  {row.symbol}
                </td>
                <td
                  style={{
                    textAlign: "start",
                    color: "#6e3b37",
                    fontSize: "14px",
                  }}
                  className="ps-3 border-0"
                >
                  {row.entryPriceFrom}
                </td>
                <td
                  style={{
                    textAlign: "start",
                    color: "#6e3b37",
                    fontSize: "14px",
                  }}
                  className="ps-3 border-0"
                >
                  {row.entryPriceTo}
                </td>
                <td
                  style={{
                    textAlign: "start",
                    color: "#6e3b37",
                    fontSize: "14px",
                  }}
                  className="ps-3 border-0"
                >
                  {row.stopLoss}
                </td>
                <td
                  style={{
                    textAlign: "start",
                    color: "#6e3b37",
                    fontSize: "14px",
                  }}
                  className="ps-3 border-0 table-success"
                >
                  {row.target1}
                </td>
                <td
                  style={{
                    textAlign: "start",
                    color: "#6e3b37",
                    fontSize: "14px",
                  }}
                  className="ps-3 border-0 table-success"
                >
                  {row.target2}
                </td>
                <td
                  style={{
                    textAlign: "start",
                    color: "#6e3b37",
                    fontSize: "14px",
                  }}
                  className="ps-3 border-0"
                >
                  {row.target3}
                </td>
                <td
                  style={{
                    textAlign: "start",
                    color: "#6e3b37",
                    fontSize: "14px",
                  }}
                  className="ps-3 border-0"
                >
                  {row.target4}
                </td>
                <td
                  style={{
                    textAlign: "start",
                    color: "#6e3b37",
                    fontSize: "14px",
                  }}
                  className="ps-3 border-0"
                >
                  {row.comment}
                </td>
                {isAdminDashboard && (
                  <td
                    style={{
                      textAlign: "start",
                      color: "#6e3b37",
                      fontSize: "14px",
                    }}
                    className="ps-3 border-0"
                  >
                    <div
                      onClick={() => togglePopup(index)}
                      className="d-flex flex-col gap-1 cursor-pointer mx-auto justify-items-center"
                      style={{ width: "10px" }}
                    >
                      <span
                        style={{
                          display: "block",
                          width: "4px",
                          height: "4px",
                          borderRadius: "20px",
                          background: "black",
                        }}
                      ></span>
                      <span
                        style={{
                          display: "block",
                          width: "4px",
                          height: "4px",
                          borderRadius: "20px",
                          background: "black",
                        }}
                      ></span>
                      <span
                        style={{
                          display: "block",
                          width: "4px",
                          height: "4px",
                          borderRadius: "20px",
                          background: "black",
                        }}
                      ></span>
                    </div>
                    {activePopupIndex === index && (
                      <div className="absolute top-10 right-10 bg-white shadow-md rounded-lg w-48 z-40">
                        <button
                          onClick={() => togglePopup(index)}
                          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                          &times;
                        </button>
                        <ul className="flex flex-col items-start p-4 space-y-2">
                          <li>
                            <Link
                              to={`/admin-dashboard/trade-call-form/${row.id}`}
                              className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 rounded"
                            >
                              Edit
                            </Link>
                          </li>
                          <li>
                            <button
                              onClick={() => {
                                deleteData(row.id);
                                togglePopup(index);
                              }}
                              className="w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-gray-100 rounded"
                            >
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </td>
                )}
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
                    {[5, 10, 15, 20].map((num) => (
                      <Dropdown.Item
                        key={num}
                        onClick={handlePageChange}
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
                      <span
                        className="v-btn__content opacity-30"
                        data-no-activator=""
                      >
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
                      <span className="opacity-30">
                        <PrevArrowIcon />
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
                      <span className="opacity-30" data-no-activator="">
                        <PrevArrowIcon />
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
                      <span className="opacity-30" data-no-activator="">
                        <NextPageIcon />
                      </span>
                    </button>
                  </li>
                </ul>
               
              </div>
    </div>
  );
};

export default TradeEntryTable;
