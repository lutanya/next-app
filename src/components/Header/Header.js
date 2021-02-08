import React from 'react';
import { Logo } from '../Logo/Logo';
import { StyledHeader } from './StyledHeader.js';
import PropTypes from 'prop-types';

export const Header = ({ className, component }) => {
  return (
    <StyledHeader className={className}>
      <Logo />
      {component}
      <style jsx>{`
        header{
            position: relative;
            margin-bottom: 10px;
        }`
      }
      </style>
    </StyledHeader>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};
