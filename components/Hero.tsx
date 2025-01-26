import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="md:pb-20 pb-7 md:pt-[6.5rem] pt-16">
      <div>
        <Spotlight
          className="md:top-10 top-0 md:left-20 left-10 h-screen"
          fill="white"
        />
      </div>

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

          <div className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 my-4 md:my-6">
            <img
              src="/profile.jpg"
              alt="Profile Image"
              className="w-full h-full rounded-full border-4 border-purple object-cover"
            />
          </div>

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Fredrick, a Software Developer from Ghana
          </p>

          <Link href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
