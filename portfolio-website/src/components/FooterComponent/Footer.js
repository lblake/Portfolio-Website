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
              <i class="fa fa-linkedin-square fa-2x" aria-hidden='true'></i>
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
              <i class='fa fa-facebook-square fa-2x' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a
              href='https://github.com/lblake'
              target='_blank'
              rel='noopener noreferrer'
              title='github'
            >
              <i class='fa fa-github-square fa-2x' aria-hidden='true'></i>
            </a>
          </li>
        </ul>
      </div>
      <p>
        @ 2023{' '}
        <a href='https://lloydblake.dev/'>
          {' '}
          <i class='fa fa-globe'></i> lloydblake.dev
        </a>{' '}
        POWERED BY REACT{' '}
      </p>
    </div>
  );
}
