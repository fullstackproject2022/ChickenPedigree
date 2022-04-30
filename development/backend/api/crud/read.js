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
    var data = []
    await fetch(`/api/${collection}/${id}`)
        .then(response => response.json())
        .then(res => data.push(res))
        .catch(error => console.log(error.message))
    return data[0]
}

// check if user exists with email
const userExists = async (email) => {
    var data = []
    await fetch(`/api/user/${email}`)
        .then(response => response.json())
        .then(res => data.push(res))
        .catch(error => console.log(error.message))
    if (data.length > 0) {
        return true;
    }
    return false;
}


export default { fetchCollection, fetchOne, userExists }
