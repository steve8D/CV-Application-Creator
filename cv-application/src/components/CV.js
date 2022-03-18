import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import ExperienceDetailsItem from "./reuseable-views/ExperienceDetailsItem";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "serif",
    },
    h5: { fontWeight: "medium" },
  },
});

function CV({ info }) {
  const fullName = `${info.firstName} ${info.lastName}`;
  const contactInfo = `${info.email} | ${info.phoneNo}`;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mx: "auto", width: "50%" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3">{fullName}</Typography>
          <Typography variant="body1">{contactInfo}</Typography>
        </Box>
        <hr />

        <Typography variant="h5">Skills</Typography>
        <Box sx={{ display: "flex", gap: "30px" }}>
          <Box sx={{ fontWeight: "bold" }}>
            <Typography style={{ fontWeight: "bold" }}>
              Programming Languages
            </Typography>
            <Typography style={{ fontWeight: "bold" }}>Frameworks</Typography>
            <Typography style={{ fontWeight: "bold" }}>
              Developer Tools
            </Typography>
          </Box>

          <Box>
            <Typography>{info.programmingLanguages}</Typography>
            <Typography>{info.frameWorks}</Typography>
            <Typography>{info.developerTools}</Typography>
          </Box>
        </Box>
        <hr />

        <Typography variant="h5">Work Experiences</Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {info.experiences.map((experience) => (
            <ExperienceDetailsItem
              key={experience.id}
              experienceInfo={experience}
            ></ExperienceDetailsItem>
          ))}
        </Box>
        <hr />

        <Typography variant="h5">Education</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>{info.university}</Typography>
          <Typography>{info.graduationDate}</Typography>
        </Box>

        <Typography>{info.degreeTitle}</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default CV;
