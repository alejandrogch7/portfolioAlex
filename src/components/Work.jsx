import SmallProjects from './SmallProjects'
import dtree from '../assets/devtreeImage.png'
import gram from '../assets/devgramImage.png'

const Work = () => {
    return (
        <div name='work' className='w-full h-full bg-slate-200 text-[#14274E]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <div className='text-[#14274E] pt-10 my-20 mx-auto text-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#00a6ff]'>My Work</p>
                </div>
                <div class="max-w-2xl rounded mx-auto overflow-hidden shadow-lg hover:scale-110 duration-500 my-10">
                    <img class="w-full" src={dtree} alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-center">DevTree - Full Stack MERN App</div>
                        <p class="text-gray-700 text-base">
                            DevTree is a Full-Stack application inspired by Linktree, allowing users to create a personalized profile page with a list of customizable links. Built for developers, it offers a clean and responsive interface where users can showcase their most important links, such as GitHub profiles, portfolios, social media, or project demos in one central place.
                        </p>
                        <div class="px-6 pt-4 flex justify-center">
                            <span class="inline-block bg-[#14274E] rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">Node</span>
                            <span class="inline-block bg-[#14274E] rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">Express</span>
                            <span class="inline-block bg-[#14274E] rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">Typescript</span>
                            <span class="inline-block bg-[#14274E] rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">MongoDB</span>
                            <span class="inline-block bg-[#14274E] rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">React</span>
                        </div>
                    </div>
                    <div className='flex justify-center w-full'>
                        <button className='m-4 p-4 shadow-lg bg-[#00a6ff] rounded-md text-slate-200 hover:bg-[#14274E]'>
                            <a href="https://github.com/alejandrogch7/DevTree" target='_blank'>
                                Code
                            </a>
                        </button>
                        <button className='m-4 p-4 shadow-lg bg-[#00a6ff] rounded-md text-slate-200 hover:bg-[#14274E]'>
                            <a href="https://alexdev-devtree.netlify.app/" target='_blank'>
                                Demo
                            </a>
                        </button>
                    </div>
                </div>
                <div class="max-w-2xl rounded mx-auto overflow-hidden shadow-lg hover:scale-110 duration-500 my-10">
                    <img class="w-full" src={gram} alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-center">Devgram - Full Stack Laravel App</div>
                        <p class="text-gray-700 text-base">
                            Devgram is a Full-Stack Laravel App that replicates the essential features of the popular photo-sharing platform Instagram, created for Sofware Engineers.
                            It allows Developers to create profiles, post photos, engage with others' content, and build a social presence online.
                        </p>
                        <div class="px-6 pt-4 flex justify-center">
                            <span class="inline-block bg-[#14274E] rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">Laravel</span>
                            <span class="inline-block bg-[#14274E] rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">Tailwind</span>
                            <span class="inline-block bg-[#14274E] rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">Livewire</span>
                            <span class="inline-block bg-[#14274E] rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">Docker</span>
                            <span class="inline-block bg-[#14274E] rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">MySQL</span>
                        </div>
                    </div>
                    <div className='flex justify-center w-full'>
                        <button className='m-4 p-4 shadow-lg bg-[#00a6ff] rounded-md text-slate-200 hover:bg-[#14274E]'>
                            <a href="https://github.com/alejandrogch7/devgram" target='_blank'>
                                Code
                            </a>
                        </button>
                        <button className='m-4 p-4 shadow-lg bg-[#00a6ff] rounded-md text-slate-200 hover:bg-[#14274E]'>
                            <a href="https://dajwelu.mnz.dom.my.id/alexdevgram" target='_blank'>
                                Demo
                            </a>
                        </button>
                    </div>
                </div>
                <SmallProjects />
            </div>
        </div>
    )
}

export default Work