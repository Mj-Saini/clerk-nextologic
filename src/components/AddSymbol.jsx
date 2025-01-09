import { addDoc, collection } from "firebase/firestore";
import  { useState } from "react";
import { db } from "./firebase";

const AddSymbol = () => {
  const [symbols, setSymbols] = useState([]);
  const [inputValue, setInputValue] = useState("");


  const handleAddSymbol = async () => {
    if (inputValue.trim() && !symbols.includes(inputValue.trim())) {
      const newSymbol = inputValue.trim();
      try {
        // Add to Firestore
        const docRef = await addDoc(collection(db, "symbols"), {
          name: newSymbol,
        });
        console.log("Document written with ID: ", docRef.id);

        // Add to local state
        setSymbols([...symbols, newSymbol]);
        setInputValue("");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddSymbol();
    }
  };

  const removeSymbol = (symbol) => {
    setSymbols(symbols.filter((item) => item !== symbol));
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <div className="flex space-x-2">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Add a symbol"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddSymbol}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {symbols.map((symbol, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-200 rounded px-3 py-1 text-gray-800"
          >
            <span>{symbol}</span>
            <button
              onClick={() => removeSymbol(symbol)}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default AddSymbol