import Form from './components/Form'
import CV from './components/CV'
import {useState} from 'react';
import uniqid from "uniqid";

function App() {
  const [info, setInfo] = useState({
    firstName: 'Danny',
    lastName: 'Ngo',
    email: 'danhngo80@gmail.com',
    phoneNo: 2369715540,
    university:'University of British Columbia',
    degreeTitle:'BSc Computer Science',
    graduationDate:'May 2023',
    programmingLanguages: 'C#, HTML, CSS, JavaScript, Java',
    frameWorks: 'JUnit, NUnit, Unity',
    developerTools: 'SourceTree, JIRA, Git, Android Studio, VS Code, IntelliJ, Rider',
    experiences:[]
  })

  const handleInfoChange = (event) => {
    setInfo(prevState => ({...prevState, [event.target.name]: event.target.value}));
  }

  const changeExperienceDetails = (newValue) => {
    // console.log(newValue)
  }

  const addExperience = (e) => {
    e.preventDefault();
    setInfo(prevState => {
      let newExperienceList = [...prevState.experiences, {
        companyName: '',
        title: '',
        from: '',
        to: '',
        tasks: [],
        id: uniqid()
      }]
      return {...prevState, experiences: newExperienceList}
    })
  }

  const removeExperience = (e, id) => {
    e.preventDefault();
    let newExperienceList = [...info.experiences].filter(experience => experience.id !== id);
		setInfo(prevState => ({...prevState, experiences: newExperienceList}))
  }

  const [showCV, setShowCV] = useState(false);

  const handleSubmit = () => {
    setShowCV(showCV => !showCV);
  }

  return (
  <div className="App">
    {!showCV && (
    <div>
      <Form info={info} onInputChange={handleInfoChange} handleExperienceDetailsChange={changeExperienceDetails} handleExperienceAdd={addExperience} handleExperienceRemove={removeExperience}/>
      <br/>
      <button onClick={handleSubmit}>See my resume!</button>
      </div>
    )}
    

    {showCV && (
      <div>
        <CV info={info}/>
        <button onClick={handleSubmit}>Go back</button>
      </div>
    )}
  </div>
  ); 
}

export default App;
