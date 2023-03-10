import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/Star-Wars-logo.png'
import { useAuth } from '../context/AuthContext'
import { SlSocialSpotify } from 'react-icons/sl';
import { SlSocialInstagram } from 'react-icons/sl';
import { SlSocialGithub } from 'react-icons/sl';
import { SlSocialYoutube } from 'react-icons/sl';
import { CiLogin } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';

export const Navbar = () => {
   // const{user,logout} = useContext(AppContext)
   const [error, setError] = useState('')
   const { currentUser, logout } = useAuth()

   async function handleLogout() {
      setError('')
      try {
         await logout()
         navigate('/login')
         console.log('you are logged out')
      } catch (error) {
         setError('Failed to log out')
      }
   }
   const navigate = useNavigate()

   return (
      <header>
         {/*------------ Left social icons------------ */}
         <div>
            <nav className="flex flex-col md:flex-row md:justify-between justify-center text-white py-8 px-10 ">
               <ul className="flex justify-center md:justify-between list-none md:gap-4 gap-4">
                  <li className=''><a href='https://open.spotify.com/playlist/37i9dQZF1DXaUaRhCgtpCo' >< SlSocialSpotify className='yellow ' /></a> </li>
                  <li className=''><a href='https://www.instagram.com/starwars/' >< SlSocialInstagram className='yellow' /></a></li>
                  <li className=''><a href='https://github.com/Ann-14' >< SlSocialGithub className='yellow' /></a></li>
                  <li className=''><a href='https://www.youtube.com/watch?v=4bpk2k1ug3M' >< SlSocialYoutube className='yellow' /></a></li>
               </ul>
               {/* ------------Hero image ------------*/}
               <div className='flex'>
                  <img className='flex md:w-72 md:mt-4 md:mb-4 mb-10 mt-10 justify-center' alt='starwars logo' src={logo} ></img>
               </div>
               {/* ------------Right Buttons------------*/}
               <div className='' >
                  <div className='flex flex-wrap gap-4 justify-center md:justify-between md:px-4 '>
                     {currentUser ?
                        <button variant='link' onClick={handleLogout}>LOG OUT</button> : <Link to='/login' className='flex mt-2 hover:underline'> <CiLogin className='login-icon'></CiLogin>LOG IN</Link>}
                     <Link to='/update-profile'><CgProfile className='login-icon mt-2'></CgProfile></Link>
                  </div>
               </div>
            </nav>
         </div>
         {/* ------------Hero section links------------*/}
         <section>
            <ul className="flex flex-wrap md:flex-row list-none gap-2 md:gap-4  md:text-xl p-2 mt-4 md:justify-center md:mb-5 justify-center ">
               <li><Link to='/' className="no-underline list-none md:m-5 hover:text-yellow-400 ">HOME</Link></li>
               <li><Link to='/homePage' className="no-underline list-none   md:m-2 hover:text-yellow-400">SPACESHIPS</Link></li>
               <li><Link to='/' className="no-underline list-none hover:text-yellow-400  md:m-5">SERIES</Link></li>
               <li><Link to='/' className="no-underline list-none hover:text-yellow-400  md:m-5">DISNEY</Link></li>
               <li><Link to='/' className="no-underline list-none hover:text-yellow-400  md:m-5">FILMS</Link></li>
               <li><Link to='/' className="no-underline list-none hover:text-yellow-400  md:m-5">INTERACTIVE</Link></li>
               <li><Link to='/' className="no-underline list-none hover:text-yellow-400  md:m-5">KIDS</Link></li>
            </ul>
         </section>
      </header>
   )
}
