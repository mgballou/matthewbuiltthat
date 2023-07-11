import { motion, AnimatePresence } from "framer-motion"


function Home(props) {

    return (
       
            <motion.div

            className="bg-black/25  w-4/5 h-3/5 mx-auto my-auto"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            exit={{ scale: 0, transition: {duration: 0.5}}}
            >
                <div className="h-full flex flex-col items-center justify-center">
                <h1 className="">Hi, I'm Matthew Ballou</h1>
                <h2 className="">I'm a full stack software engineer</h2>

                </div>

            </motion.div>
    )


}

export default Home