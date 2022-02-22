import ExpenseLineChart from "../components/ExpenseLineChart";
import ExpenseOverview from "../components/ExpenseOverview";
import ExpensePieChart from "../components/ExpensePieChart";

const Dashboard = () => {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="dashboard-overview flex justify-between">
        <ExpenseOverview />
      </div>
      <div className="dashboard-charts flex justify-between w-full my-5">
        <div className="w-full">
          <ExpenseLineChart />
        </div>
        <ExpensePieChart />
      </div>
    </div>
  );
};

export default Dashboard;
