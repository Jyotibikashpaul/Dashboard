import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ['6/30/2024 - 7/6/2024', '7/7/2024 - 7/13/2024', '7/21/2024 - 7/27/2024'],
    datasets: [
      {
        label: 'Orders',
        data: [4, 2, 2],
        borderColor: 'orange',
        backgroundColor: 'orange',
        fill: false,
        yAxisID: 'y-axis-orders'
      },
      {
        label: 'Sales',
        data: [1400, 800, 500], // Adjusted the sales data to match the y-axis labels
        borderColor: 'cyan',
        backgroundColor: 'cyan',
        fill: false,
        yAxisID: 'y-axis-sales'
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Sales vs Orders'
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            let label = tooltipItem.dataset.label || '';
            if (label) {
              label += ': ';
            }
            label += tooltipItem.raw;
            if (tooltipItem.datasetIndex === 0) { // Orders dataset
              const avgOrderValue = (tooltipItem.raw === 0) ? 0 : data.datasets[1].data[tooltipItem.dataIndex] / tooltipItem.raw;
              label += ` (Avg Order Value: ${avgOrderValue.toFixed(2)})`;
            }
            return label;
          }
        }
      },
      legend: {
        display: true,
        position: 'top'
      }
    },
    scales: {
      'y-axis-orders': {
        type: 'linear',
        position: 'right',
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          max: 4, // Set the maximum value for the Orders y-axis
          callback: function(value) {
            return value.toFixed(0); // Convert the value to a whole number
          }
        }
      },
      'y-axis-sales': {
        type: 'linear',
        position: 'left',
        beginAtZero: true,
        grid: {
          drawOnChartArea: true,
        },
        ticks: {
          callback: function(value) {
            const values = {
              0: '0k',
              400: '0.4k',
              800: '0.8k',
              1200: '1.2k',
              1600: '1.6k'
            };
            return values[value] || '';
          },
          stepSize: 400, // Ensure the ticks are at intervals that match the labels
          max: 1600 // Set the maximum value for the Sales y-axis
        }
      }
    }
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
