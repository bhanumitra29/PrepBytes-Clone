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

      </Routes>
    </div>
  )
}

export default RouterCompo
