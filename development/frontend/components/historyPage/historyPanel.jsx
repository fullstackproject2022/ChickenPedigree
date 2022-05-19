// Builds permissions panel.
import React from 'react';
import '../../styles/history.stylesheet.scss'
import HistoryTable from '../table/history.table.jsx';

const HistoryPanel = () => {

    return (
        <>
            <div className='HistoryWrapper'>
                <div className='HistoryTable'>
                    <HistoryTable />
                </div>
            </div>

        </>
    )
}
export default HistoryPanel;