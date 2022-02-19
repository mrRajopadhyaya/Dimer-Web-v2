import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/RouteProtected";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AuthRoute from "./components/RouteAuth";

function App() {
  return (
    <div className="h-full w-full">
      <Routes>
        <Route path="/" element={<ProtectedRoute component={AppLayout} />}>
          <Route
            index={true}
            element={<ProtectedRoute component={Dashboard} />}
          />
        </Route>
        <Route path="/login" element={<AuthRoute component={Login} />} />
      </Routes>
    </div>
  );
}

export default App;
