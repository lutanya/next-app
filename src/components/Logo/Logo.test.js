import React from 'react';
import {render} from '@testing-library/react';
import {Logo} from './Logo';

describe('Logo',()=>{
    test('Render Logo snapshot', ()=>{
        const {asFragment} = render(<Logo/>) ;
        expect(asFragment(<Logo/>)).toMatchSnapshot();
    })
})

