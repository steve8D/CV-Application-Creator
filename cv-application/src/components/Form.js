import React from "react";
import Input from "./reuseable-input-fields/Input.js";
import ExperienceDataInput from "./reuseable-input-fields/ExperienceDataInput.js";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const Form = ({
  info,
  onInputChange,
  handleExperienceDetailsChange,
  handleExperienceAdd,
  handleExperienceRemove,
}) => {
  return (
    <div className="Form">
      <h2>Basic Information</h2>
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
      <br />

      <h2>Education</h2>
      <Input
        id="university"
        name="university"
        value={info.university}
        onInputChange={onInputChange}
      >
        School:{" "}
      </Input>
      <br />
      <Input
        id="degreeTitle"
        name="degreeTitle"
        value={info.degreeTitle}
        onInputChange={onInputChange}
      >
        Degree and Major:{" "}
      </Input>
      <br />
      <Input
        id="graduationDate"
        name="graduationDate"
        value={info.graduationDate}
        onInputChange={onInputChange}
      >
        Graduation Date:{" "}
      </Input>

      <h2>Experience</h2>
      {info.experiences.map((experience) => (
        <React.Fragment key={experience.id}>
          <ExperienceDataInput
            experienceDetails={experience}
            handleExperienceDetailsChange={(e) =>
              handleExperienceDetailsChange(e, experience.id)
            }
          ></ExperienceDataInput>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={(e) => handleExperienceRemove(e, experience.id)}
          >
            Remove experience section
          </Button>
          <br />
        </React.Fragment>
      ))}
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleExperienceAdd}
      >
        Add another job experience
      </Button>

      <h2>Technical Skills</h2>
      <Input
        id="programmingLanguages"
        name="programmingLanguages"
        value={info.programmingLanguages}
        onInputChange={onInputChange}
      >
        Programming Languages:{" "}
      </Input>
      <br />
      <Input
        id="frameworks"
        name="frameWorks"
        value={info.frameWorks}
        onInputChange={onInputChange}
      >
        Frameworks:{" "}
      </Input>
      <br />
      <Input
        id="developerTools"
        name="developerTools"
        value={info.developerTools}
        onInputChange={onInputChange}
      >
        Developer Tools:{" "}
      </Input>
      <br />
    </div>
  );
};

export default Form;
