import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {connect} from 'react-redux';
import {openModalByType} from '../../redux/action/index';
import {StyledEditMenu} from './StyledEditMenu';
import PropTypes from 'prop-types';

const ITEM_HEIGHT = 48;

function LongMenu({handleOpenModal, movie}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = (type, movie) => {
    handleOpenModal(type, movie);
    setAnchorEl(null);
  };

  return (
    <StyledEditMenu>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem onClick={() => handleOpen('edit', movie)}>Edit</MenuItem>
        <MenuItem onClick={() => handleOpen('delete', movie)}>Delete</MenuItem>
      </Menu>
    </StyledEditMenu>
  );
}

LongMenu.propTypes = {
  handleOpenModal: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
};

/**
 * @param dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    handleOpenModal: (type, movie) => dispatch(openModalByType(type, movie)),
  };
}


export default connect(null, mapDispatchToProps)(LongMenu);

