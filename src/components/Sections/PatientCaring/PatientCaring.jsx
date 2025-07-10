import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import patient from "../../../assets/patientcaring.png";
import tick from "../../../assets/tick-blue.png";
import { useMemo } from "react";

function usePatientCaringData() {
  return useMemo(
    () => [
      "Stay Updated About Your Health",
      "Check Your Results Online",
      "Manage Your Appointments",
    ],
    []
  );
}

export default function PatientCaring() {
  const items = usePatientCaringData();

  const renderItem = useMemo(
    () => (text, index) => (
      <ListItem key={index} disableGutters>
        <ListItemIcon sx={{ minWidth: 32 }}>
          <Box component="img" src={tick} height={22} width={22} />
        </ListItemIcon>
        <ListItemText
          primary={text}
          primaryTypographyProps={{
            fontSize: { xs: 14, md: 18 },
            fontWeight: 500,
            color: "#1B3C74",
          }}
        />
      </ListItem>
    ),
    []
  );

  return (
    <Box py={6} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            gap: 6,
            alignItems: "center",
            justifyContent:'center',
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            component="img"
            src={patient}
            width={{ xs: "100%", md: "50%" }}
            maxWidth="500px"
            height="auto"
            sx={{ objectFit: "cover" }}
          />

          <Box width={{ xs: "100%", md: "50%" }}>
            <Typography fontWeight={600} color="primary.main" mb={1}>
              HELPING PATIENTS FROM AROUND THE GLOBE!!
            </Typography>

            <Typography variant="h2" mb={1}>
              Patient{" "}
              <Box component="span" color="primary.main">
                Caring
              </Box>
            </Typography>

            <Typography color="#77829D" lineHeight={1.8} mb={2}>
              Our goal is to deliver quality of care in a courteous, respectful,
              and compassionate manner. We hope you will allow us to care for
              you and strive to be the first and best choice for healthcare.
            </Typography>

            <List>{items.map(renderItem)}</List>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
