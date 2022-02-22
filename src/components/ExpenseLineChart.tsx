import ReactApexChart from "react-apexcharts";

const state = {
  series: [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ],
  options: {
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  },
};

const ExpenseLineChart = () => {
  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        height={350}
      />
    </div>
  );
};

export default ExpenseLineChart;
