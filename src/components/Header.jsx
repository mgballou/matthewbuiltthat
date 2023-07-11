import { Link } from "react-router-dom";

function Header(props){

    return (
        <nav
        className="h-16 px-4 py-2 bg-neutral-50 text-black flex flex-row justify-between items-center"
        
        >
            <div>
            <Link to="/">matthewbuiltthat</Link>
            </div>

            <div>
            <Link to="/about">About</Link>
            </div>

        </nav>
    )
}

export default Header