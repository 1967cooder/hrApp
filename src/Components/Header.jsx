import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "hsl(235, 36%, 46%)",
        color: "white",
        padding: { xs: "1rem", sm: "2rem" }, // Mobile-first padding
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Column for mobile, row for tablet+
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: "space-between",
          width: "100%",
          gap: { xs: 2, sm: 0 }, // Spacing for mobile
        }}
      >
        <Typography
          variant="h6"
          component="header"
          sx={{
            flexGrow: 1,
            fontSize: { xs: "2.5rem", sm: "4rem" },
            mb: { xs: 2, sm: 0 },
          }}
        >
          hrApp
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Vertical links on mobile
            gap: { xs: 1, sm: 2 }, // Gap between buttons
            width: { xs: "100%", sm: "auto" }, // Buttons full-width on mobile
            alignItems: { xs: "stretch", sm: "center" }, // Stretch full-width on mobile
          }}
        >
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              backgroundColor: "white",
              color: "hsl(235, 36%, 46%)",
              fontSize: { xs: "1.6rem", sm: "2rem" },
              width: { xs: "100%", sm: "auto" },
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
              fontSize: { xs: "1.6rem", sm: "2rem" },
              width: { xs: "100%", sm: "auto" },
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
              fontSize: { xs: "1.6rem", sm: "2rem" },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Add Employee
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/employees-table"
            sx={{
              backgroundColor: "white",
              color: "hsl(235, 36%, 46%)",
              fontSize: { xs: "1.6rem", sm: "2rem" },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Employees Table
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
