import Form from './components/Form'
import CV from './components/CV'
import {useState} from 'react';

function App() {
  const placeHolderInfo = {
    firstName: 'Danny',
    lastName: 'Ngo',
    email: 'danhngo80@gmail.com',
    phoneNo: 2369715540,
    university:'University of British Columbia',
    graduationDate:'May 2023',
    programmingLanguages: 'C#, HTML, CSS, JavaScript, Java, Kotlin',
    frameWorks: 'JUnit, NUnit, Unity',
    developerTools: 'SourceTree, JIRA, Git, Android Studio, VS Code, IntelliJ, Rider',
    experiences:[]
  }

  const [showCV, setShowCV] = useState(false);

  const handleSubmit = () => {
    setShowCV(showCV => !showCV);
  }

  if (!showCV) {
    return (
    <div className="App">
      <Form />
      <br/>

      <button onSubmit={handleSubmit}>See my resume!</button>
    </div>
    ); 
  } 
  return (
    <CV info={placeHolderInfo}/>
  ) 
}

export default App;
