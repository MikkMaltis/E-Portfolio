import React from 'react';

function Hero() {
    return (
        <div className="w-full px-6 py-12">
            <div className="rounded border-2 border-black p-8 max-w-md mx-auto ">
                <h1 className="text-4xl">Hello, I am Mikk. Im a web developer.</h1>
                <button className="mt-6 rounded-full p-4 border-2 bg-lime-500">Get in touch</button>
            </div>
        </div>
    );
}

export default Hero;