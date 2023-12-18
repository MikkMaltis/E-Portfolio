import React from 'react';
import mountains from '../media/mountains.jpg';

const About = () => {
  return (
    <div className='w-full px-6 py-12 flex justify-center items-center font-Cabin text-[#f3f4f6]'>
      <div className="bg-color4 w-[88%] rounded py-6 px-6">
        <div>
          <img className='' src={mountains} alt="Background Mountains" />
          <h1 className="text-6xl py-6 px-6 font-Kanit flex justify-center">About me</h1>
        </div>

        <div className="flex justify-center">
          <p className="text-center text-2xl font-Kanit leading-10">I am a 17 year old web developer from Estonia. I have been doing web development for about 1 and half year now. I have worked with React, TailwindCSS, HTML, CSS, JavaScript, Node.js, Express.js, Python, PHP, SQL, MariaDB, Git and GitHub. I am currently studying at the Kuressaare Regional Training Centre, where I am studying software development.</p>
        </div>
      </div>
    </div>
  )
}

export default About
