import React from "react";

const Bookmark = ({ status, onToggleBookMark, id }) => {

    return (
        <i 
            onClick={() => onToggleBookMark(id) }
            className={`bi bi-bookmark${status ? "-fill" : ""}`} 
        ></i>
    )
};

export default Bookmark;