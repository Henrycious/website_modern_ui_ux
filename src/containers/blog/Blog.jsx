import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="react__blog section__padding" id="blog">
    <div className="react__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="react__blog-container">
      <div className="react__blog-container_groupA">
        <Article imgUrl={blog01} date="Dec 20, 2021" text="React is the future. Let us exlore how it is?" />
      </div>
      <div className="react__blog-container_groupB">
        <Article imgUrl={blog02} date="Nov 27, 2021" text="Introducing the New JSX Transform. What’s a JSX Transform?" />
        <Article imgUrl={blog03} date="Jan 20, 2022" text="What’s coming in React 18?" />
        <Article imgUrl={blog04} date="Sep 24, 2021" text="How to try React 18 Alpha today?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="Projected React 18 release timeline. When will React 18 be released?" />
      </div>
    </div>
  </div>
);

export default Blog;
