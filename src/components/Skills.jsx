import React from 'react'

import JAVA from '../assets/java.png'
import SB from '../assets/springboot.png'
import PHP from '../assets/php.png'
import LARAVEL from '../assets/laravel.png'
import PYTHON from '../assets/python.png'
import TS from '../assets/typescript.png'
import NODE from '../assets/node.png'
import JAVASCRIPT from '../assets/javascript.png'
import REACT from '../assets/react.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-slate-200 text-slate-200 h-auto md:h-screen'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full p-4'>
            <div className='text-[#14274E]'>
                <p className='text-4xl font-bold inline border-b-4 border-[#00a6ff]'>Skills</p>
                <p className='py-6'>Technologies that I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md bg-[#14274E] shadow-slate-500 hover:scale-110 duration-500 rounded-md pt-4'>
                    <img className='w-20 mx-auto' src={JAVA} alt="HTML Icon"/>
                    <p className='my-4 font-bold'>Java</p>
                </div>
                <div className='shadow-md bg-[#14274E] shadow-slate-500 hover:scale-110 duration-500 rounded-md pt-4'>
                    <img className='w-20 mx-auto' src={SB} alt="HTML Icon"/>
                    <p className='my-4 font-bold'>Spring Boot</p>
                </div>
                <div className='shadow-md bg-[#14274E] shadow-slate-500 hover:scale-110 duration-500 rounded-md pt-4'>
                    <img className='w-20 mx-auto' src={PHP} alt="CSS Icon"/>
                    <p className='my-4 font-bold'>PHP</p>
                </div>
                <div className='shadow-md bg-[#14274E] shadow-slate-500 hover:scale-110 duration-500 rounded-md pt-4'>
                    <img className='w-20 mx-auto' src={LARAVEL} alt="JavaScript Icon"/>
                    <p className='my-4 font-bold'>Laravel</p>
                </div>
                <div className='shadow-md bg-[#14274E] shadow-slate-500 hover:scale-110 duration-500 rounded-md pt-4'>
                    <img className='w-20 mx-auto' src={TS} alt="Tailwind Icon"/>
                    <p className='my-4 font-bold'>Typescript</p>
                </div>
                <div className='shadow-md bg-[#14274E] shadow-slate-500 hover:scale-110 duration-500 rounded-md pt-4'>
                    <img className='w-20 mx-auto' src={JAVASCRIPT} alt="React Icon"/>
                    <p className='my-4 font-bold'>Javascript</p>
                </div>
                <div className='shadow-md bg-[#14274E] shadow-slate-500 hover:scale-110 duration-500 rounded-md pt-4'>
                    <img className='w-20 mx-auto' src={REACT} alt="Github Icon"/>
                    <p className='my-4 font-bold'>React</p>
                </div>
                <div className='shadow-md bg-[#14274E] shadow-slate-500 hover:scale-110 duration-500 rounded-md pt-4'>
                    <img className='w-20 mx-auto' src={NODE} alt="Tailwind Icon"/>
                    <p className='my-4 font-bold'>NodeJs</p>
                </div>
                <div className='shadow-md bg-[#14274E] shadow-slate-500 hover:scale-110 duration-500 rounded-md pt-4'>
                    <img className='w-20 mx-auto' src={PYTHON} alt="Tailwind Icon"/>
                    <p className='my-4 font-bold'>Python</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills