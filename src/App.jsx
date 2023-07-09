import { motion } from "framer-motion"



function App() {

  return (
    <>
    <motion.div 
    className="bg-aqua-500 w-72 h-72 mx-auto my-auto"
    initial= {{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 2}}
    >
    <h1>Hello world</h1>

    </motion.div>
    
      
    </>
  )
}

export default App
