import React from 'react';
//import './ModalConductor.css';
import EditMenu from '../EditMenu/EditMenu';
import {connect} from 'react-redux';
import DeleteMovieForm from '../DeleteMovieForm/DeleteMovieForm';
import {
  closeModal,
  handleAddMovie,
  handleEditMovie,
  handleDeleteMovie,
} from '../../redux/action';
import {
  ADD,
  SUBMIT,
  MENU,
  EDIT,
  SAVE, DELETE,
  ADD_SUCCESS_MODUL,
} from '../../util/constants';
import PropTypes from 'prop-types';

import {GENRES} from '../../redux/reducers/constants';
import FormikForm from '../FormikForm/FormikForm';


export function isFormValid(movie, handleFormErrors) {
  const errors = [];
  let formIsValid = true;

  if (movie[GENRES] == null || movie[GENRES].length == 0) {
    formIsValid = false;
    errors[GENRES] = 'Select at least one genre to proceed';
    handleFormErrors(errors);
  }

  return formIsValid;
}

const ModalConductor = (
    {
      currentModal,
      show,
      movie,
      handleCloseModal,
      handleAddMovie,
      handleEditMovie,
      handleDeleteMovie,
    },
) => {
  switch (currentModal) {
    case ADD:
      return (
        <Modal open={show} onClose={handleCloseModal} title='ADD MOVIE'>
          <FormikForm
            submitLable={SUBMIT}
            handleFormSubmit={handleAddMovie}
          />
        </Modal>
      );
    case MENU:
      return <EditMenu />;
    case EDIT:
      return (
        <Modal open={show} onClose={handleCloseModal} title='EDIT MOVIE'>
          <FormikForm
            movie={movie}
            submitLable={SAVE}
            handleFormSubmit={handleEditMovie}
          />
        </Modal>
      );
    case DELETE:
      return (
        <Modal open={show} onClose={handleCloseModal} title='DELETE MOVIE'>
          <DeleteMovieForm movie={movie} handleDeleteMovie={handleDeleteMovie} />
        </Modal>
      );
    case ADD_SUCCESS_MODUL:
      return (
        <Modal open={show} onClose={handleCloseModal} title='CONGRATULATIONS !' tick>
          <center>The movie has been added to <br />database successfully</center>
        </Modal>
      );
    default:
      return null;
  }
};

ModalConductor.propTypes = {
  currentModal: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleAddMovie: PropTypes.func.isRequired,
  handleEditMovie: PropTypes.func.isRequired,
  handleDeleteMovie: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  currentModal: state.modal.modalType,
  show: state.modal.show,
  movie: state.modal.movie,
});

/**
* @param dispatch
*/
function mapDispatchToProps(dispatch) {
  return {
    handleCloseModal: () => dispatch(closeModal()),
    handleAddMovie: (movie) => dispatch(handleAddMovie(movie)),
    handleEditMovie: (movie) => dispatch(handleEditMovie(movie)),
    handleDeleteMovie: (event, movie) => {
      event.preventDefault(); dispatch(handleDeleteMovie(movie));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalConductor);


