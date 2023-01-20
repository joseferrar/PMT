import {
  Grid,
  Typography,
  Chip,
  Button,
  Paper,
  Container,
  Divider,
  ListItem,
  ListItemText,
  List,
  ListItemIcon,
  Slider,
  Stack,
  Avatar,
  Badge,
} from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { FormInput, Input, StyledInput } from "../components/Inputs/FormInput";
import LockIcon from "@mui/icons-material/Lock";
import InfoIcon from "@mui/icons-material/Info";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import BadgeIcon from "@mui/icons-material/Badge";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import PaymentsIcon from "@mui/icons-material/Payments";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { SelectInput } from "../components/Inputs/SelectInput";
import SearchIcon from "@mui/icons-material/Search";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
import { StyledBadge } from "../components/Avater";
import { tableData } from "../dummyData/tableData";

function Project() {
  const [files, setFiles] = useState([]);
  console.log(files.map((item) => console.log(item.file)));
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} sm={3}>
          <Typography fontWeight={"bold"} fontSize={30} fontFamily="gothic">
            QR Code Generator App
            <Chip
              label="Active"
              style={{
                backgroundColor: "rgba(185,255,200,0.36)",
                color: "green",
                borderRadius: 8,
                marginLeft: 20,
              }}
            />
          </Typography>
        </Grid>
        <Grid item xs={2} md={3} sm={3}></Grid>
        <Grid item xs={2} md={1} sm={3}></Grid>
        <Grid item xs={8} md={2} sm={3}>
          <Button
            variant="contained"
            disableElevation={true}
            style={{
              backgroundColor: "rgb(67 63 232 / 8%)",
              color: "#9c11b5",
              borderRadius: 8,

              textTransform: "capitalize",
            }}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {/* form Grid */}
        <Grid item xs={12} md={9} sm={3} marginTop={4}>
          <Paper elevation={0} style={{ paddingBottom: 12 }}>
            <Container>
              <List dense style={{ marginLeft: -14 }}>
                <ListItem>
                  <ListItemIcon>
                    <InfoIcon color="info" style={{ fontSize: 25 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        fontFamily="roboto"
                        fontSize={18}
                        marginLeft={-2}
                      >
                        General Information
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
              <Grid container spacing={2} p={1}>
                <Grid item xs={12} md={5} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    RFP ID <span style={{ color: "red" }}>&lowast;</span>
                  </Typography>
                  <StyledInput className={"inputWithIcon"}>
                    <Input
                      type="text"
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    />
                    <button>
                      <LockIcon />
                    </button>
                  </StyledInput>
                </Grid>
                <Grid item xs={12} md={5} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    Project Type <span style={{ color: "red" }}>&lowast;</span>
                  </Typography>
                  <SelectInput>
                    <option value="" hidden>
                      Choose a Project Type
                    </option>
                    <option value="1">Audi</option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                  </SelectInput>
                </Grid>
              </Grid>

              <Grid container spacing={2} p={1}>
                <Grid item xs={12} md={5} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    Project Name <span style={{ color: "red" }}>&lowast;</span>
                  </Typography>
                  <SelectInput>
                    <option value="" hidden>
                      Choose a Project Name
                    </option>
                    <option value="1">Audi</option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                  </SelectInput>
                </Grid>
                <Grid item xs={12} md={5} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    Client Name <span style={{ color: "red" }}>&lowast;</span>
                  </Typography>
                  <SelectInput>
                    <option value="" hidden>
                      Choose a Client Name
                    </option>
                    <option value="1">Audi</option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                  </SelectInput>
                </Grid>
              </Grid>

              <Grid container spacing={2} p={1}>
                <Grid item xs={12} md={5} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    Start date <span style={{ color: "red" }}>&lowast;</span>
                  </Typography>
                  <StyledInput className={"inputWithIcon"}>
                    <Input
                      type="date"
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    />
                  </StyledInput>
                </Grid>
                <Grid item xs={12} md={5} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    End date
                  </Typography>
                  <StyledInput className={"inputWithIcon"}>
                    <StyledInput className={"inputWithIcon"}>
                      <Input
                        type="date"
                        onSubmit={(e) => {
                          e.preventDefault();
                        }}
                      />
                    </StyledInput>
                  </StyledInput>
                </Grid>
              </Grid>
              <br />
              <Divider />
              <List dense style={{ marginLeft: -14 }}>
                <ListItem>
                  <ListItemIcon>
                    <AccountCircleIcon color="info" style={{ fontSize: 25 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        fontFamily="roboto"
                        fontSize={18}
                        marginLeft={-2}
                      >
                        Project Owners Info
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
              <Grid item xs={12} md={10} sm={3} p={1}>
                <Typography fontWeight="bold" fontFamily="roboto">
                  Project Manager
                </Typography>
                <SelectInput>
                  <option value="" hidden>
                    Choose a Project Manager
                  </option>
                  <option value="1">Gowthaman S</option>
                  <option value="2">BMW</option>
                  <option value="3">Citroen</option>
                  <option value="4">Ford</option>
                </SelectInput>
              </Grid>

              <Grid container spacing={2} p={1}>
                <Grid item xs={12} md={5} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    Client Email
                  </Typography>
                  <StyledInput className={"inputWithIcon"}>
                    <Input
                      type="text"
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    />
                    <button>
                      <EmailIcon />
                    </button>
                  </StyledInput>
                </Grid>
                <Grid item xs={12} md={5} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    Contact Number
                  </Typography>
                  <StyledInput className={"inputWithIcon"}>
                    <Input
                      type="text"
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    />
                    <button>
                      <StayCurrentPortraitIcon />
                    </button>
                  </StyledInput>
                </Grid>
              </Grid>

              <Grid container spacing={2} p={1} marginBottom={1}>
                <Grid item xs={12} md={5} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    Skype ID
                  </Typography>
                  <StyledInput className={"inputWithIcon"}>
                    <Input
                      type="text"
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    />
                    <button>
                      <BadgeIcon />
                    </button>
                  </StyledInput>
                </Grid>
                <Grid item xs={12} md={5} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    Project Budget
                  </Typography>
                  <StyledInput className={"inputWithIcon"}>
                    <Input
                      type="text"
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    />
                    <button>
                      <PaymentsIcon />
                    </button>
                  </StyledInput>
                </Grid>
              </Grid>

              <Divider />
              <Grid container spacing={2} p={1}>
                <Grid item xs={12} md={10} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    Days to Complete
                  </Typography>
                  <SelectInput>
                    <option value="" hidden>
                      Choose a Complete Dates
                    </option>
                    <option value="1">Gowthaman S</option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                  </SelectInput>
                </Grid>
                <Grid item xs={12} md={10} sm={3}>
                  <Typography fontWeight="bold" fontFamily="roboto">
                    Sprint Suggestions
                  </Typography>
                  <SelectInput>
                    <option value="" hidden>
                      Choose a Sprint
                    </option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                  </SelectInput>
                </Grid>
              </Grid>

              {/* paper spinner */}
              <Typography fontWeight="bold" fontFamily="roboto" p={1}>
                Profit Predections to Days
              </Typography>
              <Grid item xs={12} md={10.8} sm={3}>
                <div
                  style={{
                    backgroundColor: "#F0F0F0",
                    width: "90%",
                    height: "350px",
                    marginBottom: 22,
                    paddingTop: 22,
                    paddingLeft: 22,
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={5} sm={3}>
                      <Typography variant="body" gutterBottom>
                        25% Profit{" "}
                      </Typography>
                      <Slider defaultValue={60} color="primary" disableSwap />
                    </Grid>
                    <Grid item xs={12} md={4} sm={3}></Grid>
                    <Grid item xs={12} md={3} sm={3}>
                      <input
                        type="text"
                        style={{ height: 35, fontSize: 18, width: "75%" }}
                        value="2000"
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item xs={12} md={5} sm={3}>
                      <Typography variant="body" gutterBottom>
                        45% Profit{" "}
                      </Typography>
                      <Slider defaultValue={60} color="primary" />
                    </Grid>
                    <Grid item xs={12} md={4} sm={3}></Grid>
                    <Grid item xs={12} md={3} sm={3}>
                      <input
                        type="text"
                        style={{ height: 35, fontSize: 18, width: "75%" }}
                        value="4000"
                      />
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Container>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} sm={3} marginTop={4}>
          <Paper elevation={0}>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <ArticleIcon color="info" style={{ fontSize: 25 }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      fontFamily="roboto"
                      fontSize={18}
                      marginLeft={-2}
                    >
                      Related documents
                    </Typography>
                  }
                />
              </ListItem>
            </List>
            <div
              style={{
                width: 300,
                height: 500,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <FilePond
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={true}
                maxFiles={3}
                name="files"
                labelIdle='Drag & Drop your files here <span class="filepond--label-action">Browse</span>'
              />
            </div>
          </Paper>
          <List dense style={{ marginLeft: 50, marginRight: 50 }}>
            <ListItem>
              <ListItemIcon>
                <PeopleAltOutlinedIcon
                  color="inherit"
                  style={{ fontSize: 25 }}
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography fontFamily="roboto" fontSize={18} marginLeft={-2}>
                    Resource Details
                  </Typography>
                }
              />
            </ListItem>
          </List>
          <StyledInput className={"inputWithIcon"}>
            <button>
              <SearchIcon />
            </button>
            <Input
              type="text"
              onSubmit={(e) => {
                e.preventDefault();
              }}
              style={{ border: "1px solid black" }}
            />
          </StyledInput>

          <Stack direction="row" spacing={1} margin={1}>
            {tableData.map((item, i) => (
              <StyledBadge
                key={i}
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  alt="badge"
                  src={item.imgUrl}
                  sx={{ width: 54, height: 54 }}
                />
              </StyledBadge>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default Project;
