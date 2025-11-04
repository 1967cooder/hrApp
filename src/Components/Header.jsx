import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="headerContainer">
      <h1>hrApp</h1>
      <nav className="nav-links">
        <Link to="/">Person List</Link>
        <Link to="/about">About</Link>
        <Link to="/add-employee">Add Employee</Link>
      </nav>
    </header>
  );
};

export default Header;
