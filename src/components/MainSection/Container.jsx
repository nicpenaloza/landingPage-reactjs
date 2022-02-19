import React from 'react';
import Button from '../Button/Button';
import './style.css';

export default function Container() {
  return (
    <div className='mainsection'>
      <video src='/videos/video.mp4' autoPlay loop muted />
      <div className='mainsection-container'>
        <h1 className='text title'>Welcome</h1>
        <p className='text'>We are EPSILON the best technological solution on the market</p>
        <div className='mainsection-btns'>
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
