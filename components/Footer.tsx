import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full pb-6 pt-20" id="contact">
      <div className="w-full absolute left-0 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="footer grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Looking to elevate <span className="text-purple">your</span> digital
          presence?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contact me today to explore how I can help you reach your goals.
        </p>
        <Link href="mailto:apfred18@gmail.com">
          <MagicButton
            title="Let's connect!"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {currentYear} Fredrick Appiah
        </p>
        <div className="flex md:mt-0 mt-2 items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.link}
              target="blank"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={profile.img} alt={profile.img} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
