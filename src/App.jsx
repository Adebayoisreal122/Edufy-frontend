import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout';
import Home from './components/Home';
import Adsignup from './components/Adsignup';
import Adsignin from './components/Adsignin';
import Studentsignin from './components/Studentsignin';
import Studentsignup from './components/Studentsignup';
import Admindash from './components/Admindash';
import Studentdash from './components/Studentdash';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admindash/>}/>
        <Route path='/student' element={<Studentdash/>}/>

        </Route>
        <Route path='/adminsignup' element={<Adsignup/>}/>
        <Route path='/adminsignin' element={<Adsignin/>}/>
        <Route path='/studentsignup' element={<Studentsignup/>}/>
        <Route path='/studentsignin' element={<Studentsignin/>}/>
      </Routes>

    </>


    </>
  )
}

export default App
