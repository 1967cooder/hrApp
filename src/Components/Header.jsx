import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <h1>hrApp</h1>
      <nav className={styles.navLinks}>
        <Link to="/">Person List</Link>
        <Link to="/about">About</Link>
        <Link to="/add-employee">Add Employee</Link>
      </nav>
    </header>
  );
};

export default Header;
