import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'

import './Nav.scss'

const useClickOutside =(handler)=>{
    const menuNode=useRef();
    
    useEffect(()=>{
        const maybeHandler = (event)=>{
            if(!menuNode.current.contains(event.target))
            {
            handler()
            }
        }

        document.addEventListener("mousedown", maybeHandler)

        return ()=>{
            document.removeEventListener("mousedown",maybeHandler)
        }
    })
    return menuNode;
} 

export default function Nav() {
    const [menuToggle, setMenuToggle]=useState(false)

    const menuNode = useClickOutside(()=>{
        setMenuToggle(false)
    })
    const toggleMenuFunc=()=>setMenuToggle((menuToggle)=>!menuToggle)

    return (
        <div className="nav">
            <Link to ='/' className='logo-nav'>
                <img src="img/Logo.svg" alt="logo" />
            </Link>
            <div className="fullMenu" ref={menuNode}>
            <div id={menuToggle ?  'close' :  ''} onClick={toggleMenuFunc} className="menu-mobile hide-desktop">
                <span></span><span></span><span></span>
            </div>
            {/* {menuToggle && ( */}
                <div id={menuToggle ? 'showMenu' : ''} className="navmenu hide-mobile">
                <Link to ='/' className='link' onClick={toggleMenuFunc}>Home</Link>
                <Link to='/Services' className='link' onClick={toggleMenuFunc}>Services</Link>
                <Link to='/About' className='link' onClick={toggleMenuFunc}>About</Link>
                <Link to ='/Portfolio' className='link' onClick={toggleMenuFunc}>Portfolio</Link>
                <Link to='/Contact' className='link' onClick={toggleMenuFunc}>Contact</Link>
            </div>
            {/* )} */}
            </div>
        </div>
       
    )
}
