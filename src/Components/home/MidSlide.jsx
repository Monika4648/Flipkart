import { Box, styled } from '@mui/material'
import React from 'react'
import Slide from './Slide'

const MidSlide = ({products, title, timer}) => {
    const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
    const Component = styled(Box)`
    display:flex;`
    const LeftComponent = styled(Box)(({ theme}) => ({
    width:'83%',
    [theme.breakpoints.down('md')]:{
      width:'100%',
    }
  }));
    const RightComponent = styled(Box)(({ theme }) => ({
    background: '#FFFFFF',
    padding:5,
    margintop:10,
    marginleft:10,
    width:'17%',
    [theme.breakpoints.down('md')] :{
       display:'none'
    }
    }));
  return (
    <Component>
        <LeftComponent>
        <Slide products={products} title={title} timer={timer}/>
        </LeftComponent>
        <RightComponent>
         <img src={adURL}alt='ad'style={{width:217}}/>
        </RightComponent>
    </Component>
  )
}

export default MidSlide