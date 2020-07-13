import React, { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';

const FilterGroup = ({ heading, filtersNoDuplicates, onChange }) => {
    const [showFilters, setShowFilters] = useState(false)
    const [rotateChevron, setRotateChevron] = useState(false)

    // handles showing and hiding filters and rotating chevron
    const handleFilters = () => {
        setShowFilters(!showFilters);
        setRotateChevron(!rotateChevron);
    }

    // rotates chevron 180 degrees when clicked to show or hide filters
    const rotate = rotateChevron ? "rotate(180deg)" : "rotate(0)"

    return (
        <div className="filters__group">
            <div className="filters__heading flex-align-center center">
                <h4>{heading}</h4>
                <ExpandMoreIcon
                    className="filters__chevron"
                    style={{ transform: rotate, transition: "all 0.2s linear" }}
                    onClick={handleFilters}
                />
            </div>
            {filtersNoDuplicates.length ?
                <Collapse in={showFilters}>
                    <Paper elevation={4} style={{ padding: "1rem" }}>
                        <div className="flex-align-center center" style={{ flexDirection: "column" }}>
                            {filtersNoDuplicates.map((filter, i) => {
                                return (
                                    <div key={i} className="flex-align-center mb-1">
                                        <label style={{ fontFamily: "Roboto, sans-serif" }} htmlFor="filter">{filter}</label>
                                        <input
                                            id="filter"
                                            type="checkbox"
                                            value={filter}
                                            onChange={onChange}
                                            style={{ marginLeft: "0.3rem" }}
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