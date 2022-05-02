// Validate

const validate = (updateDetails) => {
    let err = [];
    let conditions = { // regex tested on https://regex101.com/
        "firstname": updateDetails.firstname.match(/^[a-zA-Z]+?$/) != null,
        "lastname": updateDetails.lastname.match(/^[a-zA-Z]+?$/) != null,
        "phone": updateDetails.phone.match(/[^\+\d]/) == null && updateDetails.phone != "" && [10, 12, 13, 14].includes(updateDetails.phone.length),
        "email": updateDetails.email.match(/^\w+([\._-]{0,1}?\w+)+@\w+?\.[a-zA-Z]{2,3}\.{0,1}?[a-zA-Z]{1,2}$/) != null,
    };

    for (const [key, value] of Object.entries(conditions)) {
        if (!value) { err.push(" " + key); } // If field returned false on check, push key to err.
    }

    if (err.length == 0) {
        return 0;
    } else {
        alert(`invalid field input(s): ${err}`); // print err to screen using alert
        return 1;
    }
}

export default { validate }