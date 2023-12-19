import React from 'react';

const About = () => {
  return (
    <div id="about" className='w-full px-6 py-12 flex justify-center items-center font-Cabin text-[#f3f4f6]'>
      <div className="bg-color4 w-[88%] rounded-3xl ">
          <div className='bg-[url("https://images.unsplash.com/photo-1504858700536-882c978a3464?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] h-72 bg-cover bg-center flex place-content-center place-items-center'>
            <h1 className="text-6xl py-6 px-6 font-Kanit flex justify-center">About me</h1>
          </div>

        <div>
          <p className="text-center text-3xl font-Kanit leading-10 mt-6">I am a 17 year old web developer from Estonia. I have been doing web development for about 1 and half year now. I have worked with React, TailwindCSS, HTML, CSS, JavaScript, Node.js, Express.js, Python, PHP, SQL, MariaDB, Git and GitHub. I am currently studying at the Kuressaare Regional Training Centre, where I am studying software/web development.</p>
          <div className='flex justify-center'>
            <a href="CV.pdf" title=""  download>
              <button className='flex my-6 rounded relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-[#E4BF3B] font-medium text-color6 shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-color6 before:duration-100 before:ease-linear hover:bg-color6 hover:text-[#E4BF3B] hover:shadow-[#E4BF3B] hover:before:border-[25px]mt-6 rounded relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-[#E4BF3B] font-medium text-color6 shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-color6 before:duration-100 before:ease-linear hover:bg-color6 hover:text-[#E4BF3B] hover:shadow-[#E4BF3B] hover:before:border-[25px]'>
                <span className='relative z-10'>
                  Here's my CV.
                </span>
              </button>
            </a>

          </div>

        </div>
      </div>
    </div>
  )
}

export default About
