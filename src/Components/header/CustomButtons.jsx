import { useState } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import { ShoppingCart } from '@mui/icons-material';
//components
import LoginDialog from "../login/LoginDialog";
import { useSelector } from "react-redux";
import Profile from "./Profile";
import { Link } from "react-router-dom";
const Wrapper = styled(Box)`
display:flex;
margin:0 3% 0 auto;
& > button, & > p, & > div{
    margin-right:40px;
    font-size:16px;
    align-items:center;
}`;
const Container = styled(Box)`
display:flex;`;
const LoginButton = styled(Button)`
color:#2874f0;
background:#ffffff;
text-transform:none;
padding:5px 40px;
border-radius:2px;
box-shadow;none;
font-weight:600;
height:32px;
`;
const CustomButtons = () => {

    const [open, setOpen] = useState(false);
    const { user, setUser } = useSelector(state => state.user)
    console.log(user, 'navbar')
    const openDialog = () => {
        setOpen(true)
    }
    return (
        <Wrapper>
            {
                user.length ? <Profile user={user} setUser={setUser} />
                    :
                    <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>}
            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>
            <Link to='/cart'  style={{textDecoration:'none',display:"flex",color:'#FFFFFF'}}>
                
                    <ShoppingCart />
                    <Typography>Cart</Typography>
                </Link>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}
export default CustomButtons;