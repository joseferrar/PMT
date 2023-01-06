import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

function RevenueCard() {
  return (
    <div>
      <Grid item xs={12} md={4} sm={3} marginLeft={14}>
        <Card
          sx={{
            width: 340,
            borderRadius: 3,
            border: "1px solid #e0e0e0",
            padding: 3,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
          elevation={0}
        >
          <CardContent>
            <div style={{ display: "flex" }}>
              <Typography
                sx={{ mb: 1.5, color: "#9999ad" }}
                color="text.secondary"
                fontSize={16}
                fontFamily={"Poppins"}
              >
                Active Projects
              </Typography>
            </div>
            <Grid container>
              <Typography
                variant="h4"
                component="h4"
                fontWeight={"bold"}
                marginTop={1}
              >
                $1,200,000
              </Typography>
            </Grid>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: 340,
            borderRadius: 0,
            border: "1px solid #e0e0e0",
            padding: 3,
          }}
          elevation={0}
        >
          <CardContent>
            <div style={{ display: "flex" }}>
              <Typography
                sx={{ mb: 1.5, color: "#9999ad" }}
                color="text.secondary"
                fontSize={16}
                fontFamily={"Poppins"}
              >
                Active Empolyees
              </Typography>
            </div>
            <Grid container>
              <Typography
                variant="h4"
                component="h4"
                fontWeight={"bold"}
                marginTop={1}
              >
                $480,000
              </Typography>
            </Grid>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: 340,
            borderRadius: 3,
            border: "1px solid #e0e0e0",
            padding: 3,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          }}
          elevation={0}
        >
          <CardContent>
            <div style={{ display: "flex" }}>
              <Typography
                sx={{ mb: 1.5, color: "#9999ad" }}
                color="text.secondary"
                fontSize={16}
                fontFamily={"Poppins"}
              >
                Total Profits
              </Typography>
            </div>
            <Grid container>
              <Typography
                variant="h4"
                component="h4"
                fontWeight={"bold"}
                marginTop={1}
              >
                $700,000
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default RevenueCard;
