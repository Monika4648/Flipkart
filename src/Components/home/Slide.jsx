
import { Box,Typography,styled, Button } from '@mui/material';
import React from 'react'
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import { WebAssetOffRounded } from '@mui/icons-material';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


const Component = styled (Box)`
margin-top:10px;
background:#FFFFFF;
`;
const Deal =styled(Box)`
15px 20px;
display:flex;`;
const Timers = styled(Box)`
display:flex;
margin-left:5px;
align-items:center;
color:#7f7f7f;`;

const DealText = styled(Typography)`
font-size:22px;
font-weight:600;
margin-right:25px;
line-height:32px;`;

const Image = styled('img')({
    width:'auto',height: 150
})

const Text = styled(Typography)`
font-size:14px;
margin-top:5px;`
const Slide = ({products, title, timer}) =>
 {
    const timerURL = 'https://static-assets-web.flixkart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds}) => {
        return <Box variant="span">{hours} : {minutes} : {seconds} Left</Box>
    }
  return (
    <Component>
    <Deal>
        <DealText>{title}</DealText>
       {
        timer &&
        <Timers>
        <AccessAlarmsIcon/>
        
        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
    </Timers>
       }
        <Button color='primary'variant='contained'style={{marginLeft:'auto'}}>View all</Button>
    </Deal>
    <Carousel
     responsive={responsive}
     swipeable={false}
     draggable={false}
     infinite={true}
     autoPlay={true}
     autoPlaySpeed={4000}
     keyBoardControl={true}
     centerMode={true}
     dotListClass="custom-dot-list-style"
     itemClass='carousel-item-padding-40-px'
     containerClass='carousel-container'
    >
    {
        products.map((item,index)=> (
            <Link to={`product/${item.id}`} style={{textDecoration:'none'}}>
            <div key={index}>
                <Image src = {item.url} alt = ''/>
                <Text style={{fontWeight:600,color:'#212121'}}>{item.title.shortTitle}</Text>
                <Text style={{color:'green'}}>{item.discount}</Text>
                <Text style={{color:'#212121'}}>{item.tagline}</Text>
            </div>
            </Link>
        ))
    }
     </Carousel>
     </Component>
  )
}

export default Slide
