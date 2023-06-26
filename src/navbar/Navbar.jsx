import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import { pagesName } from './navBarLinkData';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sticky = 88;
      setIsSticky(window.scrollY > sticky);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <ul className={`${style.navbar} ${isSticky ? style.sticky : ''}`}>
      {pagesName.map((ele,index) => (
             <Link key={index} className={style.link} to={ele.to}><li>{ele.name}</li></Link>   
      ))}
      </ul>
    </div>
  );
};

export default Navbar;
