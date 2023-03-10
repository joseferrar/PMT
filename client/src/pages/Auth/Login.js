import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";
import * as yup from "yup";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import AppleIcon from "@mui/icons-material/Apple";
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormHelperText,
  IconButton,
  Typography,
} from "@mui/material";
import cupIcon from "../../packages/images/cup.png";
import visbleIcon from "../../packages/images/visible.png";
import invisbleIcon from "../../packages/images/invisible.png";
import bulbIcon from "../../packages/images/idea.png";
import { LoginApi } from "../../apis/authApi";
import CryptoJS from "crypto-js";

const imgUrl =
  "https://camo.githubusercontent.com/a86a8278da4c5b5a43330e1ea28e6ba050007a837128b5dff5b35d5ff0f1248a/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a365867664443566e3831415958363858766432492d674032782e706e67";

function Login() {
  // var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(pass), 'my-secret-key@123').toString();
  // console.log(ciphertext);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const [confirmTextEntry, setConfirmTextEntry] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email().required("Email is required"),
      password: yup.string().required("Password is required"),
    }),
    onSubmit: async (data) => {
      var ciphertext = CryptoJS.AES.encrypt(
        JSON.stringify(data.password),
        "my-secret-key@123"
      ).toString();
      console.log(ciphertext);
      const userData = {
        email: data.email,
        password: ciphertext,
      };

      dispatch(LoginApi(userData, navigate));
    },
  });

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const toggleConfirmEntry = () => {
    setConfirmTextEntry(!confirmTextEntry);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <div style={{ display: "flex", marginLeft: 40, marginTop: 12 }} className="login-back">
      
        c
        <div style={{ marginLeft: "auto", display: "flex", marginRight: 50 }} className="sign-page">
          <Typography fontSize={14} color="gray" className="sign-title">
            Don&apos;t have an account?
          </Typography>
          <Link
            style={{
              marginLeft: 6,
              fontSize: 14,
              fontWeight: 600,
              color: "#000",
            }}
            to={"/register"}
          >
            Sign Up
          </Link>
        </div>
      </div> */}
      <Grid container spacing={1} marginTop={1}>
        <Grid item xs={5} sm={5} md={5.6} marginLeft={2}>
          <img src={imgUrl} alt="logo" width="50" height="50" />
        </Grid>
        <Grid item xs={6} sm={5} md={4}></Grid>
        <Grid item xs={12} sm={5} md={2}>
          {" "}
          <div style={{ marginLeft: "auto", display: "flex", marginRight: 50 }}>
            <Typography fontSize={14} color="gray" className="sign-title">
              Don&apos;t have an account?
            </Typography>
            <Link
              style={{
                marginLeft: 6,
                fontSize: 14,
                fontWeight: 600,
                color: "#000",
              }}
              to={"/register"}
            >
              Sign Up
            </Link>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={5} sm={5} md={2} margin={10}>
          <img src={cupIcon} alt="logo" width="50" height="50" />
          <Divider
            style={{
              width: 200,
              backgroundColor: "gray",
              height: 6,
              marginTop: 12,
            }}
          />
        </Grid>
        <Grid item xs={6} sm={5} md={2} margin={10}>
          <Typography fontSize={40}>Great to have you back!</Typography>
          <Typography fontSize={14} color="gray" marginTop={3}>
            Consequat adipisicing ea do labore irure adipisicing occaecat
            cupidatat excepteur duismo
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          margin={3}
          border="1px solid #000"
          height={800}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            marginBottom={6}
            textAlign="center"
          >
            Sign in
          </Typography>
          <form autoComplete="off">
            <div
              className="full-input"
              style={{
                paddingRight: "6px",
                paddingBottom: "6px",
                paddingTop: "6px",
                paddingLeft: "6px",
                display: "inline-block",
                backgroundColor: "#e2e2e2",
                width: "90%",
                marginTop: 30,
              }}
            >
              <label
                for="email"
                style={{
                  fontSize: "16px",
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                Email
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Email"
                className="login-form"
                value={formik.values.email}
                onChange={formik.handleChange("email")}
              />
            </div>
            <FormHelperText error>
              {formik.touched.email ? formik.errors.email : null}
            </FormHelperText>

            <div
              className="full-input"
              style={{
                paddingRight: "6px",
                paddingBottom: "6px",
                paddingTop: "6px",
                paddingLeft: "6px",
                display: "inline-block",
                backgroundColor: "#e2e2e2",
                width: "90%",
                marginTop: 30,
              }}
            >
              <label
                for="phone"
                style={{
                  fontSize: "16px",
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                Password
              </label>

              {/* <img
                onClick={toggleSecureEntry}
                src={secureTextEntry ? invisbleIcon : visbleIcon}
                width={20}
                height={20}
                alt="visbleIcon"
                style={{
                  position: "absolute",
                  marginLeft: "auto",
                  color: "#000",
                }}
              /> */}

              <input
                type={secureTextEntry ? "text" : "password"}
                name="password"
                className="login-form"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange("password")}
              />
            </div>
            <FormHelperText error>
              {formik.touched.password ? formik.errors.password : null}
            </FormHelperText>

            <Grid container marginTop={4} marginLeft={-2}>
              <Grid item xs>
                <FormControlLabel
                  style={{ display: "table-cell" }}
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
              </Grid>
              <Grid item style={{ marginTop: 8 }}>
                <Link
                  to="/forgot"
                  variant="body2"
                  style={{ textDecoration: "none" }}
                >
                  Forgot password?
                </Link>
              </Grid>
            </Grid>

            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={formik.handleSubmit}
              style={{
                marginLeft: -6,
                marginTop: 30,
                height: 50,
                backgroundColor: "#363738",
                textTransform: "capitalize",
                marginBottom: 12,
              }}
            >
              Sign in
            </Button>
            <Typography textAlign="center" marginBottom={2}>
              Or Sign in with
            </Typography>

            <div
              style={{
                flexDirection: "column",
                alignItems: "center",
                width: 250,
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              <Button
                variant="contained"
                startIcon={<GoogleIcon style={{ marginLeft: 8 }} />}
                style={{ backgroundColor: "#e2e2e2", color: "#000" }}
              ></Button>

              <Button
                variant="contained"
                startIcon={<FacebookOutlinedIcon style={{ marginLeft: 8 }} />}
                style={{
                  backgroundColor: "#e2e2e2",
                  color: "#000",
                  marginLeft: 20,
                }}
              ></Button>

              <Button
                variant="contained"
                startIcon={<AppleIcon style={{ marginLeft: 8 }} />}
                style={{
                  backgroundColor: "#e2e2e2",
                  color: "#000",
                  marginLeft: 20,
                }}
              ></Button>

              <Typography marginTop={6}>
                By singing up, you agree with the
              </Typography>
              <div style={{ display: "flex" }}>
                <Link>Terms of Use&nbsp;</Link>
                <Typography> &nbsp;&</Typography>
                <Link>&nbsp;Privacy Policy</Link>
              </div>
            </div>
          </form>
        </Grid>
        <Grid item xs marginTop={3} marginLeft={6}>
          <img src={bulbIcon} alt="logo" width="50" height="50" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
