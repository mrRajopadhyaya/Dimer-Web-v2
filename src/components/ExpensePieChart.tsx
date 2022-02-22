import Chart from "react-apexcharts";
const state = {
  series: [44, 55, 13, 43, 22],
  options: {
    chart: {},
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};

const ExpensePieChart = () => {
  return (
    <div className="max-h-52">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={state.options}
            series={state.series}
            type="pie"
            width={400}
          />
        </div>
      </div>
    </div>
  );
};

export default ExpensePieChart;
