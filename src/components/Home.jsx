import React from 'react'
import { Link } from 'react-scroll'
import BackgroundImage from '../assets/backg.svg'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-slate-200'  style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full' >
                <h1 className='text-4xl sm:text-7xl font-bold text-[#002b78]'>Hello, I'm Alex</h1>
                <h2 className='text-[#14274E] text-4xl'>Full Stack Developer.</h2>
                <p className='text-[#14274E] py-4 max-w-[700px]'>
                    Passionate about technology and always looking for new challenges,
                    in this portfolio I'll show you my skill set and a few things about me.
                </p>
                <form>
                    <button className='text-[#14274E] font-bold border-2 border-[#14274E] px-6 py-3 my-2 flex flex-row items-center hover:bg-[#002b78] hover:text-slate-200'>
                        <Link to='work' smooth={true} duration={500}>
                            View my work
                        </Link>
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Home


