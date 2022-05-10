const CSVToJSON = require("csvtojson")
import React,{ useState } from 'react'
import Table from '../table/table.jsx'
import update from '../../../backend/api/crud/update.js'
import validateForm from '../adminPanel/validateForm.js'

// the imported chickens should be checked if they are already in database, if not then post, if yes update


const FileImport = ({setImportTable, setCurrentTable}) => {
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
    // let err = validateForm.validateChicken(importedChickens);
    // if (err == 0) {
      
    // }
    try {
      update.updateChickenDatabase(importedChickens)
    }catch (e) {
      console.log(e)
    }
    
    // else{
    //   console.log(err)
    //   console.log("couldn't do it")
    // }
    


  }

  const loadTable = async () => {

    const file = importFile



    reader.onload = await function(e) {
      const csvData = e.target.result

      CSVToJSON().fromString(csvData).then(source => { // have an async function that waits for this
        setImportedChickens(source)
      })

      importedChickens.forEach((e) => {
        e.batchYear = parseInt(e.batchYear, 10)
        e._id = parseInt(e._id, 10)
        // e.fParent = parseInt(e.fParent, 10)
        // e.mParent = parseInt(e.mParent, 10)
        e.fParent = 10
        e.mParent = 10
        e.children = []
        e.comment = ""
        // e.children = String.raw(e.children)
        // e.children.forEach(child => {
        //   child = JSON.parse(child)
        // }) 
      })
      
    }
    console.log(importedChickens)
    reader.readAsText(file)


    
    setImportTable(<Table data={importedChickens} columns={columns}/>)
    setCurrentTable("import")
    console.log("trying to build")

    

    
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
