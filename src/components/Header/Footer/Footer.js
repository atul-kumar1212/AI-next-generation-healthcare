import React from "react";
import {
  Avatar,
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import HealingTwoToneIcon from "@mui/icons-material/HealingTwoTone";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Footer.css";
import { pink } from "@mui/material/colors";
import { HashLink } from "react-router-hash-link";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

// copyright function for generate year automatically
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Developed with 🩵 by "}
      <strong>
        <a
          className="text-style"
          href="http://github.com/atul-kumar1212"
          target="_blank"
          rel="noreferrer noopener"
        >
          Atul Kumar
        </a>{" "}
      </strong>
      {"Copyright ©"}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <footer>
      <Box
        className="sticky-container"
        sx={{
          bgcolor: "secondary.main",
          color: "text.primary",
          pb: 2,
          top: "auto",
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid sx={{ m: "auto" }} item xs={12} sm={6} md={4}>
              <Box>
                <Typography
                  variant="h6"
                  component="div"
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
                  style={{ justifyContent: "center" }}
                >
                  {" "}
                  <Avatar
                    className="avatar"
                    sx={{ mt: 1, mb: 1, mr: 1, bgcolor: "white" }}
                    style={{ justifyContent: "center" }}
                  >
                    <HealingTwoToneIcon color="primary" fontSize="Small" />
                  </Avatar>
                    NEXT-G HEALTH CARE 
                </Typography>
                <Divider />
              </Box>

              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                sx={{ m: 1 }}
              >
                <Avatar className="avatar" sx={{ mt: 1, bgcolor: pink[500] }}>
                  <LocationOnIcon />
                </Avatar>
                <a
                  className="text-style"
                  href="https://www.google.com/maps/place/Jaunpur,+Uttar+Pradesh/@25.7446866,82.6599244,14z/data=!3m1!4b1!4m6!3m5!1s0x39903a2c93994715:0xf9a9f10dc97322!8m2!3d25.7464145!4d82.6837033!16zL20vMDUzbTFs?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jaunpur,Uttar Pradesh.
                </a>
              </Stack>

              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                sx={{ m: 1 }}
              >
                <Avatar
                  className="avatar"
                  sx={{ mb: 1, mt: 1, bgcolor: pink[500] }}
                >
                  <EmailIcon />
                </Avatar>
                <a className="text-style" href="atulkumarbaijapur6@gmail.com">
                  atulkumarbaijapur6@gmail.com
                </a>
              </Stack>

              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                sx={{ m: 1 }}
              >
                <Avatar className="avatar" sx={{ mb: 1, bgcolor: pink[500] }}>
                  <CallIcon />
                </Avatar>
                <a className="text-style" href="mobile:8299321854">
                  +91 8299321854
                </a>
              </Stack>
            </Grid>

            {/* ----------service part ---------------*/}
            <Grid item xs={12} sm={4}>
              <Root>
                <Divider>
                  <Chip label="Our Services" />
                </Divider>
              </Root>

              <Box sx={{ p: 2 }}>
                <HashLink
                  className="text-style"
                  to="/doctors#doctors"
                  color="inherit"
                >
                  Find a Doctor
                </HashLink>
              </Box>

              <Box sx={{ p: 2 }}>
                <HashLink
                  className="text-style"
                  to="/services#services"
                  color="inherit"
                >
                  All services
                </HashLink>
              </Box>

              <Box sx={{ p: 2 }}>
                <HashLink
                  className="text-style"
                  to="/appointment#appointment"
                  color="inherit"
                >
                  Make An Appointment
                </HashLink>
              </Box>

              <Box sx={{ p: 2 }}>
                <HashLink className="text-style" to="/register" color="inherit">
                  Register For Service{" "}
                </HashLink>
              </Box>
            </Grid>

            {/* ----------social media part ------------*/}

            <Grid item xs={12} sm={4}>
              <Root>
                <Divider>
                  <Chip label="Find us on social media" />
                </Divider>
              </Root>

              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                sx={{ m: 1 }}
              >
                <Avatar
                  className="avatar"
                  sx={{ mb: 1, mt: 1, bgcolor: pink[500] }}
                >
                  <InstagramIcon />
                </Avatar>
                <a
                  className="text-style"
                  href="https://www.instagram.com/akshaybhosale_1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Healthcare on Instagram
                </a>
              </Stack>

              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                sx={{ m: 1 }}
              >
                <Avatar className="avatar" sx={{ mb: 1, bgcolor: pink[500] }}>
                  <LinkedInIcon />
                </Avatar>
                <a
                  className="text-style"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Atul on LinkedIn
                </a>
              </Stack>

              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                sx={{ m: 1 }}
              >
                <Avatar className="avatar" sx={{ mb: 1, bgcolor: pink[500] }}>
                  <GitHubIcon />
                </Avatar>
                <a
                  className="text-style"
                  href="http://github.com/atul-kumar1212"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Atul on GitHub
                </a>
              </Stack>
            </Grid>
          </Grid>
          <Divider sx={{ mb: 2 }} />
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
