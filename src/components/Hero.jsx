import { motion } from "framer-motion";

import { styles } from "../styles";
import { sohan } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10`}>
        {/* Left Side: Indicator & Text */}
        <div className='flex flex-row items-start gap-5 flex-1'>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-vs-blue' />
            <div className='w-1 sm:h-80 h-40 vectorshift-gradient' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText}`}>
              Hi, I'm <span className='text-vs-blue'>Sohan</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 max-w-2xl`}>
              I build AI-powered interfaces, web applications, <br className='sm:block hidden' />
              and seamless user experiences.
            </p>

            {/* Profile Image for Mobile (Centered under text) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-10 lg:hidden"
            >
              <div className='relative w-[280px] h-[280px] mx-auto'>
                <div className='absolute -inset-1 bg-gradient-to-r from-vs-blue to-vs-purple rounded-full blur opacity-50 animate-pulse'></div>
                <img
                  src={sohan}
                  alt='Sohan Ram'
                  className='relative w-full h-full object-cover rounded-full border-4 border-vs-purple/30 shadow-2xl'
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Profile Image (Desktop Only) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className='hidden lg:flex justify-center'
        >
          <div className='relative group'>
            {/* Animated Outer Glow */}
            <div className='absolute -inset-4 bg-gradient-to-r from-vs-blue via-vs-purple to-vs-blue rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:animate-spin-slow'></div>

            {/* Floating Glass Container */}
            <div className='relative w-[320px] h-[320px] p-2 glassmorphism rounded-full border border-vs-purple/20 shadow-2xl transform transition hover:scale-105 duration-500'>
              <img
                src={sohan}
                alt='Sohan Ram'
                className='w-full h-full object-cover rounded-full'
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
