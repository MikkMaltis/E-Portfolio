import React from 'react';
import Sorteerijama from '../media/Sorteerijama.png';
import Tailwind from '../media/Tailwind.png';
import Aistartuptools from '../media/Aistartuptools.png';
import Apple from '../media/Apple.png';

const Projects = () => {
  return (
    <div className='px-6 py-12 flex justify-center items-center font-Cabin text-[#f3f4f6]'>
      <div className='bg-[#E4BF3B] rounded py-6 px-6 rounded-2xl text-center grid grid-cols-2 gap-4 place-items-center mx-20 max-w-5xl'>
        <h1 className="text-6xl py-6 px-6 text-color4 col-span-2 font-Kanit border-color4 border-2 rounded-2xl">Projects</h1>
        <div>
          <a href="https://github.com/MikkMaltis/2023-9.20.2023-projekt">
            <h1 className='text-2xl'>SorteeriJAMA group project</h1>
            <img className='border-color4 border-2 px-2 py-2 rounded-3xl' src={Sorteerijama} alt="" />
          </a>
        </div>
        <div>
          <a href="https://github.com/MikkMaltis/Tailwind-website-with-templates">
            <h1 className='text-2xl'>Tailwind student company template page</h1>
            <img className='border-color4 border-2 px-4 py-4 rounded-3xl' src={Tailwind} alt="" />
          </a>
          <a href="https://github.com/MikkMaltis/Ai-startup-tool">
            <h1 className='mt-4 text-2xl'>AI startup tool template page</h1>
            <img className='border-color4 border-2 px-4 py-4 rounded-3xl' src={Aistartuptools} alt="" />
          </a>
          <a href="https://github.com/MikkMaltis/Apple">
            <h1 className='mt-4 text-2xl'>Apple copy website</h1>
            <img className='border-color4 border-2 px-4 py-4 rounded-3xl' src={Apple} alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}


export default Projects