const CSVToJSON = require("csvtojson")
import React,{ useState } from 'react'
import Table from '../table/table.jsx'
import update from '../../../backend/api/crud/update.js'
import create from '../../../backend/api/crud/create.js'
import validateForm from '../adminPanel/validateForm.js'
import read from '../../../backend/api/crud/read.js'

// the imported chickens should be checked if they are already in database, if not then post, if yes update
// have all the ids be added to an array in chicken table and use that to check if chicken is already existing
// once csv file is imported clear file upload and grey out upload button


const FileImport = ({setImportTable, setCurrentTable, chickenDataIDs}) => {
  const [importFile, setimportFile] = useState() // have a onload method that does the upload work
  const [importedChickens, setImportedChickens] = useState([])

  const columns = [ // not including children here
    { label: "Batch Year", key: "batchYear", sortable: true },
    { label: "Breed ID", key: "breed", sortable: true },
    { label: "Chicken ID", key: "_id", sortable: true },
    { label: "Sex", key: "sex", sortable: true },
    { label: "Status", key: "status", sortable: true },
    { label: "Comments", key: "comments", sortable: false }
  ]

  const reader = new FileReader()


  const upload = () => {
    //Upload data to database

    importedChickens.forEach(chicken => {
      if (!chickenDataIDs.includes(chicken._id)){
        create.createChicken(chicken)
      }
    })
    setimportFile(undefined)
  }

  const loadTable = () => {

    const file = importFile



    reader.onload = function(e) {
      const csvData = e.target.result

      CSVToJSON().fromString(csvData).then(source => { // have an async function that waits for this

        
        source.forEach((e) => {
          e.batchYear = parseInt(e.batchYear, 10)
          e._id = parseInt(e._id, 10)
          e.fParent = parseInt(e.fParent, 10)
          e.mParent = parseInt(e.mParent, 10)
          // e.children = [{"_id":3000, "sex":'M'},{"_id":2000, "sex":'U'}]  //Find a way to turn string of
         
      })
      setImportedChickens(source)
      })
      e.target.value = ""
    }

    reader.readAsText(file)


    
    setImportTable(<Table data={importedChickens} columns={columns}/>)
    setCurrentTable("import")
    console.log("trying to build table")

    

    
  }


  return (
    <>
      <div>
        <input type="file" name='excelImport' accept='.csv' onChange={(e) => {setimportFile(e.target.files[0])}} /> 
        
        <button onClick={loadTable}>load Table</button>
        <button onClick={upload}>Upload</button>
      </div>
      
      
    </>
  )
}

export default FileImport
