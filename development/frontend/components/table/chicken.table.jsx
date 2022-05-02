import { string } from 'prop-types';
import React, { useState, useEffect } from 'react';
import read from '../../../backend/api/crud/read';
import Table from './table.jsx';



const ChickenTable = ({selectedFilter, searchDetail}) => {
    console.log(selectedFilter, searchDetail)
    const filteredChicks = []
    // const [filteredChicks, setFilteredChicks] = useState([])


    const [chicken_data, setChickenData] = useState([])
    useEffect(() => {
        console.log("FIRING!")
        getData()
    }, [])

    const getData = () => {
        read.fetchCollection("chicken") // returns it in object format
            .then(result => setChickenData(result))
    }

    // Does not work for any object attribute thats not a string
    // if (hasNumber.test(input)) {
    //     let neww = Number(input)
    //     console.log(typeof neww)
    //     setChosenDetail(neww)
    // }
    // else {
    //     setChosenDetail(input)
    //     }
    // function checkInput(input) {

        
    // }

    chicken_data.filter((val) => {
        // console.log(val.breed)        
        const isNumber = (input) => (/^[\d]+$/).test(input)
        const isString = (input) => (/^[a-zA-Z_]+$/).test(input)    

    //     return searchDetail 
    //     ? val
    //     : isString(searchDetail)
    //         ? val[selectedFilter].includes(searchDetail) 
    //             && filteredChicks.push(val)
    //         : isNumber(searchDetail) 
    //             && val[selectedFilter] == searchDetail 
    //                 && filteredChicks.push(val)   
    // })
    

        // console.log(selectedFilter)
        if (searchDetail == "") {
            return val
        }
        
        else if (isString(searchDetail)) {
            // 
            if (val[selectedFilter].includes(searchDetail)) { // .includes(searchDetail) for string
                console.log("string")
                filteredChicks.push(val)
                // setFilteredChicks([...filteredChicks, val])
                // return val
            }
        }
        else if (isNumber(searchDetail)) {
            
            if (val[selectedFilter] == searchDetail) { // == searchDetail for integers
                console.log("number")
                filteredChicks.push(val)
                // setFilteredChicks([...filteredChicks, val])
                // return val

            }
        }

        })


        const data = searchDetail == "" ? chicken_data : filteredChicks

        
        
        if (data.length > 0) {
            const tableColumns = [ // not including children here
                { label: "Batch Year", key: "batchYear", sortable: true },
                { label: "Breed ID", key: "breed", sortable: true },
                { label: "Chicken ID", key: "_id", sortable: true },
                { label: "Sex", key: "sex", sortable: true },
                { label: "Status", key: "status", sortable: true },
                { label: "Mother ID", key: "fParent", sortable: true },
                { label: "Father ID", key: "mParent", sortable: true },
                { label: "Comments", key: "comments", sortable: false }
            ];

            return < Table data={data} columns={tableColumns} />
            }

        // .map((val) => {
        //     filteredChicks.push(val)
        // })


}



export default ChickenTable;