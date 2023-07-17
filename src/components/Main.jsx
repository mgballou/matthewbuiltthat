import * as React from "react"

import { Routes, Route } from 'react-router';

import { useLocation, useRoutes } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import Home from '../pages/Home';
import About from '../pages/About';
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

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
        {
            path: "/projects",
            element: <Projects />
        },
        {
            path: "/contact",
            element: <Contact />
        }


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
