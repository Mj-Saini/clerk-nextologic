/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { db, realtimeDb } from "./firebase";
import { push, set, ref, onValue, update, get } from "firebase/database";
import { useNavigate, useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import Select from "react-select";

const TradeEntryForm = ({ showToast, setAddBroker }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [symbols, setSymbols] = useState([]);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    symbol: "",
    dateTime: "",
    entryPriceFrom: "",
    entryPriceTo: "",
    stopLoss: "",
    target1: "",
    target2: "",
    target3: "",
    target4: "",
    comment: "",
    position: "",
    targetsChecked: {
      target1: false,
      target2: false,
      target3: false,
      target4: false,
    },
  });
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
            setData(tradeData);
            if (id) {
              const matchedData = tradeData.find((trade) => trade.id === id);
              if (matchedData) {
                // Format dateTime if it's available
                const formattedDateTime = matchedData.dateTime
                  ? new Date(matchedData.dateTime).toISOString().slice(0, 16)
                  : ""; // Format to 'YYYY-MM-DDTHH:mm'
                setFormData({
                  ...matchedData,
                  dateTime: formattedDateTime,
                });
              }
              showToast();
            }
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
  }, [id]);

  useEffect(() => {
    const fetchSymbols = async () => {
      try {
        const symbolsRef = ref(realtimeDb, "symbols");
        const snapshot = await get(symbolsRef);
        if (snapshot.exists()) {
          const data = snapshot.val();

          const symbolsData = Object.values(data).map((item) => ({
            value: item.name,
            label: item.name,
          }));
          setSymbols(symbolsData);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching symbols: ", error);
      }
    };

    fetchSymbols();
  }, [db]);
  const handleSymbolChange = (selectedOption) => {
    setFormData({
      ...formData,
      symbol: selectedOption ? selectedOption.value : "",
    });
  };

  const handleCheckboxChange = (target, isChecked) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      targetsChecked: {
        ...prevFormData.targetsChecked,
        [target]: isChecked,
      },
    }));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const updateDataInRealtimeDB = async (data) => {
    try {
      const tradeRef = ref(realtimeDb, `trades/${id}`);
      await update(tradeRef, data);
      console.log("Data updated in Realtime Database for ID:", id);
    } catch (e) {
      console.error("Error updating data in Realtime Database: ", e);
    }
  };

  const saveDataToRealtimeDB = async (data) => {
    try {
      const newTradeRef = push(ref(realtimeDb, "trades"));
      await set(newTradeRef, data);
      console.log("Data saved to Realtime Database with key:", newTradeRef.key);
    } catch (e) {
      console.error("Error saving data to Realtime Database: ", e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (!formData.dateTime) {
      const currentDateTime = new Date();
      const formattedDateTime = currentDateTime.toISOString();
      setFormData((prev) => ({
        ...prev,
        dateTime: formattedDateTime,
      }));
      console.log(
        "Formatted DateTime with Timezone:",
        currentDateTime.toLocaleString()
      );
    }

    const dataToSave = {
      ...formData,
      dateTime: formData.dateTime || new Date().toISOString(),
    };

    if (id) {
      await updateDataInRealtimeDB(dataToSave);
    } else {
      await saveDataToRealtimeDB(dataToSave);
    }
    setFormData({
      symbol: "XAUUSD",
      dateTime: "",
      entryPriceFrom: "",
      entryPriceTo: "",
      stopLoss: "",
      target1: "",
      target2: "",
      target3: "",
      target4: "",
      comment: "",
      position: "",
      targetsChecked: {
        target1: "",
        target2: "",
        target3: "",
        target4: "",
      },
    });
    setAddBroker(false);
  };

  return (
    <div
      id="TradeForm"
      className="w-full md:w-1/2 mx-auto p-3 bg-white shadow-lg rounded-lg z-10"
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block text-[#6b3e37] mb-1" htmlFor="symbol">
            Choose Symbol
          </label>
          <Select
            options={symbols}
            value={symbols.find((symbol) => symbol.value === formData.symbol)}
            placeholder="Search or select a symbol"
            onChange={handleSymbolChange}
            className="w-full outline-none"
            styles={{
              control: (provided, state) => ({
                ...provided,
                height: "30px",
                minHeight: "30px",
                borderRadius: "0.375rem",
                outline: "none",
                boxShadow: "none",
                borderColor: state.isFocused ? "#6b3e37" : "#6b3e37",
              }),
              singleValue: (provided) => ({
                ...provided,
                color: "#6b3e37",
                outline: "none",
                boxShadow: "none",
              }),
              menu: (provided) => ({
                ...provided,
                color: "#6b3e37",
                outline: "none",
                boxShadow: "none",
              }),
              valueContainer: (provided) => ({
                ...provided,
                height: "30px",
                padding: "0",
                boxShadow: "none",
              }),

              indicatorsContainer: (provided) => ({
                ...provided,
                height: "30px",
                boxShadow: "none",
              }),
            }}
          />
        </div>
        <div className="mb-2">
          <label className="block text-[#6b3e37] mb-1" htmlFor="dateTime">
            Date & Time
          </label>
          <input
            // required
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 text-[#97514b] rounded-md outline-none "
          />
        </div>
        <div className="mb-2">
          <label className="block text-[#6b3e37] mb-1" htmlFor="entryPriceFrom">
            position
          </label>
          <input
            required
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 text-[#97514b] rounded-md outline-none "
          />
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-2">
          <div>
            <label
              className="block text-[#6b3e37] mb-1"
              htmlFor="entryPriceFrom"
            >
              Entry Price From
            </label>
            <input
              required
              type="text"
              id="entryPriceFrom"
              name="entryPriceFrom"
              value={formData.entryPriceFrom}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 text-[#97514b] rounded-md outline-none "
            />
          </div>
          <div>
            <label className="block text-[#6b3e37] mb-1" htmlFor="entryPriceTo">
              Entry Price To
            </label>
            <input
              required
              type="text"
              id="entryPriceTo"
              name="entryPriceTo"
              value={formData.entryPriceTo}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 text-[#97514b] rounded-md outline-none "
            />
          </div>
        </div>

        <div className="mb-2">
          <label className="block text-[#6b3e37] mb-1" htmlFor="stopLoss">
            Stop Loss
          </label>
          <input
            required
            type="text"
            id="stopLoss"
            name="stopLoss"
            value={formData.stopLoss}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 text-[#97514b] rounded-md outline-none "
          />
        </div>

        <div className="mb-2 grid grid-cols-2 gap-x-4 gap-y-2">
          {[1, 2, 3, 4].map((target) => (
            <div key={target}>
              <label
                className="block text-[#6b3e37] mb-1"
                htmlFor={`target${target}`}
              >
                Target {target}
              </label>
              <div className=" d-flex align-items-center gap-2">
                <input
                  className="w-[24px] h-[24px]"
                  type="checkbox"
                  // checked={!!formData.targetsChecked[`target${target}`]}
                  onChange={(e) =>
                    handleCheckboxChange(`target${target}`, e.target.checked)
                  }
                />
                <input
                  required={target === 1}
                  type="text"
                  id={`target${target}`}
                  name={`target${target}`}
                  value={formData[`target${target}`]}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 text-[#97514b] rounded-md outline-none"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mb-2">
          <label className="block text-[#6b3e37] mb-1" htmlFor="comment">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows="4"
            className="w-full h-[50px] p-2 border border-gray-300 text-[#97514b] rounded-md outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full btn_dark text-white py-0 h-[30px] rounded-md  transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TradeEntryForm;
