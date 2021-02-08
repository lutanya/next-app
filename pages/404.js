import React from 'react';
import {StyledNotFound} from '../src/components/NotFound/StyledNotFound';
//import notFoundImage from './NotFound.png';
import {StyledButton} from '../src/components/Button/StyledButton.js';
import {Footer} from '../src/components/Footer/Footer';
import {Logo} from '../src/components/Logo/Logo';
import Link from 'next/link';
import  Router  from 'next/router';
export default function ErrorPage(){
    return (
        <StyledNotFound>
          <Logo/>
          <span>
            <p>Page Not Found</p>
            <StyledButton onClick={()=>Router.push("/")} empty>GO BACK TO HOME</StyledButton>
          </span>
          <Footer/>
        </StyledNotFound>
      );
}