// CRUD read

const fetchCollection = async (collection) => {
    var data = []
    await fetch(`/api/${collection}`)
        .then(response => response.json())
        .then(res => data.push(res))
        .catch(error => console.log(error.message))
    return data[0]
}

const fetchOne = async (collection, id) => {
    let data = []
    console.log(id)
    await fetch(`/api/${collection}/${id}`)
        .then(response => response.json())
        .then(res => data.push(res))
        .catch(error => console.log(error.message))
    console.log(data)
    return data[0]
}

// check if user exists with email
const userExists = async (email) => {
    var data = []

    await fetch(`/api/find/${email}`)
        .then(response => response.json())
        .then(res => data.push(res))
        .catch(error => console.log(error.message))
    return data[0]
}

export default { fetchCollection, fetchOne, userExists }
