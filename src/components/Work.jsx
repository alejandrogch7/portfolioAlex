import React from 'react'
import Vet from '../assets/VeterinaryApp.png'
import Crypto from '../assets/CryptoApp.png'
import Expenses from '../assets/ExpensesApp.png'
import { Link } from 'react-scroll'

const Work = () => {
    return (
        <div name='work' className='w-full h-full bg-slate-200 text-[#14274E]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <div className='text-[#14274E] pt-10 mt-10'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#00a6ff]'>Work</p>
                    <p className='py-6'>Some examples</p>
                </div>
                <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-8'>
                    <div className='shadow-md bg-[#14274E] shadow-slate-500 hover:scale-110 duration-500 rounded-md'>
                        <div>
                            <img className='w-full mx-auto rounded-md' src={Crypto} alt="HTML Icon" />
                        </div>
                        <div className='text-slate-100 m-5'>
                            <h1 className='my-4 text-2xl font-bold text-sky-500'>Track Your Cryptos</h1>
                            <p>
                                Crypto is a modern React.js web app that displays real-time cryptocurrency market data.
                                It uses TailwindCSS for responsive design and CoinGecko’s public API to fetch up-to-date coin prices,
                                rankings, and information.
                            </p>
                            <div className='justify-between'>
                                <button className='m-4 p-4 bg-slate-200 rounded-md text-[#14274E] hover:bg-[#00a6ff] hover:text-slate-200'>
                                    <a href="https://github.com/alejandrogch7/crypto" target='_blank'>
                                        Code
                                    </a>
                                </button>
                                <button className='m-4 p-4 bg-slate-200 rounded-md text-[#14274E] hover:bg-[#00a6ff] hover:text-slate-200'>
                                    <a href="https://relaxed-starburst-21ef98.netlify.app/" target='_blank'>
                                        Demo
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-md bg-[#14274E] shadow-slate-500 hover:scale-110 duration-500 rounded-md'>
                        <div>
                            <img className='w-full mx-auto rounded-md' src={Expenses} alt="HTML Icon" />
                        </div>
                        <div className='text-slate-100 m-5'>
                            <h1 className='my-4 text-2xl font-bold text-sky-500'>Control Expenses</h1>
                            <p>
                                Tracker is a simple React.js app to manage and track personal expenses.
                                It allows users to add, view, and organize their spending in an easy-to-use interface.
                                Built with TailwindCSS for a clean, responsive design across all devices.
                            </p>
                            <div className='justify-between'>
                                <button className='m-4 p-4 bg-slate-200 rounded-md text-[#14274E] hover:bg-[#00a6ff] hover:text-slate-200'>
                                    <a href="https://github.com/alejandrogch7/tracker" target='_blank'>
                                        Code
                                    </a>
                                </button>
                                <button className='m-4 p-4 bg-slate-200 rounded-md text-[#14274E] hover:bg-[#00a6ff] hover:text-slate-200'>
                                    <a href="https://animated-babka-cbf09d.netlify.app/" target='_blank'>
                                        Demo
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-md bg-[#14274E] shadow-slate-500 hover:scale-110 duration-500 rounded-md'>
                        <div>
                            <img className='w-full mx-auto rounded-md' src={Vet} alt="HTML Icon" />
                        </div>
                        <div className='text-slate-100 m-5'>
                            <h1 className='my-4 text-2xl font-bold text-sky-500'>Appointments List</h1>
                            <p>
                                Veterinary App is a React.js and Vite project for managing veterinary appointments.
                                Users can add, edit, and delete pet information and appointments easily.
                                Styled with TailwindCSS, offering a fast, clean, and responsive experience.
                            </p>
                            <div className='justify-between'>
                                <button className='m-4 p-4 bg-slate-200 rounded-md text-[#14274E] hover:bg-[#00a6ff] hover:text-slate-200'>
                                    <a href="https://github.com/alejandrogch7/veterinary_react_vite" target='_blank'>
                                        Code
                                    </a>
                                </button>
                                <button className='m-4 p-4 bg-slate-200 rounded-md text-[#14274E] hover:bg-[#00a6ff] hover:text-slate-200'>
                                    <a href="https://sparkling-kheer-ae58c9.netlify.app/" target='_blank'>
                                        Demo
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work