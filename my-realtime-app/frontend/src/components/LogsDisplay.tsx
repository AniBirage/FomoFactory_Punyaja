import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchLogs } from '../slices/logsSlice';

const LogsDisplay: React.FC = () => {
  const dispatch = useDispatch();
  const { logs, status } = useSelector((state: RootState) => state.logs);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchLogs());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error loading logs</p>;

  return (
    <div>
      <h2>Logs</h2>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Symbol</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{new Date(log.timestamp).toLocaleString()}</td>
              <td>{log.symbol}</td>
              <td>{log.open}</td>
              <td>{log.high}</td>
              <td>{log.low}</td>
              <td>{log.close}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default LogsDisplay;

