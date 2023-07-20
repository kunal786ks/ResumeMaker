import './App.css';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom'
import UserSignIn from './components/UserSignIn';
import PersonalDetails from './data/PersonalDetails';
import CoreSkills from './data/CoreSkills';
import EdDetails from './data/EdDetails';
import Hobbies from './data/Hobbies';
import Resume1 from './view/Resume1';
import UserSign from './components/UserSign';
import Resume2 from './view/Resume2';
import Resume3 from './view/Resume3';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/login' element={<UserSignIn/>}/>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/signup' element={<UserSign/>}/>
        <Route exact path='/detail' element={<PersonalDetails/>}/>
        <Route exact path='/core' element={<CoreSkills/>}/>
        <Route exact path='/hobbie' element={<Hobbies/>}/>
        <Route exact path='/resume1' element={<Resume1/>}/>
        <Route exact path='/resume2' element={<Resume2/>}/>
        <Route exact path='/resume3' element={<Resume3/>}/>
        <Route exact path='/ed' element={<EdDetails/>}/>
      </Routes> 
    </div>
  );
}

export default App;
