import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip);

export default function StockMarketGraph() {
  const [chartData, setChartData] = useState(null);
  const [ticker, setTicker] = useState('AAPL');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const apikey = process.env.REACT_APP_GRAPH_API;

  const fetchStockData = async (ticker) => {
    setLoading(true);
    setError('');
    try {
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${apikey}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)

      if (data['Time Series (Daily)']) {
        const timeSeries = data['Time Series (Daily)'];
        const labels = Object.keys(timeSeries).slice(0, 30).reverse();
        const prices = labels.map((date) => parseFloat(timeSeries[date]['4. close']));

        setChartData({
          labels,
          datasets: [
            {
              label: `${ticker.toUpperCase()} Stock Price (Last 30 Days)`,
              data: prices,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderWidth: 2,
              pointRadius: 3,
              fill: true,
              tension: 0.4,
            },
          ],
        });
      } else if (data['Error Message']) {
        setError('Invalid stock ticker. Please try again.');
        setChartData(null);
      } else if (data.Note) {
        setError('API call limit exceeded. Please wait and try again.');
        setChartData(null);
      } else {
        setError('Unable to fetch data. Please check the ticker or try again later.');
        setChartData(null);
      }
    } catch (error) {
      console.error('Error fetching stock data:', error);
      setError('An error occurred while fetching data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStockData(ticker);
  }, [ticker]);

  const handleTickerChange = (event) => {
    setTicker(event.target.value.toUpperCase());
  };

  return (
    <div style={{ width: '80%', margin: 'auto', padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          value={ticker}
          onChange={handleTickerChange}
          placeholder="Enter Stock Ticker"
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
      </div>

      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}
      {chartData && (
        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: { display: true },
              tooltip: {
                callbacks: {
                  label: (tooltipItem) => {
                    const date = tooltipItem.label;
                    const price = tooltipItem.raw;
                    return `Date: ${date}, Price: $${price.toFixed(2)}`;
                  },
                },
              },
            },
            scales: {
              x: { title: { display: true, text: 'Date' } },
              y: { title: { display: true, text: 'Stock Price (USD)' } },
            },
          }}
        />
      )}
    </div>
  );
}
