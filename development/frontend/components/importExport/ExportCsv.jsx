import React, {useState} from 'react'
import {CSVLink} from 'react-csv'

const ExportCsv = (pairs) => {

  const [arrayOfPairs, setArrayOfPairs] = useState([])
  const [convertState, setConvertState] = useState(true)




  const headerss = [
    { label: 'Female ID', key:'femaleChicken'},
    { label: 'Male ID', key:'maleChicken'}
  ]

  const csvReport = {
    filename: 'Exported_Pairs.csv',
    headers: headerss,
    data: arrayOfPairs
  }


  const convertpairs = () => {
    pairs.pairs.forEach(pair => {
      const convPair = {
        'femaleChicken': pair.female,
        'maleChicken': pair.male
      }
      // arrayOfPairs.push(convPair)
      setArrayOfPairs(olsArray => [...olsArray, convPair])
    })
    setConvertState(false)
    console.log(arrayOfPairs)
  }
  


  return (
    <div>
      <button disabled={!convertState} onClick={convertpairs}> convert</button>
      <CSVLink {...csvReport}>Export</CSVLink>
    </div>
  )
}

export default ExportCsv
