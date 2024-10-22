import { footer } from '../constants/copyright';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Footer() {
  const [hoverLink, setHoverLink] = useState(false);

  return (
    <section className="footer">
      <div className="footer__copyright">
        <p className="copyright__top">{footer.copyright}</p>
        <div className="copyright__bot">
          <a href="#" className="copyright__link">
            {footer.privacy}
          </a>
          <a href="#" className="copyright__link">
            {footer.terms}
          </a>
        </div>
      </div>
      <a
        href="#"
        className="footer__contact"
        onMouseEnter={() => setHoverLink(true)}
        onMouseLeave={() => setHoverLink(false)}
      >
        <motion.img
          src={footer.contactIcon}
          alt=""
          className="contact__icon"
          animate={hoverLink ? { y: -5 } : { y: 0 }}
          transition={{ type: 'spring', stiffness: 700 }}
        />
        {footer.contact}
      </a>
    </section>
  );
}
