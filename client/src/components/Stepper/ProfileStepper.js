import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LineProgress from "../Progress/LineProgress";

function ProfileStepper() {
  return (
    <Container>
      <Grid container spacing={2} marginBottom={1} marginTop={2}>
        <Grid item xs={12} md={2.4} sm={3}>
          <div style={{ display: "flex" }}>
            <Avatar
              sx={{
                bgcolor: "rgb(85, 64, 255)",
                fontFamily: "Poppins",
                fontSize: 16,
              }}
              alt="Remy Sharp"
            >
              1
            </Avatar>
            <Typography marginLeft={2} marginTop={1} fontFamily="Poppins">
              Profile detail
            </Typography>
            <ArrowForwardIosIcon style={{ marginLeft: 10, marginTop: 8 }} />
          </div>
        </Grid>
        <Grid item xs={12} md={2} sm={3}>
          <div style={{ display: "flex" }}>
            <Avatar
              sx={{
                bgcolor: "#fff",
                color: "#000",
                border: "1px solid gray",
                fontFamily: "Poppins",
                fontSize: 16,
              }}
              alt="Remy Sharp"
            >
              2
            </Avatar>
            <Typography marginLeft={2} marginTop={1} fontFamily="Poppins">
              Account
            </Typography>
            <ArrowForwardIosIcon style={{ marginLeft: 10, marginTop: 8 }} />
          </div>
        </Grid>
        <Grid item xs={12} md={2} sm={3}>
          <div style={{ display: "flex" }}>
            <Avatar
              sx={{
                bgcolor: "#fff",
                color: "#000",
                border: "1px solid gray",
                fontFamily: "Poppins",
                fontSize: 16,
              }}
            >
              3
            </Avatar>
            <Typography marginLeft={2} marginTop={1} fontFamily="Poppins">
              Permission
            </Typography>
          </div>
        </Grid>
      </Grid>
      <LineProgress value={26} />
    </Container>
  );
}

export default ProfileStepper;
