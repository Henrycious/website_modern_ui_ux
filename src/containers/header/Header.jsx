import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/undraw_react.svg';
import './header.css';

const Header = () => (
  <div className="react__header section__padding" id="home">
    <div className="react__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with ReactJS</h1>
      <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
      <form action="#" className="react__header-content__input">
        <input type="email" placeholder="Your Email Address" required />
        <button type="submit">Get Started</button>
      </form>
      <div className="react__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="react__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
