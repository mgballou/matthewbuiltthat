import * as React from "react"

import { Routes, Route } from 'react-router';

import { useLocation, useRoutes } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import Home from '../pages/Home';
import About from '../pages/About';

function Main(props) {

    const element = useRoutes([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },


    ])

    const location = useLocation()

    if (!element) return null



    return (
        
        <AnimatePresence mode="wait">
            {React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>

    

    )


}

export default Main
