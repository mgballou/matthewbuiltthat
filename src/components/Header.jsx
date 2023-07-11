import { Link } from "react-router-dom";

function Header(props){

    return (
        <nav
        className="h-16 px-4 py-2 bg-neutral-50 text-black flex flex-row justify-between items-center"
        
        >
            <div>
            <Link className="font-extrabold text-l py-2 px-4 transition duration-300 rounded hover:underline hover:text-blush hover:bg-black/25 "to="/">matthewbuiltthat</Link>
            </div>

            <div className="flex flex-row gap-4">
            <Link className="py-2 px-4 transition duration-300 rounded hover:underline hover:text-blush hover:bg-black/25" to="/about">about</Link>
            <Link className="py-2 px-4 transition duration-300 rounded hover:underline hover:text-blush hover:bg-black/25" to="/projects">projects</Link>
            <Link className="py-2 px-4 transition duration-300 rounded hover:underline hover:text-blush hover:bg-black/25" to="/contact">contact</Link>

            </div>

        </nav>
    )
}

export default Header