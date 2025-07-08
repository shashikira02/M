import { Box, Container, Grid, Typography } from "@mui/material";
import faqBanner from "../../../assets/faqs-banner.jpg";
import Accordion from "../../Accordion/Accordion";

 const FAQs = () => {
  const faqs = [
    {
      question: "Why choose our medical for your family?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsa possimus voluptates voluptate eius dolore porro non!",
    },
    {
      question: "Why we are different from others?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsa possimus voluptates voluptate eius dolore porro non!",
    },
    {
      question: "Trusted & experience senior care & love",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsa possimus voluptates voluptate eius dolore porro non!",
    },
    {
      question: "How to get appointment for emergency cases?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsa possimus voluptates voluptate eius dolore porro non!",
    },
  ];

  return (
    <Box py={4}>
        <Container maxWidth='xl'>
            <Typography color="primary.main" fontWeight={600} textAlign='center'>Get Your Answer</Typography>
            <Typography textAlign='center' variant="h2" mb={2}>
                Frequently Asked Questions
            </Typography>
            <Grid container alignItems='center' spacing={5}>
                <Grid item xs={12} md={6}>
                    <Box src={faqBanner} component='img' width={1} height='auto' />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box maxWidth={450}>
                        <Accordion data={faqs} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
};

export default FAQs;