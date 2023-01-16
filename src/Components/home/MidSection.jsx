import { Box, Grid, styled } from "@mui/material";
import { ImageURL } from "../../constants/data";


const Wrapper = styled(Grid)`
margin-top: 10px;
justify-content:space-between;
`

const MidSection = () => {
    return (
      <Grid lg={12} sm={12} md={12} xs={12} container>

      
      
       {
          ImageURL.map(image => (
            <Grid item lg={4} md={4} sm={12} xs={12}>
            <img src = {image} alt ='image' style={{width:'100%'}}/>
            </Grid>
          ))
       }
      </Grid>
    )
}
export default MidSection;