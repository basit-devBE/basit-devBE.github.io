import React from 'react';
import NavBar from '../components/NavBar';
import SocialLinks from '../components/SocialLinks';
import  nextjs from '../assets/nextjs.png'
import react from '../assets/react.png'
import nodejs from '../assets/node.png'
import { FaPython } from "react-icons/fa";

const About = () => {
  return (
    <>
      <NavBar />
       <div className='h-screen w-full bg-grey'>
        <section className="max-w-4xl mx-auto px-4 py-8 ">
          <h1 className="text-3xl font-bold text-center mb-4 ">About Us</h1>
          <h1 className="text-5xl font-bold text-center mb-4 text-slate-400"> About Me</h1>
          <p className="text-2xl text-gray-600">
            Hello, I am <span className="font-bold">Mohammed Basit Abdul</span>,
            I am a full stact developer with passion for creating and learning new softtware engineering methods as I gorw in this .
            I have experience in web development, mobile development and cloud technologies. I am always looking for new opportunities to learn and grow.
            I am well veresed in th following languages
          </p>
          <ul className='list-disc list-inside'>
            <li className='decoration-solid'>
              <img src={nextjs} alt="nextjs" className="w-12 h-12 inline-block" />
              Nextjs
            </li>
            <li className='list-disc list-inside'>
              <img src={react} alt="nextjs" className='w-12 h-12 inline-block' />
              Reactjs
            </li>
            <li className='list-disc list-inside'></li>
            <img src={nodejs} alt= 'nodejs' className='w-12 h-12 inline-block'></img>
                Nodejs
            </ul>
            <li className='lsit-disc list-inside'>
              <FaPython className='w-12 h-12 inline-block' />
                    Django
                </li>

          <p className='text-2xl text-gray-600'>
            I am also a student of the <span className='decoration-solid  text-2xl'>Kwame Nkrumah Univeristy of Science and Technology </span>currently in my 3rd year and aiming to complete hopefully by the year 2025.
            My passsion in learning is unmatched and i hope I can suceed in my journey to the man of ny dreams.
          </p>
        </section>
        </div>
        <SocialLinks />
      
    </>
  );
};

export default About;
