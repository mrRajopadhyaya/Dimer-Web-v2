import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/RouteProtected";
import AuthRoute from "./components/RouteAuth";
import Login from "./pages/Login";
import { routes } from "./utils/constants/routes";

function App() {
  return (
    <div className="h-full w-full">
      <Routes>
        <Route path="/" element={<ProtectedRoute component={AppLayout} />}>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                index={route.isIndex}
                path={route.path}
                element={<ProtectedRoute component={route.component} />}
              />
            );
          })}
        </Route>
        <Route path="/login" element={<AuthRoute component={Login} />} />
      </Routes>
    </div>
  );
}

export default App;
