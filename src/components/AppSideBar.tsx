import { useNavigate } from "react-router-dom";
import { routes } from "../utils/constants/routes";

const AppSideBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="h-full bg-gray-800 w-1/5">
      <header className="flex w-full h-16 p-5 items-center bg-[#6366f1]">
        Dimer web
      </header>
      <ul className="flex flex-col">
        {routes.map((route, index) => {
          return (
            <li
              key={index}
              className="flex items-center p-4 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer"
              onClick={() => handleNavigation(route.path)}
            >
              <route.icon className="h-6 w-6 mr-2" aria-hidden="true" />
              <span>{route.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AppSideBar;
