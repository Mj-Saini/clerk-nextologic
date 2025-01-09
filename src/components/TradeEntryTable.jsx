



import { useState, useEffect } from 'react';
import { realtimeDb } from './firebase';
import { onValue, ref } from 'firebase/database';
import { Table } from 'react-bootstrap';

const TradeEntryTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const tradesRef = ref(realtimeDb, 'trades');

      onValue(
        tradesRef,
        (snapshot) => {
          if (snapshot.exists()) {
            const tradeData = Object.entries(snapshot.val()).map(([id, value]) => ({
              id,
              ...value,
            }));
            setData(tradeData);
          } else {
            console.log('No data available');
            setData([]);
          }
        },
        (error) => {
          console.error('Error fetching data from Realtime Database: ', error);
        }
      );
    };

    fetchData();
  }, []);

  const formatDate = (dateTime) => {
    // if (!dateTime) return 'Invalid Date';
    const date = new Date(dateTime);
    return isNaN(date.getTime()) ? 'Invalid Date' : date.toLocaleDateString();
  };

  return (
    <div className="table-responsive mt-5">
      <Table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Symbol</th>
            <th scope="col">Entry Price From</th>
            <th scope="col">Entry Price To</th>
            <th scope="col">Stop Loss</th>
            <th scope="col">Target 1</th>
            <th scope="col">Target 2</th>
            <th scope="col">Target 3</th>
            <th scope="col">Target 4</th>
            <th scope="col">Comment</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{formatDate(row.dateTime)}</td>
              <td>{new Date(row.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
              <td>{row.symbol}</td>
              <td>{row.entryPriceFrom}</td>
              <td>{row.entryPriceTo}</td>
              <td>{row.stopLoss}</td>
              <td className="table-success">{row.target1}</td>
              <td className="table-success">{row.target2}</td>
              <td>{row.target3}</td>
              <td>{row.target4}</td>
              <td>{row.comment}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TradeEntryTable;

