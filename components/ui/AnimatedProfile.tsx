"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const AnimatedProfile = () => {
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowProfile(true);
    }, 500);
  }, []);

  return (
    <>
      <div
        className={`w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 
            lg:w-52 lg:h-52 my-4 md:my-6 ${
              showProfile ? "fade-in" : "opacity-0"
            }`}
      >
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-full h-full rounded-full border-4 border-purple object-cover"
        />
      </div>

      <p
        className={`text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl ${
          showProfile ? "slide-up" : "opacity-0"
        }`}
      >
        Hi, I&apos;m Fredrick, a Software Developer from Ghana
      </p>

      <Link
        href="#about"
        className={`${showProfile ? "slide-up" : "opacity-0"}`}
      >
        <MagicButton
          title="Show my work"
          icon={<FaLocationArrow />}
          position="right"
        />
      </Link>
    </>
  );
};

export default AnimatedProfile;
