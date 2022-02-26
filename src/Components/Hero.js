import React from 'react';
import { useGlobalContext } from '../context';
import phone from '../images/phone.svg';
const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <div className='hero-info'>
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of businesses of all sizes—from startups to large
            enterprises—use Stripe’s software and APIs to accept payments, send
            payouts, and manage their businesses online.
          </p>
          <div className='btn-container'>
            <button className='btn dark-btn'>Start now</button>
            <button className='btn light-btn'>Contact sales</button>
          </div>
        </div>
        <div className='hero-img'>
          <img src={phone} alt='phone' className='phone-img' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
