import {
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Input, StyledInput } from "../components/Inputs/FormInput";
import { SelectInput } from "../components/Inputs/SelectInput";
import ProfileStepper from "../components/Stepper/ProfileStepper";

function Resource() {
  const [idImg, setIDImg] = useState();
  const [idImg2, setIDImg2] = useState();
  const [avatarImg, setAvatarImg] = useState();

  const handleChange = (e) => {
    console.log(e.target.files);
    setIDImg(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange2 = (e) => {
    console.log(e.target.files);
    setAvatarImg(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange3 = (e) => {
    console.log(e.target.files);
    setIDImg2(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} sm={3}>
          <Typography fontWeight={"bold"} fontSize={30} fontFamily="gothic">
            Create Profile
          </Typography>
        </Grid>
      </Grid>
      <ProfileStepper />
      <Grid container spacing={2}>
        {/* form Grid */}
        <Grid item xs={12} md={11.6} sm={3} marginTop={6}>
          <Paper elevation={0} style={{ paddingBottom: 12 }}>
            <Container maxWidth="xl">
              <Grid container spacing={2} p={1}>
                <Grid item xs={12} md={4} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    Full name
                  </Typography>
                  <StyledInput className={"inputWithIcon"}>
                    <Input
                      type="text"
                      placeholder="Your full name"
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    />
                  </StyledInput>
                </Grid>
                <Grid item xs={12} md={4} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    DOB
                  </Typography>
                  <StyledInput className={"inputWithIcon"}>
                    <Input
                      type="date"
                      placeholder="DOB"
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    />
                  </StyledInput>
                </Grid>
                <Grid item xs={12} md={4} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    Gender
                  </Typography>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                </Grid>
              </Grid>

              <Grid container spacing={2} p={1}>
                <Grid item xs={12} md={4} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    ID number
                  </Typography>
                  <StyledInput className={"inputWithIcon"}>
                    <Input
                      type="text"
                      placeholder="ID number"
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    />
                  </StyledInput>
                </Grid>
                <Grid item xs={12} md={4} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    Phone
                  </Typography>
                  <StyledInput className={"inputWithIcon"}>
                    <Input
                      type="text"
                      placeholder="Phone"
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    />
                  </StyledInput>
                </Grid>
                <Grid item xs={12} md={4} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    Email
                  </Typography>
                  <StyledInput className={"inputWithIcon"}>
                    <Input
                      type="text"
                      placeholder="Email"
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    />
                  </StyledInput>
                </Grid>

                <Grid item xs={12} md={4} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    Address
                  </Typography>
                  <StyledInput className={"inputWithIcon"}>
                    <Input
                      type="text"
                      placeholder="Address"
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    />
                  </StyledInput>
                </Grid>

                <Grid item xs={12} md={4} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    Street
                  </Typography>
                  <StyledInput className={"inputWithIcon"}>
                    <Input
                      type="text"
                      placeholder="Street"
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    />
                  </StyledInput>
                </Grid>

                <Grid item xs={12} md={4} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    State / Province
                  </Typography>
                  <SelectInput>
                    <option value="" hidden>
                      State / Province
                    </option>
                    <option value="1">Gowthaman S</option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                  </SelectInput>
                </Grid>
                <Grid item xs={12} md={4} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    City
                  </Typography>
                  <SelectInput>
                    <option value="" hidden>
                      City
                    </option>
                    <option value="1">Gowthaman S</option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                  </SelectInput>
                </Grid>
                <Grid item xs={12} md={4} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    Zip Postal Code
                  </Typography>
                  <SelectInput>
                    <option value="" hidden>
                      Ward
                    </option>
                    <option value="1">Gowthaman S</option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                  </SelectInput>
                </Grid>
                <Grid item xs={12} md={4} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    Country / Region
                  </Typography>
                  <SelectInput>
                    <option value="" hidden>
                      Ward
                    </option>
                    <option value="1">Gowthaman S</option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                  </SelectInput>
                </Grid>

                <Grid item xs={12} md={4} sm={3} marginTop={4}>
                  {avatarImg ? (
                    <img
                      src={avatarImg}
                      alt="img"
                      style={{ width: 100, height: 100 }}
                    />
                  ) : (
                    <div
                      style={{
                        height: "100px",
                        border: "2px dashed gray",
                        width: "25%",
                      }}
                    >
                      <Typography variant="h4" textAlign="center" color="gray">
                        +
                      </Typography>
                      <input
                        onChange={handleChange2}
                        type="file"
                        multiple
                        style={{
                          margin: 0,
                          padding: 0,
                          width: "100%",
                          height: "100%",
                          border: "2px solid black",
                          opacity: 0,
                        }}
                      />
                    </div>
                  )}
                  <Typography
                    fontWeight="bold"
                    fontFamily="roboto"
                    marginTop={1}
                  >
                    Avatar
                  </Typography>
                </Grid>
                <Grid item xs={4} md={1} sm={3} marginTop={4}>
                  {idImg ? (
                    <img
                      src={idImg}
                      alt="img"
                      style={{ width: 100, height: 100 }}
                    />
                  ) : (
                    <div
                      style={{
                        height: "100px",
                        border: "2px dashed gray",
                      }}
                    >
                      <Typography variant="h4" textAlign="center" color="gray">
                        +
                      </Typography>
                      <input
                        onChange={handleChange}
                        type="file"
                        multiple
                        style={{
                          margin: 0,
                          padding: 0,
                          width: "100%",
                          height: "100%",
                          border: "2px dashed gray",
                          opacity: 0,
                        }}
                      />
                    </div>
                  )}
                  <Typography
                    fontWeight="bold"
                    fontFamily="roboto"
                    marginTop={1}
                  >
                    ID image
                  </Typography>
                </Grid>

                <Grid item xs={12} md={3} sm={3} marginTop={4}>
                  {idImg2 ? (
                    <img
                      src={idImg2}
                      alt="img"
                      style={{ width: 100, height: 100 }}
                    />
                  ) : (
                    <div
                      style={{
                        height: "100px",
                        border: "2px dashed gray",
                        width: "30%",
                      }}
                    >
                      <Typography variant="h4" textAlign="center" color="gray">
                        +
                      </Typography>
                      <input
                        onChange={handleChange3}
                        type="file"
                        multiple
                        style={{
                          margin: 0,
                          padding: 0,
                          width: "100%",
                          height: "100%",
                          border: "2px solid black",
                          opacity: 0,
                        }}
                      />
                    </div>
                  )}
                </Grid>
                <Grid item xs={12} md={4} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    Role
                  </Typography>
                  <SelectInput>
                    <option value="" hidden>
                      MERN Developer
                    </option>
                    <option value="1">Gowthaman S</option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                  </SelectInput>
                </Grid>
              </Grid>
              <br />
              <Divider />

              <Grid container spacing={2} p={1} marginTop={2}>
                <Grid item xs={12} md={4} sm={3}>
                  <p style={{ color: "gray" }}>
                    Occaecat sunt cillum ex et sit pariatur enum deserunt ex
                    labore ad exercitation veniam exercitation do. Anim qui enim
                    ea ip
                  </p>
                </Grid>
                <Grid item xs={12} md={4} sm={3}></Grid>
                <Grid item xs={12} md={1} sm={3}></Grid>
                <Grid item xs={12} md={1} sm={3}>
                  <Button
                    variant="contained"
                    color="inherit"
                    disableElevation={true}
                    style={{ textTransform: "capitalize" }}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item xs={12} md={2} sm={3}>
                  <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<ArrowForwardIcon color="inherit" />}
                    disableElevation={true}
                    style={{
                      textTransform: "capitalize",
                      backgroundColor: "rgb(85, 64, 255)",
                    }}
                  >
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Resource;
