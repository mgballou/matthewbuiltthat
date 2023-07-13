import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



import ImageSlideshow from "./ImageSlideshow";


function ProjectSlideshow({ project }) {

    const [currentImage, setCurrentImage] = useState(0)

    function nextImage() {
        if (currentImage === 2) {
            setCurrentImage(0)
        } else {
            setCurrentImage(currentImage + 1)
        }
    }

    function prevImage() {
        if (currentImage === 0) {
            setCurrentImage(2)
        } else {
            setCurrentImage(currentImage - 1)
        }
    }



    const techEls = project?.tech.map((item, idx) => {

        return (
            <p
                key={idx}
            >{item}</p>
        )
    })

    useEffect(() => setCurrentImage(0), [project])

    return (
        <AnimatePresence mode="wait">
            <motion.div
                className="flex flex-col md:flex-row w-full p-4"
                key={project.title}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
            >

                <div className="md:w-1/2 mx-auto flex gap-0 items-center justify-center h-full">

                    <motion.button
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: .2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        className=" border border-cream bg-blush rounded px-2 sm:px-4  py-2 "
                        onClick={prevImage}>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>

                    </motion.button>

                    <AnimatePresence mode="Wait">
                        <ImageSlideshow image={project.images[currentImage]} />
                    </AnimatePresence>

                    <motion.button
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: .2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="border border-cream bg-blush rounded  px-2 sm:px-4  py-2"
                        onClick={nextImage}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>



                    </motion.button>



                </div>

                <div className="md:w-1/2 max-w-[600px] mx-auto">
                    <h1>{project.title}</h1>
                    <h2>{project.subtitle}</h2>
                    {techEls}
                    <p>{project.description}</p>
                    <div>
                        <Link
                            className="border border-cream bg-blush rounded-full  px-2 sm:px-4 md:px-12 py-2"
                            to={project.live}>View Live</Link>
                        <Link
                            className="border border-cream bg-blush rounded-full  px-2 sm:px-4 md:px-12 py-2"

                            to={project.code}>View Code</Link>
                    </div>


                </div>
            </motion.div>


        </AnimatePresence>

    )




}

export default ProjectSlideshow