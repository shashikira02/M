import mobile from "../../../assets/mobile.jpg";
import playstore from "../../../assets/playstore.jpg";
import apple from "../../../assets/apple-logo.jpg";
import arrow from "../../../assets/down-arr.jpg";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Container, Stack } from "react-bootstrap";
import SendSms from "./SendSms";
export default function DownloadApp() {
  return (
    <Box
      sx={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", pt: 5 }}
    >
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Box src={mobile} component="img" width={1} height="auto" />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            position="relative"
            pl={{ xs: "36px", md: "50px" }}
            mb={{ xs: 4, md: 0 }}
          >
            <Typography variant="h2" mb={2}>
              Download the <br />{" "}
              <Box component="span" color="primary.main">
                Medify
              </Box>
              App
            </Typography>

            <Box
              src={arrow}
              component="img"
              width={{ xs: 24, md: 40 }}
              position="absolute"
              left={0}
              top={50}
            />
            <SendSms />
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 1, ms: 2 }}
            >
              <Button
                sx={{
                  bgcolor: "#333",
                  color: "#fff",
                  py: 1.5,
                  borderRadius: 1.5,
                }}
                size="large"
                startIcon={<img src={playstore} alt="Play Store" height={24} />}
                variant="contained"
                disableElevation
              >
                Google Play
              </Button>
              <Button
                sx={{
                  bgcolor: "#333",
                  color: "#fff",
                  py: 1.5,
                  borderRadius: 1.5,
                }}
                size="large"
                startIcon={<img src={apple} alt="Apple Store" height={24} />}
                variant="contained"
                disableElevation
              >
                App Store
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
