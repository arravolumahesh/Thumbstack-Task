"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ClearIcon from "@mui/icons-material/Clear";
import Divider from "@mui/material/Divider";

import "./index.css";

const questions = [
  {
    quetion: "What are DERIVATIVES?",
    answer:
      "Derivatives act as a good hedging tool against price volatility. You can take a high exposure on a stock or security by paying a small margin. For example: If the stocks are priced at Rs 10 lakh and you have only Rs 2 lakhs in hand, this product will still ",
  },
  {
    quetion: "What are the advantages of derivatives trading?",
    answer:
      "Derivatives act as a good hedging tool against price volatility. You can take a high exposure on a stock or security by paying a small margin. For example: If the stocks are priced at Rs 10 lakh and you have only Rs 2 lakhs in hand, this product will still ",
  },
  {
    quetion: "What are the different types of derivatives?",
    answer:
      "Derivatives act as a good hedging tool against price volatility. You can take a high exposure on a stock or security by paying a small margin. For example: If the stocks are priced at Rs 10 lakh and you have only Rs 2 lakhs in hand, this product will still ",
  },
  {
    quetion: "How do Futures Contract work?",
    answer:
      "Derivatives act as a good hedging tool against price volatility. You can take a high exposure on a stock or security by paying a small margin. For example: If the stocks are priced at Rs 10 lakh and you have only Rs 2 lakhs in hand, this product will still ",
  },
];

const FAQS = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="FAQs-section-bg-container">
      <h6 className="FAQs-section-sub-heading">FAQs</h6>
      <h5 className="FAQs-section-heading">Frequently asked questions</h5>
      <p className="FAQs-section-description">
        Get answers to all questions you have and boost your knowledge so you
        can save, invest and spend smarter.{" "}
        <span className="FAQs-section-description-span">
          See all questions here!
        </span>
      </p>
      <div className="quetions-container">
        {questions.map((eachQuetion, index) => (
          <Accordion
            expanded={expanded === `question${index}`}
            onChange={handleChange(`question${index}`)}
            sx={{
              width: {
                sm: "60%",
                lg: "70%",
                xl: "660px",
              },
              maxWidth: "660px",
              marginBottom: "10px",
              borderRadius: "3px",
              backgroundColor: "#232073",
              color: "#FFF",
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded === `question${index}` ? (
                  <ClearIcon sx={{ color: "#FFF" }} />
                ) : (
                  <ExpandMoreIcon sx={{ color: "#FFF" }} />
                )
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{eachQuetion.quetion}</Typography>
            </AccordionSummary>
            <Divider
              variant="fullWidth"
              sx={{
                backgroundColor: "#07B2D9",
              }}
            />
            <AccordionDetails
              sx={{
                color: "#F2F2F2",
                fontFamily: "Poppins",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "30px",
              }}
            >
              <Typography>{eachQuetion.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQS;