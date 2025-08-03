import { NavLink } from "react-router-dom";
import ThemeDropdown from "./ThemeDropDown";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top px-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <NavLink className="navbar-brand fw-bold" to="/">
          Multi Theme App
        </NavLink>

        <div className="d-flex align-items-center gap-4">
          <NavLink className="nav-link text-white" to="/">Home</NavLink>
          <NavLink className="nav-link text-white" to="/about">About</NavLink>
          <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
          <ThemeDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Header;
