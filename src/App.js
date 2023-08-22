import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Build from './components/Build'
import Infodetails from './components/Infodetails';
import SignUp from './components/Signup';
import Signin from './components/Signin';

import Alert from './components/Alert';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/alert"  element={<Alert/>}/>
        <Route path="/build" element={< Build/>}/>
        <Route path="/infodetails" element={<Infodetails/>}/>
        
        <Route /> 
      </Routes>
    </div>
  );
}

export default App;
