import SmallProjects from './FrontendProjects'
import dtree from '../assets/devtreeImage.png'
import gram from '../assets/devgramImage.png'
import FrontendProjects from './FrontendProjects'
import BackendProjects from './BackendProjects'

const Work = () => {
    return (
        <div name="work" className="w-full h-full bg-slate-200 text-[#14274E]">
            <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
                <div className="text-[#14274E] pt-10 my-20 mx-auto text-center">
                    <p className="text-4xl font-bold inline border-b-4 border-[#00a6ff]">My Work</p>
                </div>

                {/* Contenedor de las tarjetas */}
                <div className="text-[#14274E] mb-10 text-left">
                    <p className="text-3xl font-bold inline border-b-4 border-[#00a6ff]">Full-Stack Development</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* DevTree */}
                    <div className="rounded overflow-hidden shadow-lg hover:scale-105 duration-300 bg-white">
                        <img className="w-full" src={dtree} alt="DevTree project preview" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-center">DevTree - Full Stack MERN App</div>
                            <p className="text-gray-700 text-base">
                                DevTree is a Full-Stack application inspired by Linktree, allowing users to create a personalized profile page with customizable links. Built for developers to showcase GitHub, portfolio, or social links in one place.
                            </p>
                            <div className="pt-4 flex flex-wrap justify-center gap-2">
                                {["Node", "Express", "Typescript", "MongoDB", "React"].map((tech) => (
                                    <span key={tech} className="bg-[#14274E] rounded-full px-3 py-1 text-sm font-semibold text-gray-200">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center gap-4 p-4">
                            <a href="https://github.com/alejandrogch7/DevTree" target="_blank">
                                <button className="px-4 py-2 bg-[#00a6ff] rounded-md text-slate-200 hover:bg-[#14274E] shadow">Code</button>
                            </a>
                            <a href="https://alexdev-devtree.netlify.app/" target="_blank">
                                <button className="px-4 py-2 bg-[#00a6ff] rounded-md text-slate-200 hover:bg-[#14274E] shadow">Demo</button>
                            </a>
                        </div>
                    </div>

                    {/* Devgram */}
                    <div className="rounded overflow-hidden shadow-lg hover:scale-105 duration-300 bg-white">
                        <img className="w-full" src={gram} alt="Devgram project preview" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-center">Devgram - Full Stack Laravel App</div>
                            <p className="text-gray-700 text-base">
                                Devgram is a Full-Stack Laravel App that replicates Instagram's essential features. Developers can create profiles, post photos, and engage with others—perfect for building a social presence online.
                            </p>
                            <div className="pt-4 flex flex-wrap justify-center gap-2">
                                {["Laravel", "Tailwind", "Livewire", "Docker", "MySQL"].map((tech) => (
                                    <span key={tech} className="bg-[#14274E] rounded-full px-3 py-1 text-sm font-semibold text-gray-200">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center gap-4 p-4">
                            <a href="https://github.com/alejandrogch7/devgram" target="_blank">
                                <button className="px-4 py-2 bg-[#00a6ff] rounded-md text-slate-200 hover:bg-[#14274E] shadow">Code</button>
                            </a>
                            <a href="https://dajwelu.mnz.dom.my.id/alexdevgram" target="_blank">
                                <button className="px-4 py-2 bg-[#00a6ff] rounded-md text-slate-200 hover:bg-[#14274E] shadow">Demo</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Otros proyectos */}
                <div className="text-[#14274E] mt-20 mb-10 text-left">
                    <p className="text-3xl font-bold inline border-b-4 border-[#00a6ff]">Backend Development</p>
                </div>
                <BackendProjects />

                <div className="text-[#14274E] mt-20 mb-10 text-left">
                    <p className="text-3xl font-bold inline border-b-4 border-[#00a6ff]">Frontend Development</p>
                </div>
                <FrontendProjects />
            </div>
        </div>

    )
}

export default Work