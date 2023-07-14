import { AnimatePresence } from "framer-motion";


import Main from "./components/Main"
import Header from "./components/Header";


function App() {

  

  return (
    <>

      <Header />
      <div className="
      flex h-full 
      px-4 py-24 
      md:px-10 md:py-24 
      lg:px-16  lg:py-26
      xl:px-20 
      2xl:px-40">

      <Main />

      </div>

      


    </>
  )
}

export default App
