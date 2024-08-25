import { useState } from 'react'
import { Link } from 'react-router-dom';
import "./navbar.scss"

function Navbar() {
    const [open,setOpen]= useState(false);

    const user = true;

    return (
        <nav>
            <div className='left'>
                <a href="/" className='logo'>
                    <img src="/logo.png" alt=""/>
                    <span>
                        LamaEstate
                    </span>
                </a>
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Contact</a>
                <a href='/'>Agents</a>

            </div>
            <div className='right'>
                {user?(
                    <div className='user'>
                        <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'/>
                        <span>John Doe</span>
                        <Link t0="/profile" className='profile'>
                        <div className="notification">3</div>
                        <span>Profile</span>
                        </Link>
                    </div>
                    ): (
                        <><a href='/'>Sign in</a>
                            <a href='/' className='register'>Sign Up</a>
                        </>
                    )
                }
                <div className='menuicon'>
                    <img src='/menu.png' alt='' onClick={()=>setOpen((prev)=>!prev)}/>
                </div>
                <div className={open? "menu active": "menu"}>
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Contact</a>
                <a href='/'>Agents</a>
                <a href='/'>Sign in</a>
                <a href='/'>Sign Up</a>
                </div>
            </div>
        </nav>
  )
}

export default Navbar