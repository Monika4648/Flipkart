import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { navData } from '../../constants/data'
function Navbar() {
    const Component = styled(Box)(({theme}) => ({
    display:'flex',
    justifyContent:'space-between',
    margin:'5px 130px 0 130px',
    overflow:"hidden",
    [theme.breakpoints.down('lg')] : {
      margin:0
    }
  }));
    const Container = styled(Box)`
    
    text-align:center;`;
    const Text  = styled(Typography)`
    font-size:14px;
    font-weight:600;
    font-family:inherit;`
  return (
    <Component>
      {
        navData.map((item,index)=>(
            <Container key={index}>
                <img style={{width:80,height:80}} src={item.url}alt="nav"/>
                <Text>{item.text}</Text>
            </Container>
        ))
      }
    </Component>
  )
}

export default Navbar