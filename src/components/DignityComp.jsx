import { dignities } from '../constants/copyright';
import { motion } from 'framer-motion';

export default function Dignity() {
  const firstRow = dignities.slice(0, 2);
  const secondRow = dignities.slice(2, 4);

  const iconJump = {
    initial: { scale: 0 },
    animate: (index) => ({
      scale: 1,
      transition: {
        delay: 0.2 + index * 0.2,
        type: 'spring',
        stiffness: 900,
        damping: 13,
        mass: 0.7,
      },
    }),
  };

  return (
    <section className="dignities" id="dignities-section">
      <div className="dignities__row">
        {firstRow.map((item, index) => (
          <div key={item.title} className="dignity">
            <motion.img
              alt=""
              animate="animate"
              className="dignity__icon"
              custom={index}
              initial="initial"
              src={item.icon}
              variants={iconJump}
            />
            <h1 className="dignity__title">{item.title}</h1>
            <p className="dignity__desc">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="dignities__row">
        {secondRow.map((item, index) => (
          <div key={item.title} className="dignity">
            <motion.img
              alt=""
              animate="animate"
              className="dignity__icon"
              custom={index}
              initial="initial"
              src={item.icon}
              variants={iconJump}
            />
            <h1 className="dignity__title">{item.title}</h1>
            <p className="dignity__desc">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
