import { Grid, Typography, styled, Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Cartitems from './Cartitems'
import EmptyCart from './EmptyCart'
import Price from './Price'

const Cart = () => {
  const { cart } = useSelector(state => state.user)
  const Wrapper = styled(Grid)(({ theme}) => ({
    display:'flex',
    marginTop:55,
    padding:'20px 0px 0px 70px',
    [theme.breakpoints.down('md')]:{
      marginTop:100,
      padding:0,
      
    }
  }));
  const Loginbutton = styled(Button)`
  
  width:250px;
  height:45px;
  margin-left:auto;
  font-size:15px;`

  return (
    <div>
      {cart.length?(
        <Wrapper container>
          <Grid item md={8} sm={10} xs={12}>
            <Typography style={{fontSize:19,marginLeft:15}}>My Cart{cart.length}</Typography>
             {cart.map((item,index)=>(
              <div key={index}>
                <Cartitems item={item}/>
              </div>
             ))}
             <div style={{textAlign:'right',padding:'16px 22px',boxShadow:'6px 10px 12px lightgray',marginBottom:20,borderTop:'3px solid #f0f0f0'}}>
              <Loginbutton style={{background:'#FB641B'}} variant='contained'>Place Order</Loginbutton>
             </div>
          </Grid>
          <Grid item md={3} sm={10} xs={12}>
            <Price cart={cart}/>
          </Grid>
        </Wrapper>):
        <EmptyCart/>
      }
    </div>
  )
}

export default Cart