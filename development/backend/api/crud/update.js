// CRUD update

<<<<<<< HEAD
const updateUser = async (user, id) => {
=======
const updateUser = async (collection, user) => {
>>>>>>> origin/dev-sam
    const updateDetails = {
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
<<<<<<< HEAD
        fullname: user.firstname + " " + user.lastname,
        password: user.password,
        role: user.role,
        admin: user.admin,

=======
        fullname: user.fullname,
        password: user.password,
        role: user.role,
        admin: user.admin,
>>>>>>> origin/dev-sam
        phone: user.phone,
        phone2: user.phone2,
        email: user.email,
        email2: user.email2,
    };

<<<<<<< HEAD
    fetch(`/api/users/${id}`, {
=======
    fetch(`/api/${collection}/${id}`, {
>>>>>>> origin/dev-sam
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