"use client";

import Image from "next/image";
import useCustomNavigation from "@portfolio/hooks/useCustomNavigation";
import useHomePageAnimation from "@portfolio/animations/useHomePageAnimation";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function HomePage() {
  useCustomNavigation("/", "/education");
  const imageAnimation = useAnimation();
  const infosAnimation = useAnimation();
  const contactsAnimation = useAnimation();
  // useEffect(() => {
  //   imageAnimation.set({ opacity: 0 });
  //   infosAnimation.set({ x: -200 });
  //   contactsAnimation.set({ opacity: 0 });
  //   imageAnimation.start({ opacity: 1 }, { duration: 2 });
  //   infosAnimation.start({ x: 0 }, { duration: 2 });
  //   contactsAnimation.start({ opacity: 1 }, { duration: 2 });
  // }, []);
  return (
    <main className="flex flex-col mx-auto lg:w-full items-center">
      <div className="sm:flex hidden flex-row justify-end items-end px-4 py-2 w-full">
        <a
          href="https://drive.google.com/file/d/1LQBZ00JBvC6saq2kp-_NDhiPj0OFf_YK/view?usp=sharing"
          target="_blank"
          className="text-black bg-white text-[16px] font-[500] px-16 py-3 border border-transparent rounded-[8px]"
        >
          Get my CV
        </a>
      </div>
      <motion.div animate={imageAnimation}>
        <Image
          src="/firas.jpeg"
          className="size-[220px] mt-4 mb-4 border border-transparent rounded-full"
          alt="firas photo"
          height={200}
          width={200}
        />
      </motion.div>
      <motion.div animate={infosAnimation} className="text-center">
        <p className="text-[#4B5563] text-[32px] font-[700] mb-4">
          Mosbahi Firas
        </p>
        <p className="text-[#111827] lg:text-[64px] sm:text-[36px] text-[24px] lg:mb-0 mb-8 font-[500]">
          Software engineering student
        </p>
        <p className="text-[#111827] text-[16px] sm:text-[18px] text-center">
          Highly motivated Software Engineering student with a passion for
          building innovative web applications. Deeply interested in exploring
          the potential of blockchain technology and DevOps methodologies to
          enhance software development processes.
        </p>
      </motion.div>
      <motion.div
        animate={contactsAnimation}
        className="text-[#4B5563] sm:text-[18px] text-[12px] flex flex-col items-center mt-4 w-[1200px]"
      >
        <p>Email: firas.mosbehi@insat.ucar.tn</p>
        <a
          href="https://www.linkedin.com/in/firas-mosbahi-6363b420a/"
          target="_blank"
        >
          Linkedin: https://www.linkedin.com/in/firas-mosbahi-6363b420a/
        </a>
        <a href="https://github.com/FirasMosbahi" target="_blank">
          Github: https://github.com/FirasMosbahi
        </a>
      </motion.div>
    </main>
  );
}
