import { motion } from "framer-motion"

import { useNavigate } from "react-router"


function Home(props) {
    const navigate = useNavigate()

    function handleButtonClick(evt){
       if (evt.target.tagName === "DIV") return
       navigate(`/${evt.target.id}`)


    }

    return (

        <motion.div

            className="bg-black/25 rounded w-full h-full mx-auto my-auto"
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ scale: 0, transition: { duration: 0.5 } }}
        >
            <div className="h-full flex flex-col items-center justify-center text-center">
                <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">Hi, I'm Matthew Ballou</h1>
                <h2 className="text-l font-accent sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">Full Stack Software Engineer</h2>

                <div 
                onClick={handleButtonClick}
                
                className="flex flex-row w-full justify-evenly mt-8 sm:text-l md:text-xl">
                    <motion.button
                        id="about"                        
                        className="border border-cream bg-blush rounded-full  px-2 sm:px-4 md:px-12 py-2"
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: .2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                    >about me</motion.button>

                    <motion.button
                        id="projects"                     
                        className="border border-cream bg-blush rounded-full px-2 sm:px-4 md:px-12 py-2"
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: .2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                    >projects</motion.button>

                    <motion.button
                        id="contact"                         
                        className="border border-cream bg-blush rounded-full px-2 sm:px-4 md:px-12 py-2"
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: .2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                    >contact</motion.button>

                </div>

            </div>

        </motion.div>
    )


}

export default Home