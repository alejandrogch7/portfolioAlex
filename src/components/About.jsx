import React from 'react'
import BackgroundImage from '../assets/skynight.jpg'

const About = () => {
    return (
        <div
            name='about'
            className='w-full h-96 bg-black bg-opacity-60 text-[#e5e7e9] border-y-2 border-black'
            >
            <div 
                className='w-full h-full bg-black bg-opacity-50 shadow-inner shadow-black'
                style={{
                        backgroundImage: `url(${BackgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'overlay',
                      }}>
                <div className='flex flex-col justify-center items-center w-full h-full'>
                    <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                        <div className='sm:text-right pb-8 pl-4'>
                            <p className='text-4xl font-bold inline border-b-4 border-[#00a6ff]'>
                                About
                            </p>
                        </div>
                    </div>
                    <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-4xl font-bold'>
                            <p><b>Full Stack Software Developer</b><br /></p>
                        </div>
                        <div>
                            <p>
                                Currently based in Cali, Colombia.<br />

                                I really enjoy sports, outdoor activities and get
                                in touch with interesting people who likes to share their ideas in
                                different areas of knowledge.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About