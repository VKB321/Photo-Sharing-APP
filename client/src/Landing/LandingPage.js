import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import img_mainPage from '../images/img_mainPage.jpg';

function LandingPage() {
  return (
    <div className='Landing'>
        <div className='Landing-left'><img id='Landing_image' src={img_mainPage} alt='ImageLoading'/> </div>
      <div className='Landing-right'>
        <p className='Landing-p'>10x Team 04</p>
        <Link to="/postview"><button className='landing-btn'>Enter</button> </Link> 
        </div>
    </div>
  )
}

export default LandingPage
