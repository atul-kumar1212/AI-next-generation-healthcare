import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import useDocData from "../../../Hooks/useDocData";

const OurExperts = () => {
  // Hardcoded doctors data
  const doctorsData = [
    {
      doc_id: 1,
      name: "Lee S. Williamson",
      specialize: "Cardiology",
      doc_img: "https://i.ibb.co/b6SDFTN/01.jpg",
      experience: "10 years experience"
    },
    {
      doc_id: 2,
      name: "Greg S. Grinstead",
      specialize: "Neurology",
      doc_img: "https://i.ibb.co/gW26qY2/02.jpg",
      experience: "12 years experience"
    },
    {
      doc_id: 3,
      name: "Roger K. Jackson",
      specialize: "Orthopedics",
      doc_img: "https://i.ibb.co/hsyxYVj/03.jpg",
      experience: "9+ years experience"
    },
    {
      doc_id: 4,
      name: "Frank T. Grimsley",
      specialize: "stomach",
      doc_img: "https://i.ibb.co/86xBJSh/04.jpg",
      experience: "11+ years experience"
    },
    {
      doc_id: 5,
      name: "Rudolph V. Spitler",
      specialize: "Lungs",
      doc_img: "https://i.ibb.co/hWD7NVx/05.jpg",
      experience: "8+ years experience"
    },
    {
      doc_id: 6,
      name: "Erik R. Faulkner",
      specialize: "Bronchus",
      doc_img: "https://i.ibb.co/hYWtLy1/06.jpg",
      experience: "13+ years experience"
    },
    {
      doc_id: 7,
      name: "Phillip L. Williams",
      specialize: "Vaccine",
      doc_img: "https://i.ibb.co/dPtTnys/07.jpg",
      experience: "7+ years experience"
    },
    {
      doc_id: 8,
      name: "Johnny R. Atterberry",
      specialize: "Covid 19",
      doc_img: "https://i.ibb.co/ypmBR9k/08.jpg",
      experience: "5+ years experience"
    },
    {
      doc_id: 9,
      name: "Michael I. Johnson",
      specialize: "Medecine",
      doc_img: "https://i.ibb.co/nj8qcCS/09.jpg",
      experience: "10 years experience"
    }
  ];
  const [ourExperts, setOurExperts] = useState(doctorsData);

  return (
    <Box
      sx={{
        bgcolor: "#fce4ec",
        color: "primary.main",
        p: 2,
        mb: 2,
        textAlign: "center",
      }}
    >
      <Container maxWidth="xl">
        <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }} variant="h6">
          Meet Our Expert Team
        </Typography>

        <Typography sx={{ mb: 8, fontWeight: 600 }} variant="h5">
          We are committed to ensure you the best service
        </Typography>

        {ourExperts.length > 0 ? (
          <Grid container spacing={3}>
            {ourExperts.map((doctor) => (
              <Grid
                key={doctor.doc_id}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{ mx: "auto" }}
              >
                <Card
                  sx={{
                    mx: "auto",
                    boxShadow: 10,
                    maxWidth: 345,
                    transition: "0.5s all ease-in-out",
                    ":hover": {
                      color: "#e91e63",
                      boxShadow: 1,
                    },
                    img: { transition: "0.5s all ease-in-out" },
                    ":hover img": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <CardActionArea>
                    <Avatar
                      alt="doctor image"
                      src={doctor?.doc_img}
                      sx={{
                        width: 256,
                        height: 256,
                        mx: "auto",
                      }}
                    />

                    <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", mx: "auto", my: 2 }}>
                      <Typography gutterBottom variant="h5" component="div">
                        Specialist in {doctor.specialize}
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        {doctor.experience}
                      </Typography>
                    </CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Dr. {doctor.name}
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <LinearProgress color="secondary" />
        )}

        <Typography sx={{ mx: 2, p: 2, textAlign: "end" }}>
          <HashLink
            smooth
            to="/doctors#doctors"
            className="text-style"
            color="primary"
          >
            {" "}
            Meet Our Expert Team{" "}
          </HashLink>
        </Typography>
      </Container>
    </Box>
  );
};

export default OurExperts;
