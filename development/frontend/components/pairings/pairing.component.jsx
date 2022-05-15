import React, { useEffect, useState } from "react"
import read from "../../../backend/api/crud/read";
import '../../styles/pairing.stylesheet.scss'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import pairingIcon from '../../styles/assets/icon-egg.png'
import FSelectionPanel from './sourceSelectionPanel.component.jsx'
import MSelectionPanel from './targetSelectionPanel.component.jsx'
import PedigreeYears from "./years.component.jsx";
import ExportCsv from "../importExport/ExportCsv.jsx";
import SavePairs from "../historyPage/savePairs.jsx";


const PairingWindow = () => {
    const [years, setYears] = useState([])
    const [chickens, setChickens] = useState([])
    const [filteredChickens, setFilteredChickens] = useState([])
    const [fRadio, setFRadio] = useState(true)
    const [mRadio, setMRadio] = useState(!fRadio)
    const [fSelected, setFSelected] = useState(null)
    const [mSelected, setMSelected] = useState(null)
    const [errMsg, setErrMsg] = useState('')
    const [pairs, setPairs] = useState([])
    const [panelText1, setPanelText1] = useState('')
    const [panelText2, setPanelText2] = useState('')
    const [selectedButton, setSelectedButton] = useState(null)

    useEffect(() => {
        setPanelText1(fRadio ? 'Female' : 'Male')
        setPanelText2(fRadio ? 'Male' : 'Female')
    }, [fRadio])

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


    const createSelectionPanel = (filterBy, headerID) => {
        return filterBy === "F"
            ? <div className="wrapper"><div className="header-div" id={headerID}> <span id="filter-header">{panelText1}</span> </div>
                <FSelectionPanel className={"filter-subjects"} fRadioSelected={fRadio} mRadioSelected={mRadio} chickens={filteredChickens} fSelected={fSelected} mSelected={mSelected} setFSelected={setFSelected} setMSelected={setMSelected} />
            </div>
            : <div className="wrapper"><div className="header-div" id={headerID}> <span id="target-header">{panelText2}</span></div>
                <MSelectionPanel className={"target-subjects"} fRadioSelected={fRadio} mRadioSelected={mRadio} chickens={filteredChickens} fSelected={fSelected} mSelected={mSelected} setFSelected={setFSelected} setMSelected={setMSelected} />
            </div>
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
        const obj = { female: Number(fSelected.target.innerText), male: Number(mSelected.target.innerText.split('\n')[0]) }
        setFilteredChickens(filteredChickens.filter(fc => ![obj.male, obj.female].includes(fc._id)))
        pairs == [] || pairs.filter(pair => pair.female != obj.female).length === pairs.length ? setPairs([...pairs, obj]) : setErrMsg('That female is already paired!')


    }

    const pairClicked = (element) => {
        const matched = element.target.innerText.split('\n')
        let fChicken = fRadio ? matched[0] : matched[1]
        let mChicken = mRadio ? matched[0] : matched[1]
        console.log(matched)
        console.log(`Female ${fChicken}`)
        console.log(`male ${mChicken}`)
        setSelectedButton(element)
    }

    const removePair = async () => {
        console.log("HONEY I'M IN!")
        const element = selectedButton
        const matched = element.target.innerText.split('\n')
        let fChicken = []
        let mChicken = []
        await read.fetchOne('chicken', Number(matched[0])).then(res => fRadio ? fChicken.push(res) : mChicken.push(res))
        await read.fetchOne('chicken', Number(matched[1])).then(res => mRadio ? fChicken.push(res) : mChicken.push(res))
        fChicken = fChicken[0]
        mChicken = mChicken[0]
        setFilteredChickens([fChicken, mChicken, ...filteredChickens])

    }

    if (years.length > 0) {
        return <>
            <div className="pairing-wrapper">
                <PedigreeYears years={years} chickens={chickens} setFilteredChickens={setFilteredChickens} />
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
                <section className="selection-panel">
                    {createSelectionPanel("F", "first-header")}
                    {createSelectionPanel("M", "second-header")}
                    <div className="arrow-buttons">
                        <button onClick={makePair}>
                            <FaArrowRight />
                        </button>
                        <button onClick={() => removePair()}>
                            <FaArrowLeft />
                        </button>
                    </div>
                    <div className="matched-pairs">
                        <div className="wrapper">
                            <div className="header-div"> Matched Pairs </div>
                            {
                                pairs.map((pairing) => {
                                    return fRadio
                                        ? <button className="paired-button" onClick={(e) => pairClicked(e)} key={String(pairing.female) + String(pairing.male)}>
                                            <span className="female-span">{pairing.female}</span> <img src={pairingIcon} /><span className="male-span">{pairing.male}</span>
                                        </button>
                                        : <button className="paired-button" onClick={(e) => pairClicked(e)} key={String(pairing.female) + String(pairing.male)}>
                                            <span className="male-span">{pairing.male}</span> <img src={pairingIcon} /> <span className="female-span">{pairing.female}</span>
                                        </button>
                                })
                            }
                        </div>
                    </div>

                    <div>
                        <SavePairs pairs={pairs} />
                        <ExportCsv pairs={pairs} />
                    </div>
                </section>
            </div>
        </>
    }
}

export default PairingWindow