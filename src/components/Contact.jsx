import React from 'react';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { EarthCanvas } from './canvas';
// service id = template_cwyliun
// email id = service_h7vpr3n
// public key = 8oijZz9ymi_3y-NPd

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setloading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);

    emailjs.send(
      'service_h7vpr3n',
      'template_cwyliun',
      {
        from_name: form.name,
        to_name: 'TsanWei',
        from_email: form.email,
        to_email: 'a88376219@gmail.com',
        message: form.message
      },
      '8oijZz9ymi_3y-NPd'
      .then(() => {
        setloading(false);
        alert("感謝您的來信，我將盡快回覆您！");
        setForm({
          name: '', 
          email: '',
          messgae: ''
        })
      }, (error) => {
        setloading(false);
        console.log(error);
      })
   )
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left',"tween", 0.2, 1)} className='rounded-2xl'>
        <p className={styles.sectionSubText}>聯繫資訊&nbsp;&nbsp;Get In Touch</p>
        <h2 className={styles.sectionHeadText}>聯絡我&nbsp;&nbsp;CONTACT ME</h2>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>你的姓名</span>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder='請輸入你的大名' className=' py-4 px-6 bg-[#353641] placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>你的信箱</span>
            <input type="text" name='email' value={form.email} onChange={handleChange} placeholder='請輸入你的信箱' className=' py-4 px-6 bg-[#353641] placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>你的訊息</span>
            <textarea rows="7" type="text" name='message' value={form.message} onChange={handleChange} placeholder='請輸入你想對我說的話' className=' py-4 px-6 bg-[#353641] placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>
          <button type='submit' className='px-8 py-3 border-4 border-[#353641] w-full text-white font-bold shadow-md shadow-primary rounded-xl'>{loading ? '傳送中...' : '傳送'}</button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right',"tween", 0.2, 1)} className='xl:w-[500px] xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")