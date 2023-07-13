import { motion, AnimatePresence } from 'framer-motion'

function ImageSlideshow({ image }) {

    return (

        
            <motion.img
                className='object-contain border-cream border-4 shrink'
                key={image}
                src={image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{opacity: 0}}
                transition={{duration: 1}}
            />
        

    )





}

export default ImageSlideshow