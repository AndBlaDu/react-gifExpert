import React, { useState } from 'react';
import PropTypes from 'prop-types/';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type = "text"
                value = { inputValue }
                onChange = { handleInputChange }
            />
        </form>
    )
}

// Los propTypes son para declarar los parametro del componente, aqui se indica el tipo y si es requerido
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
