import React from 'react';
import styles from './contact.module.css';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneAlt,
  faEnvelopeSquare,
  faMapMarked,
} from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_58cipbi',
        'template_96445if',
        formRef.current,
        'user_N3yjJT2u7zVc8iphfkUXD'
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
        <h1 className={styles.contactTitle}>Contact Me</h1>
        <div className={styles.contactInfo}>
          {/* <div className={styles.contactInfoItem}>
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className={styles.contactIcon}
            ></FontAwesomeIcon>
            +44 7800-634-799
          </div> */}

          {/* <div className={styles.contactInfo}>
            <FontAwesomeIcon
              icon={faEnvelopeSquare}
              className={styles.contactIcon}
            ></FontAwesomeIcon>
            treleven.lloyd@gmail.com
          </div> */}
          {/* <div className={styles.contactInfoItem}>
            <FontAwesomeIcon
              icon={faMapMarked}
              className={styles.contactIcon}
            ></FontAwesomeIcon>
            Purley, Surrey
          </div> */}
        </div>
      </div>
      <div className={styles.contactRight}>
        <p className={styles.contactDescription}>
          <b>What’s your story?</b> Get in touch. Always available for
          freelancing if the right project comes along. me.
        </p>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            style={{ backgroundColor: '#3d79c9' }}
            type='text'
            placeholder='Name'
            name='user_name'
          />
          <input
            style={{ backgroundColor: '#3d79c9' }}
            type='text'
            placeholder='Subject'
            name='user_subject'
          />
          <input
            style={{ backgroundColor: '#3d79c9' }}
            type='text'
            placeholder='Email'
            name='user_email'
          />
          <textarea
            style={{ backgroundColor: '#3d79c9' }}
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
