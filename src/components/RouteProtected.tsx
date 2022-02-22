import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../config/firebase";
import axios from "../config/axios";
import { getProfile } from "../store/user/action";

export const ProtectedRoute: any = ({ component: Component, ...rest }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (user: any) => {
      const idToken = await user?.getIdToken();
      axios.defaults.headers.common.Authorization = idToken ?? "";
      idToken?.length ? setIsAuthenticated(true) : setIsAuthenticated(false);
      await getProfile();
    });
  }, []);

  if (isAuthenticated === null) return <div>loading</div>;

  if (isAuthenticated) return <Component />;

  if (!isAuthenticated) return <Navigate to="/login" />;
};

export default ProtectedRoute;
