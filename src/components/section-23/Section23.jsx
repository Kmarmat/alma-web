import React from 'react'
import "./section23.scss"
import Cards from '../cards/Cards.jsx'
const Section23 = () => {
  let data = [
    {
      id:1,
      heading:"Medical API",
      desc:"Comprehensive patient data at the point-of-care, via a modern FHIR-native API.",
      src:"https://assets-global.website-files.com/640036547d68f8c201789d8c/650c5de50467d2f1312040c6_MAPI%20photo.png",
      srcSet:"https://assets-global.website-files.com/640036547d68f8c201789d8c/650c5de50467d2f1312040c6_MAPI%20photo-p-500.png"
    },
    {
      id:2,
      heading:"Dashboard",
      desc:"No-code provider dashboard for streamlined patient medical record access.",
      src:"https://assets-global.website-files.com/640036547d68f8c201789d8c/650b96d2733b9e13f47703fa_Screenshot%202023-09-20%20at%206.05.10%20PM.png",
      srcSet:"https://assets-global.website-files.com/640036547d68f8c201789d8c/650b96d2733b9e13f47703fa_Screenshot%202023-09-20%20at%206.05.10%20PM-p-500.png"
    },
  ]
  return (
    <div className='section23'>
    <Cards data={data[0]}/>
  
    <Cards data={data[1]}/>
    </div>
  )
}

export default Section23
