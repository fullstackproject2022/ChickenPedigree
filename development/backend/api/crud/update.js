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

export default { updateUser };