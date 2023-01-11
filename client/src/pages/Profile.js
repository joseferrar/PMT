import { Button, IconButton, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector, useDispatch } from "react-redux";
import { UpdateUserApi, GetUserApi } from "../apis/authApi";
import AlertModal from "../components/Modals/AlertModal";
import CryptoJS from "crypto-js";

function Profile() {
  const [edit, setEdit] = useState(false);
  const user = useSelector((state) => state.auth.data);
  const dispatch = useDispatch();
  const getdata = localStorage.getItem("login");
  const userId = JSON.parse(getdata);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(GetUserApi(userId._id));
  }, []);

  console.log(user);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: user?.name,
      email: user?.email,
      role: user?.role,
    },
    onSubmit: async (data) => {
      await dispatch(UpdateUserApi(userId._id, data));
      setEdit(true);
    },
  });

  if (edit) {
    return <AlertModal setOpen={setOpen} open={open} />;
  }

  const secretPass = "XkhZG4fW2t2W";

  const encryptData = () => {
    const data = CryptoJS.AES.encrypt(
      JSON.stringify("text"),
      secretPass
    ).toString();

    console.log(data)
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Typography variant="h4" fontWeight="bold">
          My Account
        </Typography>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          onClick={() => setEdit(!edit)}
        >
          <EditIcon color="secondary" style={{ marginLeft: 12 }} />
        </IconButton>
      </div>
      <Grid container spacing={3} marginTop={1}>
        <Grid item xs={6} sm={4} md={4}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={formik.values.name}
            onChange={formik.handleChange("name")}
            style={{ backgroundColor: "#fff" }}
            disabled={edit}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={formik.values.email}
            disabled={true}
            style={{ backgroundColor: "#fff" }}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={5}>
          <TextField
            label="Role"
            variant="outlined"
            fullWidth
            value={formik.values.role}
            onChange={formik.handleChange("role")}
            style={{ backgroundColor: "#fff" }}
            disabled={edit}
          />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        onClick={encryptData}
        size="large"
        style={{ marginTop: 22 }}
        disabled={edit}
        color="success"
      >
        Submit
      </Button>
      {/* <AlertModal setOpen={setOpen} open={open} /> */}
    </div>
  );
}

export default Profile;
