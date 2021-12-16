import React from 'react';
import styles from './contact.module.css';
// import Phone from '../../img/phone.png';
// import Email from '../../img/email.png';
// import Address from '../../img/address.png';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneAlt,
  faEnvelopeSquare,
  faMapMarked,
} from '@fortawesome/free-solid-svg-icons';

// import { ThemeContext } from '../../context';

export default function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_rrvnzco',
        'template_3v5nih4',
        formRef.current,
        'user_DrriDPTGKO2Zj4RDXCA6W'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contactBackground}></div>
      <div className={styles.contactWrapper}></div>
      <div className={styles.contactLeft}>
        <h1 className={styles.contactTitle}>Let's discuss your project</h1>
        <div className={styles.contactInfo}>
          <div className={styles.contactInfoItem}>
            {/* <img src={Phone} alt='' className={styles.contactIcon} /> */}
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className={styles.contactIcon}
            ></FontAwesomeIcon>
            +1 1234 556 75
          </div>

          <div className={styles.contactInfo}>
            {/* <img className={styles.contactIcon} src={Email} alt='' /> */}
            <FontAwesomeIcon
              icon={faEnvelopeSquare}
              className={styles.contactIcon}
            ></FontAwesomeIcon>
            contact@lama.dev
          </div>
          <div className={styles.contactInfoItem}>
            {/* <img className={styles.contactIcon} src={Address} alt='' /> */}
            <FontAwesomeIcon
              icon={faMapMarked}
              className={styles.contactIcon}
            ></FontAwesomeIcon>
            245 King Street, Touterie Victoria 8520 Australia
          </div>
        </div>
      </div>
      <div className={styles.contactRight}>
        <p className={styles.contactDescription}>
          <b>What’s your story?</b> Get in touch. Always available for
          freelancing if the right project comes along. me.
        </p>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            style={{ backgroundColor: '#333' }}
            type='text'
            placeholder='Name'
            name='user_name'
          />
          <input
            style={{ backgroundColor: '#333' }}
            type='text'
            placeholder='Subject'
            name='user_subject'
          />
          <input
            style={{ backgroundColor: '#333' }}
            type='text'
            placeholder='Email'
            name='user_email'
          />
          <textarea
            style={{ backgroundColor: '#333' }}
            rows='5'
            placeholder='Message'
            name='message'
          />
          <button>Submit</button>
          {done && 'Thank you...'}
        </form>
      </div>
    </div>
  );
}
