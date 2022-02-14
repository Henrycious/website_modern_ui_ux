import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something Amazing with OpenAI
        </h1>
        <p>
          Yet bet any for travelling assistance indulgenve unemploxes the attachment.
          Party we years to oder allow asked of anything.
        </p>
        <div className='gpt__header-content_input'>
          <input type="email" placeholder="Your Email Adress">          </input>
          <button type="button">Get Started!</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p>1600 people requested access a visit in the last 24 hours</p>
        </div>
        <div className='gpt3__header-image'>
          <img src={ai} alt='ai'/>
        </div>
      </div>
    </div>
  )
};



export default Header;
