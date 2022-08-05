import React from 'react'
import Footers from '../../components/Footer/Footers'
import Headers from '../../components/Header/Headers'
import Heading from '../../components/Heading/Heading'
import global from '../../constants/global'

const SplashScreen = () => 
{
  return (
      <div className='mx-16 my-2'>
         <Headers headerName = {global.WEBNAME} authName = {global.LOGIN} />
         <Heading text = {global.COURSES}/>
         <Footers footerName= {global.WEBNAME} />      
      </div>
  
  )

}

export default SplashScreen