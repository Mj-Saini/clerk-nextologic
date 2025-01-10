import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "./firebase";

const AddSymbol = () => {
  const [symbols, setSymbols] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingSymbol, setEditingSymbol] = useState(null); // To track the symbol being edited

  useEffect(() => {
    const fetchSymbols = async () => {
      const querySnapshot = await getDocs(collection(db, "symbols"));
      const fetchedSymbols = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSymbols(fetchedSymbols);
    };

    fetchSymbols();
  }, []);

  const handleAddSymbol = async () => {
    if (
      inputValue.trim() &&
      !symbols.some((symbol) => symbol.name === inputValue.trim())
    ) {
      const newSymbol = inputValue.trim();
      try {
        // Add to Firestore
        const docRef = await addDoc(collection(db, "symbols"), {
          name: newSymbol,
        });
        console.log("Document written with ID: ", docRef.id);

        // Add to local state
        setSymbols([...symbols, { id: docRef.id, name: newSymbol }]);
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

  const removeSymbol = async (symbolId) => {
    try {
      // Remove from Firestore
      await deleteDoc(doc(db, "symbols", symbolId));
      console.log(`Document with ID: ${symbolId} deleted successfully.`);

      // Remove from local state
      setSymbols(symbols.filter((item) => item.id !== symbolId));
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  };

  const handleEditSymbol = (symbol) => {
    setEditingSymbol(symbol); // Set the symbol being edited
    setInputValue(symbol.name); // Pre-fill the input with the current symbol's name
  };

  const handleUpdateSymbol = async () => {
    if (inputValue.trim() && editingSymbol) {
      try {
        // Update in Firestore
        const symbolRef = doc(db, "symbols", editingSymbol.id);
        await updateDoc(symbolRef, { name: inputValue.trim() });
        console.log(
          `Document with ID: ${editingSymbol.id} updated successfully.`
        );

        // Update in local state
        setSymbols(
          symbols.map((symbol) =>
            symbol.id === editingSymbol.id
              ? { ...symbol, name: inputValue.trim() }
              : symbol
          )
        );
        setInputValue("");
        setEditingSymbol(null); // Reset editing state
      } catch (e) {
        console.error("Error updating document: ", e);
      }
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <div className="flex space-x-2">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Add or Edit a symbol"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={editingSymbol ? handleUpdateSymbol : handleAddSymbol}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {editingSymbol ? "Update" : "Add"}
        </button>
      </div>
      <div className="flex flex-wrap gap-2 ">
        {symbols.map((symbol) => (
          <div
            key={symbol.id}
            className="flex items-center bg-gray-200 gap-4 rounded px-3 py-1 text-gray-800 group relative"
          >
            <span>{symbol.name}</span>
            <div className=" absolute hidden group-hover:flex flex-col justify-start gap-2 right-0 top-full z-10 shadow-md rounded bg-white w-32 h-20 pt-1">
              <button
                onClick={() => removeSymbol(symbol.id)}
                className="ml-2 text-gray-500 hover:text-gray-700 flex items-center"
              >
                <span className="text-2xl -mt-1"> &times;</span>Remove
              </button>
              <button
                onClick={() => handleEditSymbol(symbol)}
                className="ml-2 text-gray-500 hover:text-gray-700 text-start"
              >
                ✎ Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddSymbol;
