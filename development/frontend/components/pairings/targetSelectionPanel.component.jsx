import React, { useState, useEffect } from "react"

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

    const toggleButtonClicked = (element) => {
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

    return <>
        <div className={className}>
            {fRadioSelected
                ? chickens.map((chicken) => {
                    return chicken.sex === 'M'
                        && <button key={chicken._id}
                            className="male-chickens target-score"
                            onClick={(element) => toggleButtonClicked(element)}> {chicken._id} <span className="t-span"></span></button>
                })
                : mRadioSelected
                && chickens.map((chicken) => {
                    return chicken.sex === 'F'
                        && <button key={chicken._id}
                            className="female-chickens target-score"
                            onClick={(element) => toggleButtonClicked(element)}> {chicken._id} <span className="t-span"></span></button>
                })
            }
        </div>
    </>
}

export default SelectionPanel