import React from 'react'
import Contact from '../../components/contact/Contact'
import Courses from '../../components/courses/Courses'
import Footers from '../../components/footer/Footers'
import Headers from '../../components/header/Headers'
import Heading from '../../components/heading/Heading'
import global from '../../static/constants/global'

const SplashScreen = () => 
{
  return (
      <div className='mx-16 my-2'>
         <Headers headerName = {global.WEBNAME} authName = {global.LOGIN} />
         <Heading text = {global.COURSES}/>
         <Courses />
         <Heading text = {global.CONTACTUS}/>
         <Contact email = {global.EMAIL}/>
         <Footers footerName= {global.WEBNAME} />      
      </div>
  
  )

}

export default SplashScreen