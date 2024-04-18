import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

function Projects({ }: Props) {
    const projects = [
        { id: 1, title: 'Project 1', description: 'Description 1' },
        { id: 2, title: 'Project 2', description: 'Description 2' },
        // ...
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
        max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-14 mt-[20px] uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
            snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
                {/*Projects*/}
                {projects.map((project, i) => (
                    // eslint-disable-next-line react/jsx-key
                    <div key={i} className='w-screen flex-shrink-0 flex flex-col snap-center items-center
                    justify-center p-20 md:p-44 h-screen'>
                        <motion.img
                            initial={{ x: 300, opacity: 0, }}
                            whileInView={{ opacity: 1., x: 0, }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className='mt-[40px]'
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPno0ngeHujK8uuKbAiTdOBMUe3kjeH3efw&usqp=CAU'
                        />
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl mt-[10px] font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]'>Case of Study {i + 1} of {projects.length}: </span>Twitter Clone
                            </h4>
                            <p className='text-lg text-center md:text-left'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officia eius explicabo quis distinctio
                                aspernatur soluta debitis nam repudiandae, nostrum hic nulla.
                                Aperiam autem quia eos cupiditate dolor sapiente modi!
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10  
            left-0 h-[500px] -skew-y-12'> </div>
        </motion.div>
    )
}

export default Projects