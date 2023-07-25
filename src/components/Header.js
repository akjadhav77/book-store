import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <AppBar position="sticky" sx={{ backgroundColor: "#48494a" }}>
        <Toolbar>
          <NavLink to='/' style={{color:'white'}}>
            <Typography>
              <MenuBookIcon sx={{marginRight: 1}} />
            </Typography>
          </NavLink>Book Library
          <Tabs
            sx={{ ml: "auto" }}
            indicatorColor="secondary"
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/bookslist" label="Books List" />
            <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
            <Tab LinkComponent={NavLink} to="/about" label="About Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
