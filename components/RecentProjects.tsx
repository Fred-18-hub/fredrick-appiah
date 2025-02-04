import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-Pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="pt-20 md:pb-12" id="projects">
      <h1 className="heading">
        A collection of
        <span className="text-purple"> recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-x-24 md:gap-y-3 mt-12">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className=" sm:h-[41rem] h-[32rem] lg:min-h[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] "
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={img}
                  width={420}
                  alt={title}
                  className="z-10 absolute bottom-0"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 ">
                {title}
              </h1>
              <p className="lg:text-[1.2rem] lg:font-normal md:text-lg md:font-normal text-sm font-light lg:line-clamp-2 line-clamp-3">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, idx) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                      style={{
                        transform: `translateX(-${5 * idx * 2}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#cbacf9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
        {/* <p>Kofi</p> */}
      </div>
    </div>
  );
};

export default RecentProjects;
