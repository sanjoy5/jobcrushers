import React, { useState } from 'react'
import ActiveLinks from '../Utils/ActiveLinks'
import { Link } from 'react-router-dom'
import { AiOutlineBars } from 'react-icons/ai'

const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    const menuHadler = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <>
            <header className="text-gray-600 body-font bg-blue-50 md:py-2">
                <div className="w-full lg:w-10/12 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-start md:items-center justify-between">

                    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="text-2xl lg:text-4xl font-bold">JobCrushers</span>
                    </Link>

                    <div className='hidden md:block'>
                        <nav className="md:ml-auto md:mr-auto flex flex-col md:flex-row flex-wrap items-start md:items-center text-base justify-center">
                            <ActiveLinks to='/' >Home</ActiveLinks>
                            <ActiveLinks to='/statistics' >Statistics</ActiveLinks>
                            <ActiveLinks to='/appliedjobs'>Applied Jobs</ActiveLinks>
                            <ActiveLinks to='/blog'>Blog</ActiveLinks>

                        </nav>
                    </div>


                    {/* Phone Navbar  */}

                    <div className={toggleMenu ? 'block ' : 'hidden md:hidden'}>
                        <nav className="ease-in duration-300 absolute z-10 bg-blue-200 p-4 right-4 md:block md:ml-auto md:mr-auto flex flex-col md:flex-row flex-wrap space-y-4 items-start md:items-center text-base justify-center">
                            <ActiveLinks to='/' >Home</ActiveLinks>
                            <ActiveLinks to='/statistics' >Statistics</ActiveLinks>
                            <ActiveLinks to='/appliedjobs'>Applied Jobs</ActiveLinks>
                            <ActiveLinks to='/blog'>Blog</ActiveLinks>
                            <button className=" items-center bg-blue-500 border-0 py-2 px-4 lg:py-3 lg:px-6 focus:outline-none text-white hover:bg-blue-600 rounded text-base  lg:text-xl font-normal lg:font-medium mt-4 md:mt-0">Start Applying
                            </button>
                        </nav>
                    </div>

                    <div className='hidden md:block'>
                        <Link to="/alljobs" className=" items-center bg-blue-500 border-0 py-3 px-5 lg:py-4 lg:px-6 focus:outline-none text-white hover:bg-blue-600 rounded text-base  lg:text-xl font-normal lg:font-medium mt-4 md:mt-0">Start Applying
                        </Link>
                    </div>


                    <AiOutlineBars onClick={menuHadler} className='block md:hidden text-2xl font-bold text-blue-700 absolute right-5 cursor-pointer' />
                </div>
            </header>
        </>
    )
}

export default Header