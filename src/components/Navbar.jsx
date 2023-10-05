import React, {useState} from 'react';
import {AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography} from "@mui/material";
import {Mail, Notifications, Pets} from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));

const Icons = styled(Box)(({theme}) => ({
    /* backgroundColor: "white",*/
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]:{
        display:"flex",
    },
}));

const UserBox = styled(Box)(({theme}) => ({
    /* backgroundColor: "white",*/
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]:{
        display:"none",
    },
}));

function Navbar(props) {
    const [open, setOpen] = useState(false);

    return (
        <AppBar position={`sticky`}>
            <StyledToolbar>
                <Typography variant={`h6`} sx={{display: {xs: "none", sm: "block"}}}>Z DEV</Typography>
                <Pets sx={{display: {xs: "block", sm: "none"}}}/>
                <Search><InputBase placeholder={`search...`}/></Search>
                <Icons>
                    <Badge badgeContent={4} color={`error`}>
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={4} color={`error`}>
                        <Notifications/>
                    </Badge>
                    <Avatar sx={{width: "30px", height: "30px"}} alt="Remy Sharp" src="https://picsum.photos/200" onClick={e=>setOpen(true)}/>
                </Icons>
                <UserBox>
                    <Avatar sx={{width: "30px", height: "30px"}} alt="Remy Sharp" src="https://picsum.photos/200" onClick={e=>setOpen(true)}/>
                    <Typography variant={`span`}>John</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
}

export default Navbar;