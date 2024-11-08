import { HERO_CONTENT } from "../constants/index.js";
import profilePic from "../assets/kevinRushProfile.jpg"

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pd-4 lg:mb-35">
            <div className="fle flex-wrap">
                <div className="w=full lg:w-1/2">
                   <div className="flex flex-col items-center lg:items-start">
                       <h1 className="pd-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                        Aditya Rath
                       </h1>
                       <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                         AI/ML Developer
                       </span>
                       <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {HERO_CONTENT}
                       </p>
                   </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                   <div className="flex justify-center">
                       <img src={profilePic} alt="Aditya Rath" />
                   </div>
                </div>
            </div>
           
        </div>
         
    );
};

export default Hero;