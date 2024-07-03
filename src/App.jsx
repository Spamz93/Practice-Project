import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home'
import Gallery from './pages/Gallery/Gallery'
import Roster from './pages/Roster/Roster'
import Achievements from './pages/Achievements/Achievements'
import Forum from './pages/Forum/Forum'
import Register from './pages/Register/Register'
import NavBar from "./components/NavBar/NavBar";
import Login from './pages/Login/Login'



const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path='/gallery' exact Component={Gallery} />
        <Route path='/roster' exact Component={Roster} />
        <Route path='/achievements' exact Component={Achievements} />
        <Route path='/forum' exact Component={Forum} />
        <Route path='/register' exact Component={Register} />
        <Route path='/login' exact Component={Login} />
      </Routes>
    </>
  );
};

export default App;
