
import { Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/navbar';
import SoftwareEngineer from './pages/Software';
import Actress from './pages/Actress';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <Routes>
        <Route path ='/' element={<SoftwareEngineer/>}/>
        <Route path ='/software' element={<SoftwareEngineer/>}/>
        <Route path="/actress" element={<Actress/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
