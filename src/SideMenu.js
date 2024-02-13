import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import { Link } from 'react-router-dom';
import RoutesLink from './RoutesLink';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';

export default function SideMenu() {
  return (
    <>
      <List>
        <ListItem>
          <ListItemText>
            <ListItemButton>
              <ListItemIcon>
                <FaceOutlinedIcon />
                <Link to="/">Plofile</Link>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <CalendarMonthOutlinedIcon />
                <Link to="/calendar">Calendar</Link>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <BuildOutlinedIcon />
                <Link to="/api">API</Link>
              </ListItemIcon>
            </ListItemButton>
          </ListItemText>
        </ListItem>
      </List>
    </>
  );
}
