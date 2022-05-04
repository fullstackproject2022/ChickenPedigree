import React, { useState } from 'react'
import '../../styles/aboveTable.stylesheet.scss'
import Button from '../standAloneComponents/button.jsx'
import read from '../../../backend/api/crud/read';


const AboveTable = ({ setSelectedFilter, setSelectedDetails }) => {
    const [chosenFilter, setChosenFilter] = useState("_id");
    const [chosenDetail, setChosenDetail] = useState();
    const [inputValue, setInputValue] = useState("");
    const hasNumber = /^[\d]+$/

    function checkInput(input) {
        if (hasNumber.test(input)) {
            setChosenDetail(Number(input))
        }
        else {
            setChosenDetail(input)
        }
    }

    const userInput = (event) => {
        setInputValue(event.target.value)
        checkInput(event.target.value)
    }


    const goBtn = () => {
        setSelectedFilter(chosenFilter)
        setSelectedDetails(chosenDetail)
    }

    const resetBtn = () => {
        setInputValue("")
    }



    return (
        <div className='aboveTable-wrapper'>
            <div className='radioBtns'>
                <label className='radio'>View</label>
                <input type="radio" id='viewbtn' name="choice" value="view" defaultChecked></input>
                <label className='radio'>Edit</label>
                <input type="radio" id='editbtn' name="choice" value="edit"></input>
            </div>
            <div className='hspan'></div>
            <div className='filter-wrapper'>
                <div className='filter'>
                    <select name="option" className="drop-down-menu" value={chosenFilter}
                        onChange={(e) => setChosenFilter(e.target.value)} >
                        <option value="_id">Chicken ID</option>
                        <option value="batchYear">Year</option>
                        <option value="fParent">Mother ID</option>
                        <option value="mParent">Father ID</option>
                        <option value="sex">Sex</option>
                        <option value="status">Status</option>
                    </select>
                </div>
                <div className='search-box'>
                    <input type="text" onChange={userInput} value={inputValue} className='search' placeholder='Search' />
                </div>
                <div className='buttons'>
                    <Button text="Go" onClick={goBtn} className='go-button' />
                    <Button text="Reset" onClick={resetBtn} className='reset-button' />
                </div>
            </div>
        </div>
    )
}

export default AboveTable
