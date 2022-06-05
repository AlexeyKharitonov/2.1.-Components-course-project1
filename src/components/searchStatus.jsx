import React from "react";

const SearchStatus = (props) => {
    const renderPhrase = () => {
        if (props.length === 0) {
            return <h3  className="badge bg-danger">Никто не тусанет с тобой</h3>
        }
         return (
           props.length >= 2 && props.length <= 4
           ? `${props.length} человека тусанут с тобой сегодня`
           : `${props.length} человека тусанет с тобой сегодня`
         )                    
    }    

    return (
        <span className="badge bg-primary">
            {`${renderPhrase()}`}
        </span>
    )
}

export default SearchStatus;