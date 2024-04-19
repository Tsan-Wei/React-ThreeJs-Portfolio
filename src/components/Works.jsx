/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */ 
import { Tilt } from 'react-tilt';
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github, Figma, XD } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {

const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    handleResize();
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);
  
const motionVariants = isMobile ? fadeIn("up", "spring", index * 0.5, 0.75) : fadeIn("up", "linear", index * 0.2, 0.5);

const img = name.includes('遠東百貨')? github : name.includes('2.0')? Figma : XD;

  return (
    <motion.div variants={motionVariants}>
      <Tilt options={{max: 45, scale: 1,speed: 450}} className="rounded-2xl xs:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={() => window.open(source_code_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img src={img} alt="source code" className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <p className='text-[22px] mb-5 font-bold'>{name}</p>
          <p className='leading-loose text-[14px]'>{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">{tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>{tag.name}&nbsp;</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={styles.sectionSubText}>我的作品集&nbsp;&nbsp;MY WORKS</p>
        <h2 className={styles.sectionHeadText}>專案作品&nbsp;&nbsp;PROJECTS</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[18px] max-w-3xl leading-[30px]'></motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-8 lg:justify-start md:justify-cnenter xs:justify-center'>
        {projects.map((project, index) =>(
          <ProjectCard key={`project-${index}`} index={index} {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "works")
