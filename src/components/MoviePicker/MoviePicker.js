import React, { Component } from 'react';
import Header from "../Header";
import Button from '../Button';
import FilterGroup from "../FilterGroup";
import PickedMovieDialogue from "../Dialogues/PickedMovieDialogue";
import NoMoviesDialogue from "../Dialogues/NoMoviesDialogue";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { randomFilteredMovie } from '../../functions/randomFilteredMovie'

class MoviePicker extends Component {
    constructor(props) {
        super(props);

        // the filters array here stores all of the filters the user ticks when picking a movie
        this.state = {
            filters: [],
            movieDialogueOpen: false,
            warningDialogueOpen: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handlePickMovie = this.handlePickMovie.bind(this);
        this.handleMovieDialogueOpen = this.handleMovieDialogueOpen.bind(this);
        this.handleMovieDialogueClose = this.handleMovieDialogueClose.bind(this);
        this.handleWarningDialogueOpen = this.handleWarningDialogueOpen.bind(this);
        this.handleWarningDialogueClose = this.handleWarningDialogueClose.bind(this);
    }

    // opens the dialogue containing the picked movie
    handleMovieDialogueOpen() {
        this.setState({
            movieDialogueOpen: true,
        });
    };

    // closes the dialogue containing the picked movie
    handleMovieDialogueClose() {
        this.setState({
            movieDialogueOpen: false,
        });
    };

    // this function shows the warning (no movies match criteria) dialogue
    handleWarningDialogueOpen() {
        this.setState({ warningDialogueOpen: true });
    };

    // closes the warning (no movies match criteria) dialogue
    handleWarningDialogueClose() {
        this.setState({ warningDialogueOpen: false });
    };

    // this function adds or removes a filter requirement from the filters array depending on whether the user is checking or unchecking it
    handleChange(e) {
        let filterItem = e.target.value

        if (this.state.filters.indexOf(filterItem) === -1) {
            this.setState({
                filters: [...this.state.filters, filterItem]
            })
        } else if (this.state.filters.indexOf(filterItem) > -1) {
            this.setState({
                filters: this.state.filters.filter(filter => {
                    return filter !== filterItem
                })
            })
        }
    }

    // as the 'watched' property for each movie is a boolean, this function is necessary to compare whether the boolean exists in the filters array (whether the user is filtering by watched or unwatched movies)
    handleWatched(bool) {
        if (this.state.filters.indexOf(bool) === -1) {
            this.setState({
                filters: [...this.state.filters, bool]
            })
        } else if (this.state.filters.indexOf(bool) > -1) {
            this.setState({
                filters: this.state.filters.filter(filter => {
                    return filter !== bool
                })
            })
        }
    }

    // handles picking a random movie with or without filter requirements
    handlePickMovie() {
        let { filters } = this.state
        let { movies } = this.props

        let pickedMovie = {}

        // if there are filter requirements, pick a random movie based on them, else just pick a random movie 
        if (filters.length) {
            pickedMovie = randomFilteredMovie(filters, movies)
        } else {
            pickedMovie = movies[Math.floor(Math.random() * movies.length)]
        }

        // dispatches picked movie to reducer 
        this.props.handlePickedMovie(pickedMovie)

        // if user has watched all movies but filters by unwatched (or vice versa), error dialogue will show
        pickedMovie === undefined ? this.handleWarningDialogueOpen() : this.handleMovieDialogueOpen()
    }

    render() {
        const { movieDialogueOpen, warningDialogueOpen } = this.state
        const { movies } = this.props

        // the new sets in these variables remove duplicate filters, so each filter is only listed once
        const directorsNoDuplicates = [...new Set(movies.map(movie => movie.movieDirector))];
        const genresNoDuplicates = [...new Set(movies.map(movie => movie.movieGenre))];
        // this flattens the array of starring arrays into one array
        const starringNoDuplicates = [...new Set(movies.map(movie => movie.movieStarring).flat())];

        return (
            <div className="background-image">
                <Container width="70%">
                    <PickedMovieDialogue handleClose={this.handleMovieDialogueClose} open={movieDialogueOpen} />
                    <NoMoviesDialogue handleClose={this.handleWarningDialogueClose} open={warningDialogueOpen} />
                    <Header>Movie Picker</Header>
                    <h3 className="center mp__h3">Pick a random movie from your movies, with or without filters</h3>
                    <h4 className="center mp__h4" >Filters</h4>
                    <Paper style={{ overflowX: "auto" }} elevation={4}>
                        <div className="filters">

                            {/* directors filter group */}
                            <FilterGroup
                                heading="Directors"
                                filtersNoDuplicates={directorsNoDuplicates}
                                onChange={(e) => this.handleChange(e)}
                            />

                            {/* genres filter group */}
                            <FilterGroup
                                heading="Genres"
                                filtersNoDuplicates={genresNoDuplicates}
                                onChange={(e) => this.handleChange(e)}
                            />

                            {/* starring filters group */}
                            <FilterGroup
                                heading="Starring"
                                filtersNoDuplicates={starringNoDuplicates}
                                onChange={(e) => this.handleChange(e)}
                            />

                            {/* watched before filters group */}
                            <div className="filters__group">
                                <h4 className="filters__heading">Watched before</h4>
                                <div
                                    className="flex-align-center"
                                    style={{ width: "100%", justifyContent: "space-around" }}
                                >
                                    <div className="flex-align-center">
                                        <label style={{ fontFamily: "Roboto, sans-serif" }} htmlFor="yes">Yes</label>
                                        <input
                                            id="yes"
                                            type="checkbox"
                                            onChange={() => this.handleWatched(true)}
                                            style={{ marginLeft: "0.3rem" }}
                                        />
                                    </div>
                                    <div className="flex-align-center">
                                        <label style={{ fontFamily: "Roboto, sans-serif" }} htmlFor="no">No</label>
                                        <input
                                            id="no"
                                            type="checkbox"
                                            onChange={() => this.handleWatched(false)}
                                            style={{ marginLeft: "0.3rem" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="center mt-1" >
                            <Button onClick={this.handlePickMovie}>Pick movie</Button>
                        </div>
                    </Paper>
                </Container>
            </div>
        );
    }
}

export default MoviePicker;