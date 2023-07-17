import { motion, AnimatePresence } from "framer-motion";

function About(props) {


    return (

        
            <motion.div

                className="bg-black/25 rounded h-full w-full md:max-h-[560px] max-w-[1280px] mx-auto my-auto p-4 overflow-auto shadow-xl"
                key="about"
                
                initial={{scale: 0, opacity: 0.5}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: 1}}


                
                exit={{ scale: 0, transition: {duration: 0.5}}}
            >
                <div className="w-full text-center">
                    <h2 className="text-xl font-accent">About Me</h2>
                </div>

                <div className="mt-6 mb-2 px-8 md:flex md:flex-row md:gap-2">
                    <div className=" md:w-1/2 max-w-[600px] mx-auto">

                        <p className="my-2">
                        Welcome! I’m Matthew. I'm a software engineer adept at front end and back end web development. I have experience in JavaScript, Python, and C#. 
                        </p>

                        <p className="my-2">
                        My passion stems from my love of tackling complex problems and delivering innovative solutions. Each project is an opportunity for me to showcase my  expertise, and I consistently strive to deliver results that surpass expectations.
                        </p>

                        <p className="my-2">
                        These projects are a testament to my ability to transform abstract ideas into fully realized solutions. Thank you for considering my work.
                        </p>

                    </div>

                    <div className="mt-4 mb-2 md:w-1/2 flex flex-row flex-wrap justify-center gap-2 max-w-[600px] mx-auto font-accent ">
                        <p className="opacity-75 hover:opacity-100 hover:animate-bounce transition-all ease-in-out duration-300 h-min px-3 py-2 bg-cream rounded shadow border-4 border-blush text-black ">HTML</p>

                        <p className="opacity-75 hover:opacity-100 hover:animate-bounce transition-all ease-in-out duration-300 h-min px-3 py-2 bg-cream rounded shadow border-4 border-blush text-black ">CSS</p>

                        <p className="opacity-75 hover:opacity-100 hover:animate-bounce transition-all ease-in-out duration-300 h-min px-3 py-2 bg-cream rounded shadow border-4 border-blush text-black ">JavaScript</p>

                        <p className="opacity-75 hover:opacity-100 hover:animate-bounce transition-all ease-in-out duration-300 h-min px-3 py-2 bg-cream rounded shadow border-4 border-blush text-black ">React</p>

                        <p className="opacity-75 hover:opacity-100 hover:animate-bounce transition-all ease-in-out duration-300 h-min px-3 py-2 bg-cream rounded shadow border-4 border-blush text-black ">Node.js</p>

                        <p className="opacity-75 hover:opacity-100 hover:animate-bounce transition-all ease-in-out duration-300 h-min px-3 py-2 bg-cream rounded shadow border-4 border-blush text-black ">Express.js</p>

                        <p className="opacity-75 hover:opacity-100 hover:animate-bounce transition-all ease-in-out duration-300 h-min px-3 py-2 bg-cream rounded shadow border-4 border-blush text-black ">Python</p>

                        <p className="opacity-75 hover:opacity-100 hover:animate-bounce transition-all ease-in-out duration-300 h-min px-3 py-2 bg-cream rounded shadow border-4 border-blush text-black ">Django</p>

                        <p className="opacity-75 hover:opacity-100 hover:animate-bounce transition-all ease-in-out duration-300 h-min px-3 py-2 bg-cream rounded shadow border-4 border-blush text-black ">MongoDB</p>

                        <p className="opacity-75 hover:opacity-100 hover:animate-bounce transition-all ease-in-out duration-300 h-min px-3 py-2 bg-cream rounded shadow border-4 border-blush text-black ">PostgreSQL</p>

                        <p className="opacity-75 hover:opacity-100 hover:animate-bounce transition-all ease-in-out duration-300 h-min px-3 py-2 bg-cream rounded shadow border-4 border-blush text-black ">C#</p>

                        <p className="opacity-75 hover:opacity-100 hover:animate-bounce transition-all ease-in-out duration-300 h-min px-3 py-2 bg-cream rounded shadow border-4 border-blush text-black ">ASP.Net</p>
                        
                        <p className="opacity-75 hover:opacity-100 hover:animate-bounce transition-all ease-in-out duration-300 h-min px-3 py-2 bg-cream rounded shadow border-4 border-blush text-black ">Tailwind</p>
                       
                        <p className="opacity-75 hover:opacity-100 hover:animate-bounce transition-all ease-in-out duration-300 h-min px-3 py-2 bg-cream rounded shadow border-4 border-blush text-black ">Bootstrap</p>
                        
                        <p className="opacity-75 hover:opacity-100 hover:animate-bounce  transition-all ease-in-out duration-300 h-min px-3 py-2 bg-cream rounded shadow border-4 border-blush text-black ">Sass</p>
                        
                        <p className="opacity-75 hover:opacity-100 hover:animate-bounce transition-all ease-in-out duration-300 h-min px-3 py-2 bg-cream rounded shadow border-4 border-blush text-black ">Bulma</p>
                        
                        
                    </div>
                


                </div>

            </motion.div>
        


    )
}

export default About