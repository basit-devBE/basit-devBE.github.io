import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import SocialLinks from '../components/SocialLinks';
import Markdown from 'markdown-to-jsx';
import example1 from '../markdownfiles/example.md';

const Blog = () => {
  const MarkdownContent = ({ filePaths }) => {
    const [postContent, setPostContent] = useState([]);

    useEffect(() => {
      Promise.all(
        filePaths.map((filePath) =>
          import(`../markdownfiles/${filePath}`).then((res) =>
            fetch(res.default).then((response) => response.text())
          )
        )
      ).then((contents) => setPostContent(contents));
    }, [filePaths]);

    return (
      <>
        {postContent.map((content, index) => (
          <Markdown key={index} className='mt-16'>
            {content}
          </Markdown>
        ))}
      </>
    );
  };

  const markdownFiles = ['example.md', 'example2.md']; // Add more file paths as needed

  return (
    <>
      <NavBar />
      <SocialLinks />
      <div className='h-screen w-full bg-grey'>
        <div className='max-w-4xl mx-auto px-4 py-8 container'>
          <h1 className='text-3xl font-bold text-center mt-14 mb-4'>BLOG</h1>

            
            <MarkdownContent filePaths={markdownFiles} />

            
        </div>
      </div>
    </>
  );
};

export default Blog;
