import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full blue-black-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{max: 45, scale: 1, speed: 450}} className='bg-tertiary rounded-[20px] min-h-[280px] flex justify-center items-center flex-col relative'>
          <img src={icon} alt={title} className='w-full h-full rounded-[20px]' />
          <h3 className='text-white text-[20px] font-bold text-center absolute bottom-5'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>關於我&nbsp;&nbsp;ABOUT ME</p>
        <h2 className={styles.sectionHeadText}>程璨偉&nbsp;&nbsp;Louis Cheng</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[16px] max-w-7xl leading-[40px] tracking-widest'>
      我是一名全端工程師，擅長建置和維護高效、響應式的網站與應用程式。在前端技術方面，我熟練 <span className={styles.programingLanguage}>React、Vue</span> 和 <span className={styles.programingLanguage}>ASP.NET MVC</span> ，能創造吸引人的使用者介面。後端方面，我使用 <span className={styles.programingLanguage}>C# </span>與<span className={styles.programingLanguage}> MS SQL </span> 架構穩定的資料庫端邏輯。此外，我也有運用 <span className={styles.programingLanguage}> ThreeJS </span> 與<span className={styles.programingLanguage}> GSAP </span>等JS框架開發高互動性網站的經驗。我熱愛程式設計，喜歡探索新的技術，並致力於學習知識與利用科技解決生活的難題。
      </motion.p>
      <div className='mt-10 flex flex-wrap gap-10 lg:justify-start xs:justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")