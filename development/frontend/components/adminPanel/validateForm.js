// Validate

const validate = (updateDetails) => {
    let err = [];
    let firstname = updateDetails.firstname
    let lastname = updateDetails.lastname
    let phone = updateDetails.phone + ""
    let email = updateDetails.email

    let conditions = { // regex tested on https://regex101.com/
        "firstname": firstname.match(/^[a-zA-Z]+?$/) != null,
        "lastname": lastname.match(/^[a-zA-Z]+?$/) != null,
        "phone": phone.match(/[^\+\d]/) == null && phone != "",
        "email": email.match(/^\w+([\._-]{0,1}?\w+)+@\w+?\.[a-zA-Z]{2,3}\.{0,1}?[a-zA-Z]{1,2}$/) != null,
    };
    for (const [key, value] of Object.entries(conditions)) {
        if (!value) { err.push(" " + key); } // If field returned false on check, push key to err.
    }
    if (err.length == 0) {
        return 0;
    }
    alert(`invalid field input(s): ${err}`); // print err to screen using alert
    return 1;
}


export default { validate }