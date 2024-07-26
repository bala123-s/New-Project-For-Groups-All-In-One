import React from "react";
import { useLocation } from "react-router";
import { FaRegUserCircle } from "react-icons/fa";
import "../Home/Home.css";
import { useNavigate } from "react-router-dom";
import { FcHome } from "react-icons/fc";


const Home = () => {
  const location = useLocation();
  const { findingNamesFromTheApi } = location.state || {};

  let ShowingNavigateUser = useNavigate();
  const ShowUserDeatails = () => {
    ShowingNavigateUser("/showingUser", { state: { findingNamesFromTheApi } });
  };

  const navigate = useNavigate();
  const movingToTodoList = () => {
    navigate("/todolistuser")
  }

  return (
    <>
      <div className="home-nav">
        <ul className="navbar-list">
          <div className="home-home-icon">
          <div className="fc-home"><FcHome /></div>
          <div>
            <li>Home</li>
          </div>
          </div>
          <div>
            <li onClick={ShowUserDeatails} className="showingDetails">
              <div className="fareg-user-circle">
                <FaRegUserCircle />
              </div>
              <div>
              {findingNamesFromTheApi.username.toLowerCase()}
              </div>
            </li>
          </div>
        </ul>
      </div>
      <div className="home-page">
      <div className="todo-list" onClick={() => movingToTodoList()}>Todo-List</div>
      </div>
    </>
  );
};

export default Home;