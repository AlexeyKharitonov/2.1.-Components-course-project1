import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ status, onToggleBookMark, id }) => {
    return (
        <i
            onClick={() => onToggleBookMark(id)}
            className={`bi bi-bookmark${status ? "-fill" : ""}`}
        ></i>
    );
};
Bookmark.propTypes = {
    status: PropTypes.string.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
};

export default Bookmark;
