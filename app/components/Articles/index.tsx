
"use client";

import "./index.css";
import {Box,Typography,Button,Paper} from '@mui/material';

const Articles=()=>{
    return(
        <Box className="articles-box" sx={{display:"flex",flexDirection:"column",alignItems:"center",mt:10}}>
            <Box className="articles-box-1" sx={{display:"flex",
            justifyContent:"center",
            width:"1440px",
            height:"160px",
            flexShrink:0,
            backgroundColor:"#220D4E",
            }}>
                <Typography className='open-acc-heading' variant='h1' sx={{
                    fontFamily:"Poppins",
                    fontSize:"24px",
                    textAlign:"center",
                    color:"#fff",
                    fontStyle:"normal",
                    fontWeight:"700px",
                    lineHeight:"33px",
                    pr:2,
                    pt:5
                }}>Open your Account Today {' '} <br/> <span className='name'>Let's take the next step together</span></Typography>
                <div className="background-img-1" style={{
                    width: "282.333px",
                    height: "266px",
                    background: `url(https://res.cloudinary.com/devj4jofj/image/upload/v1694862409/boy_and_girl_working_on_computer_sxadpk.jpg), lightgray 50% / contain no-repeat`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    position:"inherit",
                }}></div>
                <button type='button' className='account-btn'>Open An Account</button>
            </Box>
                <Typography className='articlesHeader-1' variant='h1' sx={{
                    fontFamily:"Poppins",
                    fontSize:"24px",
                    textAlign:"center",
                    color:"#220D4E",
                    fontStyle:"normal",
                    fontWeight:"600px",
                    lineHeight:"34px",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    width:"92px",
                    height:"37.126px",
                    flexShrink:0,
                    pt:20
                }}>Articles</Typography>
                <Typography className='update-header' variant='h6' sx={{
                    fontFamily:"Poppins",
                    fontSize:"32px",
                    textAlign:"center",
                    color:"var(--N1, #0A1023)",
                    fontStyle:"normal",
                    fontWeight:"700px",
                    lineHeight:"45px",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    flexShrink:0,
                    pt:2
                }}>Stay Updated</Typography>
                </Box>
    )
};

export default Articles; 