import { motion } from "framer-motion";

import { useRef, useState } from "react";

import { Link } from "react-router-dom";


import emailjs from '@emailjs/browser';

function Contact(props) {

    const form = useRef()

    const [formSuccess, setFormSuccess] = useState(null)
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: "",
    })

    function handleFormChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    async function sendEmail(evt) {
        evt.preventDefault()
        setFormSuccess(null)
        try {
            const result = await emailjs.sendForm('service_fr8qx3e', 'template_d83wxgo', form.current, 'LgvhRZ158CF77BdSY')
            if (result.text === "OK") {
                setFormSuccess(true)
                setFormData({
                    user_name: "",
                    user_email: "",
                    message: "",
                })
            } else {
                throw new Error(result.text)


            }

        } catch (error) {
            setFormSuccess(false)
            console.log(error.text)
        }

    }

    return (

        <motion.div

            className="bg-black/25 rounded w-full h-full md:max-h-[560px] max-w-[1280px] mx-auto my-auto p-4 overflow-auto shadow-xl"
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ scale: 0, transition: { duration: 0.5 } }}
        >
            <div className="w-full text-center ">
                <h2 className="text-xl font-accent">Contact Me</h2>
            </div>

            <div className="w-full flex justify-evenly flex-wrap md:flex-nowrap mt-6 mb-8">
                <motion.button
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: .2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="border border-cream bg-blush rounded-full  px-2 sm:px-4 md:px-12 py-2"
                >
                    <Link
                        to="https://github.com/mgballou"
                        target="_blank">My GitHub</Link>

                </motion.button>

                <motion.button
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: .2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="border border-cream bg-blush rounded-full  px-2 sm:px-4 md:px-12 py-2"
                >
                    <Link

                        to="https://www.linkedin.com/in/mballou/"
                        target="_blank">My LinkedIn</Link>

                </motion.button>


            </div>

            {formSuccess === false ? <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="mt-6 text-md w-5/6 md:w-3/4 lg:w-3/5 xl:w-1/2 mx-auto text-center bg-blush p-2 border-cream border-2 shadow shadow-white">There was an error, please try again.</motion.p> : <></>}

            {formSuccess === true ? <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="mt-6 text-md w-5/6 md:w-3/4 lg:w-3/5 xl:w-1/2 mx-auto text-center bg-blush p-2 border-cream border-2 shadow shadow-white">Thanks for your message!</motion.p> : <></>}

            <motion.form layout ref={form} onSubmit={sendEmail} className="text-neutral-50 flex flex-col justify-center w-5/6 md:w-3/4 lg:w-3/5 xl:w-1/2 mx-auto gap-8 mt-6">
                <div className="relative">
                    <input type="text" name="user_name" value={formData.user_name} onChange={handleFormChange} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm bg-black/25  border-0 border-b-2 border-blush appearance-none focus:outline-none focus:ring-0 focus:border-cream peer" placeholder=" " />
                    <label className="absolute text-sm  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-cream peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Name</label>
                </div>

                <div className="relative">
                    <input type="text" name="user_email" value={formData.user_email} onChange={handleFormChange} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm bg-black/25  border-0 border-b-2 border-blush appearance-none focus:outline-none focus:ring-0 focus:border-cream peer" placeholder=" " />
                    <label className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-cream  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email</label>
                </div>

                <div className="relative">
                    <textarea type="text" name="message" value={formData.message} onChange={handleFormChange} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-black/25  border-0 border-b-2 border-blush appearance-none focus:outline-none focus:ring-0 focus:border-cream peer" placeholder=" " />
                    <label className="absolute text-sm   duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-cream  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Message</label>
                </div>

                <motion.button
                    className="border border-cream bg-blush rounded-full  px-2 sm:px-4 w-3/4 mx-auto py-2"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: .2 },
                    }}
                    whileTap={{ scale: 0.9 }}

                    type="submit">Send</motion.button>
            </motion.form>



        </motion.div>
    )
}

export default Contact