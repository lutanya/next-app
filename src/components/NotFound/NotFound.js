import React from 'react';
import {StyledNotFound} from './StyledNotFound';
import notFoundImage from './NotFound.png';
import {StyledButton} from '../Button/StyledButton.js';
import {Footer} from '../Footer/Footer';
import {Logo} from '../Logo/Logo';

export default function NotFound() {
  return (
    <StyledNotFound>
      <Logo/>
      <span>
        <p>Page Not Found</p>
        <img src={notFoundImage} />
        <StyledButton onClick={()=>window.location = '/'} empty>GO BACK TO HOME</StyledButton>
      </span>
      <Footer/>
    </StyledNotFound>
  );
}
