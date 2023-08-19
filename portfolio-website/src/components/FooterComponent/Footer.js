import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.social}>
        <ul>
          <li>
            <a
              href='https://www.linkedin.com/in/lloyd-blake-2411383/'
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
              href='https://www.facebook.com/profile.php?id=100094665382021'
              target='_blank'
              rel='noopener noreferrer'
              title='facebook'
            >
              {' '}
              <i className='fa fa-facebook-square fa-2x' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.upwork.com/freelancers/~014a8e2ab85e5795de?viewMode=1'
              target='_blank'
              rel='noopener noreferrer'
              title='upwork'
            >
              {/* <i className='fa fa-github fa-2x' aria-hidden='true'></i> */}
              <img src='../images/upwork.png' alt='upwork' className={styles.socialIcon}  />
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
        POWERED BY REACT{' '}
      </p>
    </div>
  );
}
