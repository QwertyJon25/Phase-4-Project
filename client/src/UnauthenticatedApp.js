import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './LoginPage'
import SignUp from './SignUp'

function UnauthenticatedApp({ setCurrentUser }) {
  return (
 <Routes>
        <Route path = "/" element={<LoginPage setCurrentUser={setCurrentUser} />}/>
     
        <Route path = "/signup" element={<SignUp setCurrentUser={setCurrentUser}/>}/>
      
  </Routes>
  )
}

export default UnauthenticatedApp