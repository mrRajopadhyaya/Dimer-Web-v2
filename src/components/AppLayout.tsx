import { Outlet } from "react-router";
import AppNavBar from "./AppNavBar";
import AppSideBar from "./AppSideBar";

const AppLayout = () => {
  return (
    <div className="app-wrapper h-screen w-screen flex">
      <AppSideBar />
      <div className="w-full">
        <AppNavBar />
        <div className="app-container">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
