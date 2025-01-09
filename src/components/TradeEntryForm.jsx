import { useState } from 'react';
import { realtimeDb } from './firebase';
import { push,set, ref } from 'firebase/database';
import CustomToast from './CustomToast';

const TradeEntryForm = () => {
  const [formData, setFormData] = useState({
    symbol: 'XAUUSD',
    dateTime: '',
    entryPriceFrom: '',
    entryPriceTo: '',
    stopLoss: '',
    target1: '',
    target2: '',
    target3: '',
    target4: '',
     comment: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const saveDataToRealtimeDB = async (data) => {
    try {
      const newTradeRef = push(ref(realtimeDb, "trades")); // Generate a unique key under "trades"
      await set(newTradeRef, data); // Save data to the generated reference
      console.log("Data saved to Realtime Database with key:", newTradeRef.key);
    } catch (e) {
      console.error("Error saving data to Realtime Database: ", e);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    await saveDataToRealtimeDB(formData);
    setFormData({
        symbol: 'XAUUSD',
        dateTime: '',
        entryPriceFrom: '',
        entryPriceTo: '',
        stopLoss: '',
        target1: '',
        target2: '',
        target3: '',
        target4: '',
         comment: '',
      })
      showToast()
  };


  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = () => {
    setIsToastVisible(true);
  };

  const hideToast = () => {
    setIsToastVisible(false);
  };

  

  return (
    <div className="w-full md:w-1/2 mx-auto p-4 bg-white shadow-md rounded-md">
      <CustomToast
        message={"trades call has a new entry"}
        show={isToastVisible}
        onClose={hideToast}
      />
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="symbol">
            Choose Symbol
          </label>
          <select
            id="symbol"
            name="symbol"
            value={formData.symbol}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
          >
            <option value="XAUUSD">XAUUSD</option>
            <option value="EURUSD">EURUSD</option>
            <option value="GBPUSD">GBPUSD</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="dateTime">
            Date & Time
          </label>
          <input
          required
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="entryPriceFrom">
              Entry Price From
            </label>
            <input
            required
              type="text"
              id="entryPriceFrom"
              name="entryPriceFrom"
              value={formData.entryPriceFrom}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="entryPriceTo">
              Entry Price To
            </label>
            <input
            required
              type="text"
              id="entryPriceTo"
              name="entryPriceTo"
              value={formData.entryPriceTo}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="stopLoss">
            Stop Loss
          </label>
          <input
          required
            type="text"
            id="stopLoss"
            name="stopLoss"
            value={formData.stopLoss}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
          />
        </div>

        {[1, 2, 3, 4].map((target) => (
          <div className="mb-4" key={target}>
            <label className="block text-gray-700 mb-2" htmlFor={`target${target}`}>
              Target {target}
            </label>
            <input
            required
              type="text"
              id={`target${target}`}
              name={`target${target}`}
              value={formData[`target${target}`]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
            />
          </div>
        ))}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="comment">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-500 text-white py-2 rounded-md  transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TradeEntryForm;

