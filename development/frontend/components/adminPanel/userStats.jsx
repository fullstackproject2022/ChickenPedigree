// Builds permissions panel.
import React, { useState, useEffect } from 'react';
import '../../styles/admin.stylesheet.scss'
import read from '../../../backend/api/crud/read';
import Plotly from 'plotly.js-dist'

const UserStats = () => {
    const [history, setHistory] = useState();

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        await read.fetchCollection("history") // returns it in object format
            .then(result => setHistory(result))
    }

    const showChart = async e => {
        e.preventDefault();
        var idArr = []
        history.forEach(entry => {
            idArr.push(entry.userID);
        });
        idArr.sort(); // sorts the results

        //returns object with id and number of times its counted
        const counts = idArr.reduce((acc, value) => ({
            ...acc,
            [value]: (acc[value] || 0) + 1
        }), {});

        // build a bar chart from the object
        var x = Object.keys(counts);
        var y = Object.values(counts);
        var trace = {
            x: x,
            y: y,
            type: 'bar',
            marker: {
                color: 'rgb(255, 121, 198);',
            }
        };
        //189, 147, 249
        var data = [trace];
        var layout = {
            paper_bgcolor: 'rgba(0, 0, 0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)',
            title: 'Number of pairs made per user',
            font: {
                family: 'Raleway, sans-serif',
                color: 'white'
            },
            showlegend: false,
            xaxis: {
                tickangle: -15,
                tickcolor: '#eee'
            },
            yaxis: {
                zeroline: false,
                gridwidth: 2,
                tickcolor: '#eee'
            },
            bargap: 0.05,
            barmode: 'stack'
        };
        var config = { responsive: true }
        Plotly.newPlot('BarPlot', data, layout, config);
    }

    return (
        <>
            <button onClick={showChart}>Click here to show the stats</button>
            <div className='BarPlotWrapper'>
                <div className='BarPlot' id='BarPlot'></div>
            </div>

        </>
    )
}
export default UserStats;