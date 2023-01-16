import { Box, Menu, MenuItem, Typography,styled } from "@mui/material";
import React from "react"
import { useState } from "react"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useDispatch } from "react-redux";
import { Logoutuser } from "../../service/store/userReducer";
const Component = styled(Menu)`
margin-top:5px;
`;

const Logout = styled(Typography)`
font-size:14px;
margin-left:20px;`

const Profile = ({user,setUser}) => {
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch()
const handleClick = (event) => {
    setOpen(event.currentTarget);
}
const handleClose = () => {
    setOpen(false)
}
const logoutUser = () =>  {
  dispatch(Logoutuser())  ;
}
    return(
        <>
    <Box onClick={handleClick}><Typography style={{ marginTop: 3, cursor:'pointer'}}>{user[0]?.firstname}</Typography></Box>
    <Component
        
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        
      >
        <MenuItem onClick={() => {handleClose();logoutUser();}}>
            <PowerSettingsNewIcon color="primary" fontSize="small"/>
           <Logout>Logout</Logout>
            </MenuItem>
        
      </Component>
        </>
    )
}
export default Profile;