import { useState, useRef } from 'react';
import { partners } from '../constants/copyright';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

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

export default function Partners() {
  const logoList = [...partners.logos];
  const container = useRef(null);
  const dragFlag = useMediaQuery('(max-width: 1200px)');

  return (
    <section className="partners">
      <h1 className="partner__title">{partners.title}</h1>
      <div className="partner__wrapper" ref={container}>
        <motion.div
          drag={dragFlag && 'x'}
          dragConstraints={container}
          whileTap={{ cursor: 'grabbing' }}
          className="partner__logos"
        >
          {logoList.map((item, index) => (
            <img
              src={item}
              key={index}
              alt=""
              className={`partner__logo ${index === 3 && 'partner__adidas'}`}
            />
          ))}
        </motion.div>
      </div>
      <div className="partner__invite">
        {partners.text.map((text, index) => (
          <p key={index} className="invite__text">
            {text}
          </p>
        ))}
        <motion.a
          href="#"
          className="invite__link"
          whileHover={{
            scale: 1.05,
            boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.3)',
          }}
          transition={{
            type: 'spring',
            stiffness: 700,
            damping: 20,
          }}
        >
          {partners.btnText}
        </motion.a>
      </div>
    </section>
  );
}
