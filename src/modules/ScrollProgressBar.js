import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDown } from '@fortawesome/free-solid-svg-icons'
import '../styles/App.css';


const ScrollProgressBar = ({ targetRef }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (targetRef.current) {
      const targetPosition = targetRef.current.getBoundingClientRect().top + window.pageYOffset;
      const scrollTop = window.pageYOffset;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const effectiveScrollHeight = windowHeight - targetPosition;
      const scrolledFromTarget = scrollTop - targetPosition;

      if (scrolledFromTarget > 0) {
        const scrollPercent = (scrolledFromTarget / effectiveScrollHeight) * 100;
        setScrollProgress(scrollPercent);
      } else {
        setScrollProgress(0);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className={`progress-scroll ${scrollProgress >= 100 ? 'shadow-box' : ''}`}>
      <div className='icon-absolute'>
        <FontAwesomeIcon icon={faCircleDown} shake size="2xl" style={{ color: "#5bade8", animationDuration: "2s" }} />
      </div>
      <div
        className={`progress-thumb` }
        style={{ height: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;