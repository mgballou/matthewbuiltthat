import { motion, AnimatePresence } from "framer-motion"


function Home(props) {

    return (
       
            <motion.div

            className="bg-aqua-500 w-72 h-72 mx-auto my-auto"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}


                
            exit={{ x: "100vw", transition: {duration: 0.5}}}
            >
                <h1>Hello world</h1>

            </motion.div>
    )


}

export default Home