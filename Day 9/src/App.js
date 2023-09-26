//import logo from './logo.svg';
//import './App.css';
import {Link,Routes, Route, useNavigate, BrowserRouter} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/DashBoard';
import Contact from './Components/Contact';
import AboutUs from './Components/AboutUs';
import HomePage from './Components/home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<Login/>}/>

    <Route path='/Register' element={<Register/>}/>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<AboutUs/>}/>
    <Route path='/home' element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;


