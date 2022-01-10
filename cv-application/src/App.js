import Header from './components/Header';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import CV from './components/CV'
import {useState} from 'react';

function App() {
  const info = {
    firstName: 'Danny',
    lastName: 'Ngo',
    email: 'danhngo80@gmail.com',
    phoneNo: 2369715540,

  }

  const [showCV, setShowCV] = useState(false);

  const handleSubmit = () => {
    setShowCV(showCV => !showCV);
  }

  if (!showCV) {
    return (
    <div className="App">
      <Header />
      <Skills />
      <Education />
      <Experience />
      <br/>

      <button onSubmit={handleSubmit}>See my resume!</button>
    </div>
    ); 
  } 
  return (
    <CV info={info}/>
  ) 
}

export default App;
