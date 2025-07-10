import { Box, Container, Typography } from "@mui/material";
import { useMemo } from "react";
import banner from "../../../assets/our-families-banner.png";

function useOurFamiliesContent() {
  return useMemo(
    () => ({
      heading: "CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.",
      title: "Our Families",
      description:
        "We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.",
    }),
    []
  );
}

export default function OurFamilies() {
  const { heading, title, description } = useOurFamiliesContent();

  return (
    <Box pt={3} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap", md: "nowrap" },
            alignItems: "center",
            gap: 6,
          }}
        >
          <Box width={{ xs: "100%", md: "50%" }}>
            <Typography fontWeight={600} color="primary.main" mb={1}>
              {heading}
            </Typography>

            <Typography variant="h2" mb={2}>
              {title}
            </Typography>

            <Typography color="#77829D" lineHeight={1.8}>
              {description}
            </Typography>
          </Box>

          <Box
            component="img"
            src={banner}
            alt="Our Families"
            width={{ xs: "100%", md: "50%" }}
            height="auto"
            sx={{ objectFit: "cover" }}
          />
        </Box>
      </Container>
    </Box>
  );
}
