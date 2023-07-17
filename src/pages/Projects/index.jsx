import { motion } from "framer-motion"
import { useState, useEffect } from "react"

import ProjectSlideshow from "./components/ProjectSlideshow"

function Projects(props) {

    const [projectsData, setProjectsData] = useState(null)

    const [isLoading, setIsLoading] = useState(true)

    const [currentProject, setCurrentProject] = useState(0)

    async function getProjectsData() {
        const response = await fetch("./projects.json")
        const data = await response.json()
        setProjectsData(data)
        setIsLoading(false)
        
    }

    useEffect(() => { getProjectsData() }, [])


    function nextProject() {
        if (currentProject === 2) {
            setCurrentProject(0)
        } else {
            setCurrentProject(currentProject + 1)
        }
    }

    function prevProject() {
        if (currentProject === 0) {
            setCurrentProject(2)
        } else {
            setCurrentProject(currentProject - 1)
        }
    }

    function loading() {

        return (
            <p>Loading...</p>
        )
    }

    function loaded() {

        return (
            <>
                <div className="flex justify-between content-center h-full w-full">
                    <button
                        className="bg-blush border-cream border-2 rounded"
                        onClick={prevProject}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                        </svg>
                    </button>

                <ProjectSlideshow project={projectsData[currentProject]} />

                    <button
                        className="bg-blush border-cream border-2 rounded"
                        onClick={nextProject}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

            </>


        )
    }


    return (

        <motion.div

            className="bg-black/25 rounded w-full h-full  md:max-h-[560px] max-w-[1280px] mx-auto my-auto shadow-xl"
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ scale: 0, transition: { duration: 0.5 } }}
        >

            {isLoading ? loading() : loaded()}




        </motion.div>


    )
}

export default Projects