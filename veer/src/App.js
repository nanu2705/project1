import React from 'react'
import Header from './Common/Header/Header.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Search from './Common/Search/Search'
import MyContextProvider from './Common/Context/MyContextProvider'
import ContactBatch from './Common/ContactBatch/ContactBatch'
import Contact from './Contact/Contact'
import Login from './Common/Login/Login'
import Register from './Common/Register/Register'
import Loader from './Common/Loader/Loader'
import Error from './Common/Error/Error'
import Footer from './Footer/Footer'
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
// import SubHeader from './SubHeader/SubHeader'
import GoToTop from './Common/Gototop/GoToTop'
import ServiceCardModal from './service-modal/ServiceCardModal'
import Explore from './Explore/Explore'
import CountryPage from './CountryPage/CountryPage'
import Admin from './Admin/Admin'
import ErrorPage from './Common/ErrorPage/ErrorPage'
import Logout from './Common/Logout/Logout.jsx'
import LayoutDoc3 from './Common/Layout3/LayoutDoc3.jsx'
import LayoutDoc2 from './Common/Layout2/LayoutDoc2.jsx'
import Passport from './Passport/Passport.jsx'
import Modal from './Passport/Modal.jsx'
import Adminform from './Admin/Adminform.jsx'





const App = () => {
  return (

    <BrowserRouter>
      <MyContextProvider>
        {/* <SubHeader /> */}
        <Header />
        <Login />
        <Loader />
        <Error />
        <Register />
        <ContactBatch />
        <ServiceCardModal />
       
        <Logout />
        <Modal/>
        

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service/:servicename/:countryname' element={<CountryPage />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/adminform' element={<Adminform />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/confirm" element={<LayoutDoc3 />} />
          <Route path="/layout" element={<LayoutDoc2/>}/>
          <Route path="/passport/:title" element={<Passport/>}/>
         
          
        </Routes>
        <ScrollToTop smooth component={<FaArrowUp style={{ position: 'fixed', bottom: '50px', right: '47px', zIndex: 1000, color:'white' }} size={25} />} />
        <GoToTop />
        <Footer />
      </MyContextProvider>
    </BrowserRouter>


  )
}

export default App