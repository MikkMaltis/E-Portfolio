import React from 'react';
import Sorteerijama from '../media/Sorteerijama.png';
import Tailwind from '../media/Tailwind.png';
import Aistartuptools from '../media/Aistartuptools.png';
import Apple from '../media/Apple.png';

const Projects = () => {
  return (
    <div className='px-6 py-12 flex justify-center items-center font-Cabin text-[#f3f4f6]'>
      <div className='bg-color9 rounded py-6 px-6 rounded-2xl text-center grid grid-cols-4 gap-4 flex place-items-center mx-20'>
        <h1 className="text-6xl py-6 px-6 text-color4 col-span-4">Projects</h1>

          <a href="https://github.com/MikkMaltis/2023-9.20.2023-projekt">
            <h1>SorteeriJAMA group project</h1>
            <img src={Sorteerijama} alt="" />
          </a>
          <a href="https://github.com/MikkMaltis/Tailwind-website-with-templates">
          <h1>Tailwind student company template page</h1>
            <img src={Tailwind} alt="" />
          </a>
          <a href="https://github.com/MikkMaltis/Ai-startup-tool">
          <h1>AI startup tool template page</h1>
            <img src={Aistartuptools} alt="" />
          </a>
          <a href="https://github.com/MikkMaltis/Apple">
          <h1>Apple copy website</h1>
            <img src={Apple} alt="" />
          </a>
        </div>
      </div>
  )
}

export default Projects