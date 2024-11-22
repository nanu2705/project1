import React, { useContext } from 'react'
import './ContactBatch.scss'
import MyContext from '../Context/MyContext'

const ContactBatch = () => {
  const { Navigate, location } = useContext(MyContext)

  const mi = ['/search', '/contact', '/admin']
  if (mi.includes(location.pathname)) {
    return null
  }
  return (
    <div className='batch'>
      <div className='left'></div>
      <div className='left-one'></div>
      <div className='left-two'></div>
      <div className='center' onClick={() => Navigate('/contact')}>contact</div>
      <div className='right'></div>
      <div className='right-one'></div>

    </div>
  )
}

export default ContactBatch