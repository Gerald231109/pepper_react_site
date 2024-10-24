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
              key={item.title}
              className="header__link"
              whileHover={{ scale: 1.2 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
        <motion.a
          className="header__join"
          href="#"
          whileHover={{ color: '#000', backgroundColor: '#fff' }}
        >
          {header.partnerText}
        </motion.a>
      </div>
      <div className="header__bot">
        <motion.div
          animate="visible"
          className="header__download"
          initial="hidden"
          variants={download || mediumScreen ? downloadAppear : null}
          onAnimationComplete={() => setFlag(true)}
        >
          <div className="download__title">
            <motion.img
              alt=""
              animate="visible"
              className="title__flag"
              initial="hidden"
              src={header.flag}
              variants={flagAppear}
            />
            <h1 className="title__text">
              {header.shopGuide[0]}
              <span>{header.shopGuide[1]}</span>
            </h1>
          </div>
          <div className="download__divider">
            <div className="divider__line" />
            <p className="divider__text">{header.dividerText}</p>
            <div className="divider__line" />
          </div>
          <div className="download__links">
            <motion.img
              alt=""
              className="download__link"
              src={header.appleStore}
              whileHover={{ ...linkHover }}
            />
            <motion.img
              alt=""
              className="download__link"
              src={header.googlePlay}
              whileHover={{ ...linkHover }}
            />
          </div>
        </motion.div>
        <motion.img
          {...phoneAppear}
          alt=""
          className="header__phone"
          src={header.headerPhone}
          onAnimationComplete={() => setDownload(true)}
        />
      </div>
      <motion.a
        {...downAppear}
        className="header__down"
        href="#dignities-section"
      >
        {header.downBtnText}
        <motion.img
          alt=""
          animate={{ ...arrowMove }}
          className="down__arrow"
          src={header.down}
        />
        {header.downBtnText}
      </motion.a>
    </section>
  );
}
