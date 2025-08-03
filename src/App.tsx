import { BrowserRouter as Router, Link } from "react-router-dom";
import ThemeDropdown from "./components/ThemeDropDown";
import AppRoutes from "./routes/AppRoutes";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <Router>
        <nav className="navbar navbar-expand-lg bg-body-tertiary px-3 sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold" to="/">ThemeApp</Link>
            <div className="d-flex gap-3 align-items-center">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
              <ThemeDropdown />
            </div>
          </div>
        </nav>

        <main className="container py-5">
          <AppRoutes />
        </main>
      </Router>
    </div>
  );
};

export default App;