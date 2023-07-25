import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ height: "595px", width: "100%" }}
        >
          <Typography sx={{ marginTop: 5, fontSize: 25, color: "white" }}>
            This is the Book Admin store where admin can add, update, read and
            delete the products.
          </Typography>
          <Button
            LinkComponent={Link}
            to="/books"
            variant="contained"
            sx={{ marginTop: 3, marginBottom: 3, backgroundColor: "orange" }}
          >
            <Typography variant="h6">View All Products</Typography>
          </Button>
          <Box sx={{ backgroundColor: "white", opacity: 0.6, marginTop: 4 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Home;
