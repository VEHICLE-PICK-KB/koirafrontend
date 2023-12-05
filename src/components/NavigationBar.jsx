import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";

export default function NavigationBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/tuotteet">
          Tuotelista
        </Button>
      </Toolbar>
    </AppBar>
  );
}
