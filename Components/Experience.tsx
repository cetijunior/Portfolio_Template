import React from 'react'
import { motion } from 'framer-motion'
import XpCard from './XpCard'

type Props = {}

function Experience({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1.5 }}
            transition={{ duration: 1.5 }}

            className='flex flex-col mt-[60px] h-screen relative overflow-hidden text-left md:flex-row
            max-w-full px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Experience
            </h3>

            <div className='w-full flex space-x-5 overflow-y-hidden p-10 snap-x snap-mandatory
            scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
                {/*Experience cards*/}
                <XpCard />
                <XpCard />
                <XpCard />
                <XpCard />
            </div>
        </motion.div>
    )
}

export default Experience