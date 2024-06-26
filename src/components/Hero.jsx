import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { TypeAnimation } from 'react-type-animation';
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#ffffff]'></div>
          <div className='w-1 sm:h-80 h-40 white-gradient'></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>我是 <span className='text-[#a4d0ff] tracking-widest'>程璨偉</span></h1>
          <TypeAnimation
          sequence={[
            '網頁設計',
            1000, 
            '軟體開發',
            1000,
            '程式撰寫',
            1000
          ]}
          className={`${styles.heroSubText} mt-2 ml-2 text-white-100`}  
          wrapper="span"
          speed={200}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
        />
        </div>
        
      </div>
      <ComputersCanvas/>
      <div className='absolute xs:bottom-25 bottom-10 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[30px] h-[60px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2'>
            <motion.dev animate={{y: [0, 24, 0]}} transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop'}} className="w-3 h-3 rounded-full bg-secondary mb-1"/>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero