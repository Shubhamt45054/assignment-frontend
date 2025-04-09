import React from 'react'
import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'
import FeedbackForm from './component/FeedbackForm.jsx'
import FeedbackList from './component/FeedbackList.jsx'
import {Toaster} from 'react-hot-toast'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Header/>

    <Routes>
        <Route path="/" element={<FeedbackForm/>} />
        <Route path="/admin" element={<FeedbackList/>} />
      </Routes>

    <Footer/>
    
    <Toaster/>
    </>
  )
}

export default App;
