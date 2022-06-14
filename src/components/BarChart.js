import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const BarChart = ( params ) => {
    
    const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map((p, index) => params.data[index]),
            backgroundColor: 'rgb(0, 191, 255)',
          },
        ],
      };

    return (
        <Bar options={options} data={data} />
    )
}

export default BarChart;