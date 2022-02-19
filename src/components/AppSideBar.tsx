const AppSideBar = () => {
  return (
    <div className="h-full bg-red-300 w-1/6">
      <header className="flex w-full bg-red-500 h-16 p-5 items-center">
        Dimer web
      </header>
      <ul className="flex flex-col">
        <li className="items-center p-4 bg-red-900">Dashboard</li>
        <li className="items-center p-4 bg-red-900">Dashboard</li>
        <li className="items-center p-4 bg-red-900">Dashboard</li>
      </ul>
    </div>
  );
};

export default AppSideBar;
