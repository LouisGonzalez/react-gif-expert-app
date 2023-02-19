import React, { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        inputValue !== '' &&
        // setCategories(val => [...val, inputValue]);
        onNewCategory(inputValue)
        setInputValue('')

    }

    return (
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          type="text"
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    );
}