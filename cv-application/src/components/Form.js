import React from "react";
import Input from "./reuseable-input-fields/Input.js";
import ExperienceDataInput from "./reuseable-input-fields/ExperienceDataInput.js";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";

const Form = ({
  info,
  onInputChange,
  handleExperienceDetailsChange,
  handleExperienceAdd,
  handleExperienceRemove,
}) => {
  return (
    <div className="form">
      <h2>Basic Information</h2>
      <Box className="personal-info">
        <Input
          id="firstName"
          name="firstName"
          value={info.firstName}
          onInputChange={onInputChange}
        >
          First Name
        </Input>
        <br />
        <Input
          id="lastName"
          name="lastName"
          value={info.lastName}
          onInputChange={onInputChange}
        >
          Last Name
        </Input>
        <br />
        <Input
          id="email"
          name="email"
          value={info.email}
          onInputChange={onInputChange}
        >
          Email
        </Input>
        <br />
        <Input
          id="phoneNo"
          name="phoneNo"
          value={info.phoneNo}
          onInputChange={onInputChange}
        >
          Phone Number
        </Input>
      </Box>

      <h2>Education</h2>
      <Box className="education-info">
        <Input
          id="university"
          name="university"
          value={info.university}
          onInputChange={onInputChange}
        >
          School
        </Input>
        <br />
        <Input
          id="degreeTitle"
          name="degreeTitle"
          value={info.degreeTitle}
          onInputChange={onInputChange}
        >
          Degree and Major
        </Input>
        <br />
        <Input
          id="graduationDate"
          name="graduationDate"
          value={info.graduationDate}
          onInputChange={onInputChange}
        >
          Graduation Date
        </Input>
      </Box>

      <h2>Experiences</h2>
      {info.experiences.map((experience, i) => (
        <Box key={experience.id} sx={{ mb: 4 }} className="experience-details">
          <h3>Experience section {i + 1}</h3>
          <ExperienceDataInput
            experienceDetails={experience}
            handleExperienceDetailsChange={(e) =>
              handleExperienceDetailsChange(e, experience.id)
            }
          ></ExperienceDataInput>
          <br />
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={(e) => handleExperienceRemove(e, experience.id)}
            sx={{ width: "400px" }}
          >
            Remove experience section
          </Button>
        </Box>
      ))}
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleExperienceAdd}
      >
        Add another job experience
      </Button>

      <h2>Technical Skills</h2>
      <Box className="technical-skills-info">
        <Input
          id="programmingLanguages"
          name="programmingLanguages"
          value={info.programmingLanguages}
          onInputChange={onInputChange}
        >
          Programming Languages
        </Input>
        <br />
        <Input
          id="frameworks"
          name="frameWorks"
          value={info.frameWorks}
          onInputChange={onInputChange}
        >
          Frameworks
        </Input>
        <br />
        <Input
          id="developerTools"
          name="developerTools"
          value={info.developerTools}
          onInputChange={onInputChange}
        >
          Developer Tools
        </Input>
      </Box>
    </div>
  );
};

export default Form;
