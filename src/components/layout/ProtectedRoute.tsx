import { ReactNode } from "react";
import { getRoleFromLocalStorage } from "../../utils/localStorage";
import NotFoundPage from "../../pages/notfound/NotFoundRoute";

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const role = getRoleFromLocalStorage();

  if (role === null) {
    return <NotFoundPage></NotFoundPage>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
