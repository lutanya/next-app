import { initStore } from '../src/redux/store/store'
import {Provider} from 'react-redux';

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={initStore}>
            <Component {...pageProps} />            
        </Provider>
    )
}