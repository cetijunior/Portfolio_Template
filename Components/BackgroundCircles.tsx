import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundCircles({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.4, 0.2, 0.4, 0.8, 0.3, 1],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"],
            }}
            transition={{
                duration: 2.5,
            }}
            className='relative flex justify-center items-center'
        >
            <div className='absolute border rounded-full 
                            h-[200px] w-[200px] border-[#F7AB0A] mt-52 animate-ping ' />
            <div className='absolute border rounded-full 
                            h-[1150px] w-[1150px] opacity-10 border-[#33333] mt-52 animate-pulse ' />
            <div className='absolute border border-[#333333] rounded-full 
                            h-[550px] w-[550px] mt-52 ' />
            <div className='absolute border border-[#333333] rounded-full 
                            h-[700px] w-[700px] mt-52' />
            <div className='absolute border border-[#F7AB0A] opacity-20 rounded-full 
                            h-[850px] w-[850px] animate-pulse mt-52' />
            <div className='absolute border border-[#333333] rounded-full 
                            h-[1000px] w-[1000px] mt-52' />
        </motion.div>
    );
}

export default BackgroundCircles;