import { Routes, Route } from 'react-router';

import { AnimatePresence } from 'framer-motion';

import Home from '../pages/Home';
import About from '../pages/About';

function Main(props) {

  

    return (

        <AnimatePresence mode="exit">
      
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />


        </Routes>

        </AnimatePresence>
    )

    
}

export default Main
