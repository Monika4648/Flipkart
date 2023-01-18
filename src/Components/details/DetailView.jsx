import { Box, Button, styled, Typography,Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { products } from '../../constants/data';
import { Addtocart } from '../../service/store/userReducer';
import ProductDetail from './ProductDetail';

const DetailView = ({ match }) => {
  const dispatch = useDispatch()
  const Image = styled('img')({
    padding: '15px 20px',
  
    width: '95%',
  })

  const Component = styled(Box)`
  background:#FFFFFF;
  margin-top:55px;`
  const Leftcontainer = styled(Box)`
  min-width:40%;
  padding:40px 0 0 80px;`
  const Rightcontainer = styled(Grid)`
  margin-top:50px;
  
  `
  const Stylebutton = styled(Button)`
  width:46%;
  height:50px;
  border-radius:2px;`
  const Container =styled(Grid)`
  background:#FFFFFF;
  display:flex;`
  const { id } = useParams()
  
  return (
    <Component>
      {products.filter(item => item.id === id).map((item, index) => (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
          <Leftcontainer>
            <Image src={item.url}  alt='bjj' />
            <Stylebutton style= {{marginRight:10,background:'#ff9f00'}}variant='contained'onClick={()=>dispatch(Addtocart({...item,qty:1}))}>Add to cart</Stylebutton>
            <Stylebutton style= {{background:'#fb541b'}}variant='contained'>Buy now</Stylebutton>
          </Leftcontainer>
          </Grid>
          <Rightcontainer item lg={8} md={8} sm={8} xs={12}>
            <Typography>{item.title.longTitle}</Typography>
            <Typography style = {{marginTop:5,color:'#878787',fontSize:14}}>
              8 ratings & 1 review          
            </Typography>
            <Typography>
              <Box component='span' style={{fontSize:28,marginLeft:5}}>₹ {item.price.cost}</Box>
              <Box component='span' style={{color:'#878787',marginLeft:5}}><strike>₹ {item.price.mrp}</strike></Box>
              <Box component='span' style={{color:'#388E3C',marginLeft:5}}>₹ {item.price.discount}</Box>
            </Typography>
            <ProductDetail item ={item}/>
          </Rightcontainer>
        </Container>
        
      ))}
    </Component>
  )
}

export default DetailView;