// Builds permissions panel.
import React, { useState, useEffect } from 'react';
import '../../styles/history.stylesheet.scss'
import read from '../../../backend/api/crud/read';

const Histogram = () => {
    const [userActivityArr, setUserActivityArr] = useState();
    const [history, setHistory] = useState();

    useEffect(() => {
        setHistory(await read.fetchCollection("history"));
    }, []);

    history.forEach(entry => {
        // count number of same user id's and save in array to later plot them in a histogram
    });

    return (
        <>
            <div className='HistogramPlot'>
            </div>
        </>
    )
}
export default Histogram;