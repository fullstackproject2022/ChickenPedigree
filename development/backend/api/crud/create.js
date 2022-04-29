// CRUD create

<<<<<<< HEAD
const createUser = async (user) => {
    const createDetails = {
        username: user.username,
        firstname: user.firstname,
        lastname: user.firstname + " " + user.lastname,
=======
const createUser = async (collection) => {
    const createDetails = {
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
>>>>>>> origin/dev-sam
        fullname: user.fullname,
        password: user.password,
        role: user.role,
        admin: user.admin,
<<<<<<< HEAD

=======
>>>>>>> origin/dev-sam
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

export default { createUser }