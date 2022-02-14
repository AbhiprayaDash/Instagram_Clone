import './App.css';
import { Route, Routes} from "react-router-dom";
import PathComponent from './components/pathcomponent.js';
import ProfileComponent from './components/profilecomponent';
import Homecomponent from './components/homecomponent';
function App() {
  return (
    <Routes>
      <Route exact path="/path" element={<PathComponent/>}/>
      <Route exact path="/profile" element={<ProfileComponent/>}/>
      <Route exact path="/" element={<Homecomponent/>}/>
    </Routes>
  );
}

export default App;
