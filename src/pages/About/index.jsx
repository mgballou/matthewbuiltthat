import { motion, AnimatePresence } from "framer-motion";

function About(props) {


    return (

        
            <motion.div

                className="bg-black/25 w-4/5 h-3/5 mx-auto my-auto"
                key="about"
                
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}


                
                exit={{ scale: 0, transition: {duration: 0.5}}}
            >
                <h1>About</h1>

            </motion.div>
        


    )
}

export default About