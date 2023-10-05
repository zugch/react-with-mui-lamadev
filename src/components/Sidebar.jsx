import React from 'react';
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from "@mui/material";
import {AccountBox, Groups, Home, ModeNight, Pages, Person, Settings, Storefront} from "@mui/icons-material";


function Sidebar({mode, setMode}) {
    return (
        <Box flex={1} p={2} sx={{display: {xs: "none", sm: "block"}}}>
            <Box position={`fixed`}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={`a`} href={`#home`}>
                            <ListItemIcon>
                                <Home/>
                            </ListItemIcon>
                            <ListItemText primary="Homepage"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={`a`} href={`#pages`}>
                            <ListItemIcon>
                                <Pages/>
                            </ListItemIcon>
                            <ListItemText primary="Page"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={`a`} href={`#groups`}>
                            <ListItemIcon>
                                <Groups/>
                            </ListItemIcon>
                            <ListItemText primary="Groups"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={`a`} href={`#simple-list`}>
                            <ListItemIcon>
                                <Storefront/>
                            </ListItemIcon>
                            <ListItemText primary="Marketplace"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={`a`} href={`#simple-list`}>
                            <ListItemIcon>
                                <Person/>
                            </ListItemIcon>
                            <ListItemText primary="Friends"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={`a`} href={`#simple-list`}>
                            <ListItemIcon>
                                <Settings/>
                            </ListItemIcon>
                            <ListItemText primary="Settings"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={`a`} href={`#simple-list`}>
                            <ListItemIcon>
                                <AccountBox/>
                            </ListItemIcon>
                            <ListItemText primary="Profile"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={`a`} href={`#simple-list`}>
                            <ListItemIcon>
                                <ModeNight/>
                            </ListItemIcon>
                            <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
}

export default Sidebar;