import React, { useEffect } from "react"
import read from "../../../backend/api/crud/read"
import getScore from "../../../backend/bin/pairingScore"


const SelectionPanel = (
    {
        fRadioSelected,
        mRadioSelected,
        chickens,
        fSelected,
        mSelected,
        setFSelected,
        setMSelected,
        className
    }) => {

    useEffect(() => {
        setScores()
    }, [fSelected])

    const setScores = () => {
        // const source = Array.from(document.getElementsByClassName("source-score"))
        let source = fRadioSelected ? fSelected : mRadioSelected && mSelected
        const target = Array.from(document.getElementsByClassName("target-score"))
        if (source) {
            target.forEach(t => getScore(Number(source.target.innerText), t))
        }
    }

    const toggleButtonClicked = (element) => {
        // unselects
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

        const isFemale = /female\-chickens/.test(element.target.className)
        const isMale = /male\-chickens/.test(element.target.className)

        // return current selected to their classNames.
        if (fSelected && isFemale) { fSelected.target.className = 'female-chickens' }
        else if (mSelected && isMale) { mSelected.target.className = 'male-chickens' }

        // console.log(element.target.className)
        // console.log(isFemale || isMale)
        if (isFemale) {
            setFSelected(element)
            element.target.className = 'selected-female'
        }
        else if (isMale) {
            setMSelected(element)
            element.target.className = 'selected-male'
        }

        // setScores()
    }

    return <>
        <div className={className}>
            {fRadioSelected
                ? chickens.map((chicken) => {
                    return chicken.sex === 'F'
                        && <button
                            key={chicken._id}
                            className="female-chickens source-score"
                            onClick={(element) => toggleButtonClicked(element)}> {chicken._id} </button>
                })
                : mRadioSelected
                && chickens.map((chicken) => {
                    return chicken.sex === 'M'
                        && <button key={chicken._id}
                            className="male-chickens source-score"
                            onClick={(element) => toggleButtonClicked(element)}> {chicken._id} </button>
                })
            }

        </div>
    </>
}

export default SelectionPanel