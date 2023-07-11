import { Link } from "react-router-dom";

import { motion } from 'framer-motion'

function Header(props){
    const nav = document.querySelector('.navbar')
    const menu = document.querySelector('.nav-main')
    const burgerParent = document.querySelector('.burger-parent')

    
    function navToggle(){
        console.log(menu)
        console.log(nav)
        menu.classList.toggle('hidden')
        
    }

    function closeNav(){
        if (burgerParent.classList.contains('hidden')){
            return
        }
        menu.classList.toggle('hidden')

    }

    return (
        <motion.nav
        className="navbar min-h-16 px-4 py-2 bg-neutral-50 text-black flex flex-row justify-between items-center"
        layout
        transition={{duration: 1}}
        
        >

            <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center">
            
            <div className="my-2">
            <Link
            onClick={closeNav} 
            className="font-extrabold text-l py-2 px-4 transition duration-300 rounded hover:underline hover:text-blush hover:bg-gray-400/25" 
            to="/">matthewbuiltthat</Link>
            </div>

            <div className="nav-main hidden flex flex-col gap-2 lg:flex lg:flex-row lg:gap-4">
            <Link
            onClick={closeNav} 
            className="py-2 px-4 transition duration-300 rounded hover:underline hover:text-blush hover:bg-gray-400/25" 
            to="/about">about</Link>
            <Link 
            className="py-2 px-4 transition duration-300 rounded hover:underline hover:text-blush hover:bg-gray-400/25" 
            to="/projects">projects</Link>
            <Link 
            className="py-2 px-4 transition duration-300 rounded hover:underline hover:text-blush hover:bg-gray-400/25" 
            to="/contact">contact</Link>
            </div>

            </div>


            <div className="burger-parent lg:hidden">
			<button 
            className="navbar-burger flex items-center p-3"
            onClick={navToggle}>
				<svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>

        </motion.nav>
    )
}

export default Header