import React from 'react'
import "./style.css"
import { NavLink} from 'react-router-dom'

function Header() {
    return (
        <div>
            <header>
                <div>
                 <span> <span><p className='circle-1'><p className='circle-2'><p className='circle-3'></p></p></p></span></span>
                 
                    <span className='insta'>Instaclone</span>
                </div >
                <div className='Insta-img'><NavLink to="/post" ><i className="material-icons">photo_camera</i> </NavLink></div>
            </header>
        </div>
      )
}

export default Header
