import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const TopNav = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.removeItem("auth");
    navigate("/login");
  };
  useEffect(() => {logout()}, []);

  return (
    <div className="nav bg-light d-flex justify-content-between">
      <Link to="/" className="nav-link">
        Home
      </Link>
      {auth !== null && (
        <>
          <Link className="nav-link" to="/Dashboard">
            Dashboard
          </Link>
        
        </>
      )}
      {auth !== null && (
        <a className="nav-link pointer" onClick={logout}>
          Logout
        </a>
      )}

      {auth === null && (
        <>
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </>
      )}
    </div>
  );
};

export default TopNav;
