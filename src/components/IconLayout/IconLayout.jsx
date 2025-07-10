import { Box, Grid, Typography } from "@mui/material";
import { useMemo } from "react";

import doctorIcon from "../../assets/Doctor.png";
import pharmacyIcon from "../../assets/Drugstore.png";
import hospitalIcon from "../../assets/Hospital.png";
import capsuleIcon from "../../assets/Capsule.png";
import ambulanceIcon from "../../assets/Ambulance.png";
import IconCard from "../IconCard/IconCard";

function useServices() {
  return useMemo(
    () => [
      { img: doctorIcon, title: "Doctors" },
      { img: pharmacyIcon, title: "Labs" },
      { img: hospitalIcon, title: "Hospitals", active: true },
      { img: capsuleIcon, title: "Medical Store" },
      { img: ambulanceIcon, title: "Ambulance" },
    ],
    []
  );
}

export default function IconLayout() {
  const services = useServices();

  return (
    <Box>
      <Typography
        component="h4"
        fontSize={20}
        color="#102851"
        fontWeight={500}
        textAlign="center"
        mb={2}
      >
        You may be looking for
      </Typography>

      <Grid
        container
        columnSpacing={{ xs: 1, md: 2 }}
        justifyContent="space-evenly"
      >
        {services.map((service) => (
          <Grid item key={service.title} xs={4} md={2.4} width="200px" height='150px'>
            <IconCard
              img={service.img}
              title={service.title}
              
              active={service.active || false}
              bgColor="#FAFBFE"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
