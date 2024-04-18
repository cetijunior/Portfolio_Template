/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';

type Props = {}

function Navbar({ }: Props) {
    return (
        <div className='sticky top-0 flex p-5 items-start justify-between max-w-7xl mx-auto z-20
                            xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}

                className='flex space-x-4 flex-row items-center'
            >

                <img
                    src='/facebook.png'
                    alt='share'
                    className='w-8 h-8 bg-[#F7AB0A] rounded-full cursor-pointer'
                />
                <img
                    src='/netzwerk.png'
                    alt='share'
                    className='w-8 h-8 bg-[#F7AB0A] rounded-full cursor-pointer'
                />
                <img
                    src='/youtube.png'
                    alt='share'
                    className='w-8 h-8 bg-[#F7AB0A] rounded-full cursor-pointer'
                />
                <img
                    src='/instagram-logo.png'
                    alt='share'
                    className='w-8 h-8 bg-[#F7AB0A] rounded-full cursor-pointer'
                />
                <img
                    src='/twitter.png'
                    alt='share'
                    className='w-8 h-8 bg-[#F7AB0A] rounded-full cursor-pointer'
                />
                <img
                    src='/linkedin.png'
                    alt='share'
                    className='w-8 h-8 bg-[#F7AB0A] rounded-full cursor-pointer'
                />

            </motion.div>
            <Link href='#contact'>
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className='flex flex-row items-center space-x-4 text-gray-300 cursor-pointer'>

                    <img
                        src='/email.png'
                        alt='share'
                        className='w-8 h-8 bg-[#F7AB0A] rounded-full cursor-pointer'
                    />

                    <p className='uppercase hidden md:inline-flex text-sm transition-all hover:text-[#F7AB0A] text-gray-400'>Get In Touch!</p>
                </motion.div>
            </Link>
        </div>
    )
}

export default Navbar