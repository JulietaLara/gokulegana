import { useState } from "react";

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setinputValue] = useState('...')

    const onInputChange = (evt) => {
        setinputValue(evt.target.value)
    }

    const onSubmitE = (evt) => {
        evt.preventDefault();
        onAddCategory(inputValue);
        setinputValue('')
    }

    return (
        < form onSubmit={(event) => onSubmitE(event)} >
            <input 
                type="text"
                placeholder="buscar"
                value= {inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}