
// CRUD delete


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
export default { deleteUser }
