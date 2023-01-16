import {  Typography,  Divider, Grid } from "@mui/material";
import React from "react";

// const useStyles = makeStyles({
//   wrapper: {
//     margin: "30px 3px 3px 20px",
//     width: 400,
//     height: 300,
//   },
//   pricewrapper: {
//     "& > * ": {
//       padding: "15px 17px 5px 17px",
//     },
//   },
//   price: {
//     display: "flex",
//     justifyContent: "space-between",
//     "& > * ": {
//       fontWeight: 400,
//     },
//   },
// });
const Price = ({ cart }) => {
  // const classes = useStyles();
  const priceUpdate = () => {
    let price = 0;
    cart.forEach((ele) => {
      price = price + ele.qty * ele.price.mrp;
    });
    return price;
  };
  const discountUpdate = () => {
    let discount = 0;
    cart.forEach(
      (ele) =>
        (discount =
          discount +
          ele.qty * (ele.price.mrp - ele.price.cost))
    );
    return discount;
  };
  return (
    <Grid md={12} sm={10} xs={11} style={{ margin: "30px 3px 3px 20px",
    width: 400,
    height: 300,}}>
      <Typography
        style={{
          fontWeight: 500,
          marginLeft: 15,
          fontSize: 19,
        }}
      >
        Price Details
      </Typography>
      <Divider />
      <div>
        <div style={{display: "flex",
    justifyContent: "space-between",
    "& > * ": {
      fontWeight: 400,
    },}}>
          <Typography>Price({cart.length} item)</Typography>
          <Typography>₹{cart && priceUpdate()} </Typography>
        </div>
        <div style={{display: "flex",
    justifyContent: "space-between",
    "& > * ": {
      fontWeight: 400,
    },}}>
          <Typography>Discount</Typography>
          <Typography>-₹{cart && discountUpdate()}</Typography>
        </div>
        <div style={{display: "flex",
    justifyContent: "space-between",
    "& > * ": {
      fontWeight: 400,
    },}}>
          <Typography>Delivery Charges</Typography>
          <Typography>₹100</Typography>
        </div>
        <div style={{display: "flex",
    justifyContent: "space-between",
    "& > * ": {
      fontWeight: 400,
    },}}>
          <Typography style={{ fontWeight: 550 }}>Total Amount</Typography>
          <Typography style={{ fontWeight: 550 }}>
            ₹{priceUpdate() - discountUpdate() + 100}
          </Typography>
        </div>
        <Typography
          style={{
            color: "#388E3C",
          }}
        >
          You will save ₹{discountUpdate() - 100} on this order
        </Typography>
      </div>
    </Grid>
  );
};

export default Price;