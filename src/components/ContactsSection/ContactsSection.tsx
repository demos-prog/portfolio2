import React from 'react';
import AOS from 'aos';
import gitIcon from '../../assets/images/github_rep_icon.svg';
import linkedInIcon from '../../assets/images/linkedin_icon.svg';
import telegramIcon from '../../assets/images/telegram_icon.svg';
import viberIcon from '../../assets/images/viber_icon.svg';
import css from './ContactsSection.module.css';

type ContactsSectionProps = {
  lang: 'ru' | 'eng';
}

AOS.init({
  duration: 1200,
})

const ContactsSection: React.FC<ContactsSectionProps> = ({ lang }) => {

  return (
    <section id='contacts_section'>
      <div data-aos="fade-left" className={css.contacts}>
        <h2>{lang === 'ru' ? 'Контакты' : 'Contacts'}</h2>
        <p>{lang === 'ru' ? ('Телефон') : ('Phone')}: +375 (25) 517-11-52</p>
        <p>{lang === 'ru' ? ('Почта') : ('Email')}: demosne@gmail.com</p>
        <div id={css.contactsWr}>
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
      </div>
    </section>
  );
};

export default ContactsSection;