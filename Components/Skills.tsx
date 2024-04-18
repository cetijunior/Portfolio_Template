import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'

type Props = {}

function Skills({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1.5 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative text-center md:text-left xl:flex-row 
        max-w-[2000px] xl:px-10 min-h-screen justify-center mx-auto items-center'>
            <h3 className='absolute top-24 m-[-20px] uppercase tracking-[20px] text-gray-500 text-2xl'>
                Skills
            </h3>
            <p className='absolute top-36 mt-[-20px] uppercase tracking-[3px] text-gray-500 text-sm'>
                Hover over a skill for current proficiency
            </p>
            <div className='grid grid-cols-4 gap-5 items-center xl:mt-[70px]'>
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>
        </motion.div>
    )
}

export default Skills