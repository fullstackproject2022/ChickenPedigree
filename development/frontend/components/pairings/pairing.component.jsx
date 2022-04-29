import React, { StrictMode, useEffect, useState } from "react"
import read from "../../../backend/api/crud/read";
import '../../styles/pairing.stylesheet.scss'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const PairingWindow = () => {
    const [years, setYears] = useState([])
    const [chickens, setChickens] = useState([])
    const [fRadio, setFRadio] = useState(true)
    const [mRadio, setMRadio] = useState(!fRadio)
    const [fSelected, setFSelected] = useState(null)
    const [mSelected, setMSelected] = useState(null)
    const [errMsg, setErrMsg] = useState('')

    const toggleBySex = () => {
        setFRadio(!fRadio)
        setMRadio(!mRadio)
    }

    const toggleButtonClicked = (element) => {
        // console.log(fSelected || mSelected)
        if (fSelected && (element.target.innerText == fSelected.target.innerText)) {
            setFSelected(null)
            element.target.className = 'female-chickens'
            return
        }
        else if (mSelected && (element.target.innerText == mSelected.target.innerText)) {
            setMSelected(null)
            element.target.className = 'male-chickens'
            return
        }

        const isFemale = element.target.className === 'female-chickens'
        const isMale = element.target.className === 'male-chickens'

        if (fSelected && isFemale) { fSelected.target.className = 'female-chickens' }
        else if (mSelected && isMale) { mSelected.target.className = 'male-chickens' }


        if (isFemale) {
            setFSelected(element)
            element.target.className = 'selected-female'
        }
        else if (isMale) {
            setMSelected(element)
            element.target.className = 'selected-male'
        }

    }

    const makePair = () => {
        if (!fSelected || !mSelected) {
            return setErrMsg(`Error, missing male or female chicken`)
        }
        setErrMsg('')
    }

    const removePair = (female, male) => {
        console.log("removing pair!")
    }

    useEffect(() => {
        read.fetchCollection("chicken")  // returns it in object format
            .then(result => {
                var temp = []
                result.filter(chicken => {
                    !temp.includes(chicken.batchYear) && temp.push(chicken.batchYear)
                })
                setYears(temp.sort().reverse())
                setChickens(result)
            })
    }, [])

    if (years.length > 0) {
        return <>
            <StrictMode>
                <div className="year">
                    <div className="years-collected all-years">
                        <input type="checkbox" value="All" />
                        <label>All</label>
                    </div>
                    {years.map((y) => {
                        return <div className="years-collected" key={y * 2}>
                            <input type="checkbox" key={y * 3} />
                            <label key={y}>{y}</label>
                        </div>
                    })}
                </div>
                <div>
                    <span>
                        <input type="radio" value="Female" className="radio-female" onChange={toggleBySex} checked={fRadio} />
                        <label>By female</label>
                    </span>
                    <span>
                        <input type="radio" value="Male" className="radio-male" onChange={toggleBySex} checked={mRadio} />
                        <label>By male</label>
                    </span>
                </div>
                <div className="errMsg">
                    <label>{errMsg}</label>
                </div>
                <section className="selection-panel">
                    <div className="filter-subjects">
                        {fRadio
                            ? chickens.map((chicken) => {
                                return chicken.sex === 'F'
                                    && <button
                                        key={chicken._id}
                                        className="female-chickens"
                                        onClick={(element) => toggleButtonClicked(element)}> {chicken._id} </button>
                            })
                            : mRadio
                            && chickens.map((chicken) => {
                                return chicken.sex === 'M'
                                    && <button key={chicken._id}
                                        className="male-chickens"
                                        onClick={(element) => toggleButtonClicked(element)}> {chicken._id} </button>
                            })
                        }

                    </div>
                    <div className="target-subjects">
                        {fRadio
                            ? chickens.map((chicken) => {
                                return chicken.sex === 'M'
                                    && <button key={chicken._id}
                                        className="male-chickens"
                                        onClick={(element) => toggleButtonClicked(element)}> {chicken._id} </button>
                            })
                            : mRadio
                            && chickens.map((chicken) => {
                                return chicken.sex === 'F'
                                    && <button key={chicken._id}
                                        className="female-chickens"
                                        onClick={(element) => toggleButtonClicked(element)}> {chicken._id} </button>
                            })
                        }
                    </div>
                    <div className="arrow-buttons">
                        <button onClick={makePair}>
                            <FaArrowRight />
                        </button>
                        <button onClick={() => removePair()}>
                            <FaArrowLeft />
                        </button>
                    </div>
                    <div className="matched-pairs">
                        {/* 
                        
                            !--TODO 
                                Couple pairings in this div
                                Next, filter chickens so only the selected years show
                                Next, work on the algorithm that computes the relevant %s
                            
                        */}
                    </div>


                </section>


            </StrictMode>
        </>

    }
}

export default PairingWindow