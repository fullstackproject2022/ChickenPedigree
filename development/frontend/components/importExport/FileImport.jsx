const CSVToJSON = require("csvtojson")
import React,{ useState } from 'react'
import Table from '../table/table.jsx'


const FileImport = ({setImportTable, setCurrentTable}) => {
  const [importFile, setimportFile] = useState()
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

    const file = importFile

    reader.onload = function(e) {
      const csvData = e.target.result

      CSVToJSON().fromString(csvData).then(source => {
        setImportedChickens(source)
      })

      importedChickens.forEach((e) => {
        e.batchYear = parseInt(e.batchYear, 10)
        e._id = parseInt(e._id, 10)
      })
      console.log(importedChickens)
    }
    reader.readAsText(file)

  }

  const loadTable= () => {
    setImportTable(<Table data={importedChickens} columns={columns}/>)
    setCurrentTable("import")

    

    
  }


  return (
    <>
      <div>
        <input type="file" name='excelImport' accept='.csv' onChange={(e) => {setimportFile(e.target.files[0])}} />
        <button onClick={upload}>Upload</button>
        <button onClick={loadTable}>load Table</button>

      </div>
      
      
    </>
  )
}

export default FileImport
