import React from 'react';

export const SimpleSelect = ({onChange, options, defaultV}) => {

    return (
            <select onChange={ onChange } defaultValue={ defaultV } >
            {Object.values(options).map(cl => (
                    <option key={cl.value} value={cl.value}>{cl.label}</option>))}
        </select>);
};

