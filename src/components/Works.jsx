import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{max: 45, scale: 1,speed: 450}} className=""/>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>我的作品集&nbsp;&nbsp;MY WORKS</p>
        <h2 className={styles.sectionHeadText}>專案作品&nbsp;&nbsp;PROJECTS</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[18px] max-w-3xl leading-[30px]'></motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) =>(
          <ProjectCard key={`project-${index}`} index={index} {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "works")