import React from 'react'

const Filter = ({value, onChange}) => {
    return(
        <div>
            <p>Find countries
            <input 
                value={value}
                onChange={onChange}
            />
            </p>
        </div>
    )
}

export default Filter