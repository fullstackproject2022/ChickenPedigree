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



    const getObject = async (id) => {
        let obj = []
        await read.fetchOne('chicken', id)
            .then(response => obj.push(response))
        return obj[0]
    }


    const setScores = async () => {
        // const source = Array.from(document.getElementsByClassName("source-score"))
        let source = fRadioSelected ? fSelected : mRadioSelected && mSelected
        let sourceObj = []
        let fParent = []
        let mParent = []
        let halfSiblings = []
        let fullSiblings = []
        await getObject(Number(source)).then(o => sourceObj.push(o))
        sourceObj = sourceObj[0]
        console.log(sourceObj)
        sourceObj.fParent != 0 && await getObject(Number(sourceObj.fParent)).then(o => fParent.push(o)) // get parent object
        sourceObj.mParent != 0 && await getObject(Number(sourceObj.mParent)).then(o => mParent.push(o)) // get parent object

        fParent = fParent[0]
        mParent = mParent[0]

        const temp = []
        fParent && temp.push(fParent.children)
        mParent && temp.push(mParent.children)

        if (fParent && mParent) {
            fullSiblings = [... new Set(temp[0].filter(c => temp[1].includes(c)))]
            halfSiblings = [... new Set(temp[0].concat(temp[1]))].filter(c => !fullSiblings.includes(c))
        } else halfSiblings = temp[0]

        console.log("full", fullSiblings)
        console.log("half", halfSiblings)

        const target = Array.from(document.getElementsByClassName("target-score"))
        if (source) {
            console.log(source, target)
            target.forEach(async t => {
                let result = '';
                await getScore(
                    sourceObj = sourceObj,
                    fParent = fParent,
                    mParent = mParent,
                    halfSiblings = halfSiblings,
                    fullSiblings = fullSiblings,
                    target = Number(t.innerText)
                ).then(res => result = res)
                const span = t.children[0]
                span.innerText = result
                let color = ''
                switch (result) {
                    case '< 25%': color = 'green'; break;
                    case '≥ 25%': color = 'orange'; break;
                    case '≥ 50%', ' 100%': color = 'red'; break;
                }
                span.style.color = color;
            })

        }
    }
    // const setScores = () => {
    //     // const source = Array.from(document.getElementsByClassName("source-score"))
    //     let source = fRadioSelected ? fSelected : mRadioSelected && mSelected
    //     const target = Array.from(document.getElementsByClassName("target-score"))
    //     if (source) {
    //         // console.log(source, target)
    //         target.forEach(async t => {
    //             let result = '';
    //             await getScore(Number(source.target.innerText), Number(t.innerText)).then(res => result = res)
    //             const span = t.children[0]
    //             span.innerText = result
    //             let color = ''
    //             switch (result) {
    //                 case '< 25%': color = 'green'; break;
    //                 case '≥ 25%': color = 'orange'; break;
    //                 case '≥ 50%', ' 100%': color = 'red'; break;
    //             }
    //             span.style.color = color;
    //         })

    //     }
    // }

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