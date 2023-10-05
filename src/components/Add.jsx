import React, {useState} from 'react';
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Fab,
    Modal,
    Stack,
    styled,
    TextField,
    Tooltip,
    Typography
} from "@mui/material";
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material";

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const UserBox = styled(Box)(({theme}) => ({
    /* backgroundColor: "white",*/
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
}));

function Add(props) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Tooltip onClick={e => setOpen(true)}
                     title="Add"
                     sx={{
                         position: "fixed",
                         bottom: 20,
                         left: {xs: "calc(50% - 25px)", md: 30},
                     }}
            >
                <Fab color={`primary`} aria-label={`add`}>
                    <AddIcon/>
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={`background.default`} color={`text.primary`} p={3} borderRadius={5}>
                    <Typography variant={`h6`} color={`gray`} textAlign={`center`}>Create post</Typography>
                    <UserBox>
                        <Avatar sx={{width: "30px", height: "30px"}} alt="Remy Sharp" src="https://picsum.photos/200"
                                onClick={e => setOpen(true)}/>
                        <Typography fontWeight={500} variant={`span`}>John Steam</Typography>
                    </UserBox>
                    <TextField
                        sx={{width: "100%"}}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction={`row`} gap={1} mt={2} mb={3}>
                        <EmojiEmotions color={`primary`}/>
                        <Image color={`secondary`}/>
                        <VideoCameraBack color={`success`}/>
                        <PersonAdd color={`error`}/>
                    </Stack>
                    <ButtonGroup fullWidth={true} variant={`contained`} aria-label={`outlined primary button group`}>
                        <Button>Post</Button>
                        <Button sx={{width: "100px"}}>
                            <DateRange/>
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    );
}

export default Add;