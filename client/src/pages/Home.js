import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Navbar/Header";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome Home</h1>
      <Button variant="contained" onClick={() => navigate("/login")}>
        Logout
      </Button>
    </div>
  );
}

export default Home;
