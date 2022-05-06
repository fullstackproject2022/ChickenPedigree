import React from "react"
import '../../styles/selectionPanel.stylesheet.scss'

const SelectionPanel = (
    {
        fRadioSelected,
        mRadioSelected,
        chickens,
        fSelected,
        mSelected,
        setFSelected,
        setMSelected
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

    return <>
        <div className="filter-subjects">
            {fRadioSelected
                ? chickens.map((chicken) => {
                    return chicken.sex === 'F'
                        && <button
                            key={chicken._id}
                            className="female-chickens"
                            onClick={(element) => toggleButtonClicked(element)}> {chicken._id} </button>
                })
                : mRadioSelected
                && chickens.map((chicken) => {
                    return chicken.sex === 'M'
                        && <button key={chicken._id}
                            className="male-chickens"
                            onClick={(element) => toggleButtonClicked(element)}> {chicken._id} </button>
                })
            }

        </div>
        <div className="target-subjects">
            {fRadioSelected
                ? chickens.map((chicken) => {
                    return chicken.sex === 'M'
                        && <button key={chicken._id}
                            className="male-chickens"
                            onClick={(element) => toggleButtonClicked(element)}> {chicken._id} </button>
                })
                : mRadioSelected
                && chickens.map((chicken) => {
                    return chicken.sex === 'F'
                        && <button key={chicken._id}
                            className="female-chickens"
                            onClick={(element) => toggleButtonClicked(element)}> {chicken._id} </button>
                })
            }
        </div>
    </>
}

export default SelectionPanel