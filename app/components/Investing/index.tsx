
"use client";

import "./index.css";

import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import {
  Button,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Rating,
  Stack,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Url } from "next/dist/shared/lib/router/router";
interface CardData {
  cardImg:url,
  cardBtn: string,
  investHeading: string,
  name:string,
  date:string,
  content:string,
  read:string,
  icon:string,
}

interface CardCarouselProps {
  articles: CardData[];
}

const Investing: React.FC<CardCarouselProps> = ({ articles }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const itemsPerPage = isDesktop ? 3 : isTablet ? 2 : 1;

  const [currentPage, setCurrentPage] = React.useState(0);
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  //change this for styling
  const renderCards = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    console.log(articles.slice(startIndex, endIndex));

    return (
      <div className="crad-container">
        {articles.slice(startIndex, endIndex).map((articles, index) => (
          <Card
            sx={{
             /* padding: 1,
              display: "flex",
              flexDirection:"column",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "320px",
              boxShadow: "0px 2px 25px 0px rgba(0, 0, 0, 0.21)", */

            width:"320px",
            height:"508px",
            flexShrink:0,
            borderRadius:"3px",
            background:"#f2f2f2",
            mt:5,
            display:"flex",
            flexDirection:"column",
            }}
          >
            <CardContent>
            <div className='coin-imgs'>
                    <button type='button' className='investment-btn-1'>{articles.cardBtn}</button>
                    </div>
                    <Typography className='invest-tip-heading' variant='h2' sx={{
                    fontFamily:"Poppins",
                    fontSize:"16px",
                    textAlign:"center",
                    color:"#000",
                    fontStyle:"normal",
                    fontWeight:"500px",
                    lineHeight:"30px",
                    flexShrink:0,
                    pt:2,
                    width:"299px"
                }}>{articles.investHeading}</Typography>
                <Typography className='post-name' variant='h6' sx={{
                    fontFamily:"Poppins",
                    fontSize:"14px",
                    color:"var(--N2, #2C3655)",
                    fontStyle:"normal",
                    fontWeight:"400px",
                    lineHeight:"22px",
                    display:"flex",
                    justifyContent:"center",
                    flexShrink:0,
                    pt:2,
                }}>{articles.name} {' '} <span className='publish-date' style={{
                    color:"var(--N2, #2C3655)",
                    fontFamily:"Poppins",
                    fontSize:"14px",
                    fontStyle:"normal",
                    fontWeight:"400px",
                    lineHeight:"22px",
                    paddingLeft:"60px"
                }}>{articles.date}</span></Typography>
                <Typography className='paragraph' variant='h6' sx={{
                    fontFamily:"Poppins",
                    fontSize:"14px",
                    color:"#000",
                    fontStyle:"normal",
                    fontWeight:"300px",
                    lineHeight:"normal",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    width:"298px",
                    height:"63px",
                    flexShrink:0,
                    pt:2,
                    pl:2
                }}>{articles.content}</Typography>
                <Box className="logos-container-1" sx={{
                    display:"flex",
                    p:2
                }}>
                    <Typography className='read-name' variant='h2' sx={{
                    fontFamily:"Poppins",
                    fontSize:"14px",
                    color:" #220D4E",
                    fontStyle:"normal",
                    fontWeight:"500px",
                    lineHeight:"normal",
                    flexShrink:0,
                }}>{articles.read}</Typography>
                <FaLongArrowAltRight className="arrow"/>
                </Box>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid container spacing={3}>
        {renderCards()}
      </Grid>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="carousel-btn"
        >
          <KeyboardArrowLeftIcon
            sx={{ width: "16px", height: "16px", color: "#fff" }}
          />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index}
            style={{ margin: "0 4px", cursor: "pointer", color: "#00C2FF" }}
          >
            {index === currentPage ? "●" : "○"}
          </span>
        ))}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className="carousel-btn"
        >
          <KeyboardArrowRightIcon
            sx={{ width: "16px", height: "16px", color: "#fff" }}
          />
        </button>{" "}
      </div>
    </Container>
  );
};

export default Investing;