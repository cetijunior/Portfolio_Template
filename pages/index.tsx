/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden space-y-50 z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] '>
      <Head>
        <title>CJ.Portfolioo</title>
        {/* insert Icon */}
      </Head>
      {/* Header */}
      <Header />
      {/*Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      {/* About */}
      <section id="about" className='snap-center'>
        <About />
      </section>
      {/* Exp */}
      <section id='experience' className='snap-center'>
        <Experience />
      </section>
      {/* Skills */}
      <section id='skills' className='snap-center'>
        <Skills />
      </section>
      {/* Projects */}
      <section id='projects' className='snap-center'>
        <Projects />
      </section>
      {/* Contact Me */}
      <section id='contact' className='snap-center'>
        <ContactMe />
      </section>

      <Link legacyBehavior href='#hero'>
        <div className='sticky bottom-5 w-full cursor-pointer'>
          <img
            className='h-10 w-10 m-5 mb-[-1px] rounded-full transition-all duration-300 filter grayscale hover:grayscale-0'
            src='data:image/jpeg;base64,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'
            alt=''
          />
        </div>
      </Link>
    </div>
  )
}

export default Home