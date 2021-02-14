import App from "../../src/components/App/App";
import{useRouter} from 'next/router'
import React from 'react';
import HeaderOption from '../../src/components/HeaderOption/HeaderOption';
import { initStore } from '../../src/redux/store/store'
import { searchMovie } from '../../src/redux/action';
export default function Search(){
    const router =  useRouter()
    const headerComponent = <HeaderOption />
    return <App component={headerComponent} searchQuery={router.query.searchQuery}/>
  }

  export async function getServerSideProps(ctx) {
   await initStore.dispatch(searchMovie(ctx.query.searchQuery));
   return {props:{}}
}