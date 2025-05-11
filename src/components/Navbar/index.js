import { NavLink } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top px-4">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <img className="logo" src="/logo.png"></img>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Sobre" className="nav-link">Sobre</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/reserva" className="nav-link">Faça sua reserva</NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link">Signup</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
