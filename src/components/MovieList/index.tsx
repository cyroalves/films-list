import React, { Component } from 'react';
import { useSelector } from 'react-redux';

import { connect } from 'react-redux';
import { getAllMovies } from '../../state/action-creators';
import MovieCard from '../MovieCard';
import { Container, Error, List, Wrapper } from './styles';

const MovieList = () => {
    const movies = useSelector(getAllMovies);
    let moviesArray = movies.results;
    let renderMovies,
        renderShows = "";

    renderMovies =
        moviesArray ? (
            moviesArray.map((movie: any, index: number) => (
                <MovieCard key={index} data={movie} />
            ))
        ) : (
            <Error>
                <h3>Something went wrong</h3>
            </Error>
        );

    return (
        <Wrapper>
            <List>
                <h2>Resultados: </h2>
                <Container>{renderMovies}</Container>
            </List>
        </ Wrapper>
    );

}

const mapStateToProps = (state: any) => ({
    states: state.movies
});

export default MovieList;