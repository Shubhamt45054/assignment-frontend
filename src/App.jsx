import React from 'react'
import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'
import FeedbackForm from './component/FeedbackForm.jsx'
import FeedbackList from './component/FeedbackForm.jsx'
import {Toaster} from 'react-hot-toast'

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
