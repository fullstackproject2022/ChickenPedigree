// CRUD create

const createUser = async (user) => {
    const createDetails = {
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        fullname: user.fullname,
        password: user.password,
        role: user.role,
        admin: user.admin,
        phone: user.phone,
        phone2: user.phone2,
        email: user.email,
        email2: user.email2,
    };
    fetch(`/api/users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(createDetails)
    })
        .then(res => res.json())
        .then(response => {
            if (response.message) {
                console.log(response.message);
            }
        });
}


const createChicken = async (chicken) => {
    const createDetails = {
        _id: chicken._id,
        batchYear: chicken.batchYear,
        breed: chicken.breed,
        status: chicken.status,
        sex: chicken.sex,
        fParent: chicken.fParent,
        mParent: chicken.mParent,
        children: chicken.children,
        comment: chicken.comment
    };
    fetch(`/api/chickentest/`, {
        method: `POST`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(createDetails)
    })
        .then(res => res.json())
        .then(response => {
            if (response.message) {
                console.log(response.message)
            }
        });
}


async function loginUser(credentials) {
    return fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(res => res.json())
}


const createMailtoken = async (email, token) => {
    const createDetails = {
        email: email,
        token: token
    };
    fetch(`/api/tokens/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(createDetails)
    })
        .then(res => res.json())
        .then(response => {
            if (response.message) {
                console.log(response.message);
            }
        });
}


const createPairingHistory = async (historyDetails) => {
    console.log(historyDetails)
    fetch(`/api/history/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(historyDetails)
    })
        .then(res => res.json())
        .then(response => {
            if (response.message) {
                console.log(response.message);
            }
        });
}

export default { createUser, loginUser, createMailtoken, createPairingHistory, createChicken }
