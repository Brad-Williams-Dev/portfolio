import React from "react";
import { motion } from "framer-motion";

type Props = {};

//

function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/80694461_10157339695918564_6218736212199342080_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=Wuhr1XrooEkAX_j2OME&_nc_ht=scontent-lga3-1.xx&oh=00_AfDYXzVtcDdSz9gPGxfNaoedta3BlQ3FpWEtpn_apCIo7Q&oe=64046589"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 h-95 xl:w-[500px]"
      />
    </div>
  );
}

export default About;
