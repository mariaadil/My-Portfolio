import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

const ContactInfo = () => {
  const email = 'shaikhmaria151@gmail.com';
  const phone = '03352307480';

  return (
    <section id='contact'>
    <div className='cont'>
      <h1 className='nav-contact-heading'>Contact Me</h1>
      <div>
        <p className='nav-email'>Email: {email}</p>
        <p className='nav-email'>Phone: {phone}</p>
      
      <div>
        <p className='nav-p'>
          If you prefer, you can also contact me via{' '}
          <a href={`mailto:${email}`}>{email}</a> or call me at{' '}
          <a href={`tel:${phone}`}>{phone}</a>.
        </p>
      </div>
    </div>

    <div className="icons">
        <a className='a-icons' href="https://www.facebook.com/profile.php?id=100009178280138" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" /> 
        </a>
        <a className='a-icons' href="https://www.instagram.com/shaikhmaria151/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" /> 
        </a>
        <a className='a-icons' href="https://www.linkedin.com/in/maria-adil-813479243/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" /> 
        </a>
        <a className='a-icons' href="https://github.com/mariaadil" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      </div>
    </section>
  );
};

export default ContactInfo;
