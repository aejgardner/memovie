import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetMovies } from '../../data/actions';
import Button from '../Button';
import Movie from '../Movie';
import ResetMoviesDialogue from '../Dialogues/ResetMoviesDialogue';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const MovieTable = ({ movies }) => {
    const [open, setOpen] = useState(false);

    // opens warning dialogue when user clicks reset movies
    const handleClickOpen = () => {
        setOpen(true);
    };

    // closes warning dialogue when user clicks to reset or go back
    const handleClose = () => {
        setOpen(false);
    };

    // handles movie table reset functionality
    const dispatch = useDispatch();

    const handleReset = () => {
        dispatch(resetMovies());
        setOpen(false);
    }

    // inline styling for table head cells
    const tableHeadStyling = {
        fontSize: "1.1rem",
        padding: "0.8rem 0"
    }
    return (
        <>
            {movies.length ?
                <>
                    <ResetMoviesDialogue
                        handleClose={handleClose}
                        handleReset={handleReset}
                        open={open}
                    />
                    <TableContainer
                        component={Paper}
                        className="movie__table__container"
                    >
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={tableHeadStyling} align="center">Movie title</TableCell>
                                    <TableCell style={tableHeadStyling} align="center">Director</TableCell>
                                    <TableCell style={tableHeadStyling} align="center">Genre</TableCell>
                                    <TableCell style={tableHeadStyling} align="center">Starring</TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {movies.map((movie, i) => (
                                    <Movie movie={movie} key={i} index={i} />
                                ))}
                            </TableBody>
                        </Table>
                        <Button className="btn" onClick={handleClickOpen}>Reset</Button>
                    </TableContainer>
                </>
                :
                <h2 className="center mt-1">No movies! Add some by clicking the button above</h2>
            }
        </>
    );
}

export default MovieTable;