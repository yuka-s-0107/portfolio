import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import FaceOutlinedIcon from "@mui/icons-material/FaceOutlined";

export default function SideMenu() {
  return (
    <>
      <List>
        {["Calendar", "API"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <CalendarMonthOutlinedIcon />
                ) : (
                  <BuildOutlinedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
