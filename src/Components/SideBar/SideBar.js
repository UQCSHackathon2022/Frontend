import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const drawerWidth = 350;

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.primary.main, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

export default function ClippedDrawer() {
    const handleSearch = (event) => {
        console.log("Searching for " + event.target.value)
    }
    const handleClick = (event) => {
        console.log(event.target);
      };
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", m: 2 }}>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Divider sx={{my: 2}}/>
          <Box sx={{ overflow: "auto", m: 2}}>
            <Typography sx={{mb: 2 }}>My Courses:</Typography>
            <Box sx={{mx: "auto", width: "100%", my: 1}}>
                <Stack direction="row" spacing={1} justifyContent="space-evenly" alignItems="center" sx={{m: 1.5}}>
                    <Button variant="contained" color="primary" size="small" sx={{width: "35%"}}>MATH2001</Button>
                    <Button variant="contained" color="primary" size="small" sx={{width: "35%"}}>DATA2001</Button>
                </Stack>
                <Stack direction="row" spacing={1} justifyContent="space-evenly" alignItems="center" sx={{m: 1.5}}>
                    <Button variant="contained" color="primary" size="small" sx={{width: "35%"}}>CSSE2002</Button>
                    <Button variant="contained" color="primary" size="small" sx={{width: "35%"}}>STAT1301</Button>
                </Stack>
            </Box>
          </Box>
          <Divider />
          <List>
            {["MATH1052", "CSSE1001", "STAT1201", "MATH1051"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
