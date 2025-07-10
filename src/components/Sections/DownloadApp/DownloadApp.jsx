import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useMemo } from "react";

import mobile from "../../../assets/mobile.jpg";
import playstore from "../../../assets/playstore.png";
import apple from "../../../assets/apple-logo.png";
import arrow from "../../../assets/down-arr.png";
import SmsForm from "./SmsForm";

function useStoreButtons() {
  return useMemo(
    () => [
      { label: "Google Play", icon: playstore },
      { label: "App Store", icon: apple },
    ],
    []
  );
}

export default function DownloadApp() {
  const storeButtons = useStoreButtons();

  return (
    <Box
      sx={{
        background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)",
        pt: 6,
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid
          container
          spacing={3}
          alignItems="center"
          direction={{ xs: "column", md: "row" }}
          wrap="nowrap"
        >
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={mobile}
              width={1}
              height="auto"
              sx={{ maxHeight: 500, objectFit: "contain" }}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <Box
              position="relative"
              pl={{ xs: "36px", md: "50px" }}
              width="100%"
              mb={{ xs: 4, md: 0 }}
            >
              <Box mb={2}>
                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                  Download the
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  <Box component="span" color="primary.main">
                    Medify
                  </Box>
                  App
                </Typography>
              </Box>

              <Box
                src={arrow}
                component="img"
                width={{ xs: 24, md: 40 }}
                position="absolute"
                left={0}
                top={50}
              />

              <SmsForm />

              <Stack
                direction="row"
                spacing={2}
                sx={{
                  flexWrap: "nowrap",
                  overflowX: "auto",
                  mt: 2,
                }}
              >
                {storeButtons.map(({ label, icon }) => (
                  <Button
                    key={label}
                    sx={{
                      bgcolor: "#333",
                      color: "#fff",
                      py: 1.5,
                      px: 3,
                      borderRadius: 1.5,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      minWidth: 160,
                    }}
                    size="large"
                    startIcon={<img src={icon} height={24} />}
                    variant="contained"
                    disableElevation
                  >
                    {label}
                  </Button>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
