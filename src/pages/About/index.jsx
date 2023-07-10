import { motion, AnimatePresence } from "framer-motion";

function About(props) {


    return (

        
            <motion.div

                className="bg-aqua-500 w-72 h-72 mx-auto my-auto"
                key="about"
                
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}


                
                exit={{ x: "100vw", transition: {duration: 0.5}}}
            >
                <h1>About</h1>

            </motion.div>
        


    )
}

export default About