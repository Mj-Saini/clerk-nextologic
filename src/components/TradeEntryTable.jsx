/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { realtimeDb } from "./firebase";
import { onValue, ref, remove } from "firebase/database";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomToast from "./CustomToast";

const TradeEntryTable = () => {
  const [data, setData] = useState([]);
  const [activePopupIndex, setActivePopupIndex] = useState(null);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [previousData, setPreviousData] = useState([]);

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
    <div className="table-responsive mt-5" style={{ paddingBottom: "150px" }}>
      <CustomToast
        message={"Table is Updated."}
        show={isToastVisible}
      />
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
  );
};

export default TradeEntryTable;
