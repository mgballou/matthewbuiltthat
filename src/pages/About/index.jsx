import { motion, AnimatePresence } from "framer-motion";

function About(props) {


    return (

        
            <motion.div

                className="bg-black/25 rounded h-full w-full mx-auto my-auto"
                key="about"
                
                initial={{scale: 0, opacity: 0.5}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: 1}}


                
                exit={{ scale: 0, transition: {duration: 0.5}}}
            >

                <div className="h-full flex flex-col items-center justify-center">
                <h1>About</h1>
                </div>

            </motion.div>
        


    )
}

export default About