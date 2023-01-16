import React from "react";
import { Typography,  Button } from "@mui/material";
import { Link } from "react-router-dom";


const EmptyCart = () => {
  const emptycarturl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

  
  return (
    <div style={{ width: "90%",
    height: "75vh",
    margin: "0px 40px 0px 48px",}}>
      <Typography style={{ fontSize: 20,
    padding: "13px 0px 13px 23px",
    fontWeight: 500,}}>My Cart</Typography>
      <div style={{ display:'flex',
      flexDirection:'column',
      alignItems:'center',
      '& > *':{
          margin:'10px 0px 0px 0px'
      }}}>
      <img style={{ marginTop:60,
      width:230}} alt="" src={emptycarturl}/>
      <Typography>Your cart is empty</Typography>
      <Typography>
       Add items to it now
      </Typography>
     <Link style={{textDecoration:'none'}} to='/'>
     <Button
        
        style={{ background: "#2874F0", width: 200,
            textTransform: "none",
            color: "white",
            border: "none",
            fontSize: 15,
            borderRadius:0,
            fontWeight: 550,}}
      >
        Shop now
      </Button></Link>
      </div>
    </div>
  );
};

export default EmptyCart;