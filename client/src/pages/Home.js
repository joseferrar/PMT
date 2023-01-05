import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Header from "../components/Navbar/Header";
import DateMenu from "../components/Menus/DateMenu";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { avatar_group } from "../dummyData/avatarData";
import AdminCard from "../components/Cards/AdminCard";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={4} md={3} sm={3}>
            <Typography fontWeight={"bold"} fontSize={30} fontFamily="inherit">
              Dashboard
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} sm={3}></Grid>
          <Grid item xs={6} md={3} sm={3} container>
            <AvatarGroup max={5}>
              {avatar_group.map((item, index) => (
                <Avatar alt="img" src={item.imgUrl} key={index} />
              ))}
            </AvatarGroup>
            <DateMenu />
          </Grid>
        </Grid>
      </Box>

      <Paper style={{ paddingBottom: 12, paddingLeft: 12 }}>
        <Grid container spacing={3} marginTop={3}>
          <Grid item xs={4} md={3} sm={3}>
            <Typography fontWeight={"bold"} fontSize={22} fontFamily="inherit">
              Overview
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} sm={3}></Grid>
          <Grid item xs={12} md={2} sm={3}></Grid>
          <Grid item xs={6} md={1} sm={3} container>
            <Button
              variant="contained"
              size="small"
              style={{
                backgroundColor: "#b9beff",
                color: "#001af4",
                borderRadius: 15,
                boxShadow: "none",
                textTransform: "capitalize",
              }}
            >
              Export
            </Button>
          </Grid>
        </Grid>
        <AdminCard />
      </Paper>

      {/* <Button variant="contained" onClick={() => navigate("/login")}>
        Logout
      </Button> */}
    </div>
  );
}

export default Home;
