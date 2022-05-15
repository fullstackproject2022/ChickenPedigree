import React, { useEffect } from "react"
import { getScore, sourceData } from "../../../backend/bin/pairingScore"


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
            let src = [source]
            src.forEach(async s => {
                let srcProperties = []
                await sourceData(s)
                    .then(res => srcProperties.push(...res))
                    .catch(err => console.log(err.message))
                target.forEach(async t => {
                    let result = '';
                    await getScore(srcProperties[0],
                        srcProperties[1],
                        srcProperties[2],
                        srcProperties[3],
                        srcProperties[4],
                        Number(t.innerText))
                        .then(res => result = res)
                    const span = t.children[0]
                    span.innerText = result
                    let color = ''
                    switch (result) {
                        case '< 25%': color = 'green'; break;
                        case '≥ 25%': color = 'orange'; break;
                        case '≥ 50%': case ' 100%': color = 'red'; break;
                    }
                    span.style.color = color;
                })
            })
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
            {console.log(chickens)}
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