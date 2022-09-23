import React from "react";
import { Link } from "react-router-dom";
import "./styles";
import { Bottom, Info, Item, Top } from "./styles";
import ImageNotFound from '../../assets/image-not-found.png';

const MovieCard = (props: any) => {
    const { data } = props;
    let poster = `${process.env.REACT_APP_IMG}${data.poster_path}`;
    if (!data.poster_path) {
        poster = ImageNotFound
    }
    return (

        <Item>
            <Link to={`/movie/${data.id}`}>
                <div className="card-inner">
                    <Top>
                        <img src={poster} alt={data.original_title} />
                    </Top>
                    <Bottom>
                        <Info>
                            <h4>{data.original_title}</h4>
                            <p>{data.release_date}</p>
                        </Info>
                    </Bottom>
                </div>
            </Link>
        </Item>

    );

};

export default MovieCard;