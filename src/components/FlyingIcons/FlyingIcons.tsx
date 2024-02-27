import React, { useState } from 'react';
import arrowLeft from '../../assets/images/ArrowLeft.svg';
import arrowRight from '../../assets/images/ArrowRight.svg';
import gitIcon from '../../assets/images/github_rep_icon.svg';
import linkedInIcon from '../../assets/images/linkedin_icon.svg';
import telegramIcon from '../../assets/images/telegram_icon.svg';
import viberIcon from '../../assets/images/viber_icon.svg';
import css from './FlyingIcons.module.css';


const FlyingIcons: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleOpenContacts = () => {
    setShow(prev => !prev)
  }

  return (
    <div id={css.wrap}>
      <div style={show ? { left: 0 } : { left: '-50px' }} id={css.contactsWrap}>
        <div id={css.contacts}>
          <a target="_blank" href="https://t.me/Dmitry_web">
            <img className={css.contImage} src={telegramIcon} alt="telegram" />
          </a>
          <a target="_blank"
            href="https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D0%B1%D1%83%D1%80%D0%BB%D1%8B%D0%BA%D0%BE-972461214">
            <img className={css.contImage} src={linkedInIcon} alt="linkedin" />
          </a>
          <a target="_blank" href="viber://add?number=375255171152">
            <img className={css.contImage} src={viberIcon} alt="viber" />
          </a>
          <a target="_blank" href="https://github.com/demos-prog">
            <img className={css.contImage} src={gitIcon} alt="git" />
          </a>
        </div>
        <div id={css.contactsBtn} onClick={handleOpenContacts}>
          {show ? (
            <img src={arrowLeft} alt="open" />
          ) : (
            <img src={arrowRight} alt="close" />
          )}
          <div id={css.contactText}>Contacts</div>
        </div>
      </div>
      <span id={css.dog}>@</span>
      <span id={css.tag}>{`</>`}</span>
      <span id={css.https}>https</span>
      <span id={css.web}>WEB</span>
    </div>
  );
};

export default FlyingIcons;