import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './scss/main.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import UserAccount from './pages/UserAccount'
import Error404 from './pages/Error404'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/userAccount" element={<UserAccount />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
