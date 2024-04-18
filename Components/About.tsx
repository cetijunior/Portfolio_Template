import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row
                        max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 m-[-20px] uppercase tracking-[20px] text-gray-500 text-2xl'>
                About Me
            </h3>

            <motion.img
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.8 }}
                whileInView={{ opacity: 1, x: 0, }}
                src='https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg'
                alt=''
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
                md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a {" "}
                    <span className='underline decoration-[#F7AB0A]/50'>
                        little
                    </span>{" "}
                    background
                </h4>
                <p className='text-base'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Odio modi voluptate vel id. Cumque pariatur dicta possimus sequi qui aspernatur
                    consequuntur aut fugit molestias, autem laborum vitae corrupti id suscipit!
                </p>
            </div>

        </motion.div>
    )
}

export default About