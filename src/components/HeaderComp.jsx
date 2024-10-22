import { social } from '../constants/svg';
import { motion } from 'framer-motion';
import { header } from '../constants/copyright';
import { useState, useEffect } from 'react';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

export default function Header() {
  const [download, setDownload] = useState(false);
  const [headFlag, setFlag] = useState(false);
  const bigScreen = useMediaQuery('(max-width: 1120px)');
  const mediumScreen = useMediaQuery('(max-width: 680px)');

  const phoneAppear = {
    animate: {
      x: ['100vw', 0],
      filter: bigScreen && ['blur(0px)', 'blur(10px)'],
    },
    transition: {
      x: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        mass: 0.5,
      },
      filter: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  const downloadAppear = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const flagAppear = {
    hidden: {
      opacity: 0,
      y: '-200%',
    },
    visible: headFlag && {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.45,
        duration: 0.5,
        delay: mediumScreen ? 0.4 : 1,
      },
    },
  };

  const linkHover = {
    scale: 1.12,
    transition: {
      type: 'spring',
      stiffness: 900,
      damping: 17,
    },
  };

  const arrowMove = {
    y: [0, 5, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
    },
  };

  const downAppear = {
    opacity: [0, 1],
    transition: {
      delay: 1,
      duration: 0.5,
    },
  };

  return (
    <section className="header">
      <div className="header__top">
        <div className="header__links">
          {social.map((item) => (
            <motion.a
              whileHover={{ scale: 1.2 }}
              className="header__link"
              key={item.title}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
        <motion.a
          whileHover={{ color: '#000', backgroundColor: '#fff' }}
          href="#"
          className="header__join"
        >
          {header.partnerText}
        </motion.a>
      </div>
      <div className="header__bot">
        <motion.div
          variants={(download || mediumScreen) && downloadAppear}
          initial="hidden"
          animate="visible"
          onAnimationComplete={() => setFlag(true)}
          className="header__download"
        >
          <div className="download__title">
            <motion.img
              initial="hidden"
              animate="visible"
              variants={flagAppear}
              src={header.flag}
              alt=""
              className="title__flag"
            />
            <h1 className="title__text">
              {header.shopGuide[0]}
              <span>{header.shopGuide[1]}</span>
            </h1>
          </div>
          <div className="download__divider">
            <div className="divider__line"></div>
            <p className="divider__text">{header.dividerText}</p>
            <div className="divider__line"></div>
          </div>
          <div className="download__links">
            <motion.img
              whileHover={{ ...linkHover }}
              src={header.appleStore}
              alt=""
              className="download__link"
            />
            <motion.img
              whileHover={{ ...linkHover }}
              src={header.googlePlay}
              alt=""
              className="download__link"
            />
          </div>
        </motion.div>
        <motion.img
          {...phoneAppear}
          onAnimationComplete={() => setDownload(true)}
          src={header.headerPhone}
          alt=""
          className="header__phone"
        />
      </div>
      <motion.a
        {...downAppear}
        href="#dignities-section"
        className="header__down"
      >
        {header.downBtnText}
        <motion.img
          animate={{ ...arrowMove }}
          src={header.down}
          alt=""
          className="down__arrow"
        />
        {header.downBtnText}
      </motion.a>
    </section>
  );
}
