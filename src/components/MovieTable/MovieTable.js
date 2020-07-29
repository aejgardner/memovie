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
import { makeStyles } from '@material-ui/core/styles';

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

    // mui's makestyles hook, allows for custom classnames in material ui components
    const useStyles = makeStyles({
        tableHeadCell: {
            fontSize: "1.1rem",
            fontWeight: "bold",
            whiteSpace: "nowrap"
        },
    });

    // storing custom classes in classes variable
    const classes = useStyles()

    return (
        <>
            {console.log(movies)}
            {movies.length ?
                <>
                    <ResetMoviesDialogue
                        handleClose={handleClose}
                        handleReset={handleReset}
                        open={open}
                    />
                    <TableContainer
                        component={Paper}
                        className="movie-table__container"
                    >
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        className={classes.tableHeadCell}
                                        align="center"
                                    >Movie title
                                    </TableCell>
                                    <TableCell
                                        className={classes.tableHeadCell}
                                        align="center"
                                    >Director
                                    </TableCell>
                                    <TableCell
                                        className={classes.tableHeadCell}
                                        align="center"
                                    >Genre
                                    </TableCell>
                                    <TableCell
                                        className={classes.tableHeadCell}
                                        align="center"
                                    >Starring
                                    </TableCell>
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
                        <div className="center mt-1">
                            <Button className="btn" onClick={handleClickOpen}>Reset</Button>
                        </div>
                    </TableContainer>
                </>
                :
                <h2 className="center movie-table__h2">No movies! Add some by clicking the button above</h2>
            }
        </>
    );
}

export default MovieTable;