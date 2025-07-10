import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import FooterLink from "./FooterLink";

import logo from "../../assets/logo.png";
import fb from "../../assets/fb.png";
import twitter from "../../assets/twitter.png";
import yt from "../../assets/yt.png";
import pinterest from "../../assets/pinterest.png";

function useLogo() {
  return logo;
}
function useSocials() {
  return [
    { src: fb, alt: "Facebook" },
    { src: twitter, alt: "Twitter" },
    { src: yt, alt: "YouTube" },
    { src: pinterest, alt: "Pinterest" },
  ];
}
function useLinkGroups() {
  return [
    [
      "About Us",
      "Our Pricing",
      "Our Gallery",
      "Appointment",
      "Privacy Policy",
    ],
    [
      "Orthology",
      "Neurology",
      "Dental Care",
      "Opthalmology",
      "Cardiology",
    ],
    [
      "About Us",
      "Our Pricing",
      "Our Gallery",
      "Appointment",
      "Privacy Policy",
    ],
  ];
}
const Copyright = () => (
  <Typography
    fontWeight={300}
    color="#fff"
    fontSize={14}
    pt={3}
    mt={5}
    borderTop="1px solid rgba(255,255,255,0.1)"
  >
    Copyright ©2023 Medify.com. All Rights Reserved
  </Typography>
);

export default function Footer() {
  const logoSrc = useLogo();
  const socials = useSocials();
  const linkGroups = useLinkGroups();

  return (
    <Box bgcolor="primary.secondary" pb={3} pt={6} px={20} >
      <Container maxWidth={false} disableGutters>
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4.5}>
            <Stack
              alignItems="flex-start"
              justifyContent="space-between"
              height={1}
            >
              <Box
                src={logoSrc}
                height={36}
                alt="Medify"
                component="img"
                mb={2}
              />
              <Stack direction="row" spacing={1.5}>
                {socials.map((s) => (
                  <Box
                    key={s.alt}
                    component="img"
                    src={s.src}
                    height={36}
                    alt={s.alt}
                  />
                ))}
              </Stack>
            </Stack>
          </Grid>

          {linkGroups.map((group, idx) => (
            <Grid item xs={12} md={2.5} key={idx} px={6} >
              <Stack spacing={2}>
                {group.map((label) => (
                  <FooterLink key={label}>{label}</FooterLink>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Copyright />
      </Container>
    </Box>
  );
}