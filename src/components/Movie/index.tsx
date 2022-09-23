import React, { useEffect, useState } from "react";
import "./styles";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import MovieCard from "../MovieCard";
import ImageNotFound from '../../assets/image-not-found.png';
import { Container, Rating, Section } from "./styles";

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState<IMovie>();
    let poster;

    const getMovie = async (url: string) => {
        const res = await fetch(url);
        const data = await res.json();
        let poster = `${process.env.REACT_APP_IMG}${data.poster_path}`;
        if (!data.poster_path) {
            poster = ImageNotFound
        } else {
            poster = `${process.env.REACT_APP_IMG}${data.poster_path}`;
        }
        setMovie(data);
    };


    useEffect(() => {
        const movieUrl = `${process.env.REACT_APP_API}${id}?api_key=${process.env.REACT_APP_API_KEY}`;
        getMovie(movieUrl);
    }, []);

    return (
        <div>
            {movie && (
                <>

                    <Section>
                        <Container>
                            <MovieCard data={movie} />
                        </Container>
                        <Rating>
                            <div>
                                IMDB Rating: <i className="fa fa-star"></i> : {movie.vote_average}
                            </div>
                            <div>
                                Year: <i className="fa fa-calendar"></i> : {movie.release_date}
                            </div>
                            <div>
                                Description: <i className="fa fa-calendar"></i> : {movie.overview}
                            </div>
                        </Rating>
                    </Section>
                </>
            )}
        </div>
    );
};

export default MovieDetail;