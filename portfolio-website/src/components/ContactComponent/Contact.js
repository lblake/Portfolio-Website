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
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Contact Me</h1>
      <a href='mailto:treleven.lloyd@gmail.com'>
      <button className={styles.contactButton}>email me</button>

      </a>
    </div>
  );
}
