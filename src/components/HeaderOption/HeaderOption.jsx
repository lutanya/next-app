import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { StyledButton } from '../Button/StyledButton';
import { SearchArea, StyledAddButton } from '../Header/StyledHeader.js';
import { openModalByType } from '../../redux/action';

const HeaderOption = ({ handleOpenModal }) => {
  const [input, setInput] = useState('');

  function handleKeypress(event) {
    if (event.key === 'Enter') {
      Router.push(`/search/${input}`);
    }
  }

  return (
    <>
      <StyledButton position={StyledAddButton} onClick={() => handleOpenModal('add')}>
        +ADD MOVIE
      </StyledButton>
      <p>FIND YOUR MOVIE</p>
      <SearchArea>
        <input
          value={input}
          onInput={(e) => setInput(e.target.value)}
          onKeyPress={handleKeypress}
          placeholder="What do you want to watch?"
          id="searchParam"
        />
        <StyledButton colored onClick={() => Router.push(`/search/${input}`)}>
          SEARCH
        </StyledButton>
      </SearchArea>
    </>
  );
};

/**
 * @param dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    handleOpenModal: (type) => dispatch(openModalByType(type)),
  };
}

export default connect(null, mapDispatchToProps)(HeaderOption);

HeaderOption.propTypes = {
  className: PropTypes.string,
  handleOpenModal: PropTypes.func.isRequired,
};
