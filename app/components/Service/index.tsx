

import './index.css';

import {Box,Typography} from '@mui/material';

const data=[
    {
        image:"https://res.cloudinary.com/devj4jofj/image/upload/v1694784713/Handshake_qr5eo3.jpg",
        content:"Relationship Manager",
    },
    {
        image:"https://res.cloudinary.com/devj4jofj/image/upload/v1694784765/Social_Network_apwafh.jpg",
        content:"Wide Brand Network",
    },
    {
        image:"https://res.cloudinary.com/devj4jofj/image/upload/v1694784734/Headset_cmvy09.jpg",
        content:"Dedicate Helpdesk",
    },
    {
        image:"https://res.cloudinary.com/devj4jofj/image/upload/v1694784787/Submit_Resume_v7jajq.jpg",
        content:"Portfolio Restructuring",
    },
];
const Service=()=>{
    return(
        <Box className="service-box" sx={{width:"100%", 
        height:800,     
        background:"#fff"}}>
            <Box className="service-box-1" sx={{display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            mt:5,
            }}>
            <Typography className='service-heading' variant='h4' sx={{color:" #232073", 
            fontFamily:"Poppins", 
            fontSize:"24px",
            textAlign:"center",
            fontStyle:"normal",
            fontWeight:"600",
            lineHeight:"45px",
            }}>Services</Typography>
            <Typography className='secure-heading' variant='h1' sx={{color:" #000", 
            fontFamily:"Poppins", 
            fontSize:"32px",
            textAlign:"center",
            fontStyle:"normal",
            fontWeight:"700",
            lineHeight:"45px",
            }}>Why SBI Cap Securities Stands Out?</Typography>
            <Typography className='service-heading-1' variant='h6' sx={{color:"#0D0D0D", 
            fontFamily:"Poppins", 
            fontSize:"16px",
            textAlign:"center",
            fontStyle:"normal",
            fontWeight:"400",
            lineHeight:"45px",
            }}>Seamless Investing Experience With</Typography>
            <ul className='image-container'>
                {data.map((item,index)=>(
                    <li key={index}>
                        <img className='list-img' src={item.image} alt={`Image ${index}`}/>
                        <p className='list-heading'>{item.content}</p>
                    </li>
                ))}
            </ul>
             <div className='embed-container'>      
            <iframe className='frame-video' width="500" height="315" src="https://www.youtube.com/embed/wzNTaTLAvSI?si=JqOh2RCRhzyJUaw9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className='header-container'>
            <Typography className='Heading-1' variant='h1' sx={{color:"#000", 
            fontFamily:"Poppins", 
            fontSize:"32px",
            fontStyle:"normal",
            fontWeight:"600px",
            lineHeight:"45px",
            textTransform:"capitalize",
            width:"458px",
            pl:2,
            }}>investments ka game strong with SBI Securities</Typography>
            <Typography className='Heading-2' variant='h6' sx={{color:"#000", 
            fontFamily:"Poppins", 
            fontSize:"16px",
            fontStyle:"normal",
            fontWeight:"500px",
            lineHeight:"31px",
            textTransform:"capitalize",
            pl:2,
            }}>#NiveshOnGameOn</Typography>
            <Typography className='Heading-3' variant='h6' sx={{color:"#000", 
            fontFamily:"Poppins", 
            fontSize:"16px",
            fontStyle:"normal",
            fontWeight:"300px",
            lineHeight:"31px",
            textTransform:"capitalize",
            width:"487px",
            pl:2,
            }}>Who said investing couldn't be as much fun as cheering for your favourite cricket team? Watch our latest #NiveshOnGameOn Anthem Video and prepare to invest like never before.</Typography>
            <button className='trend-button'>Trend Now</button>
            </div>
            </div> 
        </Box>
        </Box>
    )
}

export default Service 