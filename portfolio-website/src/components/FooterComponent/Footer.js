import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.social}>
        <ul>
          <li>
            <a
              href='https://www.linkedin.com/in/shopifyfrontenddeveloper'
              target='_blank'
              rel='noopener noreferrer'
              title='linkedin'
            >
              {' '}
              <i className='fa fa-linkedin-square fa-2x' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a
              href='https://github.com/lblake'
              target='_blank'
              rel='noopener noreferrer'
              title='github'
            >
              {' '}
              <i className='fa fa-github-square fa-2x' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/lloydblake.dev/'
              target='_blank'
              rel='noopener noreferrer'
              title='github'
            >
              <i className='fa fa-instagram fa-2x' aria-hidden='true'></i>
              {/* <img
                src='../images/upwork.png'
                alt='upwork'
                className={styles.socialIcon}
                aria-hidden='true'
              /> */}
            </a>
          </li>
        </ul>
      </div>
      <p>
        &copy; {new Date().getFullYear()}{' '}
        <a className={styles.link} href='https://lloydblake.dev/'>
          {' '}
          <i className='fa fa-globe'></i> lloydblake.dev
        </a>{' '}
        Powered by React{' '}
      </p>
    </div>
  );
}
