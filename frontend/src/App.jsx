import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import UpdateProfile from './Pages/UpdateProfile';
import AddNote from './Pages/AddNote';
import UpdateNote from './Pages/UpdateNote';
import About from './Pages/About';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/updateProfile' element={<UpdateProfile/>}/>
        <Route path='/addnote' element={<AddNote/>}/>
        <Route path='/updateNote' element={<UpdateNote/>}/>

      </Routes>
    </Router>
  );
}

export default App;