import { motion } from "framer-motion";

function About(props){


    return (

        <>
        <motion.div

        className="bg-aqua-500 w-72 h-72 mx-auto my-auto"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        >
            <h1>About</h1>

        </motion.div>
    </>


    )
}

export default About