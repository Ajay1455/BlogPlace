import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Navbar() {

  const {currentUser, logout} =useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to='/'>
          <img
            src="https://media.istockphoto.com/id/1414371525/vector/modern-letter-pb-or-bp-monogram-logo-design.jpg?b=1&s=170667a&w=0&k=20&c=gLEB1EF7n3pwM7NTvXdl-8ADNe5nykw19xv44lfB9kQ="
            alt=""
          />
          </Link>
          <h1>BlogPlace</h1>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser?(<span onClick={logout}>Logout</span> ): (<Link className="link" to="/login">Login</Link>)}
          <span className="write">
            <Link className="link" to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
