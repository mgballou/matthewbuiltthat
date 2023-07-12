import { motion } from "framer-motion"
import { useState, useEffect } from "react"

function Projects(props){

    const [projectData, setProjectData] = useState(null)

    async function getProjectsData(){
        const response = await fetch("./projects.json")
        const data = await response.json()
        setProjectData(data)
        console.log(data)
    }

    useEffect(() => { getProjectsData() }, [])


    return (

        <motion.div

            className="bg-black/25 rounded w-full h-full mx-auto my-auto"
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ scale: 0, transition: { duration: 0.5 } }}
        >




        </motion.div>


    )
}

export default Projects