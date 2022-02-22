import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/fontawesome-free-solid';
import possibilityImage from '../../assets/undraw_possibility.svg';
import './possibility.css';

const Possibility = () => (
  <div className="react__possibility section__padding" id="possibility">
    <div className="react__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="react__possibility-content">
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <h4>Request Early Access to Get Started
        <FontAwesomeIcon className="react__possibility-arrow" icon={faArrowRight} />
      </h4>
    </div>
  </div>
);

export default Possibility;
