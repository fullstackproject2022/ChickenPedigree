// CRUD update

const updateUser = async (collection, user) => {
    const updateDetails = {
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

    fetch(`/api/${collection}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateDetails)
    })
        .then(res => res.json())
        .then(response => {
            if (response.message) {
                console.log(response.message);
            }
        });
}

const updateChickenDatabase = (chickenData) => {
    chickenData.forEach(chicken => {
        const updateDetails = {
            _id: chicken._id,
            batchYear: chicken.batchYear,
            breed: chicken.breed,
            status: chicken.status,
            sex: chicken.sex,
            fParent: chicken.fparent,
            mParent: chicken.mParent,
            children: chicken.children,
            comment: chicken.comment

        }

        fetch(`/api/chickentest/${chicken._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateDetails)
        })
            .then(res => res.json())
            .then(response => {
                if (response.message) {
                    console.log("Response message" + response.message);
                }
            });
    })
}


const updatePassword = async (user, id) => {
    const updateDetails = {
        password: user.password,
        id: id
    };

    fetch(`/api/user/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateDetails)
    })
        .then(res => res.json())
        .then(response => {
            if (response.message) {
                console.log(response.message);
            }
        });
}

export default { updateUser, updatePassword, updateChickenDatabase };