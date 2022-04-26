// CRUD read
const fetchPedigree = async (collection) => {
    var data = []

    await fetch(`/api/${collection}`)
        .then(response => response.json())
        .then(res => data.push(res))
        .catch(error => console.log(error.message))
    return data[0]
}



export default { fetchPedigree }
