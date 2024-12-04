import React from 'react';
import { Line } from 'react-chartjs-2';

// Data for the Line Chart
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // X-axis labels
  datasets: [
    {
      label: 'Monthly Sales', // Label for the dataset
      data: [65, 59, 80, 81, 56, 55, 40], // Data points for the chart
      fill: false, // Do not fill under the line
      borderColor: 'rgb(75, 192, 192)', // Line color
      backgroundColor: 'rgba(75, 192, 192, 0.2)', // Point background color
      tension: 0.1, // Smoothness of the line
      pointBorderColor: 'rgb(75, 192, 192)', // Border color of points
      pointBackgroundColor: 'rgb(255, 255, 255)', // Background color of points
      pointRadius: 5, // Size of the points
      pointHoverRadius: 8, // Size of the points on hover
    },
  ],
};

// Chart configuration options
const options = {
  responsive: true, // Make the chart responsive to window size
  plugins: {
    legend: {
      display: true, // Display the legend
      position: 'top', // Position of the legend
    },
    tooltip: {
      enabled: true, // Enable tooltips on hover
      callbacks: {
        label: function (context) {
          return `Sales: ${context.raw}`; // Customize the tooltip label
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Hide grid lines for the X-axis
      },
      title: {
        display: true, // Display title for the X-axis
        text: 'Months', // Title text
        font: {
          size: 14, // Font size for the title
        },
      },
    },
    y: {
      beginAtZero: true, // Start Y-axis at 0
      grid: {
        color: 'rgba(200, 200, 200, 0.2)', // Customize grid line color
      },
      title: {
        display: true, // Display title for the Y-axis
        text: 'Sales (in Units)', // Title text
        font: {
          size: 14, // Font size for the title
        },
      },
    },
  },
};

// Main App component
function App() {
  return (
    <div style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
      {/* Chart title */}
      <h1 style={{ fontSize: '24px', margin: '20px 0' }}>Line Chart Example</h1>
      {/* Render the Line Chart */}
      <Line data={data} options={options} />
      {/* Description below the chart */}
      <p style={{ marginTop: '20px', color: '#555' }}>
        This chart shows the monthly sales trend for the first half of the year. Data points
        represent the number of units sold each month.
      </p>
    </div>
  );
}

export default App;
