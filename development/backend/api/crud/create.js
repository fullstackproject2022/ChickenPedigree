// CRUD create

const createUser = async (collection) => {
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

export { createUser, loginUser }