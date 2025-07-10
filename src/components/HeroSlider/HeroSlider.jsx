import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useMemo } from "react";

import img from "../../assets/home.webp";

function useSlideContent() {
  return useMemo(
    () => [
      {
        id: 1,
        heading1: "Skip the travel! Find Online",
        heading2: "Medical ",
        highlight: "Centers",
        description:
          "Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.",
        ctaText: "Find Centers",
        ctaLink: "/search",
        image: img,
      },
    ],
    []
  );
}

const renderSlide = (slide) => (
  <SwiperSlide key={slide.id}>
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={6}
      alignItems="center"
      pt={2}
    >
      <Box>
        <Typography variant="h3" component="h1">
          {slide.heading1}
        </Typography>
        <Typography variant="h1" component="h1" mb={1}>
          {slide.heading2}
          <span style={{ color: "#2AA7FF" }}>{slide.highlight}</span>
        </Typography>
        <Typography color="#5C6169" fontSize={{ md: 20 }} mb={3}>
          {slide.description}
        </Typography>
        <Link to={slide.ctaLink}>
          <Button variant="contained" size="large" disableElevation>
            {slide.ctaText}
          </Button>
        </Link>
      </Box>

      <Box component="img" src={slide.image} width={{ xs: 1, md: "50%" }} />
    </Stack>
  </SwiperSlide>
);

export default function HeroSlider() {
  const slides = useSlideContent();

  return (
    <Swiper>
      {slides.map(renderSlide)}
    </Swiper>
  );
}