import './index.css';
import {Box,Typography} from '@mui/material';
const Awards=()=>{
    return(
        <Box className="award-box" sx={{display:"flex", flexDirection:"column",alignItems:"center",}}>
            <Typography className='award-heading' variant='h1' sx={{
                color:"#232073",
                fontFamily:"Poppins",
                fontSize:"24px",
                textAlign:"center",
                fontStyle:"normal",
                fontWeight:"600px",
                lineHeight:"31.2px"
            }}>Awards</Typography>
            <Typography className='award-heading-1' variant='h4' sx={{
                color:"var(--N1, #0A1023)",
                textAlign:"center",
                fontFamily:"Poppins",
                fontSize:"32px",
                fontStyle:"normal",
                fontWeight:"700px",
                lineHeight:"45px",
                display:"flex",
                flexDirection:"column",
                width:"660px",
                height:"76px",
                flexShrink:0,
                pt:2
            }}> Awarded globally and recognized in India as most promising broker</Typography>
            <Box className="medal-container-1" sx={{display:"flex",justifyContent:"center",mt:10}}>
            <Box className="medal-container" sx={{display:"flex", flexDirection:"column",alignItems:"center",}}>
            <img className='medal' alt='logo' src="https://res.cloudinary.com/devj4jofj/image/upload/v1694852545/Medal_darwv3.jpg"/>
            <Typography className='medal-heading-1' variant='h1' sx={{
                color:"var(--N1, #0A1023)",
                fontFamily:"Poppins",
                fontSize:"20px",
                textAlign:"center",
                fontStyle:"normal",
                fontWeight:"600px",
                lineHeight:"31.2px",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                width:"320px",
                height:"61px",
                flexShrink:0,
            }}>BFSI Tech Conclave 2021</Typography>
            <Typography className='medal-header-1' variant='body1' sx={{
                color:"var(--N2, #2C3655)",
                fontFamily:"Poppins",
                fontSize:"16px",
                textAlign:"center",
                fontStyle:"normal",
                fontWeight:"400px",
                lineHeight:"34px",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                width:"320px",
                height:"81px",
                flexShrink:0,
            }}>Express computers, enterprise mobility Pune</Typography>
            </Box>
            <Box className="medal-container" sx={{display:"flex",flexDirection:"column",alignItems:"center",}}>
            <img className='medal' alt='logo' src="https://res.cloudinary.com/devj4jofj/image/upload/v1694852545/Medal_darwv3.jpg"/>
            <Typography className='medal-heading-2' variant='h1' sx={{
                color:"var(--N1, #0A1023)",
                fontFamily:"Poppins",
                fontSize:"20px",
                textAlign:"center",
                fontStyle:"normal",
                fontWeight:"600px",
                lineHeight:"31.2px",
                width:"318px",
                flexShrink:0,
            }}>(Quantic) Digital Customer Experience Transformation </Typography>
            <Typography className='medal-header-2' variant='body1' sx={{
                color:"var(--N2, #2C3655)",
                fontFamily:"Poppins",
                fontSize:"16px",
                textAlign:"center",
                fontStyle:"normal",
                fontWeight:"400px",
                lineHeight:"30px",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                width:"320px",
                height:"81px",
                flexShrink:0,
            }}>(Quantic) Digital Customer Experience Transformation Initiative</Typography>
            </Box>
            <Box className="medal-container" sx={{display:"flex", flexDirection:"column",alignItems:"center",}}>
            <img className='medal' alt='logo' src="https://res.cloudinary.com/devj4jofj/image/upload/v1694852545/Medal_darwv3.jpg"/>
            <Typography className='medal-heading-3' variant='h1' sx={{
                color:"var(--N1, #0A1023)",
                fontFamily:"Poppins",
                fontSize:"20px",
                textAlign:"center",
                fontStyle:"normal",
                fontWeight:"600px",
                lineHeight:"31.2px",
                width:"320px",
                height:"61px",
                flexShrink:0,
                pt:1
            }}>BFSI Tech Conclave 2021</Typography>
            <Typography className='medal-header-3' variant='body1' sx={{
                color:"var(--N2, #2C3655)",
                fontFamily:"Poppins",
                fontSize:"16px",
                textAlign:"center",
                fontStyle:"normal",
                fontWeight:"400px",
                lineHeight:"30px",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                width:"331px",
                height:"81px",
                flexShrink:0,
            }}>(IMC Chamber of Commerce and Industry) Digital Transformation journey at SBI Securities</Typography>
            </Box>
            </Box>
        </Box>
    )
}

export default Awards