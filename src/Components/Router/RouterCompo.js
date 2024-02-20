import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import ElevationAcademy from '../ElevationAcademy'
import NavbarCompo from '../Navbar/NavbarCompo'
import Signup from '../LoginCompo/Signup'

import MockTests from '../SubRoutes/StudyMaterial/MockTests'
import VedioTutorial from '../SubRoutes/StudyMaterial/VedioTutorial'
import MasterCompetitiveProgramming from '../SubRoutes/CoursesAndPrograms/MasterCompetitiveProgramming'
import FullStackProgram from '../SubRoutes/CoursesAndPrograms/FullStackProgram'
import Login from '../LoginCompo/Login'
import Success from '../Stripe/Success'
import Cancel from '../Stripe/Cancel'
import Profile from '../Profile'
import Html from '../Project/Html'
import Css from '../Project/Css'
import JavaScript from '../Project/JavaScript'
import ReactCompo from '../Project/React'
import Node from '../Project/Node'
import MongoDB from '../Project/MongoDB'

const RouterCompo = () => {
  return (
    <div>

        <NavbarCompo />
      <Routes>

        <Route path='/' element={<Home />} />

        {/* StudyMaterial */}
        <Route path='/mocktests' element={<MockTests />} />
        <Route path='/vediotutorial' element={<VedioTutorial />} />
          {/* StudyMaterial */}

          {/* Cources And Programs */}
          <Route path='/master' element={<MasterCompetitiveProgramming/>} />
          <Route path='/fullstack' element={<FullStackProgram />} />
          {/* Cources And Programs */}
        
        <Route path='/elevation' element={<ElevationAcademy />} />


        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />

        <Route path='/Success' element={<Success />} />
        <Route path='/Cancel' element={<Cancel />} />

        <Route path='/profile' element={<Profile />} />


      <Route path='/html' element={<Html />} />
      <Route path='/css' element={<Css />} />
      <Route path='/js' element={<JavaScript />} />
      <Route path='/reactjs' element={<ReactCompo />} />
      <Route path='/nodejs' element={<Node />} />
      <Route path='/mongodb' element={<MongoDB />} />


      
      </Routes>
    </div>
  )
}

export default RouterCompo
