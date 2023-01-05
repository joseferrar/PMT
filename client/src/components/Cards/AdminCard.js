import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PreviewIcon from "@mui/icons-material/Preview";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import pulseIcon from "../../packages/images/pulse.png";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

function AdminCard() {
  return (
    <Grid container spacing={2} marginTop={2}>
      <Grid item xs={12} md={3} sm={3}>
        <Card
          sx={{ width: 340, backgroundColor: "#fdc8e4", borderRadius: 3 }}
          elevation={0}
        >
          <CardContent>
            <div style={{ display: "flex" }}>
              <Typography
                sx={{ mb: 1.5, color: "#000" }}
                color="text.secondary"
                fontSize={16}
              >
                Expenses
              </Typography>
              <div
                style={{
                  padding: 10,
                  borderRadius: 50,
                  marginLeft: "auto",
                  marginTop: -26,
                  height: 50,
                }}
              >
                <PreviewIcon
                  style={{
                    backgroundColor: "#ff00db",
                    padding: 12,
                    borderRadius: 15,
                    color: "#fff",
                    marginTop: 12,
                  }}
                />
              </div>
            </div>
            <Grid container>
              <Typography
                variant="h4"
                component="h4"
                fontWeight={"bold"}
                marginTop={1}
              >
                $72k
              </Typography>
              <div style={{ marginTop: "56px", marginLeft: "auto" }}>
                <Chip
                  icon={<ArrowUpwardIcon />}
                  label="25%"
                  variant="outlined"
                  color="secondary"
                  style={{ marginRight: 12 }}
                />

                <img src={pulseIcon} alt="img" width={26} height={26} />
              </div>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={3} sm={3}>
        <Card
          sx={{ width: 340, backgroundColor: "#fddcc8", borderRadius: 3 }}
          elevation={0}
        >
          <CardContent>
            <div style={{ display: "flex" }}>
              <Typography
                sx={{ mb: 1.5, color: "#000" }}
                color="text.secondary"
                fontSize={16}
              >
                Profit
              </Typography>
              <div
                style={{
                  padding: 10,
                  borderRadius: 50,
                  marginLeft: "auto",
                  marginTop: -26,
                  height: 50,
                }}
              >
                <LocalAtmIcon
                  style={{
                    backgroundColor: "orange",
                    padding: 12,
                    borderRadius: 15,
                    color: "#fff",
                    marginTop: 12,
                  }}
                />
              </div>
            </div>
            <Grid container>
              <Typography
                variant="h4"
                component="h4"
                fontWeight={"bold"}
                marginTop={1}
              >
                600
              </Typography>
              <Chip
                icon={<ArrowUpwardIcon />}
                label="5%"
                variant="outlined"
                color="error"
                style={{ marginLeft: -52, marginTop: "60px" }}
              />
              <div style={{ marginTop: "56px", marginLeft: "auto" }}>
                <Chip
                  icon={<ArrowUpwardIcon />}
                  label="25%"
                  variant="outlined"
                  color="secondary"
                  style={{ marginRight: 12 }}
                />

                <img src={pulseIcon} alt="img" width={26} height={26} />
              </div>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={3} sm={3}>
        <Card
          sx={{ width: 340, backgroundColor: "#fddcc8", borderRadius: 3 }}
          elevation={0}
        >
          <CardContent>
            <div style={{ display: "flex" }}>
              <Typography
                sx={{ mb: 1.5, color: "#000" }}
                color="text.secondary"
                fontSize={16}
              >
                Profit
              </Typography>
              <div
                style={{
                  padding: 10,
                  borderRadius: 50,
                  marginLeft: "auto",
                  marginTop: -26,
                  height: 50,
                }}
              >
                <PeopleAltOutlinedIcon
                  style={{
                    backgroundColor: "green",
                    padding: 12,
                    borderRadius: 15,
                    color: "#fff",
                    marginTop: 12,
                  }}
                />
              </div>
            </div>
            <Grid container>
              <Typography
                variant="h4"
                component="h4"
                fontWeight={"bold"}
                marginTop={1}
              >
                100
              </Typography>
              <Chip
                icon={<ArrowUpwardIcon />}
                label="5%"
                variant="outlined"
                color="error"
                style={{ marginLeft: -52, marginTop: "60px" }}
              />
              <div style={{ marginTop: "56px", marginLeft: "auto" }}>
                <Chip
                  icon={<ArrowUpwardIcon />}
                  label="25%"
                  variant="outlined"
                  color="secondary"
                  style={{ marginRight: 12 }}
                />

                <img src={pulseIcon} alt="img" width={26} height={26} />
              </div>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default AdminCard;
