import { motion, AnimatePresence } from "framer-motion"


function Home(props) {

    return (
       
            <motion.div

            className="bg-black/25  w-full h-full mx-auto my-auto"
            initial={{scale: 0, opacity: 0.5}}
            animate={{scale: 1, opacity: 1}}
            transition={{duration: 1}}
            exit={{ scale: 0, transition: {duration: 0.5}}}
            >
                <div className="h-full flex flex-col items-center justify-center text-center">
                <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">Hi, I'm Matthew Ballou</h1>
                <h2 className="text-l sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">I'm a full stack software engineer</h2>

                </div>

            </motion.div>
    )


}

export default Home