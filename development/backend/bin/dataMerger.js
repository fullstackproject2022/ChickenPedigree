let data1 = require('./chicken_data.json'); // curr chickens
let data2 = require('./chickens_old.json'); // old chickens
let newData = [] // new data

const getChildren = (parent) => {
    f1Collection = []
    data2.forEach(chicken => {
        const child = []
        if(parent === chicken.FatherID){ 
            child.push({
                _id: chicken.ChickenID,
                sex: chicken.Sex === '' ? 'U' : chicken.Sex
            }) 
        }else if(parent === chicken.MotherID){ 
            child.push({
                _id: chicken.ChickenID,
                sex: chicken.Sex === '' ? 'U' : chicken.Sex
            }) 
        }
        if(child.length > 0){
            f1Collection.push(child[0])
        }
    })
    return f1Collection
}

const getParent = (id, parent) => {
    chicken = undefined

    data2.forEach(chicken_old => {
        if (chicken_old.ChickenID === id) {
            chicken = chicken_old
        }
    })
    if (parent === 'f') {
        return chicken.MotherID
    } else if (parent === 'm') {
        return chicken.FatherID
    }
}

data1.forEach(chicken => newData.push({
    batchYear: chicken.year_batch,
    breed: chicken.breed_breed_id,
    status: chicken.status_status_id,
    _id: chicken.chicken_id,
    sex: chicken.sex_sex_id,
    fParent: getParent(chicken.chicken_id, "f"),
    mParent: getParent(chicken.chicken_id, "m"),
    children: getChildren(chicken.chicken_id),
    comment: ""
}))

console.log(newData, "New Data")

const fs = require('fs');
const filename = 'new_chickens.json'
fs.writeFile(filename, JSON.stringify(newData, null, 4), (err) => {
    if (err) {
        throw err;
    }
    console.log(`\n\nJSON data is saved to file with filename '${filename}'. The file can be found at ${__dirname}.`);
})