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
      <br></br>
        <NavLink to="/home"></NavLink>
        <h3>Welcome {currentUser.username}!</h3>
       
      </div>
      <div> 
  
          <NavLink to="/exercises">Exercises</NavLink>
          <br></br>
          <br></br>
          <NavLink to="/new">Add Exercise</NavLink>
          <br></br>
          <br></br>
          
          <button onClick={handleLogout}>Logout</button>
      
      </div>
    </header>
  );
}

export default NavBar;