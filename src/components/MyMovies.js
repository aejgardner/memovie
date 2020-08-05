import React, { forwardRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMovie, deleteMovie, resetMovies } from '../data/actions';
import Header from './Header';
import Button from './Button';
import ResetMoviesDialogue from './Dialogues/ResetMoviesDialogue';
import MovieFormDialogue from './Dialogues/MovieFormDialogue';
// material ui components
import Container from '@material-ui/core/Container';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import MaterialTable from 'material-table'

// material ui table icons
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const MyMovies = () => {
    // assigning useDispatch hook to variable
    const dispatchAction = useDispatch();
    // brings in the movies array from global state
    const movies = useSelector(state => state.movies)

    // initial state of movie form dialogue
    const [movieFormOpen, setMovieFormOpen] = useState(false);
    // handles opening the 'add movie' form dialogue
    const handleMovieFormOpen = () => {
        setMovieFormOpen(true);
    };

    // handles closing the 'add movie' form dialogue
    const handleMovieFormClose = () => {
        setMovieFormOpen(false);
    };

    // initial state of reset movies warning dialogue
    const [resetWarningOpen, setResetWarningOpen] = useState(false);
    // opens warning dialogue when user clicks reset movies
    const handleResetWarningOpen = () => {
        setResetWarningOpen(true);
    };

    // closes warning dialogue when user clicks to reset or go back
    const handleResetWarningClose = () => {
        setResetWarningOpen(false);
    };

    // clears all movies from user's movie table
    const handleReset = () => {
        dispatchAction(resetMovies());
        setResetWarningOpen(false);
    }

    // dispatches updated movie info to global state
    const handleUpdateMovie = (data) => {
        dispatchAction(updateMovie(data));
    }

    // deletes specific movie from global state
    const handleDeleteMovie = (index) => {
        dispatchAction(deleteMovie(index));
    }

    // this is where the table columns and their headers are set 
    const [columns] = useState([
        { title: 'Movie Title', field: 'movieTitle' },
        { title: 'Director', field: 'movieDirector' },
        { title: 'Genre', field: 'movieGenre' },
        { title: 'Starring', field: 'movieStarring' },
        {
            title: 'Watched',
            field: 'movieWatched',
            type: 'boolean',
            render: rowData => (
                rowData.movieWatched ? 'Yes' : 'No'
            )
        },
    ]);

    return (
        <div className="background-image">
            <Container width="70%">
                <Header>My Movies</Header>
                {/* movie form that opens when user clicks 'add movie' button */}
                <MovieFormDialogue
                    handleMovieFormClose={handleMovieFormClose}
                    movieFormDialogueOpen={movieFormOpen}
                />
                <div className="center">
                    <Button
                        className="btn btn-secondary mt-1 mb-1"
                        onClick={handleMovieFormOpen}
                    >Add a movie
                    </Button>
                </div>
                {/* displays movie table only if there are any movies in global state */}
                {movies.length ?
                    <>
                        {/* dialogue that opens when user clicks 'reset movies' button */}
                        <ResetMoviesDialogue
                            handleClose={handleResetWarningClose}
                            handleReset={handleReset}
                            open={resetWarningOpen}
                        />
                        {/* material ui table that displays user's movies */}
                        <MaterialTable
                            title="Movie List"
                            icons={tableIcons}
                            columns={columns}
                            data={movies}
                            editable={{
                                onRowUpdate: (newMovies, oldMovies) =>
                                    new Promise((resolve) => {
                                        const dataUpdate = [...movies];
                                        const index = oldMovies.tableData.id;
                                        dataUpdate[index] = newMovies;
                                        handleUpdateMovie([...dataUpdate])

                                        resolve();
                                    }),
                                onRowDelete: oldMovies =>
                                    new Promise((resolve) => {
                                        const index = oldMovies.tableData.id;
                                        handleDeleteMovie(index)
                                        resolve()
                                    }),
                            }}
                            options={{
                                actionsColumnIndex: -1,
                                headerStyle: {
                                    fontSize: "1rem",
                                },
                                rowStyle: {
                                    fontFamily: "Roboto, Helvetica, Arial",
                                    fontSize: "1rem",
                                    backgroundColor: rowData =>
                                        (
                                            rowData.movieWatched ? 'green' : 'none'
                                        )
                                }
                            }}
                        />
                        <div className="center mt-1">
                            <Button className="btn btn-secondary" onClick={handleResetWarningOpen}>Reset</Button>
                        </div>
                    </>
                    :
                    <h2 className="center movie-table__h2">No movies! Add some by clicking the button above</h2>
                }
            </Container>
        </div>
    )
}

export default MyMovies;