/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { db, realtimeDb } from "./firebase";
import { push, set, ref } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import Select from "react-select";

const TradeEntryForm = ({ showToast }) => {
  const navigate = useNavigate();
  const [symbols, setSymbols] = useState([]);
  const [formData, setFormData] = useState({
  
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
        const fetchSymbols = async () => {
          try {
            const symbolsCollection = collection(db, "symbols"); // Firestore collection
            const snapshot = await getDocs(symbolsCollection);
            const symbolsData = snapshot.docs.map((doc) => ({
              value: doc.data().name,
              label: doc.data().name,
            })); // Map to React-Select format
            setSymbols(symbolsData);
          } catch (error) {
            console.error("Error fetching symbols: ", error);
          }
        };
    
        fetchSymbols();
      }, [db]);
    
      const handleSymbolChange = (selectedOption) => {
        setFormData({ ...formData, symbol: selectedOption ? selectedOption.value : "" });
      };
  

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

    await saveDataToRealtimeDB(dataToSave);
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
    <div className="w-full md:w-1/2 mx-auto p-4 bg-white shadow-md rounded-md">
      <form onSubmit={handleSubmit}>
     

      <div className="mb-4">
           <label className="block text-gray-700 mb-2" htmlFor="symbol">
             Choose Symbol
           </label>
           <Select
             options={symbols}
             isClearable
             placeholder="Search or select a symbol"
             onChange={handleSymbolChange}
             className="w-full"
           />
         </div>


        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="dateTime">
            Date & Time
          </label>
          <input
            // required
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
            <label
              className="block text-gray-700 mb-2"
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
            <label
              className="block text-gray-700 mb-2"
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




// /* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";
// import { getFirestore, collection, getDocs } from "firebase/firestore";
// import { push, set, ref } from "firebase/database";
// import { realtimeDb } from "./firebase";
// import { useNavigate } from "react-router-dom";
// import Select from "react-select";

// const TradeEntryForm = ({ showToast }) => {
//   const navigate = useNavigate();
//   const [symbols, setSymbols] = useState([]);
//   const [formData, setFormData] = useState({
//     symbol: "",
//     dateTime: "",
//     entryPriceFrom: "",
//     entryPriceTo: "",
//     stopLoss: "",
//     target1: "",
//     target2: "",
//     target3: "",
//     target4: "",
//     comment: "",
//   });
//   const db = getFirestore();

//   useEffect(() => {
//     const fetchSymbols = async () => {
//       try {
//         const symbolsCollection = collection(db, "symbols"); // Firestore collection
//         const snapshot = await getDocs(symbolsCollection);
//         const symbolsData = snapshot.docs.map((doc) => ({
//           value: doc.data().name,
//           label: doc.data().name,
//         })); // Map to React-Select format
//         setSymbols(symbolsData);
//       } catch (error) {
//         console.error("Error fetching symbols: ", error);
//       }
//     };

//     fetchSymbols();
//   }, [db]);

//   const handleSymbolChange = (selectedOption) => {
//     setFormData({ ...formData, symbol: selectedOption ? selectedOption.value : "" });
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const saveDataToRealtimeDB = async (data) => {
//     try {
//       const newTradeRef = push(ref(realtimeDb, "trades")); // Generate unique key
//       await set(newTradeRef, data); // Save data
//     } catch (e) {
//       console.error("Error saving data to Realtime Database: ", e);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const dataToSave = {
//       ...formData,
//       dateTime: formData.dateTime || new Date().toISOString(),
//     };

//     await saveDataToRealtimeDB(dataToSave);
//     setFormData({
//       symbol: "",
//       dateTime: "",
//       entryPriceFrom: "",
//       entryPriceTo: "",
//       stopLoss: "",
//       target1: "",
//       target2: "",
//       target3: "",
//       target4: "",
//       comment: "",
//     });
//     showToast();
//     setTimeout(() => {
//       navigate("/admin-dashboard/trade-call");
//     }, 2000);
//   };

//   return (
//     <div className="w-full md:w-1/2 mx-auto p-4 bg-white shadow-md rounded-md">
//       <form onSubmit={handleSubmit}>
//         {/* Symbol Searchable Dropdown */}
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2" htmlFor="symbol">
//             Choose Symbol
//           </label>
//           <Select
//             options={symbols}
//             isClearable
//             placeholder="Search or select a symbol"
//             onChange={handleSymbolChange}
//             className="w-full"
//           />
//         </div>

//         {/* Date & Time */}
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2" htmlFor="dateTime">
//             Date & Time
//           </label>
//           <input
//             type="datetime-local"
//             id="dateTime"
//             name="dateTime"
//             value={formData.dateTime}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
//           />
//         </div>

//         {/* Entry Price Fields */}
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <div>
//             <label className="block text-gray-700 mb-2" htmlFor="entryPriceFrom">
//               Entry Price From
//             </label>
//             <input
//               required
//               type="text"
//               id="entryPriceFrom"
//               name="entryPriceFrom"
//               value={formData.entryPriceFrom}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-2" htmlFor="entryPriceTo">
//               Entry Price To
//             </label>
//             <input
//               required
//               type="text"
//               id="entryPriceTo"
//               name="entryPriceTo"
//               value={formData.entryPriceTo}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
//             />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TradeEntryForm;
