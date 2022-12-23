"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className=" gradient-02 z-0 " />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="|About meteversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] 
        text-center text-secondary-white"
      >
        <span className=" font-extrabold text-white"> Metaverse</span>
        of madness is a new thing in the future, where you can enjoy the vitual
        world by feeling like it real. you can interact with anything you want,
        that is the{" "}
        <span className=" font-extrabold text-white">
          madness of the metaverse
        </span>
        of today,turn your dreams into reality let{" "}
        <span className=" font-extrabold text-white">explore</span> the madness
        of then metaverse by scrolling down
      </motion.p>
      <motion.img
      variants={fadeIn ('up', 'tween', 0.3, 1)}
      src='/arrow-down.svg'
      className="w-[18px] h-[28px] object-contain mt-[28px] animate-bounce"
     />

    </motion.div>
  
  </section>
);
export default About;
