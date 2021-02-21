import {initStore} from '../src/redux/store/store'
import {Provider} from 'react-redux'
import{useRouter} from 'next/router'
import { searchMovie } from '../src/redux/action';

export default function MyApp({ Component, pageProps }) {
    const router =  useRouter()
    if(router.query.searchQuery!==undefined){
        initStore.dispatch(searchMovie(router.query.searchQuery));
    }
    return (
        <Provider store={initStore}>            
            <Component {...pageProps} />            
        </Provider>
    )
}
