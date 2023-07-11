import { Link } from "react-router-dom";

import { useState } from "react";

import { motion } from 'framer-motion'

function Header(props) {

    const [expanded, setExpanded] = useState(false)


    function navToggle() {
        setExpanded(!expanded)

    }

  

    return (
        <nav
            className="navbar h-16 px-4 py-2 bg-neutral-50 text-black md:flex md:justify-between md:items-center"

        >



            <div className="flex items-center justify-between w-full">
                <Link                    
                    className="font-extrabold text-l py-2 px-4 transition duration-300 rounded hover:underline hover:text-blush hover:bg-gray-400/25"
                    to="/">matthewbuiltthat</Link>

                <div className="burger-parent md:hidden">
                    <button
                        className="navbar-burger flex items-center p-3"
                        onClick={navToggle}>
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>



            <ul 
            className={`nav-main ${expanded ? "opacity-100" : "opacity-0 -z-50"} absolute left-0 bg-neutral-50 w-full px-4 transition-all ease-in duration-500 md:static md:py-0 md:w-auto md:flex md:flex-row md:items-center md:z-auto md:opacity-100`}>
                <li className=" my-4 md:my-0 ">
                    <Link
                        className="py-2 px-4 transition duration-300 rounded hover:underline hover:text-blush hover:bg-gray-400/25"
                        to="/about">about</Link>
                </li>


                <li className=" my-4 md:my-0">
                    <Link
                        className="py-2 px-4 transition duration-300 rounded hover:underline hover:text-blush hover:bg-gray-400/25"
                        to="/projects">projects</Link>
                </li>


                <li className=" my-4 md:my-0">
                    <Link                     
                        className="py-2 px-4 transition duration-300 rounded hover:underline hover:text-blush hover:bg-gray-400/25"
                        to="/contact">contact</Link>
                </li>



            </ul>






        </nav>
    )
}

export default Header