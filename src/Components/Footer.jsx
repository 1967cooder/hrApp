//import styles from "./Footer.module.css";
import { Typography, Box } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    //Typography variant="body1"vaihtaa fonttia koko footerissa
    //<footer className={styles.footer}>
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        textAlign: "center",
        padding: "2rem",
        margin: "auto",
        marginTop: 0.8,
        backgroundColor: "hsl(235, 36%, 46%)",
      }}
    >
      <Typography variant="body1" sx={{ flexGrow: 1, fontSize: "1.5rem" }}>
        © 2025 hrApp. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
