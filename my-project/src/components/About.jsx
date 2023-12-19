import React from 'react';


const About = () => {
  return (
    <div className='w-full px-6 py-12 flex justify-center items-center font-Cabin text-[#f3f4f6]'>
      <div className="bg-color4 w-[88%] rounded ">
          <div className='bg-[url("https://images.unsplash.com/photo-1504858700536-882c978a3464?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] h-72 bg-cover bg-center flex place-content-center place-items-center'>
            <h1 className="text-6xl py-6 px-6 font-Kanit flex justify-center">About me</h1>
          </div>

        <div className="flex justify-center">
          <p className="text-center text-3xl font-Kanit leading-10 my-6">I am a 17 year old web developer from Estonia. I have been doing web development for about 1 and half year now. I have worked with React, TailwindCSS, HTML, CSS, JavaScript, Node.js, Express.js, Python, PHP, SQL, MariaDB, Git and GitHub. I am currently studying at the Kuressaare Regional Training Centre, where I am studying software/web development.</p>
          <button className=''>
            <span className='relative z-10'>
              Here's my CV.
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
