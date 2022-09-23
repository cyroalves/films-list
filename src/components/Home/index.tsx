import React, { Component, useEffect, useState } from 'react';

import { connect } from 'react-redux';
import MovieCard from '../MovieCard';
import MovieList from '../MovieList';
import { Container, List, Wrapper } from './styles';

const Home = () => {
    const [topMovies, setTopMovies] = useState<any>([]);

    const getTopRatedMovies = async (url: string) => {
        const res = await fetch(url);
        const data = await res.json();
        setTopMovies(data.results);
    };



    useEffect(() => {
        const topRatedUrl = `${process.env.REACT_APP_API}top_rated?api_key=${process.env.REACT_APP_API_KEY}`;
        getTopRatedMovies(topRatedUrl);
    }, []);

    console.log(topMovies);

    return (
        <div>
            {topMovies && (
                <>

                    <Wrapper>
                        <h3>Destaques: </h3>
                        <List>
                            {topMovies.length > 0 &&
                                topMovies.map((movie: IMovie) => <MovieCard data={movie} />)}
                        </List>
                    </Wrapper>
                </>
            )}
        </div>

    );
}

export default Home;
