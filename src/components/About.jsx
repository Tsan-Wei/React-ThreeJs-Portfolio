import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{max: 45, scale: 1, speed: 450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'></div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>關於我</p>
        <h2 className={styles.sectionHeadText}>程璨偉&nbsp;&nbsp;/&nbsp;&nbsp;Louis Cheng</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      我是一名全端工程師，擅長建置和維護高效、響應式的網站與應用程式。在前端技術方面，我精通 <span className={styles.programingLanguage}>React.js</span> 和 <span className={styles.programingLanguage}>Vue.js</span> ，能創造吸引人的使用者介面。後端方面，我使用 <span className={styles.programingLanguage}>C#</span>與<span className={styles.programingLanguage}>ASP.NET MVC</span> 架構穩定的資料庫端邏輯。此外，我也有運用 <span className={styles.programingLanguage}>ThreeJS</span> 等框架開發高互動性網站的經驗。我熱愛程式設計，喜歡探索新技術，並致力於學習與利用科技解決複雜問題。
      </motion.p>
      <div className='mt-10 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default About