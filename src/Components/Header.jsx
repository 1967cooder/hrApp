import { Link } from "react-router-dom";
//import styles from "./Header.module.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    // <header className={styles.headerContainer}>
    //   <h1>hrApp</h1>
    //   <nav className={styles.navLinks}>
    //     <Link to="/">Person List</Link>
    //     <Link to="/about">About</Link>
    //     <Link to="/add-employee">Add Employee</Link>
    //   </nav>
    // </header>
    <AppBar
      position="static"
      sx={{
        backgroundColor: "hsl(235, 36%, 46%)",
        color: "white",
        padding: "2rem",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography
          variant="h6"
          component="header"
          sx={{ flexGrow: 1, fontSize: "4rem" }}
        >
          hrApp
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "right",
          }}
        >
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              backgroundColor: "white",
              color: "hsl(235, 36%, 46%)",
              fontSize: "2rem",
            }}
          >
            Person List
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            sx={{
              backgroundColor: "white",
              color: "hsl(235, 36%, 46%)",
              fontSize: "2rem",
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/add-employee"
            sx={{
              backgroundColor: "white",
              color: "hsl(235, 36%, 46%)",
              fontSize: "2rem",
            }}
          >
            Add Employee
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
