import React from "react";
import { Box, Typography } from "@mui/material";

const ExperienceDetailsItem = ({ experienceInfo }) => {
  return (
    <Box sx={{ pb: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography style={{ fontWeight: "bold" }}>
          {experienceInfo.companyName}
        </Typography>
        <Typography
          style={{ fontWeight: "bold" }}
        >{`${experienceInfo.from} - ${experienceInfo.to}`}</Typography>
      </Box>
      <Typography>{experienceInfo.title}</Typography>
      <Typography>{experienceInfo.description}</Typography>
    </Box>
  );
};

export default ExperienceDetailsItem;
