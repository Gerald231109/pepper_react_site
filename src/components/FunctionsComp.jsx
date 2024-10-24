import { funcTitles } from '../constants/copyright';
import phone from '../static/images/function__phone.png';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Functions() {
  const [titles, setTitles] = useState(funcTitles);
  const [active, setActive] = useState(titles[1]);
  const [startX, setStartX] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 880) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setActive(titles[1]);
  }, [titles, setActive]);

  function swapItems(fromIndex) {
    const newItems = [...titles];
    const temp = newItems[fromIndex];
    newItems[fromIndex] = newItems[1];
    newItems[1] = temp;
    setTitles(newItems);
  }

  function handleSwipeStart(e) {
    setStartX(e.clientX);
  }

  function handleSwipeEnd(e) {
    const endX = e.clientX;
    const deltaX = endX - startX;

    if (deltaX > 50) {
      setTitles([titles.at(-1), ...titles.slice(0, 4)]);
    } else if (deltaX < -50) {
      setTitles([...titles.slice(1, 6), titles.at(0)]);
    }
  }

  const textAppear = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      {isVisible ? (
        <section className="func">
          <div className="func__titles">
            {titles.map((item, index) => (
              <motion.div
                key={item.id}
                className={
                  index === 1 ? 'func__title title__active' : 'func__title'
                }
                layout="position"
                transition={{
                  ease: 'easeInOut',
                }}
                onClick={() => swapItems(index)}
              >
                {item.title}
              </motion.div>
            ))}
          </div>

          <motion.div
            key={active.title}
            animate="visible"
            initial="hidden"
            variants={textAppear}
          >
            <p className="func__text text__top">{active.text[0]}</p>
            <p className="func__text">{active.text[1]}</p>
          </motion.div>

          <div className="func__phone">
            <img alt="" className="phone__case" src={phone} />
            <motion.div
              key={active.title}
              alt=""
              animate="visible"
              className="phone__display"
              initial="hidden"
              src={active.display}
              style={{
                backgroundImage: `url(${active.display})`,
              }}
              variants={textAppear}
              onMouseDown={handleSwipeStart}
              onMouseUp={handleSwipeEnd}
            />
          </div>
        </section>
      ) : null}
    </>
  );
}
