
"use client";

import "./index.css";

import React from "react";
import { useMediaQuery } from "react-responsive";
import {
  Button,
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
interface CardData {
  feedback: string;
  name: string;
}

interface CardCarouselProps {
  cards: CardData[];
}

const Testimonial: React.FC<CardCarouselProps> = ({ cards }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const itemsPerPage = isDesktop ? 3 : isTablet ? 2 : 1;

  const [currentPage, setCurrentPage] = React.useState(0);
  const totalPages = Math.ceil(cards.length / itemsPerPage);

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
    console.log(cards.slice(startIndex, endIndex));

    return (
      <div className="crad-container">
        {cards.slice(startIndex, endIndex).map((card, index) => (
          <Card
            sx={{
              padding: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "320px",
              boxShadow: "0px 2px 25px 0px rgba(0, 0, 0, 0.21)",
            }}
          >
            <CardContent>
              <Rating
                name="size-medium"
                defaultValue={5}
                readOnly
                sx={{ marginBottom: "20px" }}
              />
              <Typography
                variant="body2"
                component="div"
                sx={{
                  color: "#000",
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "34px",
                  marginBottom: "20px",
                }}
              >
                {card.feedback}
              </Typography>
              <Stack flexDirection={"row"} justifyContent={"flex-end"}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#000",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "34px",
                  }}
                >
                  {card.name}
                </Typography>
              </Stack>
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

export default Testimonial;