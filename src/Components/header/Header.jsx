import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material';
import { style } from '@mui/system';
//components
import Search from './Search';
import CustomButtons from './CustomButtons';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
const Styleheader=styled(AppBar)`
background:#2874f0;
height:55px`
const Component=styled(Link)`
margin-left:12%;
color:inherit;
text-decoration:none;`
const Subheading=styled(Typography)`
font-size:10px;
font-style:italic`
const Plusimage = styled('img')({
  width:10,
  height:10,
  marginLeft:4
});
const CustomButtonWrapper = styled(Box)`
margin: 0 5% 0 auto;`
const Header = () =>{

}
const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    
      <Styleheader position="static">
        <Toolbar style={{ minHeight:55}}>
         <Component to='/'>
            <img src={logoURL} alt="logo" style={{width:75}}/>
            
            <Box style={{display:'flex'}}>
            <Subheading>Explore&nbsp;
            <Box component="span" style={{ color:'#FFE500'}}>Plus</Box>
              

              </Subheading>
              <Plusimage src={subURL} alt="sub-logo" />
              
            </Box>
         </Component>
         <Search/>
         <CustomButtonWrapper>
          <CustomButtons/>
         </CustomButtonWrapper>
        </Toolbar>
      </Styleheader>
    
  );
}