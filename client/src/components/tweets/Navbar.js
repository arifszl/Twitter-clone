import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  let userData = useSelector((state) => {
    return state.auth;
  });
  return (
    <div className="text-3xl bg-white border  border-b-4   text-gray-700  p-3  rounded-lg shadow-lg">
      <div className="font-extrabold"> Home</div>
      <div className="flex justify-between">
        <div>
          <Link to={"/foryou"}>
            <Button variant="secondary">
              {" "}
              <span className="font-bold">For you</span>{" "}
            </Button>
          </Link>
        </div>
        {userData.username != null ? (
          <div className="order-last">
            <NavLink to={"/following"}>
              <Button variant="secondary">
                {" "}
                <span className="font-bold">Following</span>
              </Button>
            </NavLink>
          </div>
        ) : (
          <NavLink to={"/login"}>
            <Button variant="secondary">
              {" "}
              <span className="font-bold">Following</span>
            </Button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
