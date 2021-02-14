import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';

/**
 * @return {Element} footer of the app
 */
export default function Footer({ className }) {
  return (
    <footer className={className}>
      <Logo />
      <style jsx>
        {`
        footer{
          font-size: 130%;
          background: #424242;
          text-align: center;
          position: relative;
          width: 100%;
          float: left;
          margin-bottom: 65px;
          padding: 2.5% 0;        
        }`}
      </style>
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};
