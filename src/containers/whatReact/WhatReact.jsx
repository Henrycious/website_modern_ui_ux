import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatReact.css';

const WhatReact = () => (
  <div className="react__whatreact section__margin" id="whatreact">
    <div className="react__whatreact-feature">
      <Feature title="What is React?" text="React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components." />
    </div>
    {/** Heading */}
    <div className="react__whatreact-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>
    {/** Container */}
    <div className="react__whatreact-container">
      <Feature title="Components" text="React code is made of entities called components. These components are reusable and must be formed in the SRC folder following the Pascal Case as its naming conversion." />
      <Feature title="Features" text="JSX is a JavaScript syntactic extension. It's a term used in React to describe how the user interface should seem. You can write HTML structures in the same file as JavaScript code by utilizing JSX." />
      <Feature title="Virtual DOM" text="The Virtual DOM is React's lightweight version of the Real DOM. Real DOM manipulation is substantially slower than virtual DOM manipulation." />
    </div>
  </div>
);

export default WhatReact;
