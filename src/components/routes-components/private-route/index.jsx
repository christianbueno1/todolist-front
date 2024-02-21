import { useContext } from "react";
import UserContext from "../../../MyContext";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivateRoute = ({children}) => {

  const { user, isAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', {replace: true});
      // <Navigate to="/login" replace={true} />
      // return null;
    }
  }, [user, isAuthenticated]);

  return (
    children
  )
}

export default PrivateRoute