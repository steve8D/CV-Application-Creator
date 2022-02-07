import Form from './components/Form'
import CV from './components/CV'
import {useState} from 'react';

function App() {
  const [info, setInfo] = useState({
    firstName: 'Danny',
    lastName: 'Ngo',
    email: 'danhngo80@gmail.com',
    phoneNo: 2369715540,
    university:'University of British Columbia',
    degreeTitle:'BSc Computer Science',
    graduationDate:'May 2023',
    programmingLanguages: 'C#, HTML, CSS, JavaScript, Java, Kotlin',
    frameWorks: 'JUnit, NUnit, Unity',
    developerTools: 'SourceTree, JIRA, Git, Android Studio, VS Code, IntelliJ, Rider',
    experiences:[],
    projects:[]
  })

  const handleInfoChange = (event) => {
    setInfo(state => ({...state, [event.target.name]: event.target.value}));
  }

  const [showCV, setShowCV] = useState(false);

  const handleSubmit = () => {
    setShowCV(showCV => !showCV);
  }

  return (
  <div className="App">
    {!showCV && (
    <div>
      <Form info={info} onInputChange={handleInfoChange}/>
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
