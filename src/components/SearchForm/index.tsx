import React, { Component } from 'react'
import { IconButton, SearchContainer, SearchInput } from './styles'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { connect } from 'react-redux';
import { searchMovie, fetchMovies } from '../../state/action-creators';
import { Link, Navigate } from 'react-router-dom';

type Props = {
    searchMovie: (movie: MovieState | any) => void
    fetchMovies: (movie: MovieState | any) => void
    states: MovieState,
    navigate: any
}

export class SearchForm extends Component<Props, MovieState> {
    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.searchMovie(e.target.value);

    };

    onSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        this.props.fetchMovies(this.props.states.search);
        this.props.navigate("/search");
    };

    render() {
        return (
            <SearchContainer >
                <IconButton >
                    <AiOutlineSearch size={22} />
                </IconButton>
                <form id="searchForm" onSubmit={this.onSubmit} >
                    <SearchInput onChange={this.onChange} />
                </form>
            </SearchContainer>
        )
    }
}

const mapStateToProps = (state: any) => ({
    states: state.moviesStore
});

export default connect(
    mapStateToProps,
    { searchMovie, fetchMovies }
)(SearchForm);

