// Builds checkbox.

import React, { useState } from 'react';


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
CheckBox.propType = {
    label: PropType.string,
    check: PropType.bool
}

export default Checkbox;

