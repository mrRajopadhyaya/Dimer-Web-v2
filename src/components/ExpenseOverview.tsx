const ExpenseOverview = () => {
  return (
    <div className="p-4 flex flex-col justify-around bg-gray-200 rounded-lg shadow-xs dark:bg-gray-800 w-1/2 max-h-56">
      <div className="flex justify-between w-full">
        <p className="mb-2 text-2xl font-medium text-gray-600 dark:text-gray-400">
          Total Income
        </p>
        <p className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
          150000
        </p>
      </div>
      <div className="flex justify-between w-full">
        <p className="mb-2 text-2xl font-medium text-gray-600 dark:text-gray-400">
          Total Expense
        </p>
        <p className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
          150000
        </p>
      </div>
      <div className="flex justify-between w-full">
        <p className="mb-2 text-3xl font-medium text-gray-600 dark:text-gray-400">
          Total Balance
        </p>
        <p className="text-3xl font-semibold text-gray-700 dark:text-gray-200">
          150000
        </p>
      </div>
    </div>
  );
};

export default ExpenseOverview;
