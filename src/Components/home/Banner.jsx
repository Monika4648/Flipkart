import {styled} from "@mui/material";
import React from "react"
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from "../../constants/data";
function Banner() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
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
    const Image = styled("img")(({theme }) => ({
        width:"100%",height:210,
        [theme.breakpoints.down('md')] : {
            objectFit:'cover',
            height:180
        }
    }));
    return (
        <Carousel responsive={responsive}
        autoPlay={true}swipeable={false}
       >{
         bannerData.map((item,index) =>(
            <Image key={index} src={item}alt="banner"/>
         ))
        }</Carousel>
    )
}

export default Banner