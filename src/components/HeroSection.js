import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h2>Collaborate – Share - Learn - Experience</h2>
      <p1>With Rabindra Sah</p1>
      <p2>
 Chief Engineer - Strategic Projects at Tata Technologies | Global Practice - Automotive & Industrial Heavy Machinery | Creating 
Industry Business Solutions for Digital & Physical Transformation in Product & Manufacturing
      </p2>
      
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button> */}
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={''}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
