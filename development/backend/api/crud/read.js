// CRUD read

const fetchCollection = async (collection) => {
    let data = []
    await fetch(`/api/${collection}`)
        .then(response => response.json())
        .then(res => data.push(res))
        .catch(error => console.log(error.message))
    return data[0]
}

const fetchOne = async (collection, id) => {
    let data = []
    await fetch(`/api/${collection}/${id}`)
        .then(response => response.json())
        .then(res => data.push(res))
        .catch(error => console.log(error.message))
    return data[0]
}

const chickenExists = async (id) =>{
    let data = []
    await fetch(`/api/chickentest/${id}`)
        .then(response => response.json())
        .then(res => data.push(res))
        .catch(error => console.log(error.message))
    return data[0]
}

// check if user exists with email
const userExists = async (email) => {
    let data = []

    await fetch(`/api/find/${email}`)
        .then(response => response.json())
        .then(res => data.push(res))
        .catch(error => console.log(error.message))
    return data[0]
}

export default { fetchCollection, fetchOne, userExists, chickenExists }
