import React, { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';

const FilterGroup = ({ heading, filtersNoDuplicates, onChange }) => {
    const [showFilters, setShowFilters] = useState(false)
    const [rotateChevron, setRotateChevron] = useState(false)

    // handles showing and hiding filters and rotating chevron
    const handleFilters = () => {
        setShowFilters(!showFilters);
        setRotateChevron(!rotateChevron);
    }

    // mui's usestyles hook, allows for custom classnames in material ui components
    const useStyles = makeStyles({
        paper: {
            padding: "1rem"
        },
        roboto: {
            fontFamily: "Roboto, sans-serif"
        },
        rotateChev: {
            transform: rotateChevron ? "rotate(180deg)" : "rotate(0)",
            transition: "all 0.2s linear"
        },
        flexColumn: {
            flexDirection: "column"
        },
        marginLeft: {
            marginLeft: "0.3rem"
        }
    });

    // storing custom classes in classes variable
    const classes = useStyles();

    return (
        <div className="filters__group">
            <div className="filters__heading flex-align-center center">
                <h4>{heading}</h4>
                <ExpandMoreIcon
                    className={classes.rotateChev + " filters__chevron"}
                    onClick={handleFilters}
                />
            </div>
            {filtersNoDuplicates.length ?
                <Collapse in={showFilters}>
                    <Paper elevation={4} className={classes.paper}>
                        <div className={classes.flexColumn + " flex-align-center center"}>
                            {filtersNoDuplicates.map((filter, i) => {
                                return (
                                    <div key={i} className="flex-align-center mb-1">
                                        <label className={classes.fontFamily} htmlFor="filter">{filter}</label>
                                        <input
                                            id="filter"
                                            type="checkbox"
                                            value={filter}
                                            onChange={onChange}
                                            className={classes.marginLeft}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </Paper>
                </Collapse>
                :
                null
            }
        </div>
    );
};

export default FilterGroup;