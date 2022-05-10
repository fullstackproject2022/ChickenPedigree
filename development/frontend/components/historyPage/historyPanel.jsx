// Builds permissions panel.
import React, { useState } from 'react';
import '../../styles/history.stylesheet.scss'
import HistoryTable from './historyTable/history_table.jsx';
import create from '../../../backend/api/crud/create';

const HistoryPanel = () => {
    const [user_id, setUser_id] = useState();
    const [f_chicken_id, setF_chicken_id] = useState();
    const [m_chicken_id, setM_chicken_id] = useState();


    const handleSubmit = async e => {
        e.preventDefault();
        const historyDetails = {
            userID: user_id,
            fChickenID: f_chicken_id,
            mChickenID: m_chicken_id
        };

        create.createPairingHistory(historyDetails);
    }
    return (
        <>
            <div className='HistoryWrapper'>
                <div className='HistoryForm'>
                    <h3>Create a pairing history here</h3>
                    <form className="historyForm" onSubmit={handleSubmit}>
                        <div><label>User id</label>
                            <input className="floater"
                                type="text"
                                onChange={e => setUser_id(e.target.value)}
                            />
                        </div>
                        <div><label>F chicken id</label>
                            <input className="floater"
                                type="text"
                                onChange={e => setF_chicken_id(e.target.value)}
                            />
                        </div>
                        <div><label>M chicken id</label>
                            <input className="floater"
                                type="text"
                                onChange={e => setM_chicken_id(e.target.value)}
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className='HistoryTable'>
                    <HistoryTable />
                </div>
            </div>
        </>
    )
}
export default HistoryPanel;