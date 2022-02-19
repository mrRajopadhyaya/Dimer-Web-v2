import { Outlet } from "react-router";
import AppNavBar from "./AppNavBar";
import AppSideBar from "./AppSideBar";

const AppLayout = () => {
  return (
    <div className="app-container h-screen flex">
      <AppSideBar />
      <div className="w-full">
        <AppNavBar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
