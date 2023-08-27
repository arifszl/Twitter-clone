import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import TwitterIcon from "@mui/icons-material/Twitter";
import VerifiedIcon from "@mui/icons-material/Verified";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLogout } from "../../store";
const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  let dispatch = useDispatch();
  let userData = useSelector((state) => {
    return state.auth;
  });

  console.log(userData);

  const icons = [
    <HomeIcon color="primary" />,
    <SearchIcon />,
    <NotificationsIcon />,
    <EmailIcon />,
    <ListAltIcon />,
    <PeopleIcon />,
    <VerifiedIcon />,
    <PersonIcon />,
    <MoreHorizIcon />,
  ];

  console.log(userData);

  return (
    <Box>
      <CssBaseline />

      <Drawer
        variant="permanent"
        anchor="left"
      >
        <div className="flex justify-center items-center">
          <TwitterIcon
            color="primary"
            sx={{ fontSize: 50 }}
          />
        </div>

        <List>
          {[
            "Home",
            "Explore",
            "Notification",
            "Message",
            "List",
            "Communities",
            "Verified",
            "Profile",
            "More",
          ].map((text, index) => (
            <ListItem
              key={index}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  {icons[index]}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
          <ListItem disablePadding>
            <ListItemButton>
              <Button
                className="w-full  bg-cyan-500 "
                variant="contained"
                endIcon={<SendIcon className=" text-gray-400" />}
              >
                POST
              </Button>
            </ListItemButton>
          </ListItem>
        </List> */}
        <div className="flex flex-col justify-center items-center">
          {userData.username != null ? (
            <>
              <Avatar
                alt="Travis Howard"
                src="/static/images/avatar/2.jpg"
              />
              <h4 className="text-black text-lg text">{userData.username}</h4>

              <Button
                onClick={() => dispatch(setLogout())}
                variant="contained"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <NavLink
                className="m-2"
                to={"/register"}
              >
                <Button variant="contained">sign up</Button>
              </NavLink>
              <NavLink
                className="m-2"
                to={"/login"}
              >
                <Button variant="contained">Log in</Button>
              </NavLink>
            </>
          )}
        </div>
      </Drawer>
    </Box>
  );
}

// import React from "react";
// import "./SidebarOption.css";
// import "./Sidebar.css";
// import HomeIcon from "@mui/icons-material/Home";
// import TwitterIcon from "@mui/icons-material/Twitter";

// import EmailIcon from "@mui/icons-material/Email";
// import ListAltIcon from "@mui/icons-material/ListAlt";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import PeopleIcon from "@mui/icons-material/People";
// import PersonIcon from "@mui/icons-material/Person";
// import SearchIcon from "@mui/icons-material/Search";
// import SendIcon from "@mui/icons-material/Send";
// import VerifiedIcon from "@mui/icons-material/Verified";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import SidebarOption from "./SidebarOption";

// // import TwitterIcon from "@mui/icons-material/Twitter";
// //

// // import HomeIcon from "@mui/icons-material/Home";
// // import SearchIcon from "@material-ui/icons/Search";
// // import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
// // import MailOutlineIcon from "@material-ui/icons/MailOutline";
// // import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
// // import ListAltIcon from "@material-ui/icons/ListAlt";
// // import PermIdentityIcon from "@material-ui/icons/PermIdentity";
// // import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// // import { Button } from "@material-ui/core";

// function Sidebar() {
//   return (
//     <div className="sidebar">
//       <TwitterIcon className="sidebar__twitterIcon" />

//       <div className="  sidebarOption">
//         <EmailIcon /> <h2>Home</h2>
//       </div>
//       <div className="  sidebarOption">
//         <NotificationsIcon /> <h2>Home</h2>
//       </div>
//       <div className="  sidebarOption">
//         <PeopleIcon /> <h2>Home</h2>
//       </div>
//       <div className="  sidebarOption">
//         <ListAltIcon /> <h2>Home</h2>
//       </div>
//       <div className="  sidebarOption">
//         <MoreHorizIcon /> <h2>Home</h2>
//       </div>
//       <div className="  sidebarOption">
//         <SendIcon /> <h2>Home</h2>
//       </div>
//       <Button
//         variant="outlined"
//         className="sidebar__tweet"
//         fullWidth
//       >
//         Tweet
//       </Button>
//     </div>
//   );
// }

// export default Sidebar;
