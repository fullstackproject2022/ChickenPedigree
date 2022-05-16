// Builds permissions panel.
import React from 'react';
import '../../styles/history.stylesheet.scss'
import HistoryTable from './historyTable/history_table.jsx';

const HistoryPanel = () => {

    return (
        <div className='HistoryWrapper'>
            {/* <div className='HistoryForm'>
                <h3>Create a pairing history here</h3> <br />
                <form className="historyForm" onSubmit={handleSubmit}>
                    <div><label>Female chicken id</label>
                        <input className="floater"
                            type="text"
                            placeholder='Female chicken id'
                            onChange={e => setF_chicken_id(e.target.value)}
                        />
                    </div>
                    <div><label>Male chicken id</label>
                        <input className="floater"
                            type="text"
                            placeholder='Male chicken id'
                            onChange={e => setM_chicken_id(e.target.value)}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div> */}
            <div className='HistoryTable'>
                <HistoryTable />
            </div>
        </div>
    )
}
export default HistoryPanel;