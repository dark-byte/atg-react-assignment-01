import React from 'react';

const Hero = ({heroImg, title, followers}) => {

  return (
    <div className='hero-container' style={{backgroundImage: `url(${heroImg})`}}>
        <div className="title">
            <h3>{title}</h3>
            <p>{followers} Computer Engineers follow this</p>
        </div>
    </div>
  );
}

export default Hero;
