import React, { useEffect, useState } from "react"
import read from "../../../backend/api/crud/read";
import '../../styles/pairing.stylesheet.scss'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import pairingIcon from '../../styles/assets/icon-egg.png'
import FSelectionPanel from './FSelectionPanel.component.jsx'
import MSelectionPanel from './MSelectionPanel.component.jsx'


const PairingWindow = () => {
    const [years, setYears] = useState([])
    const [chickens, setChickens] = useState([])
    const [fRadio, setFRadio] = useState(true)
    const [mRadio, setMRadio] = useState(!fRadio)
    const [fSelected, setFSelected] = useState(null)
    const [mSelected, setMSelected] = useState(null)
    const [errMsg, setErrMsg] = useState('')
    const [pairs, setPairs] = useState([])
    const [panelText1, setPanelText1] = useState('')
    const [panelText2, setPanelText2] = useState('')
    // const [pairSelected, setPairSelected] = useState(null)

    useEffect(() => {
        setPanelText1(fRadio ? 'Female' : 'Male')
        setPanelText2(fRadio ? 'Male' : 'Female')
    }, [fRadio])


    const createSelectionPanel = (filterBy) => {
        return filterBy === "F"
            ? <FSelectionPanel className={"filter-subjects"} fRadioSelected={fRadio} mRadioSelected={mRadio} chickens={chickens} fSelected={fSelected} mSelected={mSelected} setFSelected={setFSelected} setMSelected={setMSelected} />
            : <MSelectionPanel className={"target-subjects"} fRadioSelected={fRadio} mRadioSelected={mRadio} chickens={chickens} fSelected={fSelected} mSelected={mSelected} setFSelected={setFSelected} setMSelected={setMSelected} />

    }

    const toggleBySex = () => {
        setFRadio(!fRadio)
        setMRadio(!mRadio)
    }

    const makePair = () => {
        if (!fSelected && !mSelected) {
            return setErrMsg('Error, missing both female and male chicken')
        }
        else if (!fSelected) {
            return setErrMsg('Error, missing female chicken')
        }
        else if (!mSelected) {
            return setErrMsg('Error, missing male chicken')
        }
        setErrMsg('')
        const obj = { female: Number(fSelected.target.innerHTML), male: Number(mSelected.target.innerHTML) }
        pairs == [] || pairs.filter(pair => pair.female != obj.female).length === pairs.length ? setPairs([...pairs, obj]) : setErrMsg('That female is already paired!')
    }

    const pairClicked = () => {

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
            <div className="pairing-wrapper">
                <div className="year">
                    <div className="years-collected all-years">
                        <input type="checkbox" value="All" />
                        <label>All</label>
                    </div>
                    {years.map((x) => {
                        return <div className="years-collected" key={x * 2}>
                            <input type="checkbox" key={x * 3} />
                            <label key={x}>{x}</label>
                        </div>
                    })}
                </div>
                <div className="radio-btns">
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
                <div className="header-div" id="first-header"> <span id="filter-header">{panelText1}</span> </div>
                <div className="header-div" id="second-header"> <span id="target-header">{panelText2}</span>  </div>
                <section className="selection-panel">
                    {createSelectionPanel("F")}
                    {createSelectionPanel("M")}
                    <div className="arrow-buttons">
                        <button onClick={makePair}>
                            <FaArrowRight />
                        </button>
                        <button onClick={() => removePair()}>
                            <FaArrowLeft />
                        </button>
                    </div>
                    <div className="matched-pairs">
                        {
                            pairs.map((pairing) => {
                                return fRadio
                                    ? <button className="paired-button" onClick={pairClicked} key={String(pairing.female) + String(pairing.male)}>
                                        <span className="female-span">{pairing.female}</span> <img src={pairingIcon} /><span className="male-span">{pairing.male}</span>
                                    </button>
                                    : <button className="paired-button" onClick={pairClicked} key={String(pairing.female) + String(pairing.male)}>
                                        <span className="male-span">{pairing.male}</span> <img src={pairingIcon} /> <span className="female-span">{pairing.female}</span>
                                    </button>
                            })
                        }
                    </div>
                </section>
            </div>
        </>
    }
}

export default PairingWindow