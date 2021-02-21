import App from "../../src/components/App/App";
import React from 'react';
import HeaderOption from '../../src/components/HeaderOption/HeaderOption';
import { initStore } from '../../src/redux/store/store'
import { searchMovie } from '../../src/redux/action';
export default function Search() {
  const headerComponent = <HeaderOption />
  return <App component={headerComponent} />
}

export async function getServerSideProps(ctx) {
  const searchQuery = ctx.query.searchQuery;
  await initStore.dispatch(searchMovie(searchQuery));

  return { props: { searchQuery } }
}