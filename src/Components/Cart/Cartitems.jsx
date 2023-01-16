import { Box, Grid, Button, styled, Typography} from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { Decreaseqty, Deletecartitem, Increaseqty } from '../../service/store/userReducer';

const Cartitems = ({item}) => {
    const Wrapper = styled(Grid)(({ theme}) => ({
        display:'flex',
        marginTop:55,
        borderRadius:0,
        borderTop:'2px light gray',
       
      }));
      const dispatch = useDispatch()
  return (
    <div>
        <Wrapper>
        <Grid container 
       >
        <Grid style={{margin:20,display:'flex',flexDirection:'column',alignItems:'center'}} item md={3} sm={10} xs={12}>
            <img style={{height:100,width:100,marginRight:30,marginLeft:15}} src={item.url} alt=''/>
            <Box style={{display:'flex',alignItems:'center'}}>
                <Button onClick={()=>dispatch(Increaseqty({id:item.id,qty:item.qty+1}))} variant='contained'style={{width:30,height:30,borderRadius:15}}>+</Button>
                <h2>{item.qty}</h2>
                <Button onClick={()=>dispatch(Decreaseqty({id:item.id,qty:item.qty-1}))} variant='contained'style={{width:30,height:30,borderRadius:15}}>-</Button>
            </Box>
        </Grid>
        <Grid item md={7} sm={10} xs={11}>
          <Typography>{item.title.longTitle}</Typography>
          <Typography><span>{item.price.cost*item.qty}</span></Typography>
          <Typography><span>{item.price.mrp}</span></Typography>
          <Typography><span>{item.price.discount}OFF</span></Typography>
          <Button onClick={()=>dispatch(Deletecartitem({id:item.id}))} variant='contained'>Remove</Button>
        </Grid>
        </Grid>
        </Wrapper>
    </div>
  )
}

export default Cartitems