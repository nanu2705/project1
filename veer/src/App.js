import React from 'react'
import Header from './Common/Header/Header.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Search from './Common/Search/Search'
import MyContextProvider from './Common/Context/MyContextProvider'
import ContactBatch from './Common/ContactBatch/ContactBatch'
import Contact from './Contact/Contact'
import Loader from './Common/Loader/Loader'
import Error from './Common/Error/Error'
import Footer from './Footer/Footer'
import ScrollToTop from "react-scroll-to-top";
import { IoMdArrowUp } from "react-icons/io";
// import SubHeader from './SubHeader/SubHeader'
import GoToTop from './Common/Gototop/GoToTop'
import ServiceCardModal from './service-modal/ServiceCardModal'
import Explore from './Explore/Explore'
import CountryPage from './CountryPage/CountryPage'
import Admin from './Admin/Admin'
import ErrorPage from './Common/ErrorPage/ErrorPage'
import LayoutDoc3 from './Common/Layout3/LayoutDoc3.jsx'
import LayoutDoc2 from './Common/Layout2/LayoutDoc2.jsx'
import Passport from './Passport/Passport.jsx'
import Modal from './Passport/Modal.jsx'
import Layoutbox from './Common/Layoutbox/Layoutbox.jsx'





const App = () => {
  return (

    <BrowserRouter>
      <MyContextProvider>
        {/* <SubHeader /> */}
        <Header />
     
        <Loader />
      
      
        <ContactBatch />
        <ServiceCardModal />
       
       
        <Modal/>
        

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service/:servicename/:countryname' element={<CountryPage />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/adminveer' element={<Admin />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/confirm" element={<LayoutDoc3 />} />
          <Route path="/layout" element={<LayoutDoc2/>}/>
          <Route path="/layoutpassport" element={<Layoutbox/>}/>
          <Route path="/passport/:title" element={<Passport/>}/>
         
          
        </Routes>
        <Error />
        <ScrollToTop
        smooth
        top={100}
        color="white"
        width="50px"
        height="50px"
        component={
          <IoMdArrowUp
            style={{
              position: "fixed",
              bottom: "49px",
              right: "48px",
              zIndex: 1000,
              color: "white",
              fontSize: "25px", 
            }}
          />
        }
      />
   
        <GoToTop />
        <Footer />
      </MyContextProvider>
    </BrowserRouter>


  )
}

export default App