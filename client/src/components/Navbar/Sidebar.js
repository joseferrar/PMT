import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Container,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { personal, report, userRoutes } from "../../routes/pageRoutes";

const imgUrl =
  "https://camo.githubusercontent.com/a86a8278da4c5b5a43330e1ea28e6ba050007a837128b5dff5b35d5ff0f1248a/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a365867664443566e3831415958363858766432492d674032782e706e67";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Profile Picture" src={imgUrl} />
          </ListItemAvatar>
          <ListItemText primary={"Product Name"} secondary={"Category"} />
        </ListItem>

        {/* <Divider /> */}
        <List>
          {userRoutes.map((item, index) => (
            <ListItem key={index} disablePadding style={{ paddingLeft: 15 }}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <Typography fontWeight="bold" marginLeft={2} marginTop={5} marginBottom={1} fontSize={14}>
            Report
          </Typography>
          {report.map((item, index) => (
            <ListItem key={index} disablePadding style={{ paddingLeft: 15 }}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <List>
          <Typography fontWeight="bold" marginLeft={2} marginTop={5} marginBottom={1} fontSize={14}>
            Personal
          </Typography>
          {personal.map((item, index) => (
            <ListItem key={index} disablePadding style={{ paddingLeft: 15 }}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}

export default Sidebar;
