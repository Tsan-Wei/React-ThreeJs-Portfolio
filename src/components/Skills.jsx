import { useState } from 'react'
import { SectionWrapper } from '../hoc';
import { BallCanvas } from './canvas';
import { technologies } from '../constants';
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion';
import { styles } from '../styles';

const Skills = () => {
  const [selectedType, setSelectedType] = useState("前端");
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>專業上的我&nbsp;&nbsp;PROFFESIONAL ABILITIES</p>
        <h2 className={styles.sectionHeadText}>技能&nbsp;&nbsp;SKILLS</h2>
      </motion.div>
      <div className='md:w-[180px] xs:w-full mb-10 py-5'>
        <form className="md:w-[300px] xs:w-full mb-10 py-5">
          <select onChange={(e) => setSelectedType(e.target.value)} id="underline_select" className="block py-2.5 px-0 w-full text-white bg-transparent border-0 border-b-2 border-gray-200 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200">
              <option value="前端">前端</option>
              <option value="後端">後端 & 資料庫</option>
              <option value="其他">其他</option>
          </select>
        </form>
      </div>
      <div className='flex flex-row flex-wrap lg:justify-start xs:justify-center gap-10 mt-5'>
      {technologies.filter((technology) => technology.type === selectedType).map((technology) => (
        <div className='w-28 h-28 flex flex-wrap justify-center items-center' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
          <h3 className='font-bold'>{technology.name}</h3>
        </div>
      ))}
      </div>
    </>

  )
}

export default SectionWrapper(Skills,"skills")