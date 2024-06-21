// src/components/ChartComponent.jsx

import React from 'react';
import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import 'chartjs-plugin-annotation';
import quantumSystemsData from '../data/data'; // Adjust import path as needed

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const ChartComponent = ({ xField, yField, regularDataLimit }) => {
  // Prepare data for scatter plot based on the provided fields
  const scatterData = quantumSystemsData.map(system => ({
    x: system[xField],
    y: system[yField],
    name: system.name // Add any additional data you want to display in tooltips
  }));

  // Separate regular data and outlier data
  const regularData = scatterData.filter(point => point.x <= regularDataLimit);
  const outlierData = scatterData.filter(point => point.x > regularDataLimit);

  // Chart.js data
  const chartData = {
    datasets: [
      {
        label: `${yField} vs. ${xField}`,
        data: regularData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        pointRadius: 5
      },
      {
        label: 'Outlier',
        data: outlierData,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointRadius: 5
      }
    ]
  };

  // Chart.js options
  const options = {
    scales: {
      x: {
        type: 'linear',
        min: 0,
        max: regularDataLimit,
        ticks: {
          stepSize: regularDataLimit / 3,
          callback: function(value) {
            return value.toFixed(7); // Adjust the number of decimal places as needed
          }
        },
        title: {
          display: true,
          text: xField
        }
      },
      y: {
        title: {
          display: true,
          text: yField
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            if (tooltipItem.datasetIndex === 0) {
              const dataPoint = regularData[tooltipItem.dataIndex];
              if (dataPoint) {
                const xLabel = `${xField}: ${dataPoint.x.toFixed(7)}`;
                const yLabel = `${yField}: ${dataPoint.y.toFixed(7)}`;
                return [xLabel, yLabel, `Name: ${dataPoint.name || ''}`]; // Customize tooltip labels as per your data
              }
            } else if (tooltipItem.datasetIndex === 1) {
              const dataPoint = outlierData[tooltipItem.dataIndex];
              if (dataPoint) {
                const xLabel = `${xField}: ${dataPoint.x.toFixed(7)}`;
                const yLabel = `${yField}: ${dataPoint.y.toFixed(7)}`;
                return [xLabel, yLabel, `Name: ${dataPoint.name || ''}`]; // Customize tooltip labels as per your data
              }
            }
            return ''; // Handle case where data point is undefined
          }
        }
      },
      annotation: {
        annotations: outlierData.map(point => ({
          type: 'line',
          mode: 'vertical',
          scaleID: 'x',
          value: point.x,
          borderColor: 'red',
          borderWidth: 2,
          label: {
            content: 'Outlier',
            enabled: true,
            position: 'top'
          }
        }))
      }
    }
  };

  return (
    <div className='h-[300px] md:h-[450px] w-[105%] md:w-[100%] flex justify-center'>
      <Scatter data={chartData} options={options} />
    </div>
  );
};

export default ChartComponent;
