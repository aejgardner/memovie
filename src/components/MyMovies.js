import React, { forwardRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMovie, deleteMovie, resetMovies } from '../data/actions/api';
import Header from './Header';
import Button from './Button';
import ResetMoviesDialogue from './Dialogues/ResetMoviesDialogue';
import MovieFormDialogue from './Dialogues/MovieFormDialogue';
// material ui components
import Container from '@material-ui/core/Container';
import AddBox from '@material-ui/icons/AddBox';
import ImportExportIcon from '@material-ui/icons/ImportExport';
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
import { makeStyles } from '@material-ui/core/styles';

// mui's makestyles hook, allows for custom classnames in material ui components
const useStyles = makeStyles({
    arrow: {
        transition: "all 0.2s linear",
        marginLeft: "0.2rem"
    },
    font5: {
        fontSize: "5rem"
    }
});

const MyMovies = () => {
    // assigning useDispatch hook to variable
    const dispatchAction = useDispatch();
    // brings in the necessary global state properties
    const movies = useSelector(state => state.movie.movies)
    const user = useSelector(state => state.auth.user)

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
        dispatchAction(resetMovies(user));
        setResetWarningOpen(false);
    }

    // dispatches updated movie info to global state
    const handleUpdateMovie = (data) => {
        dispatchAction(updateMovie(data));
    }

    // deletes specific movie from global state
    const handleDeleteMovie = (id) => {
        dispatchAction(deleteMovie(id));
    }

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
        SortArrow: forwardRef((props, ref) => <ImportExportIcon ref={ref}
            className={classes.arrow}
        />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };

    // storing custom classes in classes variable
    const classes = useStyles();

    // this is where the table columns and their headers are set 
    const [columns] = useState([
        { title: 'Movie Title', field: 'movieTitle' },
        { title: 'Director', field: 'movieDirector' },
        { title: 'Genre', field: 'movieGenre' },
        { title: 'Cast', field: 'movieCast' },
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
        <Container width="50%">
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
                    {/* make it so sort button always shows so columns are properly aligned */}
                    <MaterialTable
                        title="Movie List"
                        icons={tableIcons}
                        columns={columns}
                        data={movies}
                        editable={{
                            onRowUpdate: (newMovie, oldMovies) =>
                                new Promise((resolve) => {
                                    const dataUpdate = [...movies];
                                    const index = oldMovies.id;
                                    dataUpdate[index] = newMovie;
                                    handleUpdateMovie(newMovie);

                                    resolve();
                                }),
                            onRowDelete: oldMovies =>
                                new Promise((resolve) => {
                                    const id = oldMovies.id;
                                    handleDeleteMovie(id)
                                    resolve()
                                }),
                        }}

                        options={{
                            actionsColumnIndex: -1,
                            headerStyle: {
                                fontSize: "1rem",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                            },
                            rowStyle: {
                                fontFamily: "Roboto, Helvetica, Arial",
                                fontSize: "1rem",
                                textAlign: "center",
                            },
                            cellStyle: {
                                textAlign: "center",
                            }
                        }}
                    />
                    <div className="center mt-1">
                        <Button className="btn btn-secondary mb-1" onClick={handleResetWarningOpen}>Reset</Button>
                    </div>
                </>
                :
                <h2 className="center movie-table__h2">No movies! Add some by clicking the button above</h2>
            }
        </Container>
    )
}

export default MyMovies;