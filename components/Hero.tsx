import SlidingProfile from "./ui/AnimatedProfile";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="md:pb-20 pb-7 md:pt-[6.5rem] pt-16">
      <div>
        <Spotlight
          className="md:top-10 top-0 md:left-20 left-10 h-screen"
          fill="white"
        />
      </div>

      {/* Dotted background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.13] bg-dot-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Webs with Next.js
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Bringing Ideas to Life with Seamless User Experiences"
          />

          <SlidingProfile />
        </div>
      </div>
    </div>
  );
};

export default Hero;
