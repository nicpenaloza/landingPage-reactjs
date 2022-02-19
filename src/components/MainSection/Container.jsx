import React from 'react';
import Button from '../Button/Button';
import './style.css';

export default function Container() {
  return (
    <div className='mainsection'>
      <video src='/videos/video.mp4' autoPlay loop muted />
      <div className='mainsection-container'>
        <h1 className='text title'>Welcome</h1>
        <p className='text main-text text-center'>
          We are <span className='emphasis'>EPSILON</span> the best technological solution on the market. <br/>
          Our mission is to provide solutions to society through science and innovation.
        </p>
        <div className='mainsection-btn'>
          <Button
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
        </div>
      </div>
    </div>
  )
}
