import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../Logo/Logo';
import { StyledHeader } from './StyledHeader.js';

export const Header = ({ className, component }) => (
  <StyledHeader className={className}>
    <Logo />
    {component}
    <style jsx>
      {`
        header{
            position: relative;
            margin-bottom: 10px;
        }`}
    </style>
  </StyledHeader>
);

Header.propTypes = {
  className: PropTypes.string,
};
