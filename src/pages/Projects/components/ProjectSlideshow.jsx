import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



import ImageSlideshow from "./ImageSlideshow";


function ProjectSlideshow({ project, index }) {

    const [currentImage, setCurrentImage] = useState(0)


    function nextImage() {
        if (currentImage === project?.images.length - 1) {
            setCurrentImage(0)
        } else {
            setCurrentImage(currentImage + 1)
        }
    }

    function prevImage() {
        if (currentImage === 0) {
            setCurrentImage(project?.images.length - 1)
        } else {
            setCurrentImage(currentImage - 1)
        }
    }



    const techEls = project?.tech.map((item, idx) => {

        return (
            <p
                key={idx}
                className="text-xs opacity-75 hover:opacity-100 hover:animate-bounce transition-all ease-in-out duration-300 h-min px-3 py-2 bg-cream rounded shadow border-4 border-blush text-black"
            >{item}</p>
        )
    })

    useEffect(() => setCurrentImage(0), [project])

    return (
        <AnimatePresence mode="wait">
            <motion.div
                className=" w-full py-4 px-8 overflow-auto"
                key={project.title}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
            >

                <div className="w-full text-center">
                    <h2 className="text-xl font-accent">{index + 1}. "{project.title}"</h2>
                </div>

                <div className="mt-6 flex flex-col md:flex-row gap-6 md:gap-2 justify-center">
                    <div className="w-[55vw] sm:w-[60vw] md:w-1/2 mx-auto flex gap-0 items-center justify-center z-10">

                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            className=" h-[200px] md:h-[250px] lg:h-[350px] border border-cream bg-blush rounded"
                            onClick={prevImage}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </motion.button>

                        <AnimatePresence mode="Wait">
                            <ImageSlideshow image={project.images[currentImage]} />
                        </AnimatePresence>

                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            className="h-[200px] md:h-[250px] lg:h-[350px] border border-cream bg-blush rounded"
                            onClick={nextImage}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </motion.button>



                    </div>

                    <div className="md:w-1/2 max-w-[600px] mx-auto p-4 md:p-6 flex flex-col h-min">
                        <div className="flex flex-row flex-wrap items-center justify-center gap-2 mx-auto font-accent my-4">
                            {techEls}
                        </div>

                        <h2 className="text-l font-bold mt-2 mb-1 md:px-4">{project.subtitle}</h2>


                        <p className="mt-1 mb-2 md:px-4">{project.description}</p>


                        <div className="flex justify-evenly mt-4">
                            <motion.button
                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: .2 },
                                }}
                                whileTap={{ scale: 0.9 }}
                                className="border border-cream bg-blush rounded-full  px-2 sm:px-4  py-2"
                            >
                                <Link
                                    to={project.live}
                                    target="_blank">View Live</Link>

                            </motion.button>

                            <motion.button
                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: .2 },
                                }}
                                whileTap={{ scale: 0.9 }}
                                className="border border-cream bg-blush rounded-full  px-2 sm:px-4  py-2"
                            >
                                <Link

                                    to={project.code}
                                    target="_blank">View Code</Link>

                            </motion.button>






                        </div>


                    </div>


                </div>


            </motion.div>


        </AnimatePresence>

    )




}

export default ProjectSlideshow