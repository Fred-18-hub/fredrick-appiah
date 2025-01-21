import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";
import { companies, testimonials } from "@/data";

const Testimonials = () => {
  return (
    <div className="pt-20 md:pb-20 pb-8" id="testimonials">
      <h1 className="heading">
        Hear from
        <span className="text-purple"> impressed colleagues</span>
      </h1>
      <div className="flex mt-20 flex-col items-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(
            ({ id, img, name, nameImg, imgClassName, nameImgClassName }) => (
              <div
                key={id}
                className="flex md:max-w-60 max-w-32 gap-2 items-center"
              >
                <img src={img} alt={name} className={imgClassName} />
                <img src={nameImg} alt={name} className={nameImgClassName} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
