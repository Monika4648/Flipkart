import Banner from "./Banner";
import Navbar from "./Navbar";
import {Box, styled} from "@mui/material";
import Slide from "./Slide";
import { products } from "../../constants/data";
import { useSelector } from "react-redux"
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";
const Component = styled(Box)`
padding:20px 10px;
background: #F2F2F2;`


const Home = () => {
    console.log('hello')
    return(
        <>
        <Navbar/>
        <Component>
        <Banner/> 
        <MidSlide products={products} title="Deal of the Day" timer={true}/>
        <MidSection/>
        <Slide products={products} title="Discounts for You" timer={false}/>
        <Slide products={products} title="Suggesting Items" timer={false}/>
        <Slide products={products} title="Top Selection" timer={false}/>
        <Slide products={products} title="Recommended Item" timer={false}/>
        </Component>
        </>
       
    )
}
export default Home;