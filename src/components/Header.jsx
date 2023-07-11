import { Link } from "react-router-dom";

function Header(props){

    return (
        <nav
        className="h-16 px-4 py-2 bg-neutral-50 text-black flex flex-row justify-between items-center"
        
        >
            <div>
            <Link className="font-extrabold text-l py-2 px-4 transition duration-300 rounded hover:underline hover:text-blush hover:bg-gray-400/25 "to="/">matthewbuiltthat</Link>
            </div>

            <div className="hidden lg:flex flex-row gap-4">
            <Link className="py-2 px-4 transition duration-300 rounded hover:underline hover:text-blush hover:bg-gray-400/25" to="/about">about</Link>
            <Link className="py-2 px-4 transition duration-300 rounded hover:underline hover:text-blush hover:bg-gray-400/25" to="/projects">projects</Link>
            <Link className="py-2 px-4 transition duration-300 rounded hover:underline hover:text-blush hover:bg-gray-400/25" to="/contact">contact</Link>

            </div>
            <div class="lg:hidden">
			<button class="navbar-burger flex items-center p-3">
				<svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>

        </nav>
    )
}

export default Header