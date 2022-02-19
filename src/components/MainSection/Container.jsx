import React from 'react';
import Button from '../Button/Button';
import './style.css';

export default function Container() {
  return (
    <div className='mainsection'>
      <div className='mainsection-container'>
        <video src='/videos/video.mp4' autoPlay loop muted/>
        <h1 className='text title'>Welcome</h1>
        <p className='text'>The best technological solutions on the market</p>
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
