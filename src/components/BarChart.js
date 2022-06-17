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

const BarChart = (params) => {
  const dataArray = params.data;
  
  const labels = dataArray.map((p, index) => {
    return index + 1;
  })

  const data = {
    labels,
    datasets: [
      {
        label: `${params.title}`,
        data: labels.map((p, index) => dataArray[index].paramname),
        backgroundColor: 'rgb(0, 191, 255)',
      },
    ],
  };

  return (
    <Bar options={options} data={data}/>
  );
}

export default BarChart;