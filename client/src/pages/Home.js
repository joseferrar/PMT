import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome Home</h1>
      <Button variant="contained" onClick={()=> navigate('/login')}>Logout</Button>
    </div>
  );
}

export default Home;
