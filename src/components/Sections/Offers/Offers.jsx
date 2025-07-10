import { Box, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useMemo } from "react";

import "swiper/css";
import offer1 from "../../../assets/offer1.png";
import offer2 from "../../../assets/offer2.png";

function useOfferSlides() {
  return useMemo(
    () => [
      offer1,
      offer2,
      offer1,
      offer2,
      offer1,
      offer2,
    ],
    []
  );
}

export default function Offers() {
  const slides = useOfferSlides();

  return (
    <Box py={6}>
      <Container maxWidth="xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          breakpoints={{
            767: {
              slidesPerView: 3,
            },
          }}
        >
          {slides.map((img, index) => (
            <SwiperSlide key={index}  >
              <Box component="img" src={img}  />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}