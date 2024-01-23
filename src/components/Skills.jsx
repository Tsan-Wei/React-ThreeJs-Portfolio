import React from 'react'
import { SectionWrapper } from '../hoc';
import { BallCanvas } from './canvas';
import { technologies } from '../constants';
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion';
import { styles } from '../styles';

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>專業上的我&nbsp;&nbsp;PROFFESIONAL ABILITIES</p>
        <h2 className={styles.sectionHeadText}>技能&nbsp;&nbsp;SKILLS</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap lg:justify-start xs:justify-center gap-10 mt-5'>
        {technologies.map((technology) => (
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