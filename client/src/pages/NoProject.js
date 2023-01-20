import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button, Typography } from "@mui/material";

function NoProject() {
  return (
    <div>
      <div
        style={{
          margin: "auto",
          width: "50%",
          padding: "10px",
        }}
      >
        <div style={{ width: "100%", height: "auto", margin: "auto" }}>
          <img
            src="https://onfire.craftwork.design/images/s-5-img-12.png"
            alt="img"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            style={{
              fontSize: 26,
              width: 400,
              textAlign: "center",
              marginTop: 6,
              fontWeight: "bold",
              fontFamily: "gothic",
            }}
          >
            Create your first project
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            style={{
              fontSize: 14,
              width: 400,
              textAlign: "center",
              marginTop: 6,
              color: "gray",
              fontFamily: "gothic",
            }}
          >
            Fortunately, it's easy to create new one
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AddIcon />}
            style={{
              borderRadius: 12,
              textTransform: "capitalize",
              marginTop: 12,
              height: 50,
              marginBottom: 12,
              fontSize: 16,
              fontFamily: "roboto",
            }}
          >
            New Project
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NoProject;
