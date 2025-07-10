import { Box, Container, Grid, Typography } from "@mui/material";
import { useMemo } from "react";

import faqBanner from "../../../assets/faqs-banner.jpg";
import CustomizedAccordions from "../../Accordion/Accordion";

function useFAQData() {
  return useMemo(
    () => [
      {
        question: "Why choose our medical for your family?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      },
      {
        question: "Why we are different from others?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      },
      {
        question: "Trusted & experience senior care & love",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      },
      {
        question: "How to get appointment for emergency cases?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      },
    ],
    []
  );
}

export default function FAQs() {
  const faqs = useFAQData();

  return (
    <Box py={4} display="flex" alignItems="center">
      <Container maxWidth="xl">
        <Typography color="primary.main" fontWeight={600} textAlign="center">
          Get Your Answer
        </Typography>
        <Typography textAlign="center" variant="h2" mb={2}>
          Frequently Asked Questions
        </Typography>

        <Grid
          container
          direction="row"
          wrap="nowrap"
          spacing={5}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Box
              component="img"
              src={faqBanner}
              width="100%"
              maxWidth={550}
              height="auto"
              sx={{ objectFit: "cover", borderRadius: 2 }}
              loading="lazy"
              alt="FAQ Banner"
            />
          </Grid>

          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Box maxWidth={450}>
              <CustomizedAccordions data={faqs} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
