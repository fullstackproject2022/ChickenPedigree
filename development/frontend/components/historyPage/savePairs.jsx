import React, {useState, useEffect} from 'react'
import jwtDecode from 'jwt-decode';
import create from '../../../backend/api/crud/create';
import '../../styles/history.stylesheet.scss'

const SavePairs =({pairs}) => {
    const [user_id, setUser_id] = useState();

    useEffect(() => {
        try {
            let token = sessionStorage.getItem("token");
            let decoded = jwtDecode(token);
            setUser_id(decoded._id)
        } catch (err) {
            console.log(err);
        };
    }, []);

    const uploadPairs = () => {
        console.log(pairs)
        pairs.forEach(pair => {
            const historyDetails = {
                userID: user_id,
                fChickenID: pair.female,
                mChickenID: pair.male
            };
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
