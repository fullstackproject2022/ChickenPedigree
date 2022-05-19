import React, { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode';
import create from '../../../backend/api/crud/create';
import read from '../../../backend/api/crud/read';
import '../../styles/history.stylesheet.scss'

const SavePairs = ({ pairs }) => {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        try {
            let token = sessionStorage.getItem("token");
            setData(jwtDecode(token));
        } catch (err) {
            console.log(err);
        };
    }, []);

    const setData = async (decToken) => {
        let user = []
        const id = decToken._id
        await read.fetchOne("users", mongoose.Types.ObjectId(id)).then(res => user.push(res))
        setUserData(user[0])
    }

    const uploadPairs = () => {
        pairs.forEach(pair => {
            const historyDetails = {
                userID: userData._id,
                username: userData.username,
                fChickenID: pair.female,
                mChickenID: pair.male
            };
            console.log("hist", historyDetails)
            create.createPairingHistory(historyDetails);
        })
    }

    return (
        <div>
            <button onClick={uploadPairs} className="save-pairs">Save Pairs</button>
        </div>
    )
}

export default SavePairs
