import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import FormHelperText from "@mui/material/FormHelperText";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ForgotApi, LoginApi, RegisterApi } from "../../apis/authApi";
import { useDispatch } from "react-redux";

import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import AppleIcon from "@mui/icons-material/Apple";
import visbleIcon from "../../packages/images/visible.png";
import invisbleIcon from "../../packages/images/invisible.png";
import { Datewish } from "../../util/Datewish";

function Forgot() {
  const imgUrl =
    "https://camo.githubusercontent.com/a86a8278da4c5b5a43330e1ea28e6ba050007a837128b5dff5b35d5ff0f1248a/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a365867664443566e3831415958363858766432492d674032782e706e67";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const [confirmTextEntry, setConfirmTextEntry] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object({
      email: yup.string().email().required("Email is required"),
    }),
    onSubmit: async (data) => {
      dispatch(ForgotApi(data));
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
              Forgot password
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
                Request reset link
              </Button>

              <div style={{ marginLeft: "80px" }}>
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
          <div style={{ marginTop: 80, marginLeft: 160, height: "100%" }}>
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

export default Forgot;
