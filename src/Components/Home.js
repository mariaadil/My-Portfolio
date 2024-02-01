// About.js

import React from 'react';
import '../App.css';

function Home() {
  return (
    <section id='home' className='home-section'>
      <div className="home-container">
        <div className='home-content'>
          <div className='home-image-container'>
            <img className='home-image' src="https://media.licdn.com/dms/image/D4D03AQFp5gzpr9QXUA/profile-displayphoto-shrink_800_800/0/1705879448407?e=1711584000&v=beta&t=CxNWDKLAEWZN4RizOyXlrCbUKVJDOJu1f0_GgR8qCMw" alt="Your Name" />
          </div>
          <div className='home-text'>
            <h1 className='home-name'>Maria Adil</h1>
            <h2 className='home-designation'>Software Developer</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
