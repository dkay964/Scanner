import React, { useEffect, useState } from 'react';

const ForexScanner = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.exchangerate.host/latest?base=USD')
      .then((res) => res.json())
      .then((data) => {
        setRates(data.rates);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading exchange rates...</p>;

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Currency</th>
          <th>Exchange Rate (USD)</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(rates).slice(0, 10).map(([currency, rate]) => (
          <tr key={currency}>
            <td>{currency}</td>
            <td>{rate.toFixed(4)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ForexScanner;
