import React from 'react';
import BindDropDown from '../BindDropDown/BindDropDown';
import FilterButton from '../FilterButton/FilterButton';
import {StyledUl} from './StyledUl';
import {StyledLabel} from './StyledLabel';

const values = [
  {name: 'RELEASE DATE', id: 0},
  {name: 'TITLE', id: 1},
  {name: 'VOTE AVERAGE', id: 2},
];

/**
 * @return {Element} search movies by genre pane
 */
export function SearchPane() {
  return (
    <>
      <StyledUl>
        <li><FilterButton genre='ALL' /></li>
        <li><FilterButton genre='DOCUMENTARY' /></li>
        <li><FilterButton genre='COMEDY' /></li>
        <li><FilterButton genre='HORROR' /></li>
        <li><FilterButton genre='CRIME' /></li>
      </StyledUl>
      <StyledLabel>
        SORT BY
        <BindDropDown values={values} />
      </StyledLabel>
    </>
  );
}

