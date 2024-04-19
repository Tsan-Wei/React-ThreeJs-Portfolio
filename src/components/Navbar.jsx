import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { motion, AnimatePresence } from 'framer-motion'

const navbarVariants = {
  hidden: {
    x: '100vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      delay: 0,
    },
  },
  exit: {
    x: '100vw',
    opacity: 0,
    transition: {
      delay: 0,
      ease: 'easeInOut',
    },
  },
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    const anchor = document.querySelector(`#${id}`);
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
    className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 ${scrolled ? "bg-[#000f26]" : "bg-transparent"
    }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0,0);
        }}>
          <img src={logo} alt="logo" className=' w-20 h-20 object-contain'/>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-white" : 'text-secondary'} hover:text-white text-[18px] font-bold cursor-pointer`} onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img src={toggle ? close : menu} alt={menu} className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)} />
              <AnimatePresence>
                {toggle && (
                  <motion.div
                    className="fixed inset-0 bg-black bg-opacity-75 sm:bg-opacity-95 z-20 flex flex-col items-center justify-center"
                    variants={navbarVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <motion.ul
                      className="list-none flex flex-col items-center justify-center gap-6"
                      variants={navbarVariants}
                    >
                      {navLinks.map((link) => (
                        <motion.li
                          key={link.id}
                          variants={navbarVariants}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className={`text-white font-poppins font-bold cursor-pointer text-[18px]`}
                          onClick={() => {
                            setToggle(false);
                            setActive(link.title);
                            handleLinkClick(link.id);
                          }}
                        >
                          <Link to={`#${link.id}`}>{link.title}</Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )}
              </AnimatePresence>
        </div>
      </div>
    </nav>
  )
}

export default Navbar