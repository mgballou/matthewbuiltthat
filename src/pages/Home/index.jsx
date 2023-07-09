import { motion } from "framer-motion"

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };


function Home(props) {

    return (
        <>
            <motion.div
        className="bg-aqua-500 w-72 h-72 mx-auto my-auto"

            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 } }}
            >
                <h1>Hello world</h1>

            </motion.div>
        </>
    )


}

export default Home