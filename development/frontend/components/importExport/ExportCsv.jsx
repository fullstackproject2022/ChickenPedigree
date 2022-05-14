import React, {useState, useEffect} from 'react'
import {CSVLink} from 'react-csv'
import "../../styles/ExportCsv.stylesheet.scss"

const ExportCsv = (pairs) => { // the reason convert was needed was because I forgot to put pairs in {}

  const [arrayOfPairs, setArrayOfPairs] = useState([])

  const headerss = [
    { label: 'Female ID', key:'femaleChicken'},
    { label: 'Male ID', key:'maleChicken'}
  ]

  const csvReport = {
    filename: 'Exported_Pairs.csv',
    headers: headerss,
    data: arrayOfPairs
  }

// get called when make pair is called to update array of pairs to not need convert button (inside useEffect)
  const convertpairs = async () => {
    if (pairs){
      console.log("getting called")
      await pairs.pairs.forEach(pair => {
      const convPair = {
        'femaleChicken': pair.female,
        'maleChicken': pair.male
      }
      // arrayOfPairs.push(convPair)
      setArrayOfPairs(olsArray => [...olsArray, convPair])
    })
    }
  }

  return (
    <div>
      {/* <button className='exportBtn' disabled={!convertState} onClick={convertpairs}>{<CSVLink {...csvReport}>Export</CSVLink>}</button> */}
      <CSVLink className='exportBtn' onClick={convertpairs} {...csvReport}>Export</CSVLink>
    </div>
  )
}

export default ExportCsv
