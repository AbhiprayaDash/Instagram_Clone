import './App.css';
import { Route, Routes} from "react-router-dom";
import PathComponent from './components/pathcomponent.js';
import ProfileComponent from './components/profilecomponent';
import Homecomponent from './components/homecomponent';
import SigninComponent from './components/Auth/signin';
import SignupComponent from './components/Auth/signup';
import Postcomponent from './components/post/postcomponent';
function App() {
  return (
    <Routes>
      <Route exact path="/path" element={<PathComponent/>}/>
      <Route exact path="/profile" element={<ProfileComponent/>}/>
      <Route exact path="/profile" element={<Homecomponent/>}/>
      <Route exact path="/feed" element={<Postcomponent/>}/>
      <Route exact path="/" element={<SigninComponent/>}/>
      <Route exact path="/signup" element={<SignupComponent/>}/>
    </Routes>
  );
}

export default App;
