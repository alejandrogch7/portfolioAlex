import React from 'react'
import Vet from '../assets/VeterinaryApp.png'
import Crypto from '../assets/CryptoApp.png'
import Expenses from '../assets/ExpensesApp.png'
import { Link } from 'react-scroll'

export default function SmallProjects() {
    return (
        <>
            <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-8'>

                <div className='shadow-lg bg-white hover:scale-110 duration-500 rounded-md overflow-hidden'>
                    <div>
                        <img className='w-full mx-auto' src={Crypto} alt="HTML Icon" />
                    </div>
                    <div className='text-[#14274E] m-5'>
                        <h1 className='my-4 text-2xl font-bold text-[#14274E]'>Track Your Cryptos</h1>
                        <p>
                            Crypto is a modern React.js web app that displays real-time cryptocurrency market data.
                            It uses TailwindCSS for responsive design and CoinGecko’s public API to fetch up-to-date coin prices,
                            rankings, and information.
                        </p>
                        <div className='flex justify-center gap-4 p-4'>
                            <button className='px-4 py-2 bg-[#00a6ff] rounded-md text-slate-200 hover:bg-[#14274E] shadow'>
                                <a href="https://github.com/alejandrogch7/crypto" target='_blank'>
                                    Code
                                </a>
                            </button>
                            <button className='px-4 py-2 bg-[#00a6ff] rounded-md text-slate-200 hover:bg-[#14274E] shadow'>
                                <a href="https://relaxed-starburst-21ef98.netlify.app/" target='_blank'>
                                    Demo
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='shadow-lg bg-white hover:scale-110 duration-500 rounded-md overflow-hidden'>
                    <div>
                        <img className='w-full mx-auto' src={Expenses} alt="HTML Icon" />
                    </div>
                    <div className='text-[#14274E] m-5'>
                        <h1 className='my-4 text-2xl font-bold text-[#14274E]'>Control Expenses</h1>
                        <p>
                            Tracker is a simple React.js app to manage and track personal expenses.
                            It allows users to add, view, and organize their spending in an easy-to-use interface.
                            Built with TailwindCSS for a clean, responsive design across all devices.
                        </p>
                        <div className='flex justify-center gap-4 p-4'>
                            <button className='px-4 py-2 bg-[#00a6ff] rounded-md text-slate-200 hover:bg-[#14274E] shadow'>
                                <a href="https://github.com/alejandrogch7/tracker" target='_blank'>
                                    Code
                                </a>
                            </button>
                            <button className='px-4 py-2 bg-[#00a6ff] rounded-md text-slate-200 hover:bg-[#14274E] shadow'>
                                <a href="https://animated-babka-cbf09d.netlify.app/" target='_blank'>
                                    Demo
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='shadow-lg bg-white hover:scale-110 duration-500 rounded-md overflow-hidden'>
                    <div>
                        <img className='w-full mx-auto' src={Vet} alt="HTML Icon" />
                    </div>
                    <div className='text-[#14274E] m-5'>
                        <h1 className='my-4 text-2xl font-bold text-[#14274E]'>Appointments List</h1>
                        <p>
                            Veterinary App is a React.js and Vite project for managing veterinary appointments.
                            Users can add, edit, and delete pet information and appointments easily.
                            Styled with TailwindCSS, offering a fast, clean, and responsive experience.
                        </p>
                        <div className='flex justify-center gap-4 p-4'>
                            <button className='px-4 py-2 bg-[#00a6ff] rounded-md text-slate-200 hover:bg-[#14274E] shadow'>
                                <a href="https://github.com/alejandrogch7/veterinary_react_vite" target='_blank'>
                                    Code
                                </a>
                            </button>
                            <button className='px-4 py-2 bg-[#00a6ff] rounded-md text-slate-200 hover:bg-[#14274E] shadow'>
                                <a href="https://sparkling-kheer-ae58c9.netlify.app/" target='_blank'>
                                    Demo
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
