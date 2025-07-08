import { Box, Grid, Stack,Container, Typography } from "@mui/material";
import logo from "../../assets/logo.jpg";
import fb from "../../assets/fb.jpg";
import twitter from "../../assets/twitter.jpg";
import yt from "../../assets/yt.jpg";
import pintrest from "../../assets/pinterest.jpg";
import FooterLink from "./FooterLink";
const Footer = () => {
  return (
    <Box bgcolor="primary.secondary" pb={3} pt={6}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={2.5}>
            <Stack
              alignItems="flex-start"
              justifyContent="space-between"
              height={1}
            >
              <Box
                src={logo}
                height={36}
                alt="Medify Logo"
                component="img"
                mb={2}
              />
              <Stack direction="row" spacing={1.5}>
                <Box component="img" src={fb} height={36} width={36} />
                <Box component="img" src={twitter} height={36} width={36} />
                <Box component="img" src={yt} height={36} width={36} />
                <Box component="img" src={pintrest} height={36} width={36} />
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={2.5}>
            <Stack spacing={1.5}>
              <FooterLink> About Us</FooterLink>
              <FooterLink> Our Pricing</FooterLink>
              <FooterLink> Our Gallery</FooterLink>
              <FooterLink> Appointment</FooterLink>
              <FooterLink> Privacy Policy</FooterLink>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Stack spacing={1.5}>
              <FooterLink> Orthology</FooterLink>
              <FooterLink> Neurology</FooterLink>
              <FooterLink> Dental Care</FooterLink>
              <FooterLink> Opthalmology</FooterLink>
              <FooterLink> Cardiology</FooterLink>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Stack spacing={1.5}>
              <FooterLink> About Us</FooterLink>
              <FooterLink> Our Pricing</FooterLink>
              <FooterLink> Our Gallery</FooterLink>
              <FooterLink> Appointment</FooterLink>
              <FooterLink> Privacy Policy</FooterLink>
            </Stack>
          </Grid>
        </Grid>

        <Typography
          fontWeight={300}
          color="#fff"
          fontSize={14}
          pt={3}
          mt={5}
          borderTop="1px solid rgba(255, 255, 255, 0.2)"
        >
          Copyright @2025 Medify. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
