import React, { useContext } from 'react';
import { themeContext } from "../../Context";
import './Blog.css'

const Blog = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (
        <div className='blog' id="blog">
            {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }} >My Blog</span>
      <span>Comming Soon...</span>
        </div>
    );
};

export default Blog;