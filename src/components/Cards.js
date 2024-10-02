import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.png'
              text='Try Industry 4.0 classes for free'
              label='More details'
              path='/products'
            />
            <CardItem
              src='images/img-2.png'
              text='Try Industry 4.0 classes for free'
              label='More details'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.png'
              text='Try Industry 4.0 classes for free'
              label='More details'
              path='/products'
            />
            <CardItem
              src='images/img-4.png'
              text='Try Industry 4.0 classes for free'
              label='More details'
              path='/blogs'
            />
            <CardItem
              src='images/img-8.png'
              text='Try Industry 4.0 classes for free'
              label='More details'
              path='/contactus'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
