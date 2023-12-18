import React from 'react';
import Sorteerijama from '../media/Sorteerijama.png';
import Tailwind from '../media/Tailwind.png';
import Aistartuptools from '../media/Aistartuptools.png';

const Projects = () => {
  return (
    <div className='px-6 py-12 flex justify-center items-center font-Cabin text-[#f3f4f6]'>
      <div className='bg-color6 rounded py-6 px-6 rounded-2xl text-center'>
        <h1 className="text-6xl py-6 px-6 text-color4">Projects</h1>
          <a href="https://github.com/MikkMaltis/2023-9.20.2023-projekt">
            <img src={Sorteerijama} alt="" />
          </a>
          <a href="https://github.com/MikkMaltis/Tailwind-website-with-templates">
            <img src={Tailwind} alt="" />
          </a>
          <a href="https://github.com/MikkMaltis/Ai-startup-tool">
            <img src={Aistartuptools} alt="" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
      </div>
    </div>
  )
}

export default Projects