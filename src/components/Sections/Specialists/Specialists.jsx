import { Box, Typography } from "@mui/material";
import ahmad_stevens from "../../../assets/ahmad-stevens.jpg";
import ahmad from "../../../assets/ahmad.jpg";
import ankur from "../../../assets/ankur.jpg";
import heena from "../../../assets/heena.jpg";
import lesley from "../../../assets/lesley.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import SpecialistCard from './SpecialistCard'

const Specialists = () => {
  const specialist_data = [
    { img: lesley, title: "Dr. Lesley Hull", designation: "Medicine" },
    { img: ahmad, title: "Dr. Ahmad Khan", designation: "Neurologist" },
    { img: heena, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
    { img: ankur, title: "Dr. Ankur Sharma", designation: "Medicine" },
    {
      img: ahmad_stevens,
      title: "Dr. Ahmad Stevens",
      designation: "Neurologist",
    },
    { img: lesley, title: "Dr. Lesley Hull", designation: "Medicine" },
    { img: ahmad, title: "Dr. Ahmad Khan", designation: "Neurologist" },
    { img: heena, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
    { img: ankur, title: "Dr. Ankur Sharma", designation: "Medicine" },
    {
      img: ahmad_stevens,
      title: "Dr. Ahmad Stevens",
      designation: "Neurologist",
    },
  ];
  return (
    <Box py={4} id="find-doctors">
      <Typography variant="h2" textAlign="center" mb={3} px={2}>
        Our Medical Specialist
      </Typography>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        Pagination={{ clickable: true }}
        breakpoints={{
          767: {
            slidesPerView: 4,
          },
        }}
      >
        {specialist_data.map((doc, index) => (
          <SwiperSlide key={index}>
            <SpecialistCard
              img={doc.img}
              title={doc.title}
              designation={doc.designation}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Specialists;
