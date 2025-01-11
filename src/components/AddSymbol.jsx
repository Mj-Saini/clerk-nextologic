/* eslint-disable no-unused-vars */
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
    <div className="flex flex-col items-center space-y-4 sm:p-4 mt-5">
      <div className="flex flex-col sm:flex-row justify-center gap-2 w-full">
        <input
        style={{border: '1px solid #97514b',color: "#97514b"}}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add or Edit a symbol"
          className="border-none outline-none text-![#97514b] rounded px-4 py-2 "
        />
        <button
          onClick={editingSymbol ? handleUpdateSymbol : handleAddSymbol}
          className="btn_light text-[#C42B1E] px-4 py-2 rounded-lg "
        >
          {editingSymbol ? "Update" : "Add"}
        </button>
      </div>
      <div className="flex flex-wrap w-full">
        {symbols.map((symbol) => (
          <div
            key={symbol.id}
            className=" w-full sm:w-1/2 md:w-1/3 sm:px-2 mt-3 h-10"
          >
           <div className="flex items-center justify-between bg-[#C42B1E29] gap-4 rounded px-3 py-1 text-[#C42B1E] relative group h-10 uppercase">
           <span>{symbol.name}</span>
            <div className="hidden group-hover:flex justify-start p-0">
              <button
                onClick={() => removeSymbol(symbol.id)}
                className="ml-2 text-[#6b3e37]  flex items-center"
              >
                <span className="text-2xl -mt-1"> &times;</span>Remove
              </button>
              <button
                onClick={() => handleEditSymbol(symbol)}
                className="ml-2 text-[#6b3e37] text-start"
              >
                ✎ Edit
              </button>
            </div>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddSymbol;
