import { Box, Button, Container, Typography } from "@mui/material";
import IconCard from "../../IconCard/IconCard";
import Drugstore from "../../../assets/Drugstore.png";
import primary from "../../../assets/primary-care.png";
import cardiology from "../../../assets/cardiology.png";
import mri from "../../../assets/mri.png";
import blood from "../../../assets/blood-test.png";
import piscologist from "../../../assets/piscologist.png";
import X_Ray from "../../../assets/X-Ray.png";
import { useMemo } from "react";

function useData() {
  return useMemo(
    () => [
      { icon: Drugstore, title: "Dentistry" },
      { icon: primary, title: "Primary Care" },
      { icon: cardiology, title: "Cardiology" },
      { icon: mri, title: "MRI Resonance" },
      { icon: blood, title: "Blood Test" },
      { icon: piscologist, title: "Piscologist" },
      { icon: Drugstore, title: "Laboratory" },
      { icon: X_Ray, title: "X-Ray" },
    ],
    []
  );
}

export default function Specialization() {
  const data = useData();

  return (
    <Box py={6} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container maxWidth="xl" sx={{ textAlign: "center" }}>
        <Typography variant="h2" mb={4}>
          Find by specialisation
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 270px)",
            justifyContent: "center",                 
          }}
        >
          {data.map(({ icon, title }) => (
            <Box
              key={title}
              sx={{
                padding: '15px',
                width: "270px",
                height: "180px",
              }}
            >
              <IconCard
                img={icon}
                title={title}
                bgColor="#FFFFFF"
                shadow={true}
              />
            </Box>
          ))}
        </Box>

        <Button
          variant="contained"
          size="large"
          disableElevation
          sx={{ mt: 4 }}
        >
          View All
        </Button>
      </Container>
    </Box>
  );
}