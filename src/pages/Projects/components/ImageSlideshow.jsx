import { motion, AnimatePresence } from 'framer-motion'

function ImageSlideshow({ image }) {

    return (

        
        // h-[200px] md:h-[250px] lg:h-[350px] max-w-1/2
            <motion.img
                className='object-cover md:object-fill lg:object-contain h-[200px] md:h-[250px] lg:h-[350px] aspect-video  border-cream border-4 shrink'
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