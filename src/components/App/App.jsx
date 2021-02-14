import React from 'react';
import Header from '../Header/Header';
import { SearchPane } from '../SearchPane/SearchPane';
import Footer from '../Footer/Footer';
import { ErrorBoundary } from '../Errorboundary/ErrorBoundary';
import { StyledApp, StyledMain } from './StyledApp';

import MovieList from '../MovieList/MovieList';
import ModalConductor from '../ModalConductor/ModalConductor';

export default function App({ component, searchQuery }) {
  return (
    <StyledApp>
      <Header className="header" component={component} />
      <ErrorBoundary>
        <StyledMain>
          <SearchPane />
          <MovieList searchQuery={searchQuery} />
        </StyledMain>
      </ErrorBoundary>
      <Footer className="footer" />
      <ModalConductor />
    </StyledApp>
  );
}
