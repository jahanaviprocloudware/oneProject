import { Navigate, Outlet } from "react-router";

export const ProtectRouter = ({ children }) => {
  const loginIn = !!sessionStorage.getItem("authToken");

  return loginIn ? <Outlet /> : <Navigate to="/" />;
};
