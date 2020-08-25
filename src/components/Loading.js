import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../data/actions/api';

const Loading = ({ children }) => {
    const dispatchAction = useDispatch();

    const loaded = useSelector(state => state.loaded)
    const user = useSelector(state => state.user)

    useEffect(() => {
        dispatchAction(getMovies(user));
    }, []);

    return loaded ? children : (
        <div className="loader">Loading...</div>
    );
};

export default Loading;