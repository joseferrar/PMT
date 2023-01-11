import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import FormHelperText from "@mui/material/FormHelperText";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import { LoginApi, RegisterApi } from "../../apis/authApi";
import { useDispatch } from "react-redux";
import { Container } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import AppleIcon from "@mui/icons-material/Apple";
import { styled } from "@mui/material/styles";
import visbleIcon from "../../packages/images/visible.png";
import invisbleIcon from "../../packages/images/invisible.png";
import { Datewish } from "../../util/Datewish";
import CryptoJS from "crypto-js";

function Register() {
  const imgUrl =
    "https://camo.githubusercontent.com/a86a8278da4c5b5a43330e1ea28e6ba050007a837128b5dff5b35d5ff0f1248a/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a365867664443566e3831415958363858766432492d674032782e706e67";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const [confirmTextEntry, setConfirmTextEntry] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Fullname is required"),
      email: yup.string().email().required("Email is required"),
      password: yup
        .string()
        .required("Password is required")
        .min(6, "6 characters required"),
      confirmPassword: yup
        .string()
        .required("Confirm Password is required")
        .oneOf([yup.ref("password"), null], "Password not match"),
    }),
    onSubmit: async (data) => {
      var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data.password, data.confirmPassword), 'my-secret-key@123').toString();
      console.log(ciphertext);
      const userData= {
        name: data.name,
        email: data.email,
        password: ciphertext,
        confirmPassword: ciphertext
      }
      // window.localStorage.setItem('pass_check', JSON.stringify(userData))
      dispatch(RegisterApi(userData, navigate));
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
      <Grid container spacing={3}>
        <Grid item xs={6} marginTop={3}>
          <div style={{ display: "flex", marginLeft: 40 }}>
            <img src={imgUrl} alt="logo" width="50" height="50" />
            <div
              style={{ marginLeft: "auto", display: "flex", marginRight: 50 }}
            >
              <Typography fontSize={14} color="gray">
                Already have an account?
              </Typography>
              <Link
                style={{
                  marginLeft: 6,
                  fontSize: 14,
                  color: "#000",
                  fontWeight: 600,
                }}
                to={"/login"}
              >
                Sign In
              </Link>
            </div>
          </div>

          <Grid margin={16}>
            <Typography variant="h4" fontWeight="bold" marginBottom={6}>
              Create an account
            </Typography>
            <form autoComplete="off">
              <div
                class="full-input"
                style={{
                  padding: "3px",
                  display: "inline-block",
                  backgroundColor: "#e2e2e2",
                  width: 400,
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
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  className="login-form"
                  placeholder="Enter your Fullname"
                  value={formik.values.name}
                  onChange={formik.handleChange("name")}
                />
              </div>
              <FormHelperText error>
                {formik.touched.name ? formik.errors.name : null}
              </FormHelperText>
              <div
                class="full-input"
                style={{
                  padding: "3px",
                  display: "inline-block",
                  backgroundColor: "#e2e2e2",
                  width: 400,
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
                class="full-input"
                style={{
                  padding: "3px",
                  display: "inline-block",
                  backgroundColor: "#e2e2e2",
                  width: 400,
                  marginTop: 30,
                }}
              >
                <label
                  for="password"
                  style={{
                    fontSize: "16px",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  Password
                </label>

                <img
                  onClick={toggleSecureEntry}
                  src={secureTextEntry ? invisbleIcon : visbleIcon}
                  width={20}
                  height={20}
                  alt="visbleIcon"
                  style={{
                    position: "absolute",
                    marginLeft: 300,
                    marginTop: 12,
                    color: "#000",
                    cursor: "pointer",
                  }}
                />

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
              <div
                class="full-input"
                style={{
                  padding: "3px",
                  display: "inline-block",
                  backgroundColor: "#e2e2e2",
                  width: 400,
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
                  Confirm Password
                </label>

                <img
                  onClick={toggleConfirmEntry}
                  src={confirmTextEntry ? invisbleIcon : visbleIcon}
                  width={20}
                  height={20}
                  alt="visbleIcon"
                  style={{
                    position: "absolute",
                    marginLeft: 235,
                    marginTop: 12,
                    color: "#000",
                    cursor: "pointer",
                  }}
                />

                <input
                  type={confirmTextEntry ? "text" : "password"}
                  name="password"
                  className="login-form"
                  placeholder="Confirm Password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange("confirmPassword")}
                />
              </div>
              <FormHelperText error>
                {formik.touched.confirmPassword
                  ? formik.errors.confirmPassword
                  : null}
              </FormHelperText>
              <br />
              <Button
                variant="contained"
                size="large"
                onClick={formik.handleSubmit}
                style={{
                  width: 400,
                  marginTop: 30,
                  height: 50,
                  backgroundColor: "#363738",
                  textTransform: "capitalize",
                  marginBottom: 12,
                }}
              >
                Sign Up
              </Button>
              <Typography marginLeft={"150px"} marginBottom={2}>
                Or Sign up with
              </Typography>

              <div style={{ marginLeft: "80px" }}>
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
                  By signing up, you agree with the
                </Typography>
                <div style={{ display: "flex" }}>
                  <Link>Terms of Use&nbsp;</Link>
                  <Typography> &nbsp;&</Typography>
                  <Link>&nbsp;Privacy Policy</Link>
                </div>
              </div>
            </form>
          </Grid>
        </Grid>
        <Grid item xs={6} style={{ backgroundColor: "#e2e2e2" }}>
          <div style={{ marginTop: 80, marginLeft: 160 }}>
            <img
              src="https://onfire.craftwork.design/images/s-5-img-4.png"
              width="650"
              height="650"
              alt="img"
              style={{ marginLeft: 40 }}
            />

            <Typography
              fontSize={24}
              fontWeight="bold"
              fontFamily="inherit"
              textAlign="center"
              marginRight={20}
            >
              Nice to be Here Camp!!
            </Typography>
            <Typography
              marginRight={20}
              color="gray"
              textAlign="center"
              fontSize={14}
            >
              {Datewish(new Date())}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Register;
