import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    directionLeft?: boolean;
}

function Skill({ directionLeft }: Props) {
    return (
        <motion.div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{ duration: 0.6 }}
                whileInView={{ opacity: 1, x: 0, }}
                src='data:image/png;base64,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'
                className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32
                xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition
            duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 
            xl:w-32 xl:h-32 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>100%</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Skill