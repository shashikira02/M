import { Container, Box, Stack } from "@mui/material";
import { useEffect } from "react";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import SearchHospital from "../components/SearchHospital/SearchHospital";
import FAQs from "../components/Sections/FAQs/FAQs";
import OurFamilies from "../components/Sections/OurFamilies/OurFamilies";
import Blogs from "../components/Sections/Blogs/Blogs";
import PatientCaring from "../components/Sections/PatientCaring/PatientCaring";
import Specialists from "../components/Sections/Specialists/Specialists";
import Specialization from "../components/Sections/Specialization/Specialization";
import Offers from "../components/Sections/Offers/Offers";
import NavBar from "../components/NavBar/NavBar";
import IconLayout from "../components/IconLayout/IconLayout";

function useScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
}

export default function Home() {
  useScrollToTop();

  const sections = [
    { id: 1, Component: Offers },
    { id: 2, Component: Specialization },
    { id: 3, Component: Specialists },
    { id: 4, Component: PatientCaring },
    { id: 5, Component: Blogs },
    { id: 6, Component: OurFamilies },
    { id: 7, Component: FAQs },
  ];
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <NavBar />
        <Container maxWidth="xl">
          <HeroSlider />
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <SearchHospital />
            <IconLayout />
          </Stack>
        </Container>
      </Box>

      {sections.map(({ id }) => (
        <Component key={id} />
      ))}
    </Box>
  );
}
