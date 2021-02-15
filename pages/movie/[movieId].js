
import React from 'react';
import App from "../../src/components/App/App";
import MovieDetails from '../../src/components/MovieDetails/MovieDetails';
import axios from 'axios';

export default function MoviePage({ movie }) {
    const movieComponent = <MovieDetails movie={movie} />;
    return <App component={movieComponent} />
};

export async function getServerSideProps(ctx)  {
    const responce = await axios.get(`http://localhost:4000/movies/${ctx.query.movieId}`)
    const movie = await responce.data
    return {props:{movie}}
}