import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ user, setUser, currentUser, handleLogout }) {
  // function handleLogoutClick() {
  //   fetch("/logout", { method: "DELETE" }).then((r) => {
  //     if (r.ok) {
  //       setUser(null);
  //     }
  //   });
  // }

  return (
    <header>
      <div>
        <NavLink to="/home"></NavLink>
        <span>Welcome {currentUser.username}!</span>
      </div>
      <div> 
          <NavLink to="/exercises">Exercises</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
          <button onClick={handleLogout}>Logout</button>
      
      </div>
    </header>
  );
}

export default NavBar;