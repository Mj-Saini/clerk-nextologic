/* eslint-disable no-unused-vars */
import { Button, Dropdown, Pagination, Table } from "react-bootstrap";
import { useNavigate, useLocation, Outlet, Link } from "react-router-dom";
import NewForm from "./NewForm";
import { useEffect, useState } from "react";
import { NextPageIcon, PrevArrowIcon, PrevPageIcon } from "./common/Icons";
import dittoPlan from "../assets/images/png/ditto-plan-img.png";
import { onValue, ref, remove } from "firebase/database";
import { realtimeDb } from "./firebase";
import TradeEntryForm from "./TradeEntryForm";
import CustomToast from "./CustomToast";

const DashboardTable = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [previousData, setPreviousData] = useState([]);
  const [addBroker, setAddBroker] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [activePopupIndex, setActivePopupIndex] = useState(null);
  if(addBroker){
    document.body.style.overflow="clip"
  }else{
    document.body.style.overflow="auto"
  }

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

  const showToast = () => {
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false); // Hide the toast after 2 seconds
    }, 2000);
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

  const handleRefresh = () => {
    window.location.reload();
  };
  const togglePopup = (index) => {
    setActivePopupIndex((prevIndex) => (prevIndex === index ? null : index));
  };
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
    <div className="">
         <CustomToast
        message={"Table is Updated."}
        show={isToastVisible}
      />
      { addBroker && (
        <div className="fixed top-0 left-0 h-screen w-full flex justify-center items-center z-[20] ">
          <div
            onClick={() => setAddBroker(false)}
            className="fixed top-0 left-0 h-screen w-full flex justify-center items-center bg-black/50"
          ></div>

          <TradeEntryForm setAddBroker={setAddBroker} />
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
        <div className="flex justify-between items-center mb-4">
          <div className=" py-3 w-full">
            {/* Table */}
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
                <button
                  onClick={handleRefresh}
                  className="btn_light max-sm:w-full text-xs px-2"
                >
                  Refresh
                </button>
              </div>
              <div>
                <button className="btn_dark shadow-sm w-full text-xs px-2">
                  Open Solo Window
                </button>
              </div>
            </div>
            {[0, 0].map((item, index) => (
              <div key={index} className="mt-4">
                {index === 0 ? (
                  <h2 className="text-[#6e3b37] text-xl md:text-2xl font-bold">
                    In Progress Calls
                  </h2>
                ) : (
                  <h2 className="text-[#6e3b37] text-xl md:text-2xl font-bold mt-5">
                    Completed Calls
                  </h2>
                )}

                <div className="  shadow-lg pe-3 bg-white rounded-lg">
                  <div
                    style={{ padding: "0 0 100px 0" }}
                    className="overflow-auto"
                  >
                    <div className=" py-3 w-[1100px] xl:w-full ">
                      <Table style={{ width: "100%" }}>
                        <thead>
                          <tr>
                            <th
                              style={{
                                textAlign: "start",
                                color: "#6e3b37",
                                fontSize: "12px",
                                fontWeight: "normal",
                              }}
                              scope="col"
                              className="ps-3"
                            >
                              S.No
                            </th>
                            <th
                              style={{
                                textAlign: "start",
                                color: "#6e3b37",
                                fontSize: "12px",
                                fontWeight: "normal",
                              }}
                              scope="col"
                            >
                              Date & Time
                            </th>
                            <th
                              style={{
                                textAlign: "start",
                                color: "#6e3b37",
                                fontSize: "12px",
                                fontWeight: "normal",
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
                                fontWeight: "normal",
                              }}
                              scope="col"
                            >
                              Position
                            </th>
                            <th
                              style={{
                                textAlign: "start",
                                color: "#6e3b37",
                                fontSize: "12px",
                                fontWeight: "normal",
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
                                fontWeight: "normal",
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
                                fontWeight: "normal",
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
                                fontWeight: "normal",
                              }}
                              scope="col"
                            >
                              Target1
                            </th>
                            <th
                              style={{
                                textAlign: "start",
                                color: "#6e3b37",
                                fontSize: "12px",
                                fontWeight: "normal",
                              }}
                              scope="col"
                            >
                              Target2
                            </th>
                            <th
                              style={{
                                textAlign: "start",
                                color: "#6e3b37",
                                fontSize: "12px",
                                fontWeight: "normal",
                              }}
                              scope="col"
                            >
                              Target3
                            </th>
                            <th
                              style={{
                                textAlign: "start",
                                color: "#6e3b37",
                                fontSize: "12px",
                                fontWeight: "normal",
                              }}
                              scope="col"
                            >
                              Target4
                            </th>
                            <th
                              style={{
                                textAlign: "start",
                                color: "#6e3b37",
                                fontSize: "12px",
                                fontWeight: "normal",
                              }}
                              scope="col"
                            >
                              Comment
                            </th>
                          {isAdminDashboard &&  <th
                              style={{
                                textAlign: "start",
                                color: "#6e3b37",
                                fontSize: "12px",
                                fontWeight: "normal",
                              }}
                              scope="col"
                            >
                              Action
                            </th>}
                          </tr>
                        </thead>
                        <tbody>
                          {currentData.map((item, index) => (
                            <tr key={item.id} className="relative">
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
                                className="border-0"
                              >
                                {formatDate(item.dateTime)}
                                <br />
                                {new Date(item.dateTime).toLocaleTimeString(
                                  [],
                                  {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  }
                                )}
                              </td>
                              <td
                                style={{
                                  textAlign: "start",
                                  color: "#6e3b37",
                                  fontSize: "14px",
                                }}
                                className="border-0"
                              >
                                {item.symbol}
                              </td>
                              <td
                                style={{
                                  textAlign: "start",
                                  color: "#6e3b37",
                                  fontSize: "14px",
                                }}
                                className="border-0"
                              >
                                {item.position}
                              </td>
                              <td
                                style={{
                                  textAlign: "start",
                                  color: "#6e3b37",
                                  fontSize: "14px",
                                }}
                                className="border-0"
                              >
                                {item.entryPriceFrom}
                              </td>
                              <td
                                style={{
                                  textAlign: "start",
                                  color: "#6e3b37",
                                  fontSize: "14px",
                                }}
                                className="border-0"
                              >
                                {item.entryPriceTo}
                              </td>
                              <td
                                style={{
                                  textAlign: "start",
                                  color: "#6e3b37",
                                  fontSize: "14px",
                                }}
                                className={`border-0`}
                              >
                                {item.stopLoss}
                              </td>
                              <td
                                style={{
                                  textAlign: "start",
                                  color: "#6e3b37",
                                  fontSize: "14px",
                                }}
                                className={`border-0 ${
                                  item?.targetsChecked?.target1 ? "!bg-[#4caf5029]" : ""
                                }`}
                              >
                                {item.target1}
                              </td>
                              <td
                                style={{
                                  textAlign: "start",
                                  color: "#6e3b37",
                                  fontSize: "14px",
                                }}
                                className={`border-0 ${
                                   item?.targetsChecked?.target2 ? "!bg-[#4caf5029]" : ""
                                }`}
                              >
                                {item.target2}
                              </td>
                              <td
                                style={{
                                  textAlign: "start",
                                  color: "#6e3b37",
                                  fontSize: "14px",
                                }}
                                className={`border-0 ${
                                   item?.targetsChecked?.target3 ? "!bg-[#4caf5029]" : ""
                                }`}
                              >
                                {item.target3}
                              </td>
                              <td
                                style={{
                                  textAlign: "start",
                                  color: "#6e3b37",
                                  fontSize: "14px",
                                }}
                                className={`border-0 ${
                                   item?.targetsChecked?.target4 ? "!bg-[#4caf5029]" : ""
                                }`}
                              >
                                {item.target4}
                              </td>

                              <td
                                style={{
                                  textAlign: "start",
                                  color: "#6e3b37",
                                  fontSize: "14px",
                                }}
                                className="border-0"
                              >
                                {item.comment}
                              </td>
                           {isAdminDashboard &&   <td
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
                                  <div className="absolute top-10 right-5 bg-white shadow-md rounded-lg w-28 z-40">
                                    <button
                                      onClick={() => togglePopup(index)}
                                      className="absolute text-xl top-2 right-2 text-gray-500 hover:text-gray-700"
                                    >
                                      &times;
                                    </button>
                                    <ul className="flex flex-col items-start p-0 mt-3 pt-2 space-y-2">
                                      <li>
                                        <Link
                                          to={`/admin-dashboard/trade-call-form/${item.id}`}
                                          className="w-full px-3 py-2 text-left text-sm text-gray-700 rounded"
                                        >
                                          Edit
                                        </Link>
                                      </li>
                                      <li>
                                        <button
                                          onClick={() => {
                                            deleteData(item.id);
                                            togglePopup(index);
                                          }}
                                          className="w-full px-3 py-2 text-left text-sm text-red-600 rounded"
                                        >
                                          Delete
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                )}
                              </td>}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
