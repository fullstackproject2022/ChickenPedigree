// Builds permissions panel.
import React, { useState, useEffect } from 'react';
import '../../styles/history.stylesheet.scss'
import HistoryTable from './historyTable/history_table.jsx';
import create from '../../../backend/api/crud/create';
import read from '../../../backend/api/crud/read';
import jwtDecode from 'jwt-decode';

const HistoryPanel = () => {
    const [user_id, setUser_id] = useState();
    const [f_chicken_id, setF_chicken_id] = useState();
    const [m_chicken_id, setM_chicken_id] = useState();

    useEffect(() => {
        try {
            var token = sessionStorage.getItem("token");
            var decoded = jwtDecode(token);
            setUser_id(decoded._id)
        } catch (err) {
            console.log(err);
        };
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        const historyDetails = {
            userID: user_id,
            fChickenID: f_chicken_id,
            mChickenID: m_chicken_id
        };
        // validate entered values
        if (f_chicken_id === m_chicken_id) {
            console.log("The given female and male have the same id's!");
            return;
        }
        if (f_chicken_id.match(/^[0-9]*$/) == null && f_chicken_id != "") {
            console.log("The female chickens id must consist of digits and should not be left empty.");
            return;
        }
        if (m_chicken_id.match(/^[0-9]*$/) == null && m_chicken_id != "") {
            console.log("The male chickens id must consist of digits and should not be left empty.");
            return;
        }

        // check that genders are correct (the data has a bunch of unknown sexes, no error will be thrown for these)
        const f_chicken = await read.fetchOne("chicken", f_chicken_id);
        const m_chicken = await read.fetchOne("chicken", m_chicken_id);
        if (f_chicken.sex == "M") {
            console.log("The given female chicken is a male!");
            return;
        }
        if (m_chicken.sex == "F") {
            console.log("The given male chicken is a female!");
            return;
        }
        create.createPairingHistory(historyDetails);
        document.getElementsByClassName("historyForm")[0].reset();
    }
    return (
        <>
            <div className='HistoryWrapper'>
                <div className='HistoryForm'>
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
                </div>
                <div className='HistoryTable'>
                    <HistoryTable />
                </div>
            </div>

        </>
    )
}
export default HistoryPanel;