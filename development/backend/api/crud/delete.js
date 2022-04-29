<<<<<<< HEAD

// CRUD delete


=======
>>>>>>> origin/dev-sam
const deleteUser = async (id) => {
    const deleteDetails = {
        id: id,
    };
    await fetch(`/api/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(deleteDetails)
    })
        .then(response => {
            if (response.message) {
                console.log(response.message);
            }
        });
}
<<<<<<< HEAD
export default { deleteUser }

=======
export default { deleteUser }
>>>>>>> origin/dev-sam
