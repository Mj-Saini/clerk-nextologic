/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { db, realtimeDb } from "./firebase";
import { push, set, ref, onValue, update } from "firebase/database";
import { useNavigate, useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import Select from "react-select";

const TradeEntryForm = ({ showToast }) => {
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
        const symbolsCollection = collection(db, "symbols");
        const snapshot = await getDocs(symbolsCollection);
        const symbolsData = snapshot.docs.map((doc) => ({
          value: doc.data().name,
          label: doc.data().name,
        }));
        setSymbols(symbolsData);
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
    });
    showToast();
    setTimeout(() => {
      navigate("/admin-dashboard/trade-call");
    }, 2000);
  };

  return (
    <div className="w-full md:w-1/2 mx-auto p-4 bg-white shadow-lg rounded-lg mt-10">
      <form onSubmit={handleSubmit}>
        {/* <div className="mb-4">
          <label className="block text-[#6b3e37] mb-2" htmlFor="symbol">
            Choose Symbol
          </label>
          <Select
            options={symbols}
            value={symbols.find(symbol => symbol.value === formData.symbol)} 
            placeholder="Search or select a symbol"
            onChange={handleSymbolChange}
            className="w-full text-[#97514b]"
          />
        </div> */}
        <div className="mb-4">
          <label className="block text-[#6b3e37] mb-2" htmlFor="symbol">
            Choose Symbol
          </label>
          <Select
            options={symbols}
            value={symbols.find((symbol) => symbol.value === formData.symbol)}
            placeholder="Search or select a symbol"
            onChange={handleSymbolChange}
            className="w-full"
            styles={{
              control: (provided) => ({
                ...provided,
                borderRadius: "0.375rem",
                padding: "0.25rem",
              }),
              singleValue: (provided) => ({
                ...provided,
                color: "#6b3e37",
              }),
              menu: (provided) => ({
                ...provided,
                color: "#6b3e37",
              }),
            }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#6b3e37] mb-2" htmlFor="dateTime">
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

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              className="block text-[#6b3e37] mb-2"
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
            <label className="block text-[#6b3e37] mb-2" htmlFor="entryPriceTo">
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

        <div className="mb-4">
          <label className="block text-[#6b3e37] mb-2" htmlFor="stopLoss">
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

        {[1, 2, 3, 4].map((target) => (
          <div className="mb-4" key={target}>
            <label
              className="block text-[#6b3e37] mb-2"
              htmlFor={`target${target}`}
            >
              Target {target}
            </label>
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
        ))}
        <div className="mb-4">
          <label className="block text-[#6b3e37] mb-2" htmlFor="comment">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border border-gray-300 text-[#97514b] rounded-md outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full btn_dark text-white py-2 rounded-md  transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TradeEntryForm;
