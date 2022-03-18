import { useState, useEffect } from "react";
import Input from "./Input.js";

const ExperienceDataInput = ({
  experienceDetails,
  handleExperienceDetailsChange,
}) => {
  const [experienceData, setExperienceData] = useState({
    companyName: experienceDetails.companyName,
    title: experienceDetails.title,
    from: experienceDetails.from,
    to: experienceDetails.to,
    description: experienceDetails.description,
    id: experienceDetails.id,
  });

  useEffect(
    () => handleExperienceDetailsChange(experienceData),
    [experienceData]
  );

  const handleInfoChange = (event) => {
    const { name, value } = event.target;

    setExperienceData((experienceData) => ({
      ...experienceData,
      [name]: value,
    }));
  };

  return (
    <>
      <Input
        id="companyName"
        name="companyName"
        value={experienceData.companyName}
        onInputChange={handleInfoChange}
      >
        Name of company
      </Input>
      <br />
      <Input
        id="jobTitle"
        name="title"
        value={experienceData.title}
        onInputChange={handleInfoChange}
      >
        Title
      </Input>
      <br />
      <Input
        id="jobStartDate"
        name="from"
        value={experienceData.from}
        onInputChange={handleInfoChange}
      >
        From
      </Input>
      <br />
      <Input
        id="jobEndDate"
        name="to"
        value={experienceData.to}
        onInputChange={handleInfoChange}
      >
        To
      </Input>
      <br />
      <Input
        id="jobDescription"
        name="description"
        value={experienceData.description}
        onInputChange={handleInfoChange}
        minRows={4}
      >
        Main acitivities and responsibilities
      </Input>
    </>
  );
};

export default ExperienceDataInput;
