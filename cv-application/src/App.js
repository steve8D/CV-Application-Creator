import Form from "./components/Form";
import CV from "./components/CV";
import { useState } from "react";
import uniqid from "uniqid";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

function App() {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    university: "",
    degreeTitle: "",
    graduationDate: "",
    programmingLanguages: "",
    frameWorks: "",
    developerTools: "",
    experiences: [
      {
        companyName: "",
        title: "",
        from: "",
        to: "",
        description: "",
        id: uniqid(),
      },
    ],
  });

  const handleInfoChange = (event) => {
    setInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const changeExperienceDetails = (newValue) => {
    let newExperienceList = [...info.experiences];
    newExperienceList = newExperienceList.map((experience) => {
      if (experience.id === newValue.id) {
        experience = { ...newValue };
      }
      return experience;
    });
    setInfo((prevState) => ({ ...prevState, experiences: newExperienceList }));
  };

  const addExperience = (e) => {
    e.preventDefault();
    setInfo((prevState) => {
      let newExperienceList = [
        ...prevState.experiences,
        {
          companyName: "",
          title: "",
          from: "",
          to: "",
          description: "",
          id: uniqid(),
        },
      ];
      return { ...prevState, experiences: newExperienceList };
    });
  };

  const removeExperience = (e, id) => {
    e.preventDefault();
    let newExperienceList = [...info.experiences].filter(
      (experience) => experience.id !== id
    );
    setInfo((prevState) => ({ ...prevState, experiences: newExperienceList }));
  };

  const [showCV, setShowCV] = useState(false);

  const handleSubmit = () => {
    setShowCV((showCV) => !showCV);
  };

  return (
    <>
      {!showCV && (
        <Box sx={{ textAlign: "center" }}>
          <Form
            info={info}
            onInputChange={handleInfoChange}
            handleExperienceDetailsChange={changeExperienceDetails}
            handleExperienceAdd={addExperience}
            handleExperienceRemove={removeExperience}
          />
          <br />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            See my resume!
          </Button>
        </Box>
      )}

      {showCV && (
        <>
          <CV info={info} />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Go back
            </Button>
          </Box>
        </>
      )}
    </>
  );
}

export default App;
