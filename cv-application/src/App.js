import Form from "./components/Form";
import CV from "./components/CV";
import { useState } from "react";
import uniqid from "uniqid";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

function App() {
  const [info, setInfo] = useState({
    firstName: "Danny",
    lastName: "Ngo",
    email: "danhngo80@gmail.com",
    phoneNo: "236-971-5540",
    university: "University of British Columbia",
    degreeTitle: "Bachelor of Science in Computer Science",
    graduationDate: "May 2023 (Expected)",
    programmingLanguages: "C#, HTML, CSS, JavaScript, Java, Kotlin",
    frameWorks: "JUnit, NUnit, Unity",
    developerTools:
      "SourceTree, JIRA, Git, Android Studio, VS Code, IntelliJ, Rider",
    experiences: [
      {
        companyName: "East Side Games Studio",
        title: "Software Engineer - IdleKit",
        from: "September 2021",
        to: "May 2022",
        description: "Refactored thousands of lines of legacy code",
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

  const [showCV, setShowCV] = useState(true);

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
