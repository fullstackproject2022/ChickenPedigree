// CRUD update

const updateUser = async (updateDetails, id) => {
    const userDetails = {
        username: updateDetails.username,
        firstname: updateDetails.firstname,
        lastname: updateDetails.lastname,
        fullname: updateDetails.fullname,
        password: updateDetails.password,
        role: updateDetails.role,
        admin: updateDetails.admin,
        phone: updateDetails.phone,
        phone2: updateDetails.phone2,
        email: updateDetails.email,
        email2: updateDetails.email2,
    };

    fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
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