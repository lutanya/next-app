import { initStore } from '../src/redux/store/store'
import {Provider} from 'react-redux';
export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={initStore}>

            <Component {...pageProps} />
            <style jsx>{`
                 body{
                      background-color: #555555;
                      margin: 0px;
                      font-family: system-ui;
                 }
            `}
            </style>
        </Provider>
    )
}