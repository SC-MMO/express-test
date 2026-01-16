import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import BugReportIcon from "@mui/icons-material/BugReport";

import QuizIcon from "@mui/icons-material/Quiz";
import EmailIcon from "@mui/icons-material/Email";
import InfoIcon from "@mui/icons-material/Info";

const menu1: Record<string, React.ReactNode> = {
  Home: <HomeIcon />,
  Products: <ShoppingCartIcon />,
  Posts: <WhatshotIcon />,
  Tests: <BugReportIcon />,
};
const menu2 = {
  FAQ: <QuizIcon />,
  Contact: <EmailIcon />,
  About: <InfoIcon />,
};

function MenuMap(menu: Record<string, React.ReactNode>) {
  return (
    <>
      {Object.entries(menu).map(([text, icon]) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
}

function Menu() {
  const [open, setOpen] = React.useState(true);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>{MenuMap(menu1)}</List>
      <Divider />
      <List>{MenuMap(menu2)}</List>
    </Box>
  );

  return (
    <Drawer variant="persistent" anchor="left" open={open}>
      {DrawerList}
    </Drawer>
  );
}

export { Menu };
