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
          <a className="copyright__link" href="#">
            {footer.privacy}
          </a>
          <a className="copyright__link" href="#">
            {footer.terms}
          </a>
        </div>
      </div>
      <a
        className="footer__contact"
        href="#"
        onMouseEnter={() => setHoverLink(true)}
        onMouseLeave={() => setHoverLink(false)}
      >
        <motion.img
          alt=""
          animate={hoverLink ? { y: -5 } : { y: 0 }}
          className="contact__icon"
          src={footer.contactIcon}
          transition={{ type: 'spring', stiffness: 700 }}
        />
        {footer.contact}
      </a>
    </section>
  );
}
