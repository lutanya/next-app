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
   console.log(ctx.query.searchQuery)
     // here I add some data to the store
     await initStore.dispatch(searchMovie(ctx.query.searchQuery));
     if(initStore.getState().filter.loading){

        console.log("mpvies",initStore.getState().filter.movies)
     }
     return {props:{}}
  }