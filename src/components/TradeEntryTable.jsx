import { useState, useEffect } from 'react';
import {  realtimeDb } from './firebase'; 
import { onValue, ref } from 'firebase/database';

const TradeEntryTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const tradesRef = ref(realtimeDb, 'trades');

      onValue(tradesRef, (snapshot) => {
        if (snapshot.exists()) {
          const tradeData = Object.entries(snapshot.val()).map(([id, value]) => ({
            id,
            ...value, 
          }));
          setData(tradeData);
        } else {
          console.log("No data available");
          setData([]);
        }
      }, (error) => {
        console.error("Error fetching data from Realtime Database: ", error);
      });
    };

    fetchData();
  }, []);

  const formatDate = (dateTime) => {
    const date = new Date(dateTime);
    return date.toString().split('T')[0]; 
  };

  console.log(data, "tradeEntries");

  return (
    <div className="overflow-x-auto mt-5">
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">No</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Time</th>
            <th className="border px-4 py-2">Symbol</th>
            <th className="border px-4 py-2">Entry Price From</th>
            <th className="border px-4 py-2">Entry Price To</th>
            <th className="border px-4 py-2">Stop Loss</th>
            <th className="border px-4 py-2">Target 1</th>
            <th className="border px-4 py-2">Target 2</th>
            <th className="border px-4 py-2">Target 3</th>
            <th className="border px-4 py-2">Target 4</th>
            <th className="border px-4 py-2">comment</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{index+1}</td>
              <td className="border px-4 py-2">{formatDate(row.dateTime)}</td>
              <td className="border px-4 py-2">{new Date(row.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
              <td className="border px-4 py-2">{row.symbol}</td>
              <td className="border px-4 py-2">{row.entryPriceFrom}</td>
              <td className="border px-4 py-2">{row.entryPriceTo}</td>
              <td className="border px-4 py-2">{row.stopLoss}</td>
              <td className="border px-4 py-2 bg-green-200">{row.target1}</td>
              <td className="border px-4 py-2 bg-green-200">{row.target2}</td>
              <td className="border px-4 py-2">{row.target3}</td>
              <td className="border px-4 py-2">{row.target4}</td>
              <td className="border px-4 py-2">{row.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradeEntryTable;
