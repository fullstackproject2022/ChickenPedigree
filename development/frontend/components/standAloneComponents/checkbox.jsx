// Builds checkbox.

import React, { useState } from 'react';
//import PropTypes from 'prop-types';

const Checkbox = ({ label, check }) => {
    // Used to update the checkbox state (checked or not)
    const [checked, setChecked] = useState(check);
    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <>
            <label>
                <input type="checkbox"
                    label={label}
                    checked={checked}
                    onChange={handleChange} />
                {label}
            </label>
        </>

    )
}
/*
CheckBox.propTypes = {
    label: PropTypes.string,
    check: PropTypes.bool
}
*/


export default Checkbox;

