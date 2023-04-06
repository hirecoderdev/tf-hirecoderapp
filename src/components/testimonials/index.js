import * as React from "react";
import { connect } from "react-redux";
import {Grid,Box } from '@mui/material';
import GridItem from "../gridItem";

import "./index.css"

function Testimonials() {
    const testimonialsData = {
        "0":{
            "id":0,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder1.png",
            "media": "https://www.hirecoder.com/images/our-team/coder1.png",
            "type": "Image"
        },
        "1":{
            "id":1,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder2.png",
            "media": "https://www.hirecoder.com/images/our-team/coder1.png",
            "type": "Image"
        },
    "2":{
            "id":2,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder3.png",
            "media": "https://www.hirecoder.com/images/our-team/coder1.png",
            "type": "Image"
        },
        "3":{
            "id":3,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder4.png",
            "media": "https://www.hirecoder.com/images/our-team/coder1.png",
            "type": "Image"
        },
    "4":{
            "id":4,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder5.png",
            "media": "https://www.hirecoder.com/images/our-team/coder1.png",
            "type": "Image"
        },
        "5":{
            "id":5,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder6.png",
            "media": "https://www.hirecoder.com/images/our-team/coder1.png",
            "type": "Image"
        },
    "6":{
            "id":6,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder7.png",
            "media": "https://www.hirecoder.com/images/our-team/coder1.png",
            "type": "Image"
        },
        "7":{
            "id":7,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder8.png",
            "media": "https://www.hirecoder.com/images/our-team/coder1.png",
            "type": "Image"
        },
        "8":{
            "id":8,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder9.png",
            "media": "https://www.hirecoder.com/images/our-team/coder1.png",
            "type": "Image"
        },
        "9":{
            "id":9,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder10.png",
            "media": "https://www.hirecoder.com/images/our-team/coder1.png",
            "type": "Image"
        },
    "10":{
            "id":10,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder11.png",
            "media": "https://www.hirecoder.com/images/our-team/coder1.png",
            "type": "Image"
        },
        "11":{
            "id":11,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder12.png",
            "media": "https://www.hirecoder.com/images/our-team/coder1.png",
            "type": "Image"
        },
        "12":{
            "id":12,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder13.png",
            "media": "https://www.youtube.com/embed/gGLz7dwc1qs",
            "type": "Video"
        },
        "13":{
            "id":13,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder14.png",
            "media": "https://www.youtube.com/embed/Sxr3J01BpJc",
            "type": "Video"
        },
        "14":{
            "id":14,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder13.png",
            "media": "https://www.youtube.com/embed/gGLz7dwc1qs",
            "type": "Video"
        },
        "15":{
            "id":15,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder14.png",
            "media": "https://www.youtube.com/embed/Sxr3J01BpJc",
            "type": "Video"
        },
        "16":{
            "id":16,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder13.png",
            "media": "https://www.youtube.com/embed/gGLz7dwc1qs",
            "type": "Video"
        },
        "17":{
            "id":17,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder14.png",
            "media": "https://www.youtube.com/embed/Sxr3J01BpJc",
            "type": "Video"
        },
        "18":{
            "id":18,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder13.png",
            "media": "https://www.youtube.com/embed/gGLz7dwc1qs",
            "type": "Video"
        },
        "19":{
            "id":19,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder14.png",
            "media": "https://www.youtube.com/embed/Sxr3J01BpJc",
            "type": "Video"
        },
        "20":{
            "id":20,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder13.png",
            "media": "https://www.youtube.com/embed/gGLz7dwc1qs",
            "type": "Video"
        },
        "21":{
            "id":21,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder14.png",
            "media": "https://www.youtube.com/embed/Sxr3J01BpJc",
            "type": "Video"
        },
        "22":{
            "id":22,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder13.png",
            "media": "https://www.youtube.com/embed/gGLz7dwc1qs",
            "type": "Video"
        },
        "23":{
            "id":23,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder14.png",
            "media": "https://www.youtube.com/embed/Sxr3J01BpJc",
            "type": "Video"
        },
        "24":{
            "id":24,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder13.png",
            "media": "https://www.youtube.com/embed/gGLz7dwc1qs",
            "type": "Video"
        },
        "25":{
            "id":25,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder14.png",
            "media": "https://www.youtube.com/embed/Sxr3J01BpJc",
            "type": "Video"
        },
        "26":{
            "id":26,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder13.png",
            "media": "https://www.youtube.com/embed/gGLz7dwc1qs",
            "type": "Video"
        },
        "27":{
            "id":27,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder14.png",
            "media": "https://www.youtube.com/embed/Sxr3J01BpJc",
            "type": "Video"
        },
        "28":{
            "id":28,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder13.png",
            "media": "https://www.youtube.com/embed/gGLz7dwc1qs",
            "type": "Video"
        },
        "29":{
            "id":29,
            "thumbnail":"https://www.hirecoder.com/images/our-team/coder14.png",
            "media": "https://www.youtube.com/embed/Sxr3J01BpJc",
            "type": "Video"
        }   
    }
       
    const testData = Object.values(testimonialsData);
    
  return (
    <Box sx={{ m:2 }}>
      <Grid container rowSpacing={0} columnSpacing={0}>
        {
           
           testData?.map((data,i) => {
            return (
            
             <GridItem data={data} key={i}></GridItem> 
           
            )
            
        })
        }
      </Grid>
    </Box>
  );
}

const mapStateToProps = (state) => ({
//   isLoggedIn: get(state, "userData.isLoggedIn"),
//   currentUser: get(state, "userData.currentUser"),
});

export default connect(mapStateToProps, {})(Testimonials);
