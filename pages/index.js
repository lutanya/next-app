import App from "../src/components/App/App";
import React from 'react';
import HeaderOption from '../src/components/HeaderOption/HeaderOption';

export default function Index() {
  const headerComponent = <HeaderOption />;
  return <App component={headerComponent}/>
}
