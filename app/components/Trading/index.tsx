import './index.css';
import {Box,Typography} from '@mui/material';

const Trading=()=>{
    return(
        <Box className="trading-box" sx={{height:"669px", width:"1443px", background:"#232073",display:"flex"}}>
            <div className='headings-container'>
           <Typography className='Trading-heading-1' variant='h1' sx={{
            color:"#fff",
            fontFamily:"Poppins",
            fontSize:"32px",
            fontStyle:"normal",
            fontWeight:"600px",
            lineHeight:"31px",
            textTransform:"capitalize",
            width:"508px",
            pt:10,
            pl:20
           }}>
           Trading Platforms
           </Typography>
           <Typography className='Trading-heading-2' variant='h4' sx={{
            color:"#fff",
            fontFamily:"Poppins",
            fontSize:"16px",
            fontStyle:"normal",
            fontWeight:"500px",
            lineHeight:"31px",
            textTransform:"capitalize",
            width:"508px",
            pt:2,
            pl:20
           }}>
           #Stay on top of the market with our powerful platforms
           </Typography>
           <Typography className='Trading-heading-3' variant='h6' sx={{
            color:"#fff",
            fontFamily:"Poppins",
            fontSize:"16px",
            fontStyle:"normal",
            fontWeight:"400px",
            lineHeight:"31px",
            textTransform:"capitalize",
            width:"508px",
            pt:2, 
            pl:20
           }}>
           Trade with Ease and Precision on our Enhanced Platforms, Capitalize on Market Momentum and Discover New Opportunities.
           </Typography>
           <div className="web-container">
           <img className='pc-image' alt='logo' src='https://res.cloudinary.com/devj4jofj/image/upload/v1694792910/Desktop_Computer_ffct9v.jpg'/>
           <div>
           <Typography className='web-heading-1' variant='h1' sx={{
            color:"#000",
            fontFamily:"Poppins",
            fontSize:"16px",
            fontStyle:"normal",
            fontWeight:"500px",
            lineHeight:"31px",
            textTransform:"capitalize",
            pt:4,
            pl:2
           }}>
           Web Platform
           </Typography>
           <Typography className='web-heading-2' variant='h6' sx={{
            color:"#000",
            fontFamily:"Poppins",
            fontSize:"16px",
            fontStyle:"normal",
            fontWeight:"400px",
            lineHeight:"31px",
            textTransform:"capitalize",
            pt:1,
            pl:2,
            width:"320px",
           }}>
           Upgrade Your Trading with our New Feature-Rich Web Platform
           </Typography>
           </div>
           </div>

           <div className="web-container">
           <img className='pc-image' alt='logo' src='https://res.cloudinary.com/devj4jofj/image/upload/v1694793618/Mobile_Phone_v6oeui.jpg'/>
           <div>
           <Typography className='web-heading-1' variant='h1' sx={{
            color:"#000",
            fontFamily:"Poppins",
            fontSize:"16px",
            fontStyle:"normal",
            fontWeight:"500px",
            lineHeight:"31px",
            textTransform:"capitalize",
            pt:4,
            pl:2
           }}>
           Mobile App
           </Typography>
           <Typography className='web-heading-2' variant='h6' sx={{
            color:"#000",
            fontFamily:"Poppins",
            fontSize:"16px",
            fontStyle:"normal",
            fontWeight:"400px",
            lineHeight:"31px",
            textTransform:"capitalize",
            pt:1,
            pl:2,
            width:"400px",
           }}>
           Seamless Trading on Android and iOS: Face ID, Fingerprint, Easy Navigation
           </Typography>
           </div>
           </div>
           </div>
            <img className='mobile-img' alt='logo' src="https://res.cloudinary.com/devj4jofj/image/upload/v1694793949/Rectangle_2603_ykw3fh.jpg"/>
        </Box>
    )
}

export default Trading;